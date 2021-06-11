package com.ggtournament.gametournamentapi.entity;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "participante")
public class Participante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idparticipante;
    @Column(name = "nombre", nullable = false, length = 45)
    private String nombre;
    @Column(name = "apellido", nullable = false, length = 45)
    private String apellido;
    @Column(name = "dni", nullable = false, unique = true, length = 45)
    private String dni;
    @Column(name = "email", nullable = false, unique = true, length = 45)
    private String email;
    @Column(name = "telefono", nullable = true, length = 45)
    private String telefono;
    @Column(name = "password", nullable = false, length = 200)
    private String password;
    @Column(name = "discapacidad", nullable = false, length = 45)
    private String discapacidad;
    @Column(name = "fechaNacimiento", nullable = false)
    private Date fechaNacimiento;

    public Participante(){}

    public Integer getIdparticipante() {
        return idparticipante;
    }

    public void setIdparticipante(Integer idparticipante) {
        this.idparticipante = idparticipante;
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
