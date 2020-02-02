package controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import viewmodels.UserViewModel;

@RestController
public class UserController {
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/users", method = {RequestMethod.GET})
	public List<UserViewModel> listAllUsers() {
		List<UserViewModel> userList = new ArrayList<>();
		userList.add(new UserViewModel("Matteo", "Grammatico", "XYZXYZXYZ", "11/11/1996"));
		return userList;
	}
}
