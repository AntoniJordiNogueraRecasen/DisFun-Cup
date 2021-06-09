package com.ggtournament.gametournamentapi.repository;

import com.ggtournament.gametournamentapi.entity.Combate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CombateRepository extends JpaRepository<Combate, Integer> {
}
