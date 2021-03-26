package com.movieapp.movie.director;

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
@RequestMapping("/api/1.0/director")
public class DirectorController {
	
	@Autowired
	DirectorService directorService;
	
	@PostMapping("/add")
	GenericResponse saveAuthor(@Valid @RequestBody Director director) {
		directorService.add(director);
		return new GenericResponse("director saved successfully");
	}
	
	@GetMapping("/feed")
	Page<Director> getDirectors(@PageableDefault(sort= "id" , direction= Direction.DESC) Pageable page){
		return directorService.getDirectors(page);
	}
	@DeleteMapping("/delete/{id:[0-9]+}")
	GenericResponse deleteDirector(@PathVariable long id) {
		directorService.delete(id);  
		return new GenericResponse("director deleted successfully");
	}
	@PutMapping("/update/{id:[0-9]+}")
	GenericResponse updateDirector(@PathVariable long id, @RequestBody @Valid Director director) {
		directorService.update(id,director);
		return new GenericResponse("director updated successfully");
	}
}
