package com.ggtournament.gametournamentapi.repository;

import com.ggtournament.gametournamentapi.entity.WebUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WebUserRepository extends JpaRepository<WebUser, Integer> {
}
