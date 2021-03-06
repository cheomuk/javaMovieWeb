package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@MapperScan(value = {"com.mapper"})
@ComponentScan(basePackages= {"com.controller"})
public class JavaMovieWebReviewApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaMovieWebReviewApplication.class, args);
	}

}
