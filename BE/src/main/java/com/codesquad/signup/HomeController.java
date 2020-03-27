package com.codesquad.signup;

import com.codesquad.signup.domain.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class HomeController {
    private Logger logger = LoggerFactory.getLogger(HomeController.class);

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public ModelAndView index() {
        return new ModelAndView("/main/index.html");
    }

    @GetMapping("/join")
    public ModelAndView hello() {
        return new ModelAndView("/join/index.html");
    }

    @GetMapping("/loginForm")
    public ModelAndView login() {
        return new ModelAndView("/login/index.html");
    }
}

