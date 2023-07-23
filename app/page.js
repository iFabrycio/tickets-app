"use client"
import HorizontalEventCard from '@/components/cards/HorizontalEventCard'
import { useCallback, useEffect, useState } from 'react';

const TICKETS_API_ENDPOINT = process.env.TICKETS_API_ENDPOINT ?? 'http://localhost:3001';

export default function Home() {
  const [events, setEvents] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  const [pageStatus, setPageStatus] = useState('idle');

  const fetchEvents = useCallback(async () => {
    setPageStatus('loading');
    fetch(`${TICKETS_API_ENDPOINT}/event`, {
      method: 'GET',
    }).then((res) => res.json())
      .then((data) => {
        setEvents(data.event);
        setPageStatus('success');
      })
      .catch((error) => {
        setPageStatus('error');
      });
  });

  const handleTryAgain = () => {
    fetchEvents();
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  if (pageStatus === 'loading') {
    return <p>Carregando eventos...</p>;
  }

  if (pageStatus === 'error') {
    return <p>Houve um erro ao trazer os eventos, <a className='try-again' onClick={handleTryAgain}>Tentar novamente?</a></p>;
  }
  
  if (!events) {
    return <div className='empty-events-list'>Sem eventos</div>;
  }

  return (
    <div className='event-list'>
    {events.map((event) => (
      <HorizontalEventCard
      key={event.id}
      title={event.name}
      primaryImage={event.primaryImage ?? "https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg"}
      description={event.description}
      author={{
        name: "Jonathan Reinink",
        avatar: "https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg"
      }}
      date="Aug 18"
      />
      ))}
  </div>
  );
}
