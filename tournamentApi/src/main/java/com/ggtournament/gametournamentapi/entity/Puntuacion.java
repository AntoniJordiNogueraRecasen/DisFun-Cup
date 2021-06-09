package com.ggtournament.gametournamentapi.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@IdClass(PuntuacionId.class)
@Table(name = "puntuacion")
public class Puntuacion {
    @Id
    private Integer participante_idparticipante;
    @Id
    private Integer combate_idcombate;
    @Column(name = "puntuacion", nullable = false, length = 45)
    private String puntuacion;
    
    public Puntuacion(){}

    public Integer getParticipante_idparticipante() {
        return participante_idparticipante;
    }

    public void setParticipante_idparticipante(Integer participante_idparticipante) {
        this.participante_idparticipante = participante_idparticipante;
    }

    public Integer getCombate_idcombate() {
        return combate_idcombate;
    }

    public void setCombate_idcombate(Integer combate_idcombate) {
        this.combate_idcombate = combate_idcombate;
    }

    public String getPuntuacion() {
        return puntuacion;
    }

    public void setPuntuacion(String puntuacion) {
        this.puntuacion = puntuacion;
    }
}

@Embeddable
class PuntuacionId implements Serializable {
    Integer participante_idparticipante;
    Integer combate_idcombate;
}
