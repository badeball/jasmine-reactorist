/* eslint-env jasmine, node */

"use strict";

/* eslint-disable no-unused-vars */
var React = require("react");
/* eslint-enable no-unused-vars */

var element = React.createElement(
  "div",
  null,
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "foo"
    ),
    React.createElement(
      "li",
      null,
      "bar"
    )
  )
);

describe("jasmine-xpath-react", function () {
  beforeAll(function() {
    jasmine.addMatchers(require("../lib/jasmine_xpath_react"));
  });

  it("should throw when given something other than a React element", function () {
    expect(function () {
      expect("foo").toHaveXpathh("bar");
    }).toThrow();
  });

  describe("positive", function () {
    it("should confirm when given a yielding expression", function () {
      expect(element).toHaveXpath(".//li[contains(., 'foo')]");
    });
  });

  describe("negative", function () {
    it("should deny when given an unyielding expression", function () {
      expect(element).not.toHaveXpath(".//li[contains(., 'this does not exist')]");
    });
  });
});
