package com.ggtournament.gametournamentapi.repository;

import com.ggtournament.gametournamentapi.entity.Puntuacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PuntuacionRepository extends JpaRepository<Puntuacion, Integer> {
}
