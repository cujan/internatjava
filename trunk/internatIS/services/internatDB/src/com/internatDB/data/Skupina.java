
package com.internatDB.data;



/**
 *  internatDB.Skupina
 *  02/01/2012 22:12:34
 * 
 */
public class Skupina {

    private Integer id;
    private String nazovSkupiny;
    private Integer idVychovavatel;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNazovSkupiny() {
        return nazovSkupiny;
    }

    public void setNazovSkupiny(String nazovSkupiny) {
        this.nazovSkupiny = nazovSkupiny;
    }

    public Integer getIdVychovavatel() {
        return idVychovavatel;
    }

    public void setIdVychovavatel(Integer idVychovavatel) {
        this.idVychovavatel = idVychovavatel;
    }

}
