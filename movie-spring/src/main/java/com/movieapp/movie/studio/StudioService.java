package com.movieapp.movie.studio;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class StudioService {
	@Autowired
	StudioRepository studioRepository;
	
	public void add(@Valid Studio studio) {
		studioRepository.save(studio);	
	}

	public Page<Studio> getStudios(Pageable page) {
		return studioRepository.findAll(page);
	}

	public void delete(long id) {
		studioRepository.deleteById(id);
	}

	public void update(long id, @Valid Studio studio) {
		Studio inDB = studioRepository.findById(id);
		inDB.setStudioName(studio.getStudioName());
		inDB.setNumberOfMovies(studio.getNumberOfMovies());
		inDB.setExplanation(studio.getExplanation());
		studioRepository.save(inDB);
	}
}
