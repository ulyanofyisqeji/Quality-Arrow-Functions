console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const intermediateAppPath = path.join(buildOutputPath, 'app');
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;