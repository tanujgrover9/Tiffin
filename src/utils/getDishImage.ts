// src/utils/getDishImage.ts
const dishImages = import.meta.glob("../assets/dishes/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export function getDishImage(dishName: string): string | undefined {
  const slug = dishName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  const matched = Object.entries(dishImages).find(([path]) =>
    path.toLowerCase().includes(slug)
  );

  return matched ? matched[1] : undefined;
}
