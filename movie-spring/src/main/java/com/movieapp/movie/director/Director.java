package com.movieapp.movie.director;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
public class Director {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull(message = "{movie.validation.constraints.directorName.NotNull.message}")
	private String directorName;
	
	@NotNull(message = "{movie.validation.constraints.directorSurname.NotNull.message}")
	private String directorSurname;
	
	@NotNull(message = "{movie.validation.constraints.explanation.NotNull.message}")
	private String explanation;
	
	@NotNull(message = "{movie.validation.constraints.directorMovies.NotNull.message}")
	private String directorMovies;
}
