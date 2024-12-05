import React from 'react'
import { Editor } from './Editor';
import Toolbar from './Toolbar';

interface documentIdPageProps {
  params: Promise<{ documentId: string }>
}

async function DocumentIdPage({ params }: documentIdPageProps) {

  const documentId = (await params).documentId;

  return (
    <div className='min-h-screen bg-[#FAFBFD]'>
      <Toolbar />
      <Editor />
    </div>

  )
}

export default DocumentIdPage