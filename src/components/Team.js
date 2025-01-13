import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Software Engineer',
    description: 'Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.',
    bgColor: 'bg-blue-700',
    imgSrc: 'https://readymadeui.com/team-1.webp',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    id: 2,
    name: 'Mark Adair',
    role: 'Software Engineer',
    description: 'Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.',
    bgColor: 'bg-blue-700',
    imgSrc: 'https://readymadeui.com/team-2.webp',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    id: 3,
    name: 'Simon Konecki',
    role: 'Web Designer',
    description: 'Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.',
    bgColor: 'bg-blue-700',
    imgSrc: 'https://readymadeui.com/team-3.webp',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

const Team = () => {
  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gray-800 text-4xl text-center font-extrabold">Meet the Team</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all"
            >
              <div className={`${member.bgColor} h-32`}></div>
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
              />
              <div className="p-6">
                <h4 className="text-gray-800 text-base font-extrabold">{member.name}</h4>
                <p className="text-gray-600 text-xs mt-1">{member.role}</p>
                <p className="text-gray-600 mt-4 text-sm">{member.description}</p>
                <div className="space-x-4 mt-6">
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <FaFacebookF className="text-gray-800" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <FaTwitter className="text-gray-800" />
                  </a>
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <FaInstagram className="text-gray-800" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
