import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/contacts/ContactApp';
import MyForm from './components/forms/MyForm';
import './styles/style.css'


const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);
