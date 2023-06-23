import styles from './styles.module.css';
import { TicketCardProps } from 'types/movieApi';
import { TicketCard } from 'components/TicketCard/TicketCard';

interface TicketsField {
  tickets: TicketCardProps[];
  isDeletable?: boolean;
}

export const TicketsField = ({ tickets, isDeletable }: TicketsField) => {
  return (
    <div className={styles.ticketsField}>
      {tickets.map((ticket) => {
        return (
          <TicketCard
            key={ticket.id}
            title={ticket.title}
            posterUrl={ticket.posterUrl}
            id={ticket.id}
            genre={ticket.genre}
            isDeletable={isDeletable}
          />
        );
      })}
    </div>
  );
};
