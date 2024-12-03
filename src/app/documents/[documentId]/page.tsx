import React from 'react'

interface documentIdPageProps {
    params: Promise<{ documentId: string}>
}

async function DocumentIdPage({ params }: documentIdPageProps) {

    const documentId = (await params).documentId;

  return (
    <div>DocumentIdPage {documentId}</div>
  )
}

export default DocumentIdPage