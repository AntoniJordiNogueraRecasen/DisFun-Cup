package com.ggtournament.gametournamentapi.repository;

import com.ggtournament.gametournamentapi.entity.Publico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicoRepository extends JpaRepository<Publico, Integer> {
}
