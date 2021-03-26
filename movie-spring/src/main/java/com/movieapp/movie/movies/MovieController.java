package com.movieapp.movie.movies;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movieapp.movie.shared.GenericResponse;



@RestController
@RequestMapping("/api/1.0/movie")
public class MovieController {
	@Autowired
	MovieService movieService;
	
	@PostMapping("/add")
	GenericResponse saveAuthor(@Valid @RequestBody Movie movie) {
		movieService.add(movie);
		return new GenericResponse("movie saved successfully");
	}
	
	@GetMapping("/feed")
	Page<Movie> getDirectors(@PageableDefault(sort= "id" , direction= Direction.DESC) Pageable page){
		return movieService.getDirectors(page);
	}
	@DeleteMapping("/delete/{id:[0-9]+}")
	GenericResponse deleteDirector(@PathVariable long id) {
		movieService.delete(id);  
		return new GenericResponse("movie deleted successfully");
	}
	@PutMapping("/update/{id:[0-9]+}")
	GenericResponse updateDirector(@PathVariable long id, @RequestBody @Valid Movie movie) {
		movieService.update(id,movie);
		return new GenericResponse("movie updated successfully");
	}
}
