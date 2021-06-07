package com.esplai.gamecontestapi.application.dtos;

import javax.validation.constraints.NotNull;

public class PublicoDTO {

    @NotNull(message = "IdEspectador cannot be null")
    private Integer espectadorIdEspectador;
    @NotNull(message = "IdCombate cannot be null")
    private Integer combateIdCombate;

    public PublicoDTO(){}

    public Integer getEspectadorIdEspectador() {
        return espectadorIdEspectador;
    }

    public void setEspectadorIdEspectador(Integer espectadorIdEspectador) {
        this.espectadorIdEspectador = espectadorIdEspectador;
    }

    public Integer getCombateIdCombate() {
        return combateIdCombate;
    }

    public void setCombateIdCombate(Integer combateIdCombate) {
        this.combateIdCombate = combateIdCombate;
    }
}
