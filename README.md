# jasmine-xpath-react

[![Build Status](https://travis-ci.org/badeball/jasmine-xpath-react.svg?branch=master)](https://travis-ci.org/badeball/jasmine-xpath-react)
[![Code Climate](https://codeclimate.com/github/badeball/jasmine-xpath-react/badges/gpa.svg)](https://codeclimate.com/github/badeball/jasmine-xpath-react)
[![Test Coverage](https://codeclimate.com/github/badeball/jasmine-xpath-react/badges/coverage.svg)](https://codeclimate.com/github/badeball/jasmine-xpath-react/coverage)

XPath matchers for [React][react] elements. It is recommended that you use
[shallow rendering][shallow-rendering] of components and make your assertion on
its output.

[react]: http://facebook.github.io/react/
[shallow-rendering]: https://facebook.github.io/react/docs/test-utils.html#shallow-rendering

## Usage

```javascript
jasmine.addMatchers(require("jasmine-xpath-react"));
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
