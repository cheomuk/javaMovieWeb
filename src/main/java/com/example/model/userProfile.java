package com.example.model;

public class userProfile {
	private String id;
	private String user_id;
	
	/*
	 * 각각의 필드를 초기화한다.
	 */
	public userProfile(String id, String user_id) {
		this.id = id;
		this.user_id = user_id;
	}
	
	/*
	 * getter, setter 선언
	 */
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
}
