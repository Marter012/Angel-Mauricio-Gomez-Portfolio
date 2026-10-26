export function formatProjectName(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function isPersonalPortfolio(name: string): boolean {
  const normalized = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[-_\s]+/g, " ")
    .trim();

  return (
    normalized.includes("portfolio personal") ||
    normalized.includes("personal portfolio") ||
    normalized.includes("portfolio frontend") ||
    normalized.includes("portfolio backend") ||
    normalized.includes("portfolio front") ||
    normalized.includes("portfolio back") ||
    normalized.includes("portfolio v") ||
    normalized.includes("portfolio website")
  );
}

export function isApiProject(name: string): boolean {
  const normalized = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .trim();

  return (
    /\bapi\b/.test(normalized) ||
    /\bback\b/.test(normalized) ||
    /\bbackend\b/.test(normalized) ||
    /\bback end\b/.test(normalized) ||
    /\brest api\b/.test(normalized)
  );
}
