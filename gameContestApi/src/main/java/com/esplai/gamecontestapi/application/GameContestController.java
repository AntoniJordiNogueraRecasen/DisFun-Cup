package com.esplai.gamecontestapi.application;

import com.esplai.gamecontestapi.application.daosInterface.CombateDAO;
import com.esplai.gamecontestapi.application.dtos.CombateDTO;
import com.esplai.gamecontestapi.domain.Combate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameContestController {
    private CombateDAO combateDAO;

    public GameContestController(CombateDAO combateDAO) {
        this.combateDAO = combateDAO;
    }

    public List<CombateDTO> getAllCombates() {
        return combateDAO.getAllCombates().stream().map(this::combate2CombateDTO).collect(Collectors.toList());
    }

    /*
     * TRANSLATIONS BETWEEN DTOs AND DOMAIN OBJECTS
     */

    private CombateDTO combate2CombateDTO(Combate combate) {
        CombateDTO combateDTO = new CombateDTO();

        combateDTO.setIdCombate(combate.getIdCombate());
        combateDTO.setFecha(combate.getFecha());
        return combateDTO;
    }
}
