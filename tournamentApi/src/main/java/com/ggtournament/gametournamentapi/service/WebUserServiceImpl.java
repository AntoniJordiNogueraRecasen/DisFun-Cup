package com.ggtournament.gametournamentapi.service;

import com.ggtournament.gametournamentapi.entity.WebUser;
import com.ggtournament.gametournamentapi.repository.WebUserRepository;
import com.ggtournament.gametournamentapi.service.interfaces.WebUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Optional;

@Service
public class WebUserServiceImpl implements WebUserService {

    @Autowired
    private WebUserRepository webUserRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;


    private final RowMapper<WebUser> webUserRowMapperForObject = (resultSet, i) -> {
        WebUser webUser = new WebUser();

        webUser.setIdwebuser(Integer.parseInt(resultSet.getString("idwebuser")));
        webUser.setEmail(resultSet.getString("email"));
        webUser.setPassword(resultSet.getString("password"));

        return webUser;
    };

    @Override
    @Transactional(readOnly = true)
    public Iterable<WebUser> findAll() {
        return webUserRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<WebUser> findById(Integer id) {
        return webUserRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public WebUser findByEmailPassword(String email, String password) {
        final var query = "SELECT * FROM webuser WHERE email = ? AND password = ?";
        return jdbcTemplate.queryForObject(query, webUserRowMapperForObject, email, password);
    }

    @Override
    @Transactional
    public WebUser save(WebUser webUser) {
        return webUserRepository.save(webUser);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        webUserRepository.deleteById(id);
    }
}
