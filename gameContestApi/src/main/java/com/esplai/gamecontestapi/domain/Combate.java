package com.esplai.gamecontestapi.domain;

import java.sql.Date;

public class Combate {

    private Integer idCombate;
    private Date fecha;

    public Combate(){}

    public Integer getIdCombate() {
        return idCombate;
    }

    public void setIdCombate(Integer idCombate) {
        this.idCombate = idCombate;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
}
