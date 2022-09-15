Ext.define("MyApp.view.AuthorizationForm", {
  extend: "Ext.form.Panel",
  alias: "widget.authform",

  requires: ["Ext.form.field.Text", "Ext.form.FieldSet", "Ext.Button"],

  layout: {
    align: "center",
    pack: "center",
    type: "vbox",
  },

  items: [
    {
      xtype: "form",
      width: 300,
      title: "Log in",
      items: [
        {
          xtype: "textfield",
          anchor: "100%",
          itemId: "user",
          fieldLabel: "Username",
        },
        {
          xtype: "textfield",
          anchor: "100%",
          itemId: "pass",
          inputType: "password",
          fieldLabel: "Password",
        },
        {
          xtype: "button",
          anchor: "100%",
          itemId: "loginBtn",
          text: "Log in",
        },
      ],
    },
  ],
});
21;
