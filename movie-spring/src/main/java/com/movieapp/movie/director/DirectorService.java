package com.movieapp.movie.director;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DirectorService {

	@Autowired
	DirectorRepository directorRepository;
	
	public void add(@Valid Director director) {
		directorRepository.save(director);	
	}

	public Page<Director> getDirectors(Pageable page) {
		return directorRepository.findAll(page);
	}

	public void delete(long id) {
		directorRepository.deleteById(id);
	}

	public void update(long id, @Valid Director director) {
		Director inDB = directorRepository.findById(id);
		inDB.setDirectorMovies(director.getDirectorMovies());
		inDB.setDirectorName(director.getDirectorName());
		inDB.setDirectorSurname(director.getDirectorSurname());
		inDB.setExplanation(director.getExplanation());
		directorRepository.save(inDB);
	}
}
