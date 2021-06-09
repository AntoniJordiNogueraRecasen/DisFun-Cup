package com.ggtournament.gametournamentapi.service.interfaces;

import com.ggtournament.gametournamentapi.entity.Participante;

import java.util.Optional;

public interface ParticipanteService {

    public Iterable<Participante> findAll();

    public Optional<Participante> findById(Integer id);

    public Participante save(Participante participante);

    public void deleteById(Integer id);
}
