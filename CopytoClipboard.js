[foo, bar] = [bar, foo];
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const maxNumber = arr => Math.max(...arr);