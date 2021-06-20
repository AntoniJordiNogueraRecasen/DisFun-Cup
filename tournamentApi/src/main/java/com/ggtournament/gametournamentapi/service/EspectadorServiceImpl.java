package com.ggtournament.gametournamentapi.service;

import com.ggtournament.gametournamentapi.entity.Espectador;
import com.ggtournament.gametournamentapi.repository.EspectadorRepository;
import com.ggtournament.gametournamentapi.service.interfaces.EspectadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.Optional;

@Service
public class EspectadorServiceImpl implements EspectadorService {

    @Autowired
    private EspectadorRepository espectadorRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;


    private final RowMapper<Espectador> espectadorRowMapperForObject = (resultSet, i) -> {
        Espectador espectador = new Espectador();

        espectador.setIdespectador(Integer.parseInt(resultSet.getString("idespectador")));
        espectador.setEmail(resultSet.getString("email"));
        espectador.setPassword(resultSet.getString("password"));
        espectador.setNombre(resultSet.getString("nombre"));
        espectador.setApellido(resultSet.getString("apellido"));
        espectador.setDni(resultSet.getString("dni"));
        espectador.setApuesta(resultSet.getString("apuesta"));
        espectador.setAsiento(resultSet.getString("asiento"));
        espectador.setTelefono(resultSet.getString("telefono"));

        return espectador;
    };

    @Override
    @Transactional(readOnly = true)
    public Iterable<Espectador> findAll() {
        return espectadorRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Espectador> findById(Integer id) {
        return espectadorRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Espectador findByEmail(String email) {
        try {
            final var query = "SELECT * FROM projecte.espectador WHERE email = ?";
            return jdbcTemplate.queryForObject(query, espectadorRowMapperForObject, email);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    @Transactional
    public Espectador save(Espectador espectador) {
        return espectadorRepository.save(espectador);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        espectadorRepository.deleteById(id);
    }
}
