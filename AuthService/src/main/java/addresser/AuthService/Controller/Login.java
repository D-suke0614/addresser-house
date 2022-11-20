package addresser.AuthService.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/Login")
public class Login {

    @PostMapping
    public String LoginForm() {
        return "LoginForm";
    }
    @GetMapping
    public String LoginFo() {
        return "LoginForm";
    }
}
