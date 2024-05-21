

import DefaultLayout from "@/layouts/default";
import { ironOptions } from "./api/session/session_config";
import { withIronSessionSsr } from "iron-session/next";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Spinner,

  Select,
  SelectItem,Progress,
} from "@nextui-org/react";



export default function Media({ session }) {

  const [input, setInput] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [err_msg, setErr_msg] = useState([]);
  const [player, setPlayer] = useState()



  useEffect(() => {
    // This effect runs when the component mounts
    // You can add initial videos or fetch them from an API here
    const initialVideos = [
      <video key={1} src="video1.mp4" controls />,
      <video key={2} src="video2.mp4" controls />,
      <video key={3} src="video3.mp4" controls />,
    ];
    setVideos(initialVideos);

    // Cleanup function (optional) - runs when the component unmounts
    return () => {
      // Perform any cleanup here
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount




  const handleSubmit  = async (e)=>{
    e.preventDefault()

    setPlayer(mediaPlayer(input))
/*
    let endpoint = '/api/downloadVideo'
    let data = { type:"find", cid:input}

    let options ={
      headers:{"Content-type":"application/json"},
      method:"POST",
      body:JSON.stringify(data)
    }

    let response = await fetch(endpoint,options)

   */




  }

  //===========================================================================  error message

function errorMessage(err_msg){
  return(  
     <div style={{color:"red"}}>
  {err_msg.map((item, index) => (
    <div key={index}>{item}</div>
  ))}
  </div>)
  
  }
  

  // ======================================================================================= submit button
  function submitButton() {
    if (isSubmited) {
      return <Spinner label="Searching..." size="sm" color="default" />;
    } else {
      return (
        <Button aria-label="submitBtn" onClick={handleSubmit}>
          Submit
        </Button>
      );
    }
  }


    // ======================================================================================== CID input
    function cidInput(){
      return( 
          <Input
        type="text"
        placeholder={input ? input : "Please Enter Content-ID"}
        onInput={(e) => setInput(e.target.value)}
      />
      )
      
        }
   // ======================================================================================== media player
function mediaPlayer(cid){



       
        //  let  cid = "QmPdSwMEm8f7MrH6ayfeQb2B6gJtiaR2vAXzrHwsa6tHuB"
       let     response = `/api/downloadVideo?cid=${cid}`

            return (   
                <div>  
              <video controls width="640" height="360">
                   <source src={response} type="video/webm" />
                   Your browser does not support the video tag.
                 </video>          
              
                   </div>)

         



        }

    return(

      <DefaultLayout session={session}>
{/** ======================================================================================  title */}
<Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 10 }}
      >
        <Grid xs={2} item={true} ></Grid>
        <Grid xs={8} item={true} justify="center">       
     
     
     <div className="text-center " >
     {/*    title*/ }
Media player
     </div>
             
          </Grid>
        <Grid xs={2} item={true}></Grid>
      </Grid>

        {/**===========================================================================   Input  */}
        <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 50 }}
      >
        <Grid xs={2} item={true} ></Grid>
        <Grid xs={8} item={true} justify="center">
          {cidInput()}
       
        </Grid>
        <Grid xs={2} item={true}></Grid>
      </Grid>

  {/**===========================================================================   Submit button  */}
      
      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 25 }}
      >
        <Grid xs={2} item={true}></Grid>
        <Grid
          xs={8}
          item={true}      
          className="flex justify-center items-center"
        >
          {submitButton()}
        </Grid>
        <Grid xs={2} item={true}>
      
        </Grid>
      </Grid>

      
{/**===========================================================================  error messages */}
   
<Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={ err_msg.length>0 ?{ marginTop: 15 }:{marginTop:0}}
      >
        <Grid xs={4} item={true} style={{}}></Grid>
        <Grid xs={4} item={true} style={{}} justify="center">
        <div className="text-center " >
          {errorMessage(err_msg)}
          </div>
        </Grid>
        <Grid xs={4} item={true}> </Grid>
      </Grid>

{/** ======================================================================================  Media player */}

<Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 10 }}
        className="flex justify-center items-center"
      >
        <Grid xs={2} item={true} ></Grid>
        <Grid
          xs={8}
          item={true}      
          className="flex justify-center items-center"
        >    
     
   
     {player}
             
          </Grid>
        <Grid xs={2} item={true}></Grid>
      </Grid>


</DefaultLayout>
);
}
export const getServerSideProps = withIronSessionSsr(
async function getServerSideProps({ req }) {
  return {
    props: {
      session: req.session,
    },
  };
},
ironOptions
);
