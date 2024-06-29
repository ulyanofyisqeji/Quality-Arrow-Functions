const resultingPromises = urls.map((url) => makHttpRequest(url));
const apmRootPath = path.join(repositoryRootPath, 'apm');