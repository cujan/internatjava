
package com.internatDB.data;



/**
 *  internatDB.vychovavatel
 *  02/07/2012 22:15:14
 * 
 */
public class vychovavatel {

    private Integer id;
    private String priezvisko;
    private String meno;
    private String uzivatelskeMeno;
    private String heslo;
    private String rola;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPriezvisko() {
        return priezvisko;
    }

    public void setPriezvisko(String priezvisko) {
        this.priezvisko = priezvisko;
    }

    public String getMeno() {
        return meno;
    }

    public void setMeno(String meno) {
        this.meno = meno;
    }

    public String getUzivatelskeMeno() {
        return uzivatelskeMeno;
    }

    public void setUzivatelskeMeno(String uzivatelskeMeno) {
        this.uzivatelskeMeno = uzivatelskeMeno;
    }

    public String getHeslo() {
        return heslo;
    }

    public void setHeslo(String heslo) {
        this.heslo = heslo;
    }

    public String getRola() {
        return rola;
    }

    public void setRola(String rola) {
        this.rola = rola;
    }

}
