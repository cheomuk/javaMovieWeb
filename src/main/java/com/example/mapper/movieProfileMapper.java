package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.example.model.movieProfile;

@Mapper
@Repository
public interface movieProfileMapper {
		
	@Insert("INSERT INTO movieprofile VALUES(#{id}, #{movie_id}, #{review})")
	int insertMovieProfile(@Param("id") String id, @Param("movie_id") String movie_id, @Param("review") String review);
	
	@Select("SELECT * FROM movieprofile")
	List<movieProfile>getMovieProfileList();		
}