import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';



test('Test Contact Form', () => {

   const {getByLabelText, getByText} = render(<ContactForm />);

    
      const firstNameInput = getByLabelText(/first name/i);
      const lastNameInput = getByLabelText(/last name/i);
      const emailInput = getByLabelText(/email/i);
      const messageInput = getByLabelText(/message/i);

      fireEvent.change(firstNameInput, { target: {value: 'Andrew'}});
      fireEvent.change(lastNameInput, { target: {value: 'Park'}});
      fireEvent.change(emailInput, { target: {value: 'abcd123@gmail.com'}});
      fireEvent.change(messageInput, { target: {value: 'Hello'}});


 
      expect(firstNameInput.value).toBe('Andrew');
      expect(lastNameInput.value).toBe('Park');
      expect(emailInput.value).toBe('abcd123@gmail.com');
      expect(messageInput.value).toBe('Hello');



      

      
      
  fireEvent.click(getByText(/submit/i)); //click on the button




});
