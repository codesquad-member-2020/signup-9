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

@RestController
public class ApiRegistrationController {

    private Logger logger = LoggerFactory.getLogger(ApiRegistrationController.class);

    @Autowired
    private UserRepository userRepository;

    @PostMapping("user-registration")
    public ResponseEntity<Void> register(@RequestBody String requestUser) throws ParseException {
        JSONObject userJsonObject = (JSONObject) new JSONParser().parse(requestUser);
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
        logger.info("savedUser: {}", userRepository.save(user));

        return new ResponseEntity<>(HttpStatus.OK);
    }

    private String getUserProperty(JSONObject userJsonObject, String key) {
        return (String) userJsonObject.get(key);
    }
}
