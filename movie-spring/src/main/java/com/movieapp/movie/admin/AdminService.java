package com.movieapp.movie.admin;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
	
	
	AdminRepository adminRepository;
	PasswordEncoder passwordEncoder;
	
	
	
	public AdminService(AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
		this.adminRepository = adminRepository;
		this.passwordEncoder = passwordEncoder;
	}



	public void registerAdmin(Admin admin) {
		String password = passwordEncoder.encode(admin.getPassword());
		admin.setPassword(password);
		adminRepository.save(admin);
	}
}
