import Login from "./Login"
import NotLogin from "./NotLogin"


function First({name,age}) {
      {
        const disp = true
        if(disp)return <Login/>
        else return<NotLogin/>
      }
      
}

export default First
