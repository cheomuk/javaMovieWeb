package com.model;

public class MovieProfile {
	private int idx;
	private String movieId;
	private String review;
	
	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public MovieProfile(String movieId, String review) {
		this.movieId = movieId;
		this.review = review;
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