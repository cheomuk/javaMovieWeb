package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages= {"com.example.controller"})
@MapperScan("com.example.mapper")
@SpringBootApplication
public class JavaMovieWebReviewApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(JavaMovieWebReviewApplication.class, args);
	}
}
