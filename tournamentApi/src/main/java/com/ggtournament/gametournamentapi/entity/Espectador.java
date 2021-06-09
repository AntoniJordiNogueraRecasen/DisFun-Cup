package com.ggtournament.gametournamentapi.entity;

import javax.persistence.*;

@Entity
@Table(name = "espectador")
public class Espectador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idespectador;
    @Column(name = "asiento", nullable = false, length = 45)
    private String asiento;
    @Column(name = "apuesta", nullable = true, length = 45)
    private String apuesta;
    @Column(name = "dni", nullable = false, length = 45)
    private String dni;
    @Column(name = "email", nullable = false, length = 45)
    private String email;
    @Column(name = "telefono", nullable = true, length = 45)
    private String telefono;
    @Column(name = "password", nullable = false, length = 200)
    private String password;
    @Column(name = "nombre", nullable = false, length = 45)
    private String nombre;
    @Column(name = "apellido", nullable = false, length = 45)
    private String apellido;

    public Espectador() {}

    public Integer getIdespectador() {
        return idespectador;
    }

    public void setIdespectador(Integer idespectador) {
        this.idespectador = idespectador;
    }

    public String getAsiento() {
        return asiento;
    }

    public void setAsiento(String asiento) {
        this.asiento = asiento;
    }

    public String getApuesta() {
        return apuesta;
    }

    public void setApuesta(String apuesta) {
        this.apuesta = apuesta;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
}
