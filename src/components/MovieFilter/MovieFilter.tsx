import styles from './styles.module.css';
import classNames from 'classnames';
import { Input } from 'components/Input/Input';
import { useEffect, useState } from 'react';
import { moviesApi } from 'redux/services/moviesApi';
import { ICinema, IMovie } from 'types/movieApi';
import { debounce } from 'utils/debounce';
import { Dropdown } from 'components/Dropdown/Dropdown';

interface MovieFilterProps {
  applyFilters: (filteredMovies: IMovie[]) => void;
}

function searchByTitle(movies: IMovie[], title: string) {
  const regex = new RegExp(title, 'i');
  return movies.filter((movie) => regex.test(movie.title));
}

function searchByCinema(movies: IMovie[], cinemas: ICinema[], name: string) {
  const cinema = cinemas.find((c) => c.name === name);
  return movies.filter((movie) => cinema!.movieIds.includes(movie.id));
}

function filter(
  movies: IMovie[],
  cinemas: ICinema[],
  title: string,
  genre: string,
  cinema: string
) {
  let result = [...movies];
  if (title) {
    result = searchByTitle(result, title);
  }

  if (cinema && result.length) {
    result = searchByCinema(result, cinemas, cinema);
  }

  if (genre && result.length) {
    result = result.filter((movie) => movie.genre === genre);
  }

  return result;
}

const genreOptions = ['Ужасы', 'Комедия', 'Боевик', 'Фэнтези'];

export const MovieFilter = ({ applyFilters }: MovieFilterProps) => {
  const movies = moviesApi.useGetMoviesQuery();
  const cinemas = moviesApi.useGetCinemasQuery();
  const cinemaOptions = cinemas.data && cinemas.data.map((it) => it.name);

  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [cinema, setCinema] = useState<string>('');

  useEffect(() => {
    if (!movies.data || !cinemas.data) return;
    applyFilters(filter(movies.data, cinemas.data, title, genre, cinema));
  }, [title, genre, cinema]);

  return (
    <aside className={classNames(styles.movieFilter)}>
      <h3 className={styles.title}>Фильтр поиска</h3>
      <div className={styles.filters}>
        <Input
          id="search"
          placeholder="Введите название"
          label="Название"
          type="text"
          onChange={debounce((e) => setTitle(e.target.value), 500)}
        />
        <Dropdown
          id="genre"
          label="Жанр"
          placeholder="Выберите жанр"
          options={genreOptions}
          defaultValue={genre}
          updateValue={setGenre}
        />
        <Dropdown
          id="cinema"
          label="Кинотеатр"
          placeholder="Выберите кинотеатр"
          options={cinemaOptions || []}
          defaultValue={cinema}
          updateValue={setCinema}
        />
      </div>
    </aside>
  );
};
