import {
    Button,
   
    Tooltip,
    Link
  } from "@nextui-org/react";

  function options(){

    return(    <Tooltip
        content={
  <div className="px-1 py-2">
    <div className="text-small font-bold">Options</div>
    <div className="text-tiny">
      Please select file(s) to see option menu. <br/><br/>
      Public Wall:<br/>
      Tick box and add any TAG you like, this file can be found later on Public Wall by entering TAG. <br/>This is easy way to share reference to a file with someone else. All you need it just tell what TAG was used
      <br/><br/>
      Secure:<br/>
      Tick box under Secure section to enable encryption. IPFS is distributed network, all files can be accessed by other peers on the network, Secure option will allow you to encrypt file before uploading.<br/>
      Two encryption options available:<br/>Encryption with a password, and more secure encryption wiht a key which is available only for registered users.
      <br/>
      <br/>
      <div> WARNING: 
      <br/> This is public network, storing any sensitive data is not advised, even it has been encrypted.
      </div>
      </div>
  </div>
}
>
<Button variant="bordered">
  Options Description
</Button>
</Tooltip>)
  }


  function ipfs(){
    return(

    <Tooltip
    content={
<div className="px-1 py-2">
<div className="text-small font-bold">IPFS</div>
<div className="text-tiny">IPFS is PUBLIC distributed filesystem. <br></br>All fles on the IPFS network has unique CID (content ID) by which you can find desired content</div>
<br/> File that has been uploaded on one node, will be available on any another IPFS node, including this gateway.
<br/><br/> More information available on:<br/>
<Link
isExternal
href=" https://docs.ipfs.tech/concepts/what-is-ipfs/"
showAnchorIcon
>
https://docs.ipfs.tech/concepts/what-is-ipfs
</Link>
 
</div>
}
>
<Button variant="bordered">
What is IPFS?
</Button>
</Tooltip>
    )
}


function pWall(){

    return(    
        <Tooltip
        content={
    <div className="px-1 py-2">
    <div className="text-small font-bold">Public Wall</div>
    <div className="text-tiny"> If files were tagged during upload, they can be found on Public Wall by entering tag that was assigned to them</div>

     You can test it with a tag "test"
    </div>
    }
    >
    <Button variant="bordered">
    What is Public Wall?
    </Button>
    </Tooltip>
    
  )

}

function media(){

    return(    
        <Tooltip
        content={
    <div className="px-1 py-2">
    <div className="text-small font-bold">Public Wall</div>
    <div className="text-tiny"> Media Player will attempt to play content, please ensure that CID is pointing to as video file</div>
 
   
    </div>
    }
    >
    <Button variant="bordered">
    Media Player?
    </Button>
    </Tooltip>
    
  )

}

export const ipfsTooltip = ipfs, optionsTooltip = options, pWallTooltip = pWall, mediaTooltip = media