import React from 'react'
import SocialLinksForm from '@/components/SocialLinks'





interface UserSocialProfile {
  id: string;
  facebook: string;
  instagram: string;
  gmail: string;
  twitter: string;
  phone?: string;
  createdAt: string | Date; 
}

const page = async () => {

  const emptySocialLink: UserSocialProfile = {
    id: '',
    facebook: '',
    instagram: '',
    gmail: '',
    twitter: '',
    phone: '',
    createdAt: new Date(),
  };

  console.log(emptySocialLink)
  return (
    <div>
      <SocialLinksForm    /> 
    </div>
  )
}

export default page