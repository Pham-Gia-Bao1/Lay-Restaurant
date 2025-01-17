import { RootState } from '@/redux/store';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { useTotal } from '../context/TotalContext';
import { formatNumber } from '@/utils';
import { RoomCardCheckoutProps } from '@/types';

const RoomCardCheckout: React.FC<RoomCardCheckoutProps> = ({
  imageUrl,
  roomName,
  description,
  price,
  roomType,
  capacity,
  startDay,
  endDay,
  totalDays,
}) => {
  const formatDate = (date: Date | null): string => {
    if (!date) return 'N/A';
    return date.toLocaleDateString();
  };
  const days = useSelector((state: RootState) => state.day.days);
  const { total } = useTotal();
  return (
    <div className=" bg-white p-4  w-full">
      <div className="flex">
        <Image width={300} height={300} className="w-full rounded" src={imageUrl} alt={roomName}/>
        <div className="w-2/3 pl-4">
          <h2 className="text-xl font-bold">{roomName}</h2>
          <p className="text-gray-600">{description}</p>
          <p className="text-red-500 font-bold mt-2">{formatNumber(parseInt(price) * 1000)} vnd</p>
          <p className="text-gray-700 mt-1">{roomType}</p>
          <p className="text-gray-700">Capacity: {capacity} people</p>
        </div>
      </div>
      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-700">Start day</p>
            <p className="font-bold">{formatDate(startDay)}</p>
          </div>
          <div>
            <p className="text-gray-700">End day</p>
            <p className="font-bold">{formatDate(endDay)}</p>
          </div>
          <div>
            <p className="text-gray-700">Total Day</p>
            <p className="font-bold">{days}</p>
          </div>
          <div>
            <p className="text-gray-700">Total money</p>
            <p className="font-bold">{formatNumber(total * 1000)} vnd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCardCheckout;
