import React, { useState, useEffect } from 'react';
import { fetchDocuments } from '../services/documentsService';
import './DocumentsPage.scss';

const DocumentsPage: React.FC = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments().then((data: any) => setDocuments(data));
  }, []);

  return (
    <div className="documents-page">
      <h1>Documents</h1>
      <ul className="documents-list">
        {documents.map((document: any) => (
          <li key={document.id} className="documents-item">
            <a href={document.url} target="_blank" rel="noopener noreferrer">
              {document.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentsPage;
