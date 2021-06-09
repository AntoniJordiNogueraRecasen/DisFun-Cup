package com.ggtournament.gametournamentapi.entity;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "torneo")
public class Torneo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idtorneo;
    @Column(name = "nombre", nullable = false, length = 45)
    private String nombre;
    @Column(name = "fecha", nullable = false)
    private Date fecha;
    @Column(name = "localizacion", nullable = false, length = 200)
    private String localizacion;
    @Column(name = "videojuego", nullable = false, length = 80)
    private String videojuego;
    @Column(name = "recompensas", nullable = false, length = 200)
    private String recompensas;

    public Torneo() {}

    public Integer getIdtorneo() {
        return idtorneo;
    }

    public void setIdtorneo(Integer idtorneo) {
        this.idtorneo = idtorneo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getLocalizacion() {
        return localizacion;
    }

    public void setLocalizacion(String localizacion) {
        this.localizacion = localizacion;
    }

    public String getVideojuego() {
        return videojuego;
    }

    public void setVideojuego(String videojuego) {
        this.videojuego = videojuego;
    }

    public String getRecompensas() {
        return recompensas;
    }

    public void setRecompensas(String recompensas) {
        this.recompensas = recompensas;
    }
}
