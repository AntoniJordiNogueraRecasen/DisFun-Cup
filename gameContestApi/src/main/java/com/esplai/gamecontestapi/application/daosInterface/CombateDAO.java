package com.esplai.gamecontestapi.application.daosInterface;

import com.esplai.gamecontestapi.domain.Combate;

import java.sql.Date;
import java.util.List;

public interface CombateDAO {

    Combate getCombate(String combateId);

    List<Combate> getAllCombates();

    void addCombate(Date fecha);

    void deleteCombate(String combateId);
}
