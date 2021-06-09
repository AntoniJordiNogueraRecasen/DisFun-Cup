package com.ggtournament.gametournamentapi.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@IdClass(PublicoId.class)
@Table(name = "publico")
public class Publico {

    @Id
    private Integer espectador_idespectador;
    @Id
    private Integer combate_idcombate;

    public Publico(){}

    public Integer getEspectador_idespectador() {
        return espectador_idespectador;
    }

    public void setEspectador_idespectador(Integer espectador_idespectador) {
        this.espectador_idespectador = espectador_idespectador;
    }

    public Integer getCombate_idcombate() {
        return combate_idcombate;
    }

    public void setCombate_idcombate(Integer combate_idcombate) {
        this.combate_idcombate = combate_idcombate;
    }
}

@Embeddable
class PublicoId implements Serializable {
    Integer espectador_idespectador;
    Integer combate_idcombate;
}
