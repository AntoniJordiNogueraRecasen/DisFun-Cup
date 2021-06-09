package com.ggtournament.gametournamentapi.controller;

import com.ggtournament.gametournamentapi.entity.Combate;
import com.ggtournament.gametournamentapi.entity.Espectador;
import com.ggtournament.gametournamentapi.entity.Participante;
import com.ggtournament.gametournamentapi.entity.WebUser;
import com.ggtournament.gametournamentapi.service.interfaces.CombateService;
import com.ggtournament.gametournamentapi.service.interfaces.EspectadorService;
import com.ggtournament.gametournamentapi.service.interfaces.ParticipanteService;
import com.ggtournament.gametournamentapi.service.interfaces.WebUserService;
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

    @Autowired
    private ParticipanteService participanteService;

    @Autowired
    private WebUserService webUserService;

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
        return ResponseEntity.status(HttpStatus.CREATED).body(espectadorService.save(espectador));
    }

    @GetMapping("/participantes")
    public ResponseEntity<?> readAllParticipantes(){
        return ResponseEntity.status(HttpStatus.CREATED).body(participanteService.findAll());
    }

    @GetMapping("/participantes/{id}")
    public ResponseEntity<?> readParticipante(@PathVariable(value = "id") Integer idparticipante) {
        Optional<Participante> oParticipante = participanteService.findById(idparticipante);

        if(!oParticipante.isPresent()) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(oParticipante);
    }

    @PostMapping("/participantes")
    public ResponseEntity<?> createParticipante(@RequestBody Participante participante) {
        WebUser webUser = new WebUser();
        webUser.setEmail(participante.getEmail());
        webUser.setPassword(participante.getPassword());

        webUserService.save(webUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(participanteService.save(participante));
    }

    @PostMapping("/login/{email}/{password}")
    public ResponseEntity<?> loginInWeb(@PathVariable(value = "email") String email , @PathVariable(value = "password") String password) {
        return ResponseEntity.status(HttpStatus.CREATED).body(webUserService.findByEmailPassword(email, password));
    }

    @GetMapping("/webusers")
    public ResponseEntity<?> readAllWebUsers() {
        return ResponseEntity.status(HttpStatus.CREATED).body(webUserService.findAll());
    }

    @GetMapping("/webusers/{id}")
    public ResponseEntity<?> readWebUser(@PathVariable(value = "id") Integer idwebuser) {
        Optional<WebUser> oWebUser = webUserService.findById(idwebuser);

        if(!oWebUser.isPresent()) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(oWebUser);
    }

    @PostMapping("/webusers")
    public ResponseEntity<?> createWebUser(@RequestBody WebUser webUser) {
        return ResponseEntity.status(HttpStatus.CREATED).body(webUserService.save(webUser));
    }
}
