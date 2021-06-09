package com.ggtournament.gametournamentapi.service.interfaces;

import com.ggtournament.gametournamentapi.entity.Puntuacion;

import java.util.Optional;

public interface PuntuacionService {

    public Iterable<Puntuacion> findAll();

    public Optional<Puntuacion> findById(Integer id);

    public Puntuacion save(Puntuacion puntuacion);

    public void deleteById(Integer id);
}
