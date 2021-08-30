const requireContext = require.context('./', true, /.*\.(js)$/);

let components = {};

requireContext.keys().forEach((fileName) => {
  const folderName = fileName.split('/')[1];
  if (folderName === './index.js') return;
  let name = folderName.replace(/(\.\/|\.js)/g, '');

  components[name] = requireContext(fileName).default;
});

module.exports = components;
