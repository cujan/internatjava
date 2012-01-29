
package com.internatDB.data;

import java.util.Date;


/**
 *  internatDB.Student
 *  01/29/2012 21:36:27
 * 
 */
public class Student {

    private Integer id;
    private String priezvisko;
    private String meno;
    private Date datumNarodenia;
    private String rodneCislo;
    private String miestoNarodenia;
    private String ulica;
    private String mesto;
    private String psc;
    private String cisloOp;
    private String telefon;
    private Date datumNastup;
    private Date datumVystup;
    private Integer newcol;

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

    public Date getDatumNarodenia() {
        return datumNarodenia;
    }

    public void setDatumNarodenia(Date datumNarodenia) {
        this.datumNarodenia = datumNarodenia;
    }

    public String getRodneCislo() {
        return rodneCislo;
    }

    public void setRodneCislo(String rodneCislo) {
        this.rodneCislo = rodneCislo;
    }

    public String getMiestoNarodenia() {
        return miestoNarodenia;
    }

    public void setMiestoNarodenia(String miestoNarodenia) {
        this.miestoNarodenia = miestoNarodenia;
    }

    public String getUlica() {
        return ulica;
    }

    public void setUlica(String ulica) {
        this.ulica = ulica;
    }

    public String getMesto() {
        return mesto;
    }

    public void setMesto(String mesto) {
        this.mesto = mesto;
    }

    public String getPsc() {
        return psc;
    }

    public void setPsc(String psc) {
        this.psc = psc;
    }

    public String getCisloOp() {
        return cisloOp;
    }

    public void setCisloOp(String cisloOp) {
        this.cisloOp = cisloOp;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public Date getDatumNastup() {
        return datumNastup;
    }

    public void setDatumNastup(Date datumNastup) {
        this.datumNastup = datumNastup;
    }

    public Date getDatumVystup() {
        return datumVystup;
    }

    public void setDatumVystup(Date datumVystup) {
        this.datumVystup = datumVystup;
    }

    public Integer getNewcol() {
        return newcol;
    }

    public void setNewcol(Integer newcol) {
        this.newcol = newcol;
    }

}
