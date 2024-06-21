import Image from "next/image";
import React from "react";

interface EventCardProps {
  date: string;
  imageUrl: string;
  title: string;
  price: string;
  venue: string;
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  imageUrl,
  title,
  price,
  venue,
}: EventCardProps) => {
  // Function to format the price with a thousand separator
  const formatPrice = (price: string) => {
    const number = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <article className='flex bg-white transition hover:shadow-xl'>
      <div className='rotate-180 p-2 [writing-mode:_vertical-lr]'>
        <time
          dateTime={date}
          className='flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900'
        >
          <span>
            {new Date(date).getFullYear()}
          </span>
          <span className='w-px flex-1 bg-gray-900/10'></span>
          <span>
            {new Date(date).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
              }
            )}
          </span>
        </time>
      </div>

      <div className='hidden sm:block sm:basis-56'>
        <Image
          alt=''
          src={imageUrl}
          className='aspect-square h-full w-full object-cover'
          width={600}
          height={600}
          loading='lazy'
          unoptimized
        />
      </div>

      <div className='flex flex-1 flex-col justify-between'>
        <div className='border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6'>
          <a href='#'>
            <h3 className='landingHeadText font-bold uppercase text-black'>
              {title}{" "}
              <span className='text-xl text-orange-600'>
                {formatPrice(price)}
              </span>
              <br />
              <br />
              <span className='font-bold deskPara capitalize'>
                Venue: {venue}
              </span>
            </h3>
          </a>
        </div>

        <div className='sm:flex sm:items-end sm:justify-end'>
          <a
            href='#'
            className='deskPara block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400'
          >
            BUY TICKET
          </a>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
