/* eslint-env node */

"use strict";

var TestUtils = require("react/addons").addons.TestUtils;

var XPath = require("xpath-react/register");

module.exports = {
  toHaveXpath: function () {
    return {
      compare: function (element, expression) {
        if (!TestUtils.isElement(element)) {
          throw new Error("Expected a React element");
        }

        var result = {
          pass: XPath.evaluate(
            expression,
            element,
            null,
            XPath.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        };

        if (result.pass) {
          result.message = "Expected element to not have xpath " + expression;
        } else {
          result.message = "Expected element to have xpath " + expression;
        }

        return result;
      }
    };
  }
};
