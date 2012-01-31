Main.widgets = {
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
		panel1: ["wm.Panel", {"border":"0,1,0,0","borderColor":"#999999","height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
			panel2: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"border":"0","height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				label3: ["wm.Label", {"border":"0","caption":"Internat - IS","height":"35px","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"300px"}, {}, {
					panel15: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						text1: ["wm.Text", {"dataValue":undefined,"displayValue":"","placeHolder":"Search","resetButton":true,"width":"100%"}, {}],
						picture5: ["wm.Picture", {"border":"0","height":"16px","source":"lib/images/silkIcons/zoom.png","width":"16px"}, {}]
					}]
				}]
			}],
			panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"120px"}, {}, {
					dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"fullStructure":[{"label":"Placerat","children":[{"label":"Tristique"},{"label":"Lacinia"},{"label":"Egestas"},{"label":"Viverra"}]},{"label":"Feugiat","children":[{"label":"Consequat"},{"label":"Facilisis"},{"label":"Convallis"}]},{"label":"Bibendum","children":[{"label":"Pulvinar"},{"label":"Bibendum"},{"label":"Curabitur"},{"label":"Phasellus"}]},{"label":"Habitasse"}],"height":"100%","localizationStructure":{},"padding":"20,0,0,0","transparent":false,"vertical":true}, {}]
				}],
				panel4: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}]
			}],
			panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				picture2: ["wm.Picture", {"border":"0","height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
				label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0","caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","border":"0","caption":"Copyright [company name] 2011","height":"100%","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}]
	}]
}