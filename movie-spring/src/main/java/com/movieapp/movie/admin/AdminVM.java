package com.movieapp.movie.admin;

import lombok.Data;

@Data
public class AdminVM {
	
	private String username;

	public AdminVM(Admin admin) {
		this.setUsername(admin.getUsername()); 
	}
	
	
	
}
