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
		
	@Insert("INSERT INTO movieprofile VALUES(#{movie_id}, #{review})")
	int insertMovieProfile(@Param("movie_id") String movieId, @Param("review") String review);
	
	@Select("SELECT review FROM movieprofile WHERE movie_id=#{movie_id}")
	List<MovieProfile>getMovieProfileList(@Param("movie_id") String movieId);		
}