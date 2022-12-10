package addresser.AuthServicese.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class UserInfo {
    @Id
     public int id;
     public String name;
     public String accesstoken;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAccesstoken() {
        return accesstoken;
    }

    public void setAccesstoken(String accesstoken) {
        this.accesstoken = accesstoken;
    }
}
