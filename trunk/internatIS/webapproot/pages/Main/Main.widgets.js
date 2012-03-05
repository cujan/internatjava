Main.widgets = {
	studentLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.studentLiveView1"}, {}],
	skupinaLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.skupinaLiveView1"}, {}],
	skolaLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.skolaLiveView1"}, {}],
	triedaLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.triedaLiveView1"}, {}],
	vychovavatelLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.vychovavatelLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
		panelCenter: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"verticalAlign":"top","width":"900px"}, {}, {
			panelHeader: ["wm.HeaderContentPanel", {"height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"border":"0","height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				label2: ["wm.Label", {"border":"0","caption":"Internat IS","height":"35px","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}],
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"\"services/reportService.download?method=getReport\"","source":false,"targetProperty":"link"}, {}]
					}]
				}],
				panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"300px"}, {}, {
					panel15: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						text1: ["wm.Text", {"dataValue":undefined,"displayValue":"","placeHolder":"Search","resetButton":true,"width":"100%"}, {}],
						picture5: ["wm.Picture", {"border":"0","height":"16px","source":"lib/images/silkIcons/zoom.png","width":"16px"}, {}]
					}]
				}]
			}],
			panel2: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"eventList":[],"fullStructure":[{"label":"Student","defaultLabel":"Student","iconClass":undefined,"imageList":undefined,"onClick":"studentLayer","children":[]},{"label":"Skupina","defaultLabel":"Skupina","iconClass":undefined,"imageList":undefined,"onClick":"skupinaLayer","children":[]},{"label":"skola","defaultLabel":"skola","iconClass":undefined,"imageList":undefined,"onClick":"skolaLayer","children":[]},{"label":"trieda","defaultLabel":"trieda","iconClass":undefined,"imageList":undefined,"onClick":"triedaLayer","children":[]},{"label":"vychovavatel","defaultLabel":"vychovavatel","iconClass":undefined,"imageList":undefined,"onClick":"vychovavatelLayer","children":[]}],"height":"24px","localizationStructure":{},"transparent":false}, {}]
			}],
			panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				fancyPanel1: ["wm.FancyPanel", {"title":""}, {}, {
					layers1: ["wm.Layers", {}, {}, {
						studentLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","margin":"2,0,2,0","themeStyleType":"","verticalAlign":"top"}, {}, {
							studentLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								studentGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Student"}, {}, {
									studentDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"priezvisko","title":"Priezvisko","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"meno","title":"Meno","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"datumNarodenia","title":"DatumNarodenia","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"rodneCislo","title":"RodneCislo","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"miestoNarodenia","title":"MiestoNarodenia","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ulica","title":"Ulica","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"mesto","title":"Mesto","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"psc","title":"Psc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"cisloOp","title":"CisloOp","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"telefon","title":"Telefon","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"datumNastup","title":"DatumNastup","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"datumVystup","title":"DatumVystup","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"cisloIzby","title":"CisloIzby","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"idSkupina","title":"IdSkupina","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"idTrieda","title":"IdTrieda","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"idSkola","title":"IdSkola","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"studentLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								studentDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"477px","title":"Details"}, {}, {
									studentLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"448px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"studentLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"studentDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
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
										idSkupinaEditor1: ["wm.Number", {"caption":"IdSkupina","captionSize":"200px","emptyValue":"zero","formField":"idSkupina","height":"26px","readonly":true,"width":"100%"}, {}],
										idTriedaEditor1: ["wm.Number", {"caption":"IdTrieda","captionSize":"200px","emptyValue":"zero","formField":"idTrieda","height":"26px","readonly":true,"width":"100%"}, {}],
										idSkolaEditor1: ["wm.Number", {"caption":"IdSkola","captionSize":"200px","emptyValue":"zero","formField":"idSkola","height":"26px","readonly":true,"width":"100%"}, {}],
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
						}],
						skupinaLayer: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"left","margin":"2,0,2,0","themeStyleType":"","verticalAlign":"top"}, {}, {
							skupinaLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								skupinaGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Skupina"}, {}, {
									skupinaDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"nazovSkupiny","title":"NazovSkupiny","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"idVychovavatel","title":"IdVychovavatel","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"skupinaLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								skupinaDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"113px","title":"Details"}, {}, {
									skupinaLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"skupinaLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"skupinaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										nazovSkupinyEditor1: ["wm.Text", {"caption":"NazovSkupiny","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"nazovSkupiny","height":"26px","readonly":true,"width":"100%"}, {}],
										idVychovavatelEditor1: ["wm.Text", {"caption":"IdVychovavatel","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"idVychovavatel","height":"26px","readonly":true,"width":"100%"}, {}],
										skupinaLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"skupinaLiveForm1","operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
											savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton2: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"skupinaLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"skupinaLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton2: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"skupinaLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton2: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"skupinaLiveForm1EditPanel.beginDataInsert"}],
												updateButton2: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"skupinaLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"skupinaLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton2: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"skupinaLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"skupinaLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						skolaLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","margin":"2,0,2,0","themeStyleType":"","verticalAlign":"top"}, {}, {
							skolaLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								skolaGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Skola"}, {}, {
									skolaDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"nazov","title":"Nazov","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"adresa","title":"Adresa","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"skolaLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								skolaDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"139px","title":"Details"}, {}, {
									skolaLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"skolaLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"skolaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										idEditor3: ["wm.Number", {"caption":"Id","captionSize":"200px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										nazovEditor1: ["wm.Text", {"caption":"Nazov","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"nazov","height":"26px","readonly":true,"width":"100%"}, {}],
										adresaEditor1: ["wm.Text", {"caption":"Adresa","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"adresa","height":"26px","readonly":true,"width":"100%"}, {}],
										skolaLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"skolaLiveForm1","operationPanel":"operationPanel3","savePanel":"savePanel3"}, {}, {
											savePanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton3: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"skolaLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"skolaLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton3: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"skolaLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton3: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"skolaLiveForm1EditPanel.beginDataInsert"}],
												updateButton3: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"skolaLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"skolaLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton3: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"skolaLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"skolaLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						triedaLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","margin":"2,0,2,0","themeStyleType":"","verticalAlign":"top"}, {}, {
							triedaLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								triedaGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Trieda"}, {}, {
									triedaDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"nazov","title":"Nazov","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"triedaLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								triedaDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"113px","title":"Details"}, {}, {
									triedaLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"triedaLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"triedaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										idEditor4: ["wm.Number", {"caption":"Id","captionSize":"200px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										nazovEditor2: ["wm.Text", {"caption":"Nazov","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"nazov","height":"26px","readonly":true,"width":"100%"}, {}],
										triedaLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"triedaLiveForm1","operationPanel":"operationPanel4","savePanel":"savePanel4"}, {}, {
											savePanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton4: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"triedaLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"triedaLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton4: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"triedaLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton4: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"triedaLiveForm1EditPanel.beginDataInsert"}],
												updateButton4: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"triedaLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"triedaLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton4: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"triedaLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"triedaLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						vychovavatelLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","margin":"2,0,2,0","themeStyleType":"","verticalAlign":"top"}, {}, {
							vychovavatelLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								vychovavatelGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Vychovavatel"}, {}, {
									vychovavatelDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"priezvisko","title":"Priezvisko","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"meno","title":"Meno","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"uzivatelskeMeno","title":"UzivatelskeMeno","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"heslo","title":"Heslo","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"rola","title":"Rola","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"vychovavatelLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								vychovavatelDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"217px","title":"Details"}, {}, {
									vychovavatelLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"188px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"vychovavatelLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"vychovavatelDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										idEditor5: ["wm.Number", {"caption":"Id","captionSize":"200px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										priezviskoEditor2: ["wm.Text", {"caption":"Priezvisko","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"priezvisko","height":"26px","readonly":true,"width":"100%"}, {}],
										menoEditor2: ["wm.Text", {"caption":"Meno","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"meno","height":"26px","readonly":true,"width":"100%"}, {}],
										uzivatelskeMenoEditor1: ["wm.Text", {"caption":"UzivatelskeMeno","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"uzivatelskeMeno","height":"26px","readonly":true,"width":"100%"}, {}],
										hesloEditor1: ["wm.Text", {"caption":"Heslo","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"heslo","height":"26px","readonly":true,"width":"100%"}, {}],
										rolaEditor1: ["wm.Text", {"caption":"Rola","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"rola","height":"26px","readonly":true,"width":"100%"}, {}],
										vychovavatelLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"vychovavatelLiveForm1","operationPanel":"operationPanel5","savePanel":"savePanel5"}, {}, {
											savePanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton5: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"vychovavatelLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"vychovavatelLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton5: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"vychovavatelLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton5: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"vychovavatelLiveForm1EditPanel.beginDataInsert"}],
												updateButton5: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"vychovavatelLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"vychovavatelLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton5: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"vychovavatelLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"vychovavatelLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}]
			}],
			panelFooter: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				picture2: ["wm.Picture", {"border":"0","height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
				label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0","caption":"Powered by H&K Solution","height":"100%","padding":"4"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				edFooterLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","border":"0","caption":"Copyright H&K Solution 2011","height":"100%","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}]
	}]
}