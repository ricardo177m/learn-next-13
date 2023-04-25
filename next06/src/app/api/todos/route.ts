import { NextResponse } from "next/server";
import { config } from "@/config/config";

const API_KEY: string = process.env.API_KEY as string;

export async function GET(request: Request) {
  const origin = request.headers.get("origin");

  const res = await fetch(config.dataSourceUrl);
  const todos: Todo[] = await res.json();

  return new NextResponse(JSON.stringify(todos), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title)
    return NextResponse.json(
      { error: "missing required data" },
      { status: 400 }
    );

  const res = await fetch(`${config.dataSourceUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({ userId, title, completed: false }),
  });

  const newTodo: Todo = await res.json();

  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const { userId, id, title, completed }: Partial<Todo> = await request.json();

  if (!userId || !id || !title || typeof completed !== "boolean")
    return NextResponse.json(
      { error: "missing required data" },
      { status: 400 }
    );

  const res = await fetch(`${config.dataSourceUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({ userId, title, completed }),
  });

  const updatedTodo: Todo = await res.json();

  return NextResponse.json(updatedTodo);
}

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();

  if (!id)
    return NextResponse.json({ error: "id is required" }, { status: 400 });

  const res = await fetch(`${config.dataSourceUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });

  return NextResponse.json({ message: `deleted todo with id ${id}` });
}
