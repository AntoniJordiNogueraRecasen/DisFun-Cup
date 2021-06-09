package com.ggtournament.gametournamentapi.service;

import com.ggtournament.gametournamentapi.entity.Puntuacion;
import com.ggtournament.gametournamentapi.repository.PuntuacionRepository;
import com.ggtournament.gametournamentapi.service.interfaces.PuntuacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class PuntuacionServiceImpl implements PuntuacionService {

    @Autowired
    private PuntuacionRepository puntuacionRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Puntuacion> findAll() {
        return puntuacionRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Puntuacion> findById(Integer id) {
        return puntuacionRepository.findById(id);
    }

    @Override
    @Transactional
    public Puntuacion save(Puntuacion puntuacion) {
        return puntuacionRepository.save(puntuacion);
    }

    @Override
    public void deleteById(Integer id) {
        puntuacionRepository.deleteById(id);
    }
}
