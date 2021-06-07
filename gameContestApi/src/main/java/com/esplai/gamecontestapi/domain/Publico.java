package com.esplai.gamecontestapi.domain;

public class Publico {

    private Integer espectadorIdEspectador;
    private Integer combateIdCombate;

    public Publico(){}

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
