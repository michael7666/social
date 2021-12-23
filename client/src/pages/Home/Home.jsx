import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/SideBae";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/RightBar";
import styled from "styled-components";
import { motion } from "framer-motion";


 function Home() {
    return (
        <div>
            <Topbar/>
            <HomeContainer>
            <Sidebar/>
            <Feed/>
            <Rightbar/>
            </HomeContainer>
           
        </div>
    )
}

const HomeContainer = styled(motion.div)`
display: flex;
width: 100%;
`

export default Home;
