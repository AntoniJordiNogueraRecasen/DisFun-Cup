package com.ggtournament.gametournamentapi.service;

import com.ggtournament.gametournamentapi.entity.Torneo;
import com.ggtournament.gametournamentapi.repository.TorneoRepository;
import com.ggtournament.gametournamentapi.service.interfaces.TorneoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class TorneoServiceImpl implements TorneoService {

    @Autowired
    private TorneoRepository torneoRepository;


    @Override
    @Transactional(readOnly = true)
    public Iterable<Torneo> findAll() {
        return torneoRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Torneo> findById(Integer id) {
        return torneoRepository.findById(id);
    }

    @Override
    @Transactional
    public Torneo save(Torneo torneo) {
        return torneoRepository.save(torneo);
    }

    @Override
    public void deleteById(Integer id) {
        torneoRepository.deleteById(id);
    }
}
