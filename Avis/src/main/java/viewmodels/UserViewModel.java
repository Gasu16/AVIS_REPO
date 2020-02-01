package viewmodels;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserViewModel {

	private String firstName;
	private String lastName;
	private String codiceFiscale;
	private String dataNascita;
	
}
