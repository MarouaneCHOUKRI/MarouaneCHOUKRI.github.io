import React from 'react';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  degree,
  institution,
}: {
  time: React.ReactNode;
  degree?: React.ReactNode;
  institution?: React.ReactNode;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{degree}</h3>
    <div className="mb-4 font-normal">{institution}</div>
  </li>
);

const ContactCard = ({
  loading,
}: {
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          degree={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          institution={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Me contacter</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                <div style={{ display: 'flex' }}>
                    <p style={{ fontWeight: 'bold', flexGrow: '0.03' }}>Téléphone:</p> 
                    <span>06.26.17.74.87</span>
                </div>
                <div style={{ display: 'flex' }}>
                    <p style={{ fontWeight: 'bold', flexGrow: '0.03' }}>Adresse e-mail:</p> 
                    <span>choukrimarouane10@gmail.com</span>
                </div>
                <div style={{ display: 'flex' }}>
                    <p style={{ fontWeight: 'bold', flexGrow: '0.03' }}>Horaires:</p> 
                    <span>du lundi au vendredi, de 8h00 à 18h00</span>
                </div>
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
