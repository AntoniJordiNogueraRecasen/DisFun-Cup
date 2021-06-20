package com.ggtournament.gametournamentapi.service;

import com.ggtournament.gametournamentapi.entity.Participante;
import com.ggtournament.gametournamentapi.repository.ParticipanteRepository;
import com.ggtournament.gametournamentapi.service.interfaces.ParticipanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.Optional;

@Service
public class ParticipanteServiceImpl implements ParticipanteService {

    @Autowired
    private ParticipanteRepository participanteRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;


    private final RowMapper<Participante> participanteRowMapperForObject = (resultSet, i) -> {
        Participante participante = new Participante();

        participante.setIdparticipante(Integer.parseInt(resultSet.getString("idparticipante")));
        participante.setPassword(resultSet.getString("password"));
        participante.setEmail(resultSet.getString("email"));
        participante.setApellido(resultSet.getString("apellido"));
        participante.setDiscapacidad(resultSet.getString("discapacidad"));
        participante.setDni(resultSet.getString("dni"));
        participante.setFechaNacimiento(Date.valueOf(resultSet.getString("fecha_nacimiento")));
        participante.setNombre(resultSet.getString("nombre"));
        participante.setTelefono(resultSet.getString("telefono"));

        return participante;
    };

    @Override
    @Transactional(readOnly = true)
    public Iterable<Participante> findAll() {
        return participanteRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Participante> findById(Integer id) {
        return participanteRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Participante findByEmail(String email) {
        try {
            final var query = "SELECT * FROM projecte.participante WHERE email = ?";
            return jdbcTemplate.queryForObject(query, participanteRowMapperForObject, email);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    @Transactional
    public Participante save(Participante participante) {
        return participanteRepository.save(participante);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        participanteRepository.deleteById(id);
    }
}
