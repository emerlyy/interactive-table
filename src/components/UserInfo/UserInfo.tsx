import { Item } from "../../types";
import styles from './UserInfo.module.css';

interface UserInfoProps {
  user: Item
}

const UserInfo = ({ user }: UserInfoProps) => (
  <div className={styles.infoBody}>
    <div>
      <p>Chosen user: <b>{user.firstName} {user.lastName}</b></p>
    </div>
    {user.description && (
      <div>
        <p>Description:</p>
        <textarea className={styles.textarea} value={user.description} readOnly />
      </div>
    )}
    {user.address && (
      <div>
        <p>Street address: <b>{user.address.streetAddress}</b></p>
        <p>City: <b>{user.address.city}</b></p>
        <p>State: <b>{user.address.state}</b></p>
        <p>Post index: <b>{user.address.zip}</b></p>
      </div>
    )}
  </div >
)

export default UserInfo;