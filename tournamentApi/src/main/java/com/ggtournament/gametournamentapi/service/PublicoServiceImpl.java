package com.ggtournament.gametournamentapi.service;

import com.ggtournament.gametournamentapi.entity.Publico;
import com.ggtournament.gametournamentapi.repository.PublicoRepository;
import com.ggtournament.gametournamentapi.service.interfaces.PublicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class PublicoServiceImpl implements PublicoService {

    @Autowired
    private PublicoRepository publicoRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Publico> findAll() {
        return publicoRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Publico> findById(Integer id) {
        return publicoRepository.findById(id);
    }

    @Override
    @Transactional
    public Publico save(Publico publico) {
        return publicoRepository.save(publico);
    }

    @Override
    public void deleteById(Integer id) {
        publicoRepository.deleteById(id);
    }
}
