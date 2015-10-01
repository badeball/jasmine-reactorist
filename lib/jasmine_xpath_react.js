/* eslint-env node */

"use strict";

var TestUtils = require("react/addons").addons.TestUtils;

var XPathUtils = require("xpath-react/utils");

module.exports = {
  toHaveXpath: function () {
    return {
      compare: function (element, expression) {
        if (!TestUtils.isElement(element)) {
          throw new Error("Expected a React element");
        }

        var result = {
          pass: XPathUtils.find(element, expression)
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
