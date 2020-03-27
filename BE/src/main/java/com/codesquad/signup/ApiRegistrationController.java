package com.codesquad.signup;

import com.codesquad.signup.domain.User;
import com.codesquad.signup.domain.UserRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

@RestController
public class ApiRegistrationController {

    private Logger logger = LoggerFactory.getLogger(ApiRegistrationController.class);

    @Autowired
    private UserRepository userRepository;

    @PostMapping("user-registration")
    public ResponseEntity<Void> register(@RequestBody String requestUser,
                                         HttpSession httpSession) throws ParseException {
        JSONObject userJsonObject = (JSONObject) new JSONParser().parse(requestUser);
        try {
            String userId = getUserProperty(userJsonObject, "userId");
            String password = getUserProperty(userJsonObject, "password");
            String name = getUserProperty(userJsonObject, "name");
            Integer gender = Integer.parseInt(getUserProperty(userJsonObject, "gender"));
            String birthDate = getUserProperty(userJsonObject, "birthDate");
            String email = getUserProperty(userJsonObject, "email");
            String phoneNumber = getUserProperty(userJsonObject, "phoneNumber");
            JSONArray favorites = (JSONArray) userJsonObject.get("favorite");
            String favoriteOne = String.valueOf(favorites.get(0));
            String favoriteTwo = String.valueOf(favorites.get(1));
            String favoriteThree = String.valueOf(favorites.get(2));
            User user = new User(userId, password, name, gender, birthDate, email,
                    phoneNumber, favoriteOne, favoriteTwo, favoriteThree);
            User saved = userRepository.save(user);
            logger.info("savedUser: {}", saved);
            httpSession.setAttribute("sessionedUser", userId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            httpSession.invalidate();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("login")
    public ModelAndView login(@RequestBody String requestUser,
                              HttpSession httpSession) throws ParseException {
        JSONObject jsonObject = (JSONObject) new JSONParser().parse(requestUser);
        String userId = (String) jsonObject.get("userId");
        String password = (String) jsonObject.get("password");
        logger.info("userId : {} , password: {}", userId, password);
        try {
            String savedUserId = userRepository.findByUserId(userId).orElseThrow(() ->
                    new IllegalStateException("No user"));
            String savedPassword = userRepository.findPasswordByUserId(savedUserId).orElseThrow(() ->
                    new IllegalStateException("Wrong password"));
            if (!password.equals(savedPassword)) {
//                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
                return new ModelAndView("/login/index.html");
            }

            httpSession.setAttribute("sessionedUser", userId);
//            return new ResponseEntity<>(HttpStatus.OK);
            return new ModelAndView("/main/index.html");
        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            return new ModelAndView("/login/index.html");
        }
    }

    private String getUserProperty(JSONObject userJsonObject, String key) throws Exception {
        String value = (String) userJsonObject.get(key);
        if (value == null) {
            throw new Exception();
        }
        return value;
    }
}
