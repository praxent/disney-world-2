import React from 'react';

function RideDescription(props: any){
  if(props.riding){
    return <strong><span> A person moving down the slide </span></strong>
  }

  return <span> Person not sliding </span>
}


export default RideDescription;