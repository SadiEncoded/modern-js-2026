# Data Types In JavaScript

Understanding data types is crucial for effective programming in JavaScript, as they determine how data is stored, manipulated, and interacted with in your code.

JavaScript has several data types including:

### Primitive Datatypes

Primitive data types are immutable and are accessed directly by value. Stored directly in the data stack.

- **String**: Sequence of characters. Must be in quotes or backticks.
- **Number**: Integers as well as floating point numbers.
- **Boolean**: Logical values — `true` or `false`.
- **Null**: Represents the intentional absence of any object value.
- **Undefined**: A variable that has been declared but not assigned a value.
- **Symbol (ES6)**: Unique value often used as an identifier for object properties.
- **BigInt (ES2020)**: Large integers that exceed the range of Number type.

### Reference Types (Objects)

Reference types are objects that store references to data rather than the data itself. Stored in the heap and accessed by reference.

- **Object**: Collection of key-value pairs.
- **Array**: Ordered list of values.
- **Function**: Block of code designed to perform a particular task.
- **Date**: Represents dates and times.
- **RegExp**: Regular expressions for pattern matching within strings.
- **Error**: Represents runtime errors.

### Type Conversion

JavaScript is dynamically typed. Type conversion can be done explicitly using `String()`, `Number()`, and `Boolean()`, or implicitly by JavaScript during operations.

### Static Typed Vs Dynamic Typed

JavaScript is dynamically typed, unlike static typed languages (e.g., Java or C++). TypeScript is a superset of JavaScript that adds static typing to help catch type errors at compile time.
