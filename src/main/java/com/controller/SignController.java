package com.controller;

import java.util.HashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.mapper.SessionTokenMapper;

@RestController
public class SignController {

	KakaoAPI kakaoApi = new KakaoAPI();
	private static Logger logger = LoggerFactory.getLogger(SignController.class);
	
	private String getNick = "";
	private String getToken = "";
	
	@Resource(name="SessionTokenMapper")
	private SessionTokenMapper sessionToken;
	
	public SignController(SessionTokenMapper mapper) {
		this.sessionToken = mapper;
	}
	
	@RequestMapping(value="/login")
	public ModelAndView login(@RequestParam("code") String code, HttpSession session) {
		ModelAndView mav = new ModelAndView();
		// 1번 인증코드 요청 전달
		String accessToken = kakaoApi.GetAccessToken(code);
		// 2번 인증코드로 토큰 전달
		HashMap<String, Object> userInfo = kakaoApi.GetUserInfo(accessToken);
		
		logger.info("login info : " + userInfo.toString());
		
		if(userInfo.get("email") != null) {
			session.setAttribute("userId", userInfo.get("email"));
			session.setAttribute("accessToken", accessToken);
		}
		
		getNick = userInfo.get("nickname").toString();
		getToken = accessToken;
		
		sessionToken.insertSessionProfile(getToken, getNick);
		
		mav.addObject("userId", userInfo.get("email"));
		mav.addObject("accessToken", accessToken);
		mav.setViewName("index");
		return mav;
	}
	
	@RequestMapping(value="/logout")
	public ModelAndView logout(HttpSession session) {
		ModelAndView mav = new ModelAndView();
		
		if ((String)session.getAttribute("accessToken") == getToken) {
			sessionToken.deleteSessionProfile(getToken);
		}
		
		kakaoApi.KakaoLogout((String)session.getAttribute("accessToken"));
		session.removeAttribute("accessToken");
		session.removeAttribute("userId");
		mav.setViewName("index");
		return mav;
	}
}