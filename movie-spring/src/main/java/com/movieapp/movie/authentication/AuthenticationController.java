package com.movieapp.movie.authentication;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movieapp.movie.admin.Admin;
import com.movieapp.movie.admin.AdminVM;
import com.movieapp.movie.shared.CurrentAdmin;



@RestController
public class AuthenticationController {

	@PostMapping("/api/1.0/auth")
	ResponseEntity<?> handleAuthentication(@CurrentAdmin Admin admin) {
		AdminVM adminVM = new AdminVM(admin);
		return ResponseEntity.ok(adminVM);
	}
}
