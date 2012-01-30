Student.widgets = {
	studentLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.studentLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		studentLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			studentGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Student"}, {}, {
				studentDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"priezvisko","title":"Priezvisko","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"meno","title":"Meno","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"datumNarodenia","title":"DatumNarodenia","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"rodneCislo","title":"RodneCislo","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"miestoNarodenia","title":"MiestoNarodenia","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"ulica","title":"Ulica","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"mesto","title":"Mesto","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"psc","title":"Psc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"cisloOp","title":"CisloOp","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"telefon","title":"Telefon","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"datumNastup","title":"DatumNastup","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"datumVystup","title":"DatumVystup","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"cisloIzby","title":"CisloIzby","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"studentLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			studentDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"426px","title":"Details"}, {}, {
				studentLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"396px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"studentLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"studentDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					idEditor1: ["wm.Number", {"caption":"Id","captionSize":"200px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					priezviskoEditor1: ["wm.Text", {"caption":"Priezvisko","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"priezvisko","height":"26px","readonly":true,"width":"100%"}, {}],
					menoEditor1: ["wm.Text", {"caption":"Meno","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"meno","height":"26px","readonly":true,"width":"100%"}, {}],
					datumNarodeniaEditor1: ["wm.DateTime", {"caption":"DatumNarodenia","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"datumNarodenia","height":"26px","readonly":true,"width":"100%"}, {}],
					rodneCisloEditor1: ["wm.Text", {"caption":"RodneCislo","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"rodneCislo","height":"26px","readonly":true,"width":"100%"}, {}],
					miestoNarodeniaEditor1: ["wm.Text", {"caption":"MiestoNarodenia","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"miestoNarodenia","height":"26px","readonly":true,"width":"100%"}, {}],
					ulicaEditor1: ["wm.Text", {"caption":"Ulica","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"ulica","height":"26px","readonly":true,"width":"100%"}, {}],
					mestoEditor1: ["wm.Text", {"caption":"Mesto","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"mesto","height":"26px","readonly":true,"width":"100%"}, {}],
					pscEditor1: ["wm.Text", {"caption":"Psc","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"psc","height":"26px","readonly":true,"width":"100%"}, {}],
					cisloOpEditor1: ["wm.Text", {"caption":"CisloOp","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"cisloOp","height":"26px","readonly":true,"width":"100%"}, {}],
					telefonEditor1: ["wm.Text", {"caption":"Telefon","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"telefon","height":"26px","readonly":true,"width":"100%"}, {}],
					datumNastupEditor1: ["wm.DateTime", {"caption":"DatumNastup","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"datumNastup","height":"26px","readonly":true,"width":"100%"}, {}],
					datumVystupEditor1: ["wm.DateTime", {"caption":"DatumVystup","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"datumVystup","height":"26px","readonly":true,"width":"100%"}, {}],
					cisloIzbyEditor1: ["wm.Number", {"caption":"CisloIzby","captionSize":"200px","emptyValue":"zero","formField":"cisloIzby","height":"26px","readonly":true,"width":"100%"}, {}],
					studentLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"studentLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"studentLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"studentLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"studentLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"studentLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"studentLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"studentLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"studentLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"studentLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}