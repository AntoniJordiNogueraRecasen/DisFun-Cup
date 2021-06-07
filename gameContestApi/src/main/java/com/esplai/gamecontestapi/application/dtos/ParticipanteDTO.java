package com.esplai.gamecontestapi.application.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.sql.Date;

public class ParticipanteDTO {

    private Integer idParticipante;
    @NotNull(message="Nombre cannot be null")
    @NotBlank(message = "Nombre cannot be in blank")
    private String nombre;
    @NotNull(message = "Apellido cannot be null")
    @NotBlank(message = "Apellido cannot be in blank")
    private String apellido;
    @NotNull(message = "DNI cannot be null")
    @NotBlank(message = "DNI cannot be in blank")
    private String dni;
    private String telefono;
    @NotNull(message = "Password cannot be null")
    @NotBlank(message = "Password cannot be in blank")
    private String password;
    @NotNull(message = "Discapacidad cannot be null")
    @NotBlank(message = "Discapacidad cannot be in blank")
    private String discapacidad;
    @NotNull(message = "Fecha Nacimiento cannot be null")
    private Date fechaNacimiento;

    public ParticipanteDTO(){}

    public Integer getIdParticipante() {
        return idParticipante;
    }

    public void setIdParticipante(Integer idParticipante) {
        this.idParticipante = idParticipante;
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

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
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

    public String getDiscapacidad() {
        return discapacidad;
    }

    public void setDiscapacidad(String discapacidad) {
        this.discapacidad = discapacidad;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
}
