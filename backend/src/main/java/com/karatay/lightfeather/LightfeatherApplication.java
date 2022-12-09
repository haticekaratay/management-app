package com.karatay.lightfeather;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.karatay.lightfeather.entity.Supervisor;
import com.karatay.lightfeather.service.SupervisorService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@SpringBootApplication
public class LightfeatherApplication {

	public static void main(String[] args) {
		SpringApplication.run(LightfeatherApplication.class, args);
	}
	@Bean
	CommandLineRunner runner(SupervisorService userService) {
		return args -> {
			// read json and write to db
			ObjectMapper mapper = new ObjectMapper();
			TypeReference<List<Supervisor>> typeReference = new TypeReference<List<Supervisor>>(){};
			InputStream inputStream = TypeReference.class.getResourceAsStream("/json/supervisors.json");
			try {
				List<Supervisor> supervisors = mapper.readValue(inputStream,typeReference);
				userService.saveAll(supervisors);
				System.out.println("Supervisors Saved!");
			} catch (IOException e){
				System.out.println("Unable to save supervisors: " + e.getMessage());
			}
		};
	}
}
