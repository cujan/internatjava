dojo.declare("internatJava", wm.Application, {
	"dialogAnimationTime": 350, 
	"disableDirtyEditorTracking": false, 
	"i18n": false, 
	"main": "Main", 
	"projectSubVersion": "Alpha", 
	"projectVersion": 1, 
	"saveCounter": 19, 
	"studioVersion": "6.4.4GA", 
	"theme": "wm_default", 
	"toastPosition": "br",
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		studentLiveView1: ["wm.LiveView", {"dataType":"com.internatDB.data.Student","related":[],"service":"internatDB","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Priezvisko","sortable":true,"dataIndex":"priezvisko","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Meno","sortable":true,"dataIndex":"meno","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"DatumNarodenia","sortable":true,"dataIndex":"datumNarodenia","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"RodneCislo","sortable":true,"dataIndex":"rodneCislo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"MiestoNarodenia","sortable":true,"dataIndex":"miestoNarodenia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Ulica","sortable":true,"dataIndex":"ulica","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Mesto","sortable":true,"dataIndex":"mesto","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Psc","sortable":true,"dataIndex":"psc","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"CisloOp","sortable":true,"dataIndex":"cisloOp","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Telefon","sortable":true,"dataIndex":"telefon","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"DatumNastup","sortable":true,"dataIndex":"datumNastup","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"DatumVystup","sortable":true,"dataIndex":"datumVystup","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},{"caption":"CisloIzby","sortable":true,"dataIndex":"cisloIzby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null}]}, {}], 
		studentLiveView2: ["wm.LiveView", {"dataType":"com.internatDB.data.Student","related":[],"service":"internatDB","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Priezvisko","sortable":true,"dataIndex":"priezvisko","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Meno","sortable":true,"dataIndex":"meno","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"DatumNarodenia","sortable":true,"dataIndex":"datumNarodenia","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"RodneCislo","sortable":true,"dataIndex":"rodneCislo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"MiestoNarodenia","sortable":true,"dataIndex":"miestoNarodenia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Ulica","sortable":true,"dataIndex":"ulica","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Mesto","sortable":true,"dataIndex":"mesto","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Psc","sortable":true,"dataIndex":"psc","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"CisloOp","sortable":true,"dataIndex":"cisloOp","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Telefon","sortable":true,"dataIndex":"telefon","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"DatumNastup","sortable":true,"dataIndex":"datumNastup","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"DatumVystup","sortable":true,"dataIndex":"datumVystup","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},{"caption":"CisloIzby","sortable":true,"dataIndex":"cisloIzby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null}]}, {}], 
		studentLiveView3: ["wm.LiveView", {"dataType":"com.internatDB.data.Student","related":[],"service":"internatDB","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Priezvisko","sortable":true,"dataIndex":"priezvisko","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Meno","sortable":true,"dataIndex":"meno","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"DatumNarodenia","sortable":true,"dataIndex":"datumNarodenia","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"RodneCislo","sortable":true,"dataIndex":"rodneCislo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"MiestoNarodenia","sortable":true,"dataIndex":"miestoNarodenia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Ulica","sortable":true,"dataIndex":"ulica","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Mesto","sortable":true,"dataIndex":"mesto","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Psc","sortable":true,"dataIndex":"psc","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"CisloOp","sortable":true,"dataIndex":"cisloOp","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Telefon","sortable":true,"dataIndex":"telefon","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"DatumNastup","sortable":true,"dataIndex":"datumNastup","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"DatumVystup","sortable":true,"dataIndex":"datumVystup","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},{"caption":"CisloIzby","sortable":true,"dataIndex":"cisloIzby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null}]}, {}]
	},
	_end: 0
});

internatJava.extend({

	_end: 0
});