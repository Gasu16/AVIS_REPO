package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("controllers")
public class AvisApplication {

	public static void main(String[] args) {
		SpringApplication.run(AvisApplication.class, args);
	}

}
