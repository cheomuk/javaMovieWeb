package com.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mapper.MovieProfileMapper;
import com.mapper.UserProfileMapper;
import com.model.MovieProfile;
import com.model.UserProfile;

@RestController
public class AppController {
	
	@Resource(name="userProfileMapper")
	private UserProfileMapper userMapper;
	@Resource(name="movieProfileMapper")
	private MovieProfileMapper movieMapper;
	
	public AppController() {}
	
	public AppController(UserProfileMapper mapper) {	// API 호출
		this.userMapper = mapper;
	}
	
	public AppController(MovieProfileMapper mapper) {
		this.movieMapper = mapper;
	}
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String review() {
		return "MovieReview";
	}
	
	@RequestMapping(value = "/kakao/login", method = RequestMethod.GET)
	public String login() {
		return "index";
	}
	
	@PostMapping("/movie/create/{id}")		// Create 기능
	public void postMovieProfile(@PathVariable("id") String id, @RequestParam("movieId") String movieId, @RequestParam("review") String review) {
		movieMapper.insertMovieProfile(id, movieId, review);
	}
	
	@GetMapping("/movie/read")		// Read 기능
	public List<MovieProfile> getMovieProfileList() {
		return movieMapper.getMovieProfileList();
	}
	
	@GetMapping("/user/{id}")		// 특정 정보 조회
	public UserProfile getUserProfile(@PathVariable("id") String id) {
		return userMapper.getUserProfile(id);
	}
	
	@PostMapping("/review/create/{id}")		// Create 기능
	public void postUserProfile(@PathVariable("id") String id, @RequestParam("userId") String userId) {
		userMapper.insertUserProfile(id, userId);
	}
	
	@GetMapping("/review/read")		// Read 기능
	public List<UserProfile>getUserProfileList() {
		return userMapper.getUserProfileList();
	}
	
	@PutMapping("/review/update/{id}")		// Update 기능
	public void putUserProfile(@PathVariable("id") String id, @RequestParam("userId") String userId) {
		userMapper.updateUserProfile(id, userId);
	}
	
	@DeleteMapping("/review/delete/{id}")	// Delete 기능
	public void deleteUserProfile(@PathVariable("id") String id, @RequestParam("userId") String userId) {
		userMapper.deleteUserProfile(id);
	}
}
