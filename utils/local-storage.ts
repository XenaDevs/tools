import { toolMap, ToolMetaData } from "./tools";

const MOST_VISITED_TOOL_LOCAL_STORAGE_KEY = "topTools";

export const getVisitedTools = (): Record<
  string,
  { visits: number; tool: ToolMetaData }
> => {
  const results =
    localStorage.getItem(MOST_VISITED_TOOL_LOCAL_STORAGE_KEY) || null;

  if (results == undefined) {
    return {};
  }

  return JSON.parse(results);
};

export const addToolVisit = (path: string): void => {
  const visitedTools = getVisitedTools();

  // Only track tools
  if (!path.includes("/tools/")) return;

  // Only track existing tools, not 404 pages
  const tool = toolMap[path];
  if (tool == null) return;

  if (visitedTools[path] == null) {
    visitedTools[path] = { visits: 0, tool };
  }

  visitedTools[path].visits += 1;

  localStorage.setItem(
    MOST_VISITED_TOOL_LOCAL_STORAGE_KEY,
    JSON.stringify(visitedTools)
  );
};
