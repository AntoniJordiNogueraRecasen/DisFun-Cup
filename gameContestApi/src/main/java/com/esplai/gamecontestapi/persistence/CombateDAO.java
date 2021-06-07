package com.esplai.gamecontestapi.persistence;

import com.esplai.gamecontestapi.domain.Combate;
import org.simpleflatmapper.jdbc.spring.JdbcTemplateMapperFactory;
import org.simpleflatmapper.jdbc.spring.RowMapperImpl;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.sql.Date;
import java.util.List;

import org.simpleflatmapper.jdbc.spring.ResultSetExtractorImpl;
import org.springframework.stereotype.Repository;

@Repository
public class CombateDAO implements com.esplai.gamecontestapi.application.daosInterface.CombateDAO {

    private JdbcTemplate jdbcTemplate;

    public CombateDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Combate> combateRowMapperForObject = (resultSet, i) -> {
        Combate combate = new Combate();

        combate.setIdCombate(Integer.parseInt(resultSet.getString("idCombate")));
        combate.setFecha(Date.valueOf(resultSet.getString("fecha")));

        return combate;
    };

    ResultSetExtractorImpl<Combate> combatesRowMapper =
            JdbcTemplateMapperFactory
                    .newInstance()
                    .addKeys("idCombate")
                    .newResultSetExtractor(Combate.class);

    RowMapperImpl<Combate> combateRowMapper =
            JdbcTemplateMapperFactory
                    .newInstance()
                    .addKeys("idCombate")
                    .newRowMapper(Combate.class);

    @Override
    public Combate getCombate(String combateId) {
        final var query = "select * from combate where idCombate = ?";
        return jdbcTemplate.queryForObject(query, combateRowMapperForObject, combateId);
    }

    @Override
    public List<Combate> getAllCombates() {
        final var query = "select * from combate";
        return jdbcTemplate.query(query,combatesRowMapper);
    }

    @Override
    public void addCombate(Date fecha) {
        final var query = "insert into combate (fecha) VALUES (?)";
        jdbcTemplate.update(query, fecha);
    }

    @Override
    public void deleteCombate(String combateId) {
        final var query = "delete from combate where idCombate = ?";
        jdbcTemplate.update(query, combateId);
    }
}
