modulex.add("split-button", ["component/container","button","menubutton"], function(require, exports, module) {
var componentContainer = require("component/container");
var button = require("button");
var menubutton = require("menubutton");
/*
combined modules:
split-button
*/
var splitButton;
splitButton = function (exports) {
  /**
   * @ignore
   * SplitButton for KISSY. Combination of button and menubutton.
   * @author yiminghe@gmail.com
   */
  var Container = componentContainer;
  /**
   * split button container for menubutton and button
   * @class KISSY.SplitButton
   * @extend KISSY.Component.Container
   */
  exports = Container.extend({
    renderUI: function () {
      var self = this, alignWithEl = self.get('alignWithEl'), menuButton = self.get('children')[1], menu = menuButton.get('menu');
      if (alignWithEl) {
        menu.get('align').node = self.$el;
      }
    }
  }, {
    ATTRS: {
      handleGestureEvents: { value: false },
      focusable: { value: false },
      allowTextSelection: { value: true },
      alignWithEl: { value: true },
      children: {
        value: [
          { xclass: 'button' },
          { xclass: 'menu-button' }
        ]
      },
      menuButton: {
        getter: function () {
          return this.get('children')[1];
        },
        setter: function (v) {
          this.get('children')[1] = v;
        }
      },
      button: {
        getter: function () {
          return this.get('children')[0];
        },
        setter: function (v) {
          this.get('children')[0] = v;
        }
      }
    },
    xclass: 'split-button'
  });
  return exports;
}();
module.exports = splitButton;
});