import React,{Component} from 'react';
//Background effect
import Particles from 'react-particles-js';
import "./App.css";
import Navigation from './components/Navigation.js';
import Logo from './components/Logo.js';
import ImageLinkForm from './components/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition.js';
import Signin from './components/signin/Signin.js';
import Register from './components/register/Register.js';
import Rank from './components/Rank.js';
import clarifai from 'clarifai';
const app=new clarifai.App({
    apiKey:'70ac92405ffc480d869f96f994555876'
})
const particlesOptions={

    line_linked: {
        shadow: {
            enable: true,
            color: "#3CA9D1",
            blur: 5
        }
    }

}
class App extends Component{
    constructor(){
        super();
        this.state={
            input:'',
            imageUrl:'',
            box:{},
            route:'signin',
            isSignedIn:false,
            user:{
                email:'',
                id:'',
                name:'',
                
                password:'',
                entries:0,
                joined:''
            }
        }
    }
    loadUser=(data)=>{
        this.setState(data:{
           email:data.email,
           id:data.id,
           name:data.name,
           
           password:data.password,
           entries:data.entries,
           joined:data.joined

       })
    }

    onRouteChange=(route)=>{
        if(route==="signout"){
            this.setState({isSignedIn:false})
        }
        else if(route==="home"){
            this.setState({isSignedIn:true})
        }
        this.setState({route:route})

    }

    CalculateFaceLocation=(data) =>{
        const Face=data.outputs[0].data.regions[0].region_info.bounding_box;
        console.log(Face);
        const image=document.getElementById('inputImage');
        const width=Number(image.width);

        const height=Number(image.height);
        console.log(width,height);
        return{
            left:500+(Face.left_col * width),
            top:Face.top_row * height,
            right:500+(width - (Face.right_col * width)),
            bottom:height - (Face.bottom_row * height)
        }
    }

    displayFaceBox=(box)=>{
        console.log(box);
        this.setState({box:box});
    }
//Receiving Input
onInputChange=(event)=>{
    this.setState({input:event.target.value});

}

//Router Functionality







    //Button Click Functionality
    onSubmit=()=>{
        this.setState({imageUrl:this.state.input})
        console.log("click");
        app.models.predict(clarifai.FACE_DETECT_MODEL,this.state.input).then(response =>this.displayFaceBox(this.CalculateFaceLocation(response)))
        .catch(err =>console.log(err));
    }


    render(){
        return(

            <div className="App">
            <Particles className="particles" 
            params={particlesOptions}
            />
            <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />

            {this.state.route==='home' ? <div> <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} /> </div>: (this.state.route==='signin'
            ?
            <Signin onRouteChange={this.onRouteChange} />
            :<Register onRouteChange={this.onRouteChange} />

            )

        }</div>
        );

    }

    
}

export default App;




