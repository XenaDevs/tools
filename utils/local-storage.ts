import { toolMap, ToolMetaData } from "./tools";

const MOST_VISITED_TOOL_LOCAL_STORAGE_KEY = "topTools";

export const GetVisitedTools = (): Record<
  string,
  { visits: number; tool: ToolMetaData }
> => {
  const result =
    typeof window !== "undefined"
      ? localStorage.getItem(MOST_VISITED_TOOL_LOCAL_STORAGE_KEY)
      : null;

  if (result == null) {
    return {};
  }

  return JSON.parse(result);
};

export const AddToolVisit = (path: string): void => {
  const visitedTools = GetVisitedTools();

  if (visitedTools[path] == null) {
    visitedTools[path] = { visits: 0, tool: toolMap[path] };
  }

  visitedTools[path].visits += 1;

  if (typeof window !== "undefined") {
    localStorage.setItem(
      MOST_VISITED_TOOL_LOCAL_STORAGE_KEY,
      JSON.stringify(visitedTools)
    );
  }
};
