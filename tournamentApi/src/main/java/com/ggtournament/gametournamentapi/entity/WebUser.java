package com.ggtournament.gametournamentapi.entity;

import javax.persistence.*;

@Entity
@Table(name = "webuser")
public class WebUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idwebuser;
    @Column(name = "email", nullable = false, unique = true, length = 45)
    private String email;
    @Column(name = "password", nullable = false, length = 200)
    private String password;

    public WebUser(){}

    public Integer getIdwebuser() {
        return idwebuser;
    }

    public void setIdwebuser(Integer idwebuser) {
        this.idwebuser = idwebuser;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
