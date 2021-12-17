export const BUILD_TOOLS_LIST = () => {
  const requireComponent = require.context('../pages/tools', true, /.js$/);
  return requireComponent
    .keys()
    .map((fileName) => requireComponent(fileName).default?.toolMetaData)
    .filter((t) => t);
};
