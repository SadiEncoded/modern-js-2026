# Console

The "Console" object provides access to the browser's "Debugging Console". It is used to log information, warnings, errors, and other messages for developers to debug their code.

## Common Methods

- **console.log()**: Logs general information to the console.
- **console.error()**: Logs error messages to the console.
- **console.warn()**: Logs warning messages to the console.
- **console.info()**: Logs informational messages to the console.
- **console.debug()**: Logs debugging messages to the console.
- **console.table()**: Displays data as a table in the console.
- **console.clear()**: Clears the console.

## Example Usage

```js
// Log a message
console.log("Hello, World!");

// Log an error
console.error("This is an error message.");

// Log a warning
console.warn("This is a warning message.");

// Log information
console.info("This is an informational message.");

// Log debugging information
console.debug("This is a debugging message.");

// Display data in a table format
const data = [
  { name: "Sadi", age: 23 },
  { name: "Mahin", age: 22 }
];
console.table(data);

// Clear the console
console.clear();
```
