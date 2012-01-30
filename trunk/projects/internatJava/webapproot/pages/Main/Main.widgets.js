Main.widgets = {
	navigationCall1: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}]
	}],
	studentDialog: ["wm.DesignableDialog", {"height":446,"title":"student","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			studentLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"372px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"studentLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"studentDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idEditor1: ["wm.Number", {"caption":"Id","captionSize":"200px","emptyValue":"zero","formField":"id","height":"26px","required":true,"width":"100%"}, {}],
				priezviskoEditor1: ["wm.Text", {"border":"0","caption":"Priezvisko","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"priezvisko","height":"26px","width":"100%"}, {}],
				menoEditor1: ["wm.Text", {"caption":"Meno","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"meno","height":"26px","width":"100%"}, {}],
				datumNarodeniaEditor1: ["wm.DateTime", {"caption":"DatumNarodenia","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"datumNarodenia","height":"26px","width":"100%"}, {}],
				rodneCisloEditor1: ["wm.Text", {"caption":"RodneCislo","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"rodneCislo","height":"26px","width":"100%"}, {}],
				miestoNarodeniaEditor1: ["wm.Text", {"caption":"MiestoNarodenia","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"miestoNarodenia","height":"26px","width":"100%"}, {}],
				ulicaEditor1: ["wm.Text", {"caption":"Ulica","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"ulica","height":"26px","width":"100%"}, {}],
				mestoEditor1: ["wm.Text", {"caption":"Mesto","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"mesto","height":"26px","width":"100%"}, {}],
				pscEditor1: ["wm.Text", {"caption":"Psc","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"psc","height":"26px","width":"100%"}, {}],
				cisloOpEditor1: ["wm.Text", {"caption":"CisloOp","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"cisloOp","height":"26px","width":"100%"}, {}],
				telefonEditor1: ["wm.Text", {"caption":"Telefon","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"telefon","height":"26px","width":"100%"}, {}],
				datumNastupEditor1: ["wm.DateTime", {"caption":"DatumNastup","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"datumNastup","height":"26px","width":"100%"}, {}],
				datumVystupEditor1: ["wm.DateTime", {"caption":"DatumVystup","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"datumVystup","height":"26px","width":"100%"}, {}],
				cisloIzbyEditor1: ["wm.Number", {"caption":"CisloIzby","captionSize":"200px","emptyValue":"zero","formField":"cisloIzby","height":"26px","width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			studentSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"studentLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"studentLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			studentCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"studentDialog.hide"}]
		}]
	}],
	studentLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.studentLiveView2"}, {}],
	studentLiveVariable2: ["wm.LiveVariable", {"liveSource":"app.studentLiveView3"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
		panel1: ["wm.Panel", {"border":"0,1,0,0","borderColor":"#999999","height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
			panel2: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"border":"0","height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				label3: ["wm.Label", {"border":"0","caption":"Evidencia - interát","height":"35px","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"300px"}, {}, {
					panel15: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						text1: ["wm.Text", {"border":"0","dataValue":undefined,"displayValue":"","placeHolder":"Search","resetButton":true,"width":"100%"}, {}],
						picture5: ["wm.Picture", {"border":"0","height":"16px","source":"lib/images/silkIcons/zoom.png","width":"16px"}, {}]
					}]
				}]
			}],
			panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"120px"}, {}, {
					dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"eventList":[],"fullStructure":[{"label":"Študent","defaultLabel":"Študent","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[]},{"label":"Feugiat","defaultLabel":"Feugiat","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[{"label":"Consequat","defaultLabel":"Consequat","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[]},{"label":"Facilisis","defaultLabel":"Facilisis","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[]},{"label":"Convallis","defaultLabel":"Convallis","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[]}]},{"label":"Bibendum","defaultLabel":"Bibendum","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[{"label":"Pulvinar","defaultLabel":"Pulvinar","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[]},{"label":"Bibendum","defaultLabel":"Bibendum","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[]},{"label":"Curabitur","defaultLabel":"Curabitur","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[]},{"label":"Phasellus","defaultLabel":"Phasellus","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[]}]},{"label":"Habitasse","defaultLabel":"Habitasse","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[]}],"height":"100%","localizationStructure":{},"padding":"20,0,0,0","transparent":false,"vertical":true}, {}]
				}],
				panel4: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					studentLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						studentGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Student"}, {}, {
							studentDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"priezvisko","title":"Priezvisko","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"meno","title":"Meno","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"datumNarodenia","title":"DatumNarodenia","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"rodneCislo","title":"RodneCislo","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"miestoNarodenia","title":"MiestoNarodenia","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"ulica","title":"Ulica","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"mesto","title":"Mesto","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"psc","title":"Psc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"cisloOp","title":"CisloOp","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"telefon","title":"Telefon","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"datumNastup","title":"DatumNastup","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"datumVystup","title":"DatumVystup","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"cisloIzby","title":"CisloIzby","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"studentLiveVariable2","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						studentDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"426px","title":"Details"}, {}, {
							studentLiveForm2: ["wm.LiveForm", {"fitToContentHeight":true,"height":"396px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"studentLiveVariable2"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"studentDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
								}],
								idEditor2: ["wm.Number", {"caption":"Id","captionSize":"200px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
								priezviskoEditor2: ["wm.Text", {"caption":"Priezvisko","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"priezvisko","height":"26px","readonly":true,"width":"100%"}, {}],
								menoEditor2: ["wm.Text", {"caption":"Meno","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"meno","height":"26px","readonly":true,"width":"100%"}, {}],
								datumNarodeniaEditor2: ["wm.DateTime", {"caption":"DatumNarodenia","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"datumNarodenia","height":"26px","readonly":true,"width":"100%"}, {}],
								rodneCisloEditor2: ["wm.Text", {"caption":"RodneCislo","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"rodneCislo","height":"26px","readonly":true,"width":"100%"}, {}],
								miestoNarodeniaEditor2: ["wm.Text", {"caption":"MiestoNarodenia","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"miestoNarodenia","height":"26px","readonly":true,"width":"100%"}, {}],
								ulicaEditor2: ["wm.Text", {"caption":"Ulica","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"ulica","height":"26px","readonly":true,"width":"100%"}, {}],
								mestoEditor2: ["wm.Text", {"caption":"Mesto","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"mesto","height":"26px","readonly":true,"width":"100%"}, {}],
								pscEditor2: ["wm.Text", {"caption":"Psc","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"psc","height":"26px","readonly":true,"width":"100%"}, {}],
								cisloOpEditor2: ["wm.Text", {"caption":"CisloOp","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"cisloOp","height":"26px","readonly":true,"width":"100%"}, {}],
								telefonEditor2: ["wm.Text", {"caption":"Telefon","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"telefon","height":"26px","readonly":true,"width":"100%"}, {}],
								datumNastupEditor2: ["wm.DateTime", {"caption":"DatumNastup","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"datumNastup","height":"26px","readonly":true,"width":"100%"}, {}],
								datumVystupEditor2: ["wm.DateTime", {"caption":"DatumVystup","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"datumVystup","height":"26px","readonly":true,"width":"100%"}, {}],
								cisloIzbyEditor2: ["wm.Number", {"caption":"CisloIzby","captionSize":"200px","emptyValue":"zero","formField":"cisloIzby","height":"26px","readonly":true,"width":"100%"}, {}],
								studentLiveForm2EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"studentLiveForm2","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
									savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										saveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"studentLiveForm2EditPanel.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"studentLiveForm2EditPanel.formInvalid","targetProperty":"disabled"}, {}]
											}]
										}],
										cancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"studentLiveForm2EditPanel.cancelEdit"}]
									}],
									operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										newButton1: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"studentLiveForm2EditPanel.beginDataInsert"}],
										updateButton1: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"studentLiveForm2EditPanel.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"studentLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}],
										deleteButton1: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"studentLiveForm2EditPanel.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"studentLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}]
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