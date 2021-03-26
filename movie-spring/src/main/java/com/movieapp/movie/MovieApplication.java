package com.movieapp.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.movieapp.movie.admin.Admin;
import com.movieapp.movie.admin.AdminService;
import com.movieapp.movie.director.Director;
import com.movieapp.movie.director.DirectorService;
import com.movieapp.movie.movies.Movie;
import com.movieapp.movie.movies.MovieService;
import com.movieapp.movie.studio.Studio;
import com.movieapp.movie.studio.StudioService;


@SpringBootApplication
public class MovieApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieApplication.class, args);
	}
	
	@Autowired
	DirectorService directorService;
	MovieService movieService;
	StudioService studioService;
	
	@Bean
	CommandLineRunner createInitialAdmin(AdminService adminService, DirectorService directorService,
			MovieService movieService, StudioService studioService) {
		return (args) -> {
			Admin admin = new Admin();
			admin.setUsername("admin"); 
			admin.setPassword("P4ssword");
			adminService.registerAdmin(admin);
			
			for(int i = 1 ; i <= 25 ; i++) {
				Director director = new Director();
				Movie movie = new Movie();
				Studio studio = new Studio();
				
				director.setDirectorName("name " + i);
				director.setDirectorSurname("surname " + i);
				director.setExplanation("explanation "+i);
				director.setDirectorMovies("movies "+i);
				
				movie.setDirector("director "+ i);
				movie.setExplanation("exp " + i);
				movie.setImdbScore("7,"+i);
				movie.setMovieName("movie " + i);
				movie.setStudio("studio " + i);
				
				studio.setStudioName("name " + i);
				studio.setExplanation("exp " + i);
				studio.setNumberOfMovies(""+i);
				
				directorService.add(director);
				movieService.add(movie);
				studioService.add(studio);
			}
		};
		}
}
