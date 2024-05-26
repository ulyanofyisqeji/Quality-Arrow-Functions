const randomString = () => Math.random().toString(36).slice(2);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const executableName = getExecutableName(channel, appName);