package com.example.controller;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.mapper.kakaoApi;

@RestController
public class signController {
	kakaoApi kakaoapi = new kakaoApi();
	
	@RequestMapping(value="/login")
	public ModelAndView login(@RequestParam("code") String code, HttpSession session) {
		ModelAndView mav = new ModelAndView();
		String access_token = kakaoapi.getAccessToken(code);
		HashMap<String, Object> userInfo = kakaoapi.getUserInfo(access_token);
		
		System.out.println("login info : " + userInfo.toString());
		if(userInfo.get("email") != null) {
			session.setAttribute("userId", userInfo.get("email"));
			session.setAttribute("access_token", access_token);
		}
		return mav;
	}
}