package com.ggtournament.gametournamentapi.repository;

import com.ggtournament.gametournamentapi.entity.Torneo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TorneoRepository extends JpaRepository<Torneo, Integer> {
}
