package com.ggtournament.gametournamentapi.service.interfaces;

import com.ggtournament.gametournamentapi.entity.Publico;

import java.util.Optional;

public interface PublicoService {

    public Iterable<Publico> findAll();

    public Optional<Publico> findById(Integer id);

    public Publico save(Publico publico);

    public void deleteById(Integer id);
}
