package com.movieapp.movie.studio;

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
@RequestMapping("/api/1.0/studio")
public class StudioController {
	@Autowired
	StudioService studioService;
	
	@PostMapping("/add")
	GenericResponse saveAuthor(@Valid @RequestBody Studio studio) {
		studioService.add(studio);
		return new GenericResponse("studio saved successfully");
	}
	
	@GetMapping("/feed")
	Page<Studio> getDirectors(@PageableDefault(sort= "id" , direction= Direction.DESC) Pageable page){
		return studioService.getStudios(page);
	}
	@DeleteMapping("/delete/{id:[0-9]+}")
	GenericResponse deleteDirector(@PathVariable long id) {
		studioService.delete(id);  
		return new GenericResponse("studio deleted successfully");
	}
	@PutMapping("/update/{id:[0-9]+}")
	GenericResponse updateStudio(@PathVariable long id, @RequestBody @Valid Studio studio) {
		studioService.update(id,studio);
		return new GenericResponse("studio updated successfully");
	}
}
