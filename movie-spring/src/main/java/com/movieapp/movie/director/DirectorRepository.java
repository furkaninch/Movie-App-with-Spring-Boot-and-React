package com.movieapp.movie.director;

import org.springframework.data.jpa.repository.JpaRepository;



public interface DirectorRepository extends JpaRepository <Director , Long>  {
	Director findById(long id);
}
