Ext.define("MyApp.controller.Authentication", {
  extend: "Ext.app.Controller",

  views: ["AuthorizationForm"],

  init: function (application) {
    this.control({
      "button#loginBtn": {
        click: this.onLoginClick,
      },
    });
  },

  onLoginClick: function (button, e, e0pts) {
    var formPanel = button.up("form"),
      user = formPanel.down("textfield#user").getValue(),
      pass = formPanel.down("textfield#pass").getValue();

    Ext.Ajax.request({
      url: "testu",
      params: {
        user: user,
        password: pass,
      },
      success: function (conn, response, options, eOpts) {
        var result = Ext.JSON.decode(conn.responseText, true);

        if (!result) {
          // null
          result = {};
          result.success = false;
          result.msg = conn.responseText;
        }

        if (result.success) {
          Ext.Msg.show({
            title: "Info",
            msg: result.msg,
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK,
          });
        } else {
          Ext.Msg.show({
            title: "Erro",
            msg: result.msg,
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK,
          });
        }
      },
      failure: function (conn, response, options, eOpts) {
        var redirect = "./index.html";
        window.location = redirect;
        Ext.Msg.show({
          title: "Error - Ota yhteyttä admin",
          msg: conn.responseText,
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK,
        });
      },
    });
  },
});
