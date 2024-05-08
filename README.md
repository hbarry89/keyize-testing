# keyize-testing
Sample data for testing keyize npm package.

## Installation
- Clone the repository
- Run `npm install` to install the dependencies which include the keyize package

## Testing
- Run ```node test.js``` to test the keyize package with the sample data
- To see data before and after modify line 8 in ```test.js``` to:

**Before:**
```javascript
console.log(`${key}: ${value}`);
```

**After:**
```javascript
console.log(`${keyize(key)}: ${value}`);
```

## Links

- [Keyize NPM Package](https://www.npmjs.com/package/keyize)
- [Keyize GitHub Repository](https://github.com/hbarry89/keyize)
- Sample data used is from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Author
[Huda Barry](https://github.com/hbarry89)