
package com.internatDB.data;



/**
 *  internatDB.Skupina
 *  02/07/2012 22:06:42
 * 
 */
public class Skupina {

    private Integer id;
    private String nazovSkupiny;
    private String idVychovavatel;

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

    public String getIdVychovavatel() {
        return idVychovavatel;
    }

    public void setIdVychovavatel(String idVychovavatel) {
        this.idVychovavatel = idVychovavatel;
    }

}
