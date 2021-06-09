package com.ggtournament.gametournamentapi.service;

import com.ggtournament.gametournamentapi.entity.Combate;
import com.ggtournament.gametournamentapi.repository.CombateRepository;
import com.ggtournament.gametournamentapi.service.interfaces.CombateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class CombateServiceImpl implements CombateService {

    @Autowired
    private CombateRepository combateRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Combate> findAll() {
        return combateRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Combate> findAll(Pageable pageable) {
        return findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Combate> findById(Integer id) {
        return combateRepository.findById(id);
    }

    @Override
    @Transactional
    public Combate save(Combate combate) {
        return combateRepository.save(combate);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        combateRepository.deleteById(id);
    }
}
