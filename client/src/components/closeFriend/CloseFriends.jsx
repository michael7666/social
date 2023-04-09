import { motion } from 'framer-motion';
import styled from 'styled-components';

 function CloseFriends({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <CloseStyled>
             <li className="sidebarFriends">
                <img src={user.profile} alt="" className="sidebarFriendsImg" />
                <span className="sidebarFriendsName">{user.username}</span>
             </li>
        </CloseStyled>
    )
}

const CloseStyled = styled(motion.div)`

.sidebarFriends{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.sidebarFriendsImg{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
}
.sidebarFriendsName{
  font-weight: 500;
}
`

export default CloseFriends;
