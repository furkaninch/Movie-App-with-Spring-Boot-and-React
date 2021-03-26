package com.movieapp.movie.movies;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
public class Movie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull(message = "{movie.validation.constraints.movieName.NotNull.message}")
	private String movieName;
	
	@NotNull(message = "{movie.validation.constraints.imdbScore.NotNull.message}")
	private String imdbScore;
	
	@NotNull(message = "{movie.validation.constraints.explanation.NotNull.message}")
	private String explanation;
	
	@NotNull(message = "{movie.validation.constraints.director.NotNull.message}")
	private String director;
	
	@NotNull(message = "{movie.validation.constraints.studio.NotNull.message}")
	private String studio;
}
