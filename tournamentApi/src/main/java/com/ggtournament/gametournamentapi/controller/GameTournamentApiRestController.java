package com.ggtournament.gametournamentapi.controller;

import com.ggtournament.gametournamentapi.entity.Combate;
import com.ggtournament.gametournamentapi.entity.Espectador;
import com.ggtournament.gametournamentapi.service.interfaces.CombateService;
import com.ggtournament.gametournamentapi.service.interfaces.EspectadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/gametournamentapi")
public class GameTournamentApiRestController {

    @Autowired
    private CombateService combateService;

    @Autowired
    private EspectadorService espectadorService;

    @GetMapping("/combates")
    public ResponseEntity<?> readAllCombates() {
        return ResponseEntity.status(HttpStatus.CREATED).body(combateService.findAll());
    }

    @GetMapping("/combates/{id}")
    public ResponseEntity<?> readCombate(@PathVariable(value = "id") Integer idcombate) {
        Optional<Combate> oCombate = combateService.findById(idcombate);

        if(!oCombate.isPresent()) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(oCombate);
    }

    @PostMapping("/combates")
    public ResponseEntity<?> createCombate(@RequestBody Combate combate) {
        return ResponseEntity.status(HttpStatus.CREATED).body(combateService.save(combate));
    }

    @GetMapping("/espectadores")
    public ResponseEntity<?> readAllEspectadores(){
        return ResponseEntity.status(HttpStatus.CREATED).body(espectadorService.findAll());
    }

    @GetMapping("/espectadores/{id}")
    public ResponseEntity<?> readEspectador(@PathVariable(value = "id") Integer idespectador){
        Optional<Espectador> oEspectador = espectadorService.findById(idespectador);

        if(!oEspectador.isPresent()) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(oEspectador);
    }

    @PostMapping("/espectadores")
    public ResponseEntity<?> createEspectador(@RequestBody Espectador espectador) {
        return ResponseEntity.status(HttpStatus.CREATED).body(espectadorService.findAll());
    }
}
