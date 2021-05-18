import React from 'react';
import Form from '../Form/Form';
import Heading from '../Heading/Heading';
import TopNav from '../TopNav/TopNav';

export default function Content() {
  return (
    <div className="w-4/5 mx-auto">
      <TopNav/>
      <Heading text="Find og sammenlign billige flybilletter online"/>
      <Form/>
    </div>
  )
}
