/* eslint-env node */

"use strict";

var Reactorist = require("reactorist");

module.exports = {
  toHaveXpath: function () {
    return {
      compare: function (element, expression) {
        if (!Reactorist.isElement(element)) {
          throw new Error("Expected a React element");
        }

        var result = {
          pass: Reactorist.find(element, expression)
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
