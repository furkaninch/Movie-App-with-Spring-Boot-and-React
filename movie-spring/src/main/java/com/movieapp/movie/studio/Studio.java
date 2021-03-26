package com.movieapp.movie.studio;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Data
public class Studio {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull(message = "{movie.validation.constraints.studioName.NotNull.message}")
	private String studioName;
	
	
	@NotNull(message = "{movie.validation.constraints.explanation.NotNull.message}")
	private String explanation;
	
	
	@NotNull(message = "{movie.validation.constraints.numberOfMovies.NotNull.message}")
	private String numberOfMovies;
}
