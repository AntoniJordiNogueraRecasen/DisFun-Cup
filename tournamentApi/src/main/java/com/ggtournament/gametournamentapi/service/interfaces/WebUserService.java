package com.ggtournament.gametournamentapi.service.interfaces;

import com.ggtournament.gametournamentapi.entity.WebUser;

import java.util.Optional;

public interface WebUserService {

    public Iterable<WebUser> findAll();

    public Optional<WebUser> findById(Integer id);

    public WebUser findByEmailPassword(String email, String password);

    public WebUser save(WebUser webUser);

    public void deleteById(Integer id);
}
