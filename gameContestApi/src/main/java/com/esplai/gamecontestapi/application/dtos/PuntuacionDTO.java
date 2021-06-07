package com.esplai.gamecontestapi.application.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class PuntuacionDTO {

    @NotNull(message = "IdParticipante cannot be null")
    private Integer participanteIdParticipante;
    @NotNull(message = "IdCombate cannot be null")
    private Integer combateIdCombate;
    @NotNull(message = "Puntuacion cannot be null")
    @NotBlank(message = "Puntuacion cannot be in blank")
    private String puntuacion;

    public PuntuacionDTO(){}

    public Integer getParticipanteIdParticipante() {
        return participanteIdParticipante;
    }

    public void setParticipanteIdParticipante(Integer participanteIdParticipante) {
        this.participanteIdParticipante = participanteIdParticipante;
    }

    public Integer getCombateIdCombate() {
        return combateIdCombate;
    }

    public void setCombateIdCombate(Integer combateIdCombate) {
        this.combateIdCombate = combateIdCombate;
    }

    public String getPuntuacion() {
        return puntuacion;
    }

    public void setPuntuacion(String puntuacion) {
        this.puntuacion = puntuacion;
    }
}
