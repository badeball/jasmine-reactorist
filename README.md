# jasmine-reactorist

[![Build Status](https://travis-ci.org/badeball/jasmine-reactorist.svg?branch=master)](https://travis-ci.org/badeball/jasmine-reactorist)

XPath matchers for [React][react] elements. It is recommended that you use
[shallow rendering][shallow-rendering] of components and make your assertion on
its output.

[react]: http://facebook.github.io/react/
[shallow-rendering]: https://facebook.github.io/react/docs/test-utils.html#shallow-rendering

## Usage

```javascript
jasmine.addMatchers(require("jasmine-reactorist"));
```

```javascript
var element = (
  <div>
    <ul>
      <li>foo</li>
      <li>bar</li>
    </ul>
  </div>
);

expect(element).toHaveXpath(".//li[contains(., 'foo')]");
```
