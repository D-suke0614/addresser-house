package addresser.AuthServicese.Repositories;

import addresser.AuthServicese.Model.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ユーザー情報 Repository
 */
@Repository
public interface UserRepository extends JpaRepository<UserInfo, Integer> {
}