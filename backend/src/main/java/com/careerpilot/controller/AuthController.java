package careerpilot.controller;

import careerpilot.model.User;
import careerpilot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        Optional<User> loggedIn = userService.login(user.getEmail(), user.getPassword());

        if (loggedIn.isPresent()) {
            return "LOGIN SUCCESS";
        } else {
            return "INVALID CREDENTIALS";
        }
    }
}