'use client';

import React from 'react'
import Navbar from './Navbar'
import TemplatesGallary from './TemplatesGallary'
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

function Home() {

  const documents = useQuery(api.documents.get);

  if(documents === undefined) {
    return <div>Loading...</div>
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4'>
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallary />
        {documents?.map((document) => (
          <span key={document._id}> {document.title}</span>
        ))}
      </div>
    </div>
  )
}

export default Home