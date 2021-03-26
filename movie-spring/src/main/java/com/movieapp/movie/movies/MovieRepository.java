package com.movieapp.movie.movies;

import org.springframework.data.jpa.repository.JpaRepository;


public interface MovieRepository extends JpaRepository <Movie , Long>{
	Movie findById(long id);
}
