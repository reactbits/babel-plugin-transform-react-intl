# babel-plugin-transform-react-intl-keys

Compile string keys into function calls

## Installation

```sh
$ npm install babel-plugin-transform-react-intl-keys
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-do-expressions"]
}
```

### Via CLI

```sh
$ babel --plugins transform-do-expressions script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-do-expressions"]
});
```
