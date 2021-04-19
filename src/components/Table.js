import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";

import "../styles/Button.css";

export const Table = ({ users, removeData }) => {
  return (
    <table className="table table-dark table-hover mw-100">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {users.length ? (
          users.map((user) => (
            <tr key={user.id}>
              <td> {user.name}</td>
              <td> {user.email}</td>
              <td> {user.username}</td>
              <td className="button delete">
                <FontAwesomeIcon
                  size="1x"
                  icon={faUserMinus}
                  onClick={() => removeData(user.id)}
                ></FontAwesomeIcon>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Aún no hay usuarios registrados</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
