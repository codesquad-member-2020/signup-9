package com.codesquad.signup;

import com.codesquad.signup.domain.UserRepository;
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
public class ApiValidationController {
    private static final String FALSE = "false";
    private static final String TRUE = "true";
    private static final String EMAIL = "email";
    private static final String USER_ID = "userId";
    private static final String PHONE_NUMBER = "phoneNumber";

    private Logger logger = LoggerFactory.getLogger(ApiValidationController.class);

    @Autowired
    private UserRepository userRepository;

    @PostMapping("user-id-validation")
    public ResponseEntity<Void> checkValidationOfUserId(@RequestBody String requestBodyEntity) throws ParseException {
        return isValid(requestBodyEntity, USER_ID);
    }

    @PostMapping("email-validation")
    public ResponseEntity<Void> checkValidationOfEmail(@RequestBody String requestBodyEntity) throws ParseException {
        return isValid(requestBodyEntity, EMAIL);
    }

    @PostMapping("phone-number-validation")
    public ResponseEntity<Void> checkValidationOfPhoneNumber(@RequestBody String requestBodyEntity) throws ParseException {
        return isValid(requestBodyEntity, PHONE_NUMBER);
    }

    private ResponseEntity<Void> isValid(String requestBodyEntity, String key) throws ParseException {
        JSONObject jsonObject = (JSONObject) new JSONParser().parse(requestBodyEntity);
        String parsedKey = (String) jsonObject.get(key);
        String validation;
        if (key.equals(USER_ID)) validation = userRepository.findByUserId(parsedKey).orElse(TRUE);
        else if (key.equals(EMAIL)) validation = userRepository.findByEmail(parsedKey).orElse(TRUE);
        else validation = userRepository.findByPhoneNumber(parsedKey).orElse(TRUE);

        if (validation.equals(TRUE)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    private JSONObject result(String column, String validation, String value) {
//        Map<String, String> map = new HashMap<>();
//        map.put(column, value);
//        map.put("validation", validation);
//        return new JSONObject(map);
//    }
}
