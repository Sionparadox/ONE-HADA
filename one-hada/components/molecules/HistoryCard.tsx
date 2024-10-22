import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

type HistoryCardProps = {
  key: string;
  name: string;
  date: string;
  isConsulting: boolean;
};

export default function HistoryCard({
  key,
  name,
  date,
  isConsulting = false,
}: HistoryCardProps) {
  console.log('🚀 ~ isConsulting:', isConsulting);
  console.log('🚀 ~ date:', date);
  console.log('🚀 ~ name:', name);

  return (
    <>
      <div
        key={key}
        className='bg-white shadow-md rounded-lg border-l-[10px] border-[#AEDBCE] m-4 mx-6 p-4 px-5 h-20 flex justify-between'
      >
        <div className='flex flex-col gap-1'>
          <h1 className='font-medium text-lg'>{name}</h1>
          <label className='font-light text-gray-500 text-sm'>{date}</label>
        </div>
        <div>
          <Button className='rounded-full bg-[#61B89F] hover:bg-[#377b68]'>
            등록 <ChevronRight />
          </Button>
        </div>
      </div>
    </>
  );
}