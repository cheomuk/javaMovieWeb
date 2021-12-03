package com.model;

public class UserProfile {
	private String id;
	private String userId;
	
	/*
	 * 각각의 필드를 초기화한다.
	 */
	public UserProfile(String id, String userId) {
		this.id = id;
		this.userId = userId;
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

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
}
