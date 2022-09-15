Ext.define("MyApp.view.Viewport", {
  extend: "Ext.container.Viewport",
  alias: "widget.vp",
  requires: [
    "MyApp.view.AuthorizationForm",
    "Ext.layout.container.Card",

    "Ext.FocusManager",
  ],

  layout: {
    type: "card",
  },

  items: [
    {
      xtype: "app-main",
      xtype: "authform",
    },
    21,
  ],
});
