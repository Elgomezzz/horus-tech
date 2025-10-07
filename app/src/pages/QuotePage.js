import React from 'react';
import QuoteForm from '../components/QuoteForm';

const QuotePage = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* El componente QuotePage actúa como un contenedor para el formulario */}
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};

export default QuotePage;