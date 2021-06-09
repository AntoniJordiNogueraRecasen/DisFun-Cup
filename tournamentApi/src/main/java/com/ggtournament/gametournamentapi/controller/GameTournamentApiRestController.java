package com.ggtournament.gametournamentapi.controller;

import com.ggtournament.gametournamentapi.entity.Combate;
import com.ggtournament.gametournamentapi.service.interfaces.CombateService;
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

    @PostMapping("/combates")
    public ResponseEntity<?> create (@RequestBody Combate combate) {
        return ResponseEntity.status(HttpStatus.CREATED).body(combateService.save(combate));
    }

    @GetMapping("/combates/{id}")
    public ResponseEntity<?> read(@PathVariable(value = "id") Integer idcombate) {
        Optional<Combate> oCombate = combateService.findById(idcombate);

        if(!oCombate.isPresent()) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(oCombate);
    }

    @GetMapping("/combates")
    public ResponseEntity<?> readAll() {
        return ResponseEntity.status(HttpStatus.CREATED).body(combateService.findAll());
    }
}
