package com.ggtournament.gametournamentapi.service;

import com.ggtournament.gametournamentapi.entity.Espectador;
import com.ggtournament.gametournamentapi.repository.EspectadorRepository;
import com.ggtournament.gametournamentapi.service.interfaces.EspectadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class EspectadorServiceImpl implements EspectadorService {

    @Autowired
    private EspectadorRepository espectadorRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Espectador> findAll() {
        return espectadorRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Espectador> findById(Integer id) {
        return espectadorRepository.findById(id);
    }

    @Override
    @Transactional
    public Espectador save(Espectador espectador) {
        return espectadorRepository.save(espectador);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        espectadorRepository.deleteById(id);
    }
}
