package com.movieapp.movie.studio;

import org.springframework.data.jpa.repository.JpaRepository;


public interface StudioRepository extends JpaRepository <Studio , Long>{
	Studio findById(long id);
}
