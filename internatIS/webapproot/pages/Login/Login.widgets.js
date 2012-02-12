Login.widgets = {
	layoutBox: ["wm.Layout", {"height":"100%"}, {}, {
		loginMainPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"100%"}, {}, {
			wmTitle: ["wm.Label", {"align":"center","border":"0","height":"20px","padding":"4","width":"350px"}, {}],
			loginInputPanel: ["wm.EmphasizedContentPanel", {"height":"140px","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"364px"}, {}, {
				usernameInput: ["wm.Text", {"border":"0","caption":"Uzivatelske meno","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"315px"}, {}],
				passwordInput: ["wm.Text", {"border":"0","caption":"Heslo","captionSize":"120px","dataValue":undefined,"displayValue":"","password":true,"width":"310px"}, {}],
				loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","width":"100%"}, {}, {
					loginErrorMsg: ["wm.Label", {"align":"center","border":"0","caption":" ","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"borderColor":"#333333","caption":"Login","height":"100%","margin":"4","width":"90px"}, {"onclick":"loginButtonClick"}]
				}]
			}]
		}]
	}]
}