import css from './statistics.module.css';
import { getRandomRGB } from 'randomRGB';

export const Statistics = ({ title = '', data }) => {
  return (
    <section class={css.statistics}>
      {title ? <h2 class={css.title}>{title}</h2> : null}
      <ul className={css.statList}>
        {data.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{
              backgroundColor: `rgb(${getRandomRGB()})`,
            }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};