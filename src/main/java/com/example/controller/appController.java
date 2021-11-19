package com.example.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.mapper.movieProfileMapper;
import com.example.mapper.userProfileMapper;
import com.example.model.movieProfile;
import com.example.model.userProfile;

@RestController
public class appController {
	
	@Resource(name="userProfileMapper")
	private userProfileMapper user_mapper;
	@Resource(name="movieProfileMapper")
	private movieProfileMapper movie_mapper;
	
	public appController() {}
	
	public appController(userProfileMapper mapper) {	// API 호출
		this.user_mapper = mapper;
	}
	
	public appController(movieProfileMapper mapper) {
		this.movie_mapper = mapper;
	}
	
	@PostMapping("/movie/{id}")		// Create 기능
	public void postMovieProfile(@PathVariable("id") String id, @RequestParam("movie_id") String movie_id, @RequestParam("review") String review) {
		movie_mapper.insertMovieProfile(id, movie_id, review);
	}
	
	@GetMapping("/movie/all")		// Read 기능
	public List<movieProfile> getMovieProfileList() {
		return movie_mapper.getMovieProfileList();
	}
	
	@GetMapping("/user/{id}")		// 특정 정보 조회
	public userProfile getUserProfile(@PathVariable("id") String id) {
		return user_mapper.getUserProfile(id);
	}
	
	@PostMapping("/user/{id}")		// Create 기능
	public void postUserProfile(@PathVariable("id") String id, @RequestParam("user_id") String user_id) {
		user_mapper.insertUserProfile(id, user_id);
	}
	
	@GetMapping("/user/all")		// Read 기능
	public List<userProfile>getUserProfileList() {
		return user_mapper.getUserProfileList();
	}
	
	@PutMapping("/user/{id}")		// Update 기능
	public void putUserProfile(@PathVariable("id") String id, @RequestParam("user_id") String user_id) {
		user_mapper.updateUserProfile(id, user_id);
	}
	
	@DeleteMapping("/user/{id}")	// Delete 기능
	public void deleteUserProfile(@PathVariable("id") String id, @RequestParam("user_id") String user_id) {
		user_mapper.deleteUserProfile(id);
	}
}
