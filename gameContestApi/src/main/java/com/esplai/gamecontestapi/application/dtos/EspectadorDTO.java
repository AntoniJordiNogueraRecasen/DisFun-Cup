package com.esplai.gamecontestapi.application.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class EspectadorDTO {

    private Integer idEspectador;
    @NotNull(message = "Asientos cannot be null")
    @NotBlank(message = "Asientos cannot be blank")
    private String asiento;
    private String apuesta;
    @NotNull(message = "DNI cannot be null")
    @NotBlank(message = "DNI cannot be blank")
    private String dni;
    @NotNull(message = "Email cannot be null")
    @NotBlank(message = "Email cannot be blank")
    private String email;
    private String telefono;
    @NotNull(message = "Password cannot be null")
    @NotBlank(message = "Password cannot be blank")
    private String password;
    @NotNull(message = "Nom cannot be null")
    @NotBlank(message = "Nom cannot be blank")
    private String nom;
    @NotNull(message = "Apellidos cannot be null")
    @NotBlank(message = "Apellidos cannot be blank")
    private String apellidos;

    public EspectadorDTO(){}

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
