modulex.add("split-button",["component/container","button","menubutton"],function(t,e,n){{var u,o=t("component/container");t("button"),t("menubutton")}u=function(t){var e=o;return t=e.extend({renderUI:function(){var t=this,e=t.get("alignWithEl"),n=t.get("children")[1],u=n.get("menu");e&&(u.get("align").node=t.$el)}},{ATTRS:{handleGestureEvents:{value:!1},focusable:{value:!1},allowTextSelection:{value:!0},alignWithEl:{value:!0},children:{value:[{xclass:"button"},{xclass:"menu-button"}]},menuButton:{getter:function(){return this.get("children")[1]},setter:function(t){this.get("children")[1]=t}},button:{getter:function(){return this.get("children")[0]},setter:function(t){this.get("children")[0]=t}}},xclass:"split-button"})}(),n.exports=u});