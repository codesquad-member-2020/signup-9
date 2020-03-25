package com.codesquad.signup;

import com.codesquad.signup.domain.UserRepository;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ApiVaildationController {
    private static final String FALSE = "false";
    private static final String TRUE = "true";
    private static final String EMAIL = "email";
    private static final String USER_ID = "userId";
    private static final String PHONE_NUMBER = "phoneNumber";

    private Logger logger = LoggerFactory.getLogger(ApiVaildationController.class);

    @Autowired
    private UserRepository userRepository;

    @PostMapping("user-id-vaildation")
    public JSONObject checkVaildationOfUserId(@RequestBody String requestBodyEntity) throws ParseException {
       return isVaild(requestBodyEntity, USER_ID);
    }

    @PostMapping("email-vaildation")
    public JSONObject checkVaildationOfEmail(@RequestBody String requestBodyEntity) throws ParseException {
       return isVaild(requestBodyEntity, EMAIL);
    }

    @PostMapping("phone-number-vaildation")
    public JSONObject checkVaildationOfPhoneNumber(@RequestBody String requestBodyEntity) throws ParseException {
        return isVaild(requestBodyEntity, PHONE_NUMBER);
   }

    private JSONObject isVaild(String requestBodyEntity, String key) throws ParseException {
        JSONObject jsonObject = (JSONObject) new JSONParser().parse(requestBodyEntity);
        String parsedKey = (String) jsonObject.get(key);
        String vaildation;
        if (key.equals(USER_ID))  vaildation = userRepository.findByUserId(parsedKey).orElse(FALSE);
        else if (key.equals(EMAIL)) vaildation = userRepository.findByEmail(parsedKey).orElse(FALSE);
        else vaildation = userRepository.findByPhoneNumber(parsedKey).orElse(FALSE);

        if (vaildation.equals(FALSE)) {
            return result(key, FALSE, parsedKey);
        }
        return result(key, TRUE, parsedKey);
    }

    private JSONObject result(String column, String vaildation, String value) {
        Map<String, String> map = new HashMap<>();
        map.put(column, value);
        map.put("vaildation", vaildation);
        return new JSONObject(map);
    }
}
