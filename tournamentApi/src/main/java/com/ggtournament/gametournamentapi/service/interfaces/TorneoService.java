package com.ggtournament.gametournamentapi.service.interfaces;

import com.ggtournament.gametournamentapi.entity.Torneo;

import java.util.Optional;

public interface TorneoService {

    public Iterable<Torneo> findAll();

    public Optional<Torneo> findById(Integer id);

    public Torneo save(Torneo torneo);

    public void deleteById(Integer id);
}
