package com.model;

public class MovieProfile {
	private String id;
	private String movieId;
	private String review;
	
	public MovieProfile(String id, String movieId, String review) {
		this.id = id;
		this.movieId = movieId;
		this.review = review;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getMovieId() {
		return movieId;
	}

	public void setMovieId(String movieId) {
		this.movieId = movieId;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}
}