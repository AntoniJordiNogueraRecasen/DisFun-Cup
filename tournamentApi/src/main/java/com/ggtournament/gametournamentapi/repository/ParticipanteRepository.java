package com.ggtournament.gametournamentapi.repository;

import com.ggtournament.gametournamentapi.entity.Participante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParticipanteRepository extends JpaRepository<Participante, Integer> {
}
