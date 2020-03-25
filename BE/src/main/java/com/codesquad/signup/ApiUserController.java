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
public class ApiUserController {
    private Logger logger = LoggerFactory.getLogger(ApiUserController.class);

    @Autowired
    private UserRepository userRepository;

    @PostMapping("user-id-vaildation")
    public JSONObject checkVaildOfUserId(@RequestBody String userId) throws ParseException {
        // user JsonParsing 하는 법
        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObject = (JSONObject) jsonParser.parse(userId);
        String parsedUserId = (String) jsonObject.get("userId");

        logger.info("userId : {}", parsedUserId);

        // DB에서 유효성 체크
//        userRepository.f

        // 결과를 json으로 만드는법.
        Map<String, String> map = new HashMap<>();
        map.put("userId", "guswns1659");
        map.put("vaildation", "false");

        JSONObject jsonObject2 = new JSONObject(map);

        return jsonObject2;
    }
}
