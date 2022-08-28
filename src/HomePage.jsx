import EmployerChoice from "./HomeComponents/Employer_of_choice";
import Footer from "./HomeComponents/footer";
import Navbar from "./HomeComponents/navbar";
import TwoColumn from "./HomeComponents/TwoColumn";

function Home(){
    return(
        <>
        <Navbar  />
        <EmployerChoice/>
        <TwoColumn/>
        <Footer/>
        </>
    )
}
export default Home;