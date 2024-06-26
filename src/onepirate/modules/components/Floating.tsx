import React from 'react';
import WhatsappButton from 'react-whatsapp-button';

interface LayoutProps {
  children: React.ReactNode;
}

const Floating: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      <WhatsappButton         
        animated
        countryCode="55"
        phoneNumber="84998026288"
        message="Olá! Vim pelo seu site e gostaria de mais informações sobre seu trabalho como psicóloga"/>
    </div>
  );
}


export default Floating;
