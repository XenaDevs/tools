import { toolMap, ToolMetaData } from "./tools";

const MOST_VISITED_TOOL_LOCAL_STORAGE_KEY = "tool-visits";

export function addToolVisit(path: string): void {
  if (
    typeof window == "undefined" ||
    window.localStorage == null ||
    localStorage == null
  ) {
    return;
  }

  const visitedTools = getVisitedTools();

  if (visitedTools[path] == null) {
    visitedTools[path] = { visits: 0, tool: toolMap[path] };
  }

  visitedTools[path].visits += 1;

  localStorage.setItem(
    MOST_VISITED_TOOL_LOCAL_STORAGE_KEY,
    JSON.stringify(visitedTools)
  );
}

export function getVisitedTools(): Record<
  string,
  { visits: number; tool: ToolMetaData }
> {
  if (
    typeof window == "undefined" ||
    window.localStorage == null ||
    localStorage == null
  ) {
    return {};
  }

  const result = localStorage.getItem(MOST_VISITED_TOOL_LOCAL_STORAGE_KEY);

  if (result == null) {
    return {};
  }

  return JSON.parse(result);
}
