package com.esplai.gamecontestapi.domain;

public class Puntuacion {

    private Integer participanteIdParticipante;
    private Integer combateIdCombate;
    private String puntuacion;

    public Puntuacion(){}

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
}
