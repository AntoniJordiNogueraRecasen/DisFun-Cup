package com.ggtournament.gametournamentapi.service.interfaces;

import com.ggtournament.gametournamentapi.entity.Espectador;

import java.util.Optional;

public interface EspectadorService {

    public Iterable<Espectador> findAll();

    public Optional<Espectador> findById(Integer id);

    public Espectador save(Espectador espectador);

    public void deleteById(Integer id);
}
