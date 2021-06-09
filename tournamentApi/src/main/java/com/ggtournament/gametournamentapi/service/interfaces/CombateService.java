package com.ggtournament.gametournamentapi.service.interfaces;

import com.ggtournament.gametournamentapi.entity.Combate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface CombateService {

    public Iterable<Combate> findAll();

    public Page<Combate> findAll(Pageable pageable);

    public Optional<Combate> findById(Integer id);

    public Combate save(Combate combate);

    public void deleteById(Integer id);
}
