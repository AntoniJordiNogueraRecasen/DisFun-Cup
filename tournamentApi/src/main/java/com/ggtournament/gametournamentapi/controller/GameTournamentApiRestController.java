package com.ggtournament.gametournamentapi.controller;

import com.ggtournament.gametournamentapi.entity.Combate;
import com.ggtournament.gametournamentapi.service.CombateService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/gametournamentapi")
public class GameTournamentApiRestController {

    private CombateService combateService;

    @PostMapping("/combats")
    public ResponseEntity<?> create (@RequestBody Combate combate) {
        return ResponseEntity.status(HttpStatus.CREATED).body(combateService.save(combate));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> read(@PathVariable(value = "id") Integer idcombate) {
        Optional<Combate> oCombate = combateService.findById(idcombate);

        if(!oCombate.isPresent()) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(oCombate);
    }

    @GetMapping("/combats")
    public ResponseEntity<?> readAll() {
        return ResponseEntity.status(HttpStatus.CREATED).body(combateService.findAll());
    }
}
