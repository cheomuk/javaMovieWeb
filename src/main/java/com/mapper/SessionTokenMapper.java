package com.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository(value="SessionTokenMapper")
@Mapper
public interface SessionTokenMapper {

	@Insert("INSERT INTO session VALUES(#{token}, #{user_id})")		// Create 기능 구현
	int insertSessionProfile(@Param("token") String token, @Param("user_id") String user_id);
	
	@Delete("DELETE FROM session WHERE token=#{token}")			// Delete 기능 구현
	int deleteSessionProfile(@Param("token") String token);
}