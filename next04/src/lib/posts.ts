import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((filename) => {
    const id = filename.replace(".md", "");

    const fullPath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    // gray-matter will parse the metadata in the file
    const matterResult = matter(fileContent);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      keywords: matterResult.data.keywords,
    };

    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const content = processedContent.toString();

  const post: BlogPost & { content: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    keywords: matterResult.data.keywords,
    content,
  };

  return post;
}
