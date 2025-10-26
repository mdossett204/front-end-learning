export type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function fetchTodos(): Promise<TodoItem[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store", // Always fetch fresh data
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
