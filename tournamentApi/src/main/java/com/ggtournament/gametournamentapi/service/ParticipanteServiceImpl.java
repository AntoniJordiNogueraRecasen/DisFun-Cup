package com.ggtournament.gametournamentapi.service;

import com.ggtournament.gametournamentapi.entity.Participante;
import com.ggtournament.gametournamentapi.repository.ParticipanteRepository;
import com.ggtournament.gametournamentapi.service.interfaces.ParticipanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ParticipanteServiceImpl implements ParticipanteService {

    @Autowired
    private ParticipanteRepository participanteRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Participante> findAll() {
        return participanteRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Participante> findById(Integer id) {
        return participanteRepository.findById(id);
    }

    @Override
    @Transactional
    public Participante save(Participante participante) {
        return participanteRepository.save(participante);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        participanteRepository.deleteById(id);
    }
}
