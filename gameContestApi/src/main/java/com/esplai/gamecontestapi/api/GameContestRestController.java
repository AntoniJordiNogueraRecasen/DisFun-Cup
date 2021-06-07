package com.esplai.gamecontestapi.api;

import com.esplai.gamecontestapi.application.GameContestController;
import com.esplai.gamecontestapi.application.dtos.CombateDTO;
import com.esplai.gamecontestapi.application.dtos.EspectadorDTO;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Validated
@CrossOrigin
public class GameContestRestController {
    GameContestController gameContestController;

    public GameContestRestController(GameContestController gameContestController){ this.gameContestController = gameContestController; }

    /*@GetMapping("/espectadores")
    public List<EspectadorDTO> getEspectadores() throws Exception {
        return new List<EspectadorDTO>();
    }*/

    @GetMapping("/combates")
    public List<CombateDTO> getCombates() throws Exception {
        return gameContestController.getAllCombates();
    }

}
