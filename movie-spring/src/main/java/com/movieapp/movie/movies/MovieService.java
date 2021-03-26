package com.movieapp.movie.movies;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;



@Service
public class MovieService {
	@Autowired
	MovieRepository movieRepository;
	
	public void add(@Valid Movie movie) {
		movieRepository.save(movie);	
	}

	public Page<Movie> getDirectors(Pageable page) {
		return movieRepository.findAll(page);
	}

	public void delete(long id) {
		movieRepository.deleteById(id);
	}

	public void update(long id, @Valid Movie movie) {
		Movie inDB = movieRepository.findById(id);
		inDB.setDirector(movie.getDirector());
		inDB.setImdbScore(movie.getImdbScore());
		inDB.setStudio(movie.getStudio());
		inDB.setExplanation(movie.getExplanation());
		movieRepository.save(inDB);
	}
}
