package com.esplai.gamecontestapi.domain;

public class Espectador {

    private Integer idEspectador;
    private String asiento;
    private String apuesta;
    private String dni;
    private String email;
    private String telefono;
    private String password;
    private String nom;
    private String apellidos;

    public Espectador(){}

    public Integer getIdEspectador() {
        return idEspectador;
    }

    public void setIdEspectador(Integer idEspectador) {
        this.idEspectador = idEspectador;
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

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
}
