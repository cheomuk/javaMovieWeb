package com.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.model.MovieProfile;

@Mapper
@Repository
public interface MovieProfileMapper {
		
	@Insert("INSERT INTO movieprofile VALUES(#{id}, #{movieId}, #{review})")
	int insertMovieProfile(@Param("id") String id, @Param("movieId") String movieId, @Param("review") String review);
	
	@Select("SELECT * FROM movieprofile")
	List<MovieProfile>getMovieProfileList();		
}