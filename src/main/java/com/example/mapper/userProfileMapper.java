package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import com.example.model.userProfile;

@Mapper
@Repository
public interface userProfileMapper {
	
	@Select("SELECT * FROM userprofile WHERE id=#{id}")		// 특정 파라미터 값과 일치하는 정보를 SQL에서 가져온다.
	userProfile getUserProfile(@Param("id") String id);
	
	@Select("SELECT * FROM userprofile")					// Read 기능 구현
	List<userProfile>getUserProfileList();
	
	@Insert("INSERT INTO userprofile VALUES(#{id}, #{user_id})")			// Create 기능 구현
	int insertUserProfile(@Param("id") String id, @Param("user_id") String user_id);
	
	@Update("UPDATE userprofile SET user_id=#{user_id} WHERE id=#{id}")		// Update 기능 구현
	int updateUserProfile(@Param("id") String id, @Param("user_id") String user_id);
	
	@Delete("DELETE FROM userprofile WHERE id=#{id}")		// Delete 기능 구현
	int deleteUserProfile(@Param("id") String id);
}