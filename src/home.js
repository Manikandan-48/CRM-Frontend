import { Navbar } from "./components/Navbar/navbar";

export function Home(){

    return(
        <div  >
            <div>
                <Navbar/>
            </div>

            <div className="pt-5 mt-5 d-flex ">

                <div className="p-3">
                   <img className="image-size" src="https://th.bing.com/th/id/R.2a0956c51e5bf6c39a0ca0d6e0200b75?rik=Kk7xTNjGCvWF4Q&riu=http%3a%2f%2fwww.ificorp.net%2fweb%2fimages%2fstories%2fCRM_software_gratis.png&ehk=ZUPAbAt4f5YaLeuQUzLcMUudn98N%2b3%2beqPyioIzmn%2fs%3d&risl=&pid=ImgRaw&r=0" alt=""/> 
                </div>

                <div className="p-3 welcome-section">

                   <h1>Welcome All to Customer relationship Management...😎</h1>

              <h2>Your CRM is here...🎆</h2> 
              
                </div>
            </div>
              
        </div>
    )
}