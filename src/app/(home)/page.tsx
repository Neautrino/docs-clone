'use client';

import React from 'react'
import Navbar from './Navbar'
import TemplatesGallary from './TemplatesGallary'
import { usePaginatedQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import FullScreenLoader from '@/components/FullScreenLoader';
import DocumentsTable from './DocumentsTable';

function Home() {

  const {results, status, loadMore} = usePaginatedQuery(api.documents.get, {}, {initialNumItems: 5});

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4'>
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallary />
        <DocumentsTable
          documents={results}
          status={status}
          loadMore={loadMore}
        />
      </div>
    </div>
  )
}

export default Home