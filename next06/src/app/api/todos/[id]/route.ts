import { NextResponse } from "next/server";
import { config } from "@/config/config";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  const res = await fetch(`${config.dataSourceUrl}/${id}`);
  const todo: Todo = await res.json();

  if (!todo) return NextResponse.json({ error: "todo not found" }, { status: 404 });

  return NextResponse.json(todo);
}
