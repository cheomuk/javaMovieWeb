package com.example.model;

public class movieProfile {
	private String id;
	private String movie_id;
	private String review;
	
	public movieProfile(String id, String movie_id, String review) {
		this.id = id;
		this.movie_id = movie_id;
		this.review = review;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getMovie_id() {
		return movie_id;
	}

	public void setMovie_id(String movie_id) {
		this.movie_id = movie_id;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}
}