'use client';

import styles from './page.module.css';
import { Accordion } from 'components/Accordion/Accordion';

export default function FAQ() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h2 className={styles.title}>Вопросы-ответы</h2>
        <Accordion>
          <Accordion.Group title="Что такое Билетопоиск?">
            <Accordion.Item>
              <p>
                Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и
                сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты,
                поставить фильмам оценки, написать рецензии и дополнить описание фильмов.
              </p>
            </Accordion.Item>
          </Accordion.Group>
          <Accordion.Group title="Какой компании принадлежит Билетопоиск?">
            <Accordion.Item>
              <p>
                Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и
                сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты,
                поставить фильмам оценки, написать рецензии и дополнить описание фильмов.
              </p>
            </Accordion.Item>
          </Accordion.Group>
          <Accordion.Group title="Как купить билет на Билетопоиск?">
            <Accordion.Item>
              <p>
                Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и
                сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты,
                поставить фильмам оценки, написать рецензии и дополнить описание фильмов.
              </p>
            </Accordion.Item>
          </Accordion.Group>
          <Accordion.Group title="Как оставить отзыв на Билетопоиск?">
            <Accordion.Item>
              <p>
                Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и
                сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты,
                поставить фильмам оценки, написать рецензии и дополнить описание фильмов.
              </p>
            </Accordion.Item>
          </Accordion.Group>
        </Accordion>
      </section>
    </main>
  );
}
