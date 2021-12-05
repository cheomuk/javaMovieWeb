package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages= {"com.controller"})
@MapperScan("com.mapper")
@SpringBootApplication
public class JavaMovieWebApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(JavaMovieWebApplication.class, args);
	}
}
