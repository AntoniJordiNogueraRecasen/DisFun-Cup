package com.ggtournament.gametournamentapi.repository;

import com.ggtournament.gametournamentapi.entity.Espectador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EspectadorRepository extends JpaRepository<Espectador, Integer> {
}
