const merge = Object.assign({}, obj1, obj2);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const channel = getChannel(computedAppVersion);