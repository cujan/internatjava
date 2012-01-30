
package com.internatdb.data;

import java.util.Date;


/**
 *  internatDB.Student
 *  01/30/2012 21:57:56
 * 
 */
public class Student {

    private Integer id;
    private String priezvisko;
    private String meno;
    private Date datumnarodenia;
    private String rodnecislo;
    private String miestonarodenia;
    private String ulica;
    private String mesto;
    private String psc;
    private String cisloop;
    private String telefon;
    private Date datumnastup;
    private Date datumvystup;
    private Integer cisloizby;

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

    public Date getDatumnarodenia() {
        return datumnarodenia;
    }

    public void setDatumnarodenia(Date datumnarodenia) {
        this.datumnarodenia = datumnarodenia;
    }

    public String getRodnecislo() {
        return rodnecislo;
    }

    public void setRodnecislo(String rodnecislo) {
        this.rodnecislo = rodnecislo;
    }

    public String getMiestonarodenia() {
        return miestonarodenia;
    }

    public void setMiestonarodenia(String miestonarodenia) {
        this.miestonarodenia = miestonarodenia;
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

    public String getCisloop() {
        return cisloop;
    }

    public void setCisloop(String cisloop) {
        this.cisloop = cisloop;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public Date getDatumnastup() {
        return datumnastup;
    }

    public void setDatumnastup(Date datumnastup) {
        this.datumnastup = datumnastup;
    }

    public Date getDatumvystup() {
        return datumvystup;
    }

    public void setDatumvystup(Date datumvystup) {
        this.datumvystup = datumvystup;
    }

    public Integer getCisloizby() {
        return cisloizby;
    }

    public void setCisloizby(Integer cisloizby) {
        this.cisloizby = cisloizby;
    }

}
