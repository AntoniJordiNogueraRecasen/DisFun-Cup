package com.esplai.gamecontestapi.application.dtos;

import javax.validation.constraints.NotNull;
import java.sql.Date;

public class CombateDTO {

    private Integer idCombate;
    @NotNull(message = "Fecha cannot be null")
    private Date fecha;

    public CombateDTO(){}

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
