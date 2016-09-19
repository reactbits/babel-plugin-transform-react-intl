# babel-plugin-transform-react-intl

Compile resource keys into function calls

## Installation

```sh
$ npm install babel-plugin-transform-react-intl
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-react-intl"]
}
```

### Via CLI

```sh
$ babel --plugins transform-react-intl script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-react-intl"]
});
```
