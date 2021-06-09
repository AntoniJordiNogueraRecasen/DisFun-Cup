package com.ggtournament.gametournamentapi.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name = "combate")
public class Combate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idcombate;
    @Column(name = "fecha", nullable = false)
    private Date fecha;

    public Combate(){}

    public Integer getIdCombate() {
        return idcombate;
    }

    public void setIdCombate(Integer idCombate) {
        this.idcombate = idCombate;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
}
