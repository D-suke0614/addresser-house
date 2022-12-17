package addresser.AuthServicese.Controller;

import addresser.AuthServicese.Model.UserInfo;
import addresser.AuthServicese.Service.GenerateAccessToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
@RequestMapping
public class Login {

    @Autowired
    GenerateAccessToken generateAccessToken;
    //普通のログイン
    @RequestMapping(path ="/Login", method = RequestMethod.GET)
    public String LoginForm() {
        return "LoginForm";
    }

    @RequestMapping(path ="/LoginSuccess", method = RequestMethod.POST)
    @ResponseBody
    public UserInfo LoginFunc(@RequestBody UserInfo user) {
       user.setAccesstoken(generateAccessToken.searchAccessToken(user.getId(),user.getName()));
       return user;
    }
}
