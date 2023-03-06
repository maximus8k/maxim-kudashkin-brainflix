import axios from "axios";
import { Component } from "react";
import BodyMain from "../../components/BodyMain/BodyMain";

const Url ='https://project-2-api.herokuapp.com/videos';
const ApiKey = '399f5615-dde3-4ba5-8406-b51bcaaf42f2';

export default class Home extends Component{
        state = {
          Vids: [],
          currentVideo: {},
          comments:[]
        }
        
        getVideoById = (id) => {
            axios
                .get(`${Url}${id}${ApiKey}`)
                .then(response => {
                    console.log(response.data)
                    this.setState({
                        currentVideo: response.data,
                        comments:response.data.comments
                        
                    })
                })
                .catch(err => console.log(err))
        }

        componentDidMount(){
        axios.get(Url + ApiKey).then ((response)=>{
            console.log(response.data)
            this.setState({
                Vids:response.data
            })
            const videoId =  this.props.match.params.id ||  response.data[0].id 
            this.getVideoById(videoId);
        })
        }

componentDidUpdate(prevProps,prevState){
    const videoId =  this.props.match.params.id || this.state.Vids[0].id 
    console.log(videoId)
    if (prevState.currentVideo && prevState.currentVideo.id !== videoId){
        this.getVideoById(videoId)
    }
}

render(){
    if(this.state.Vids === [] || this.state.currentVideo === {} || this.state.comments === []){
        return "Loading..."
    }
    return(
        <>
            <BodyMain 
                currentVideo= {this.state.currentVideo}
                Vids = {this.state.Vids}
                comments = {this.state.comments}

            />
        </>
    )
}
}