package com.movieapp.movie.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.movieapp.movie.admin.Admin;
import com.movieapp.movie.admin.AdminRepository;


@Service
public class AdminAuthService implements UserDetailsService{
	
	@Autowired
	AdminRepository adminRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Admin inDB = adminRepository.findByUsername(username);
		
		if(inDB == null) {
			throw new UsernameNotFoundException("User not found");
		}
		return inDB;
	}

}
