import { FC, useRef, useState } from 'react';
import cn from 'classnames';

import style from './player.module.scss';

import Typography from '../ui/typography/typography';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';

import { IResults } from '../../utils/types/table';
import { useGetAudioSrc } from '../../utils/hooks/useGetAudioSrc';

interface IPlayer {
  /**
   * Отсортированные и отфильтрованные данные с сервера
   */
  data: IResults;
  /**
   * Индех компонента
   */
  index: string;
  /**
   * Продолжительность звонка
   */
  duration: string;
  /**
   * Флаг который показывает наведена мышка на строку с плеером или нет
   */
  isHovered: boolean;
}

/**
 * Компонент создания Кастомного плеера
 * @example
 * <Player
 *   data={data}
 *   index={index}
 *   duration={duration}
 *   isHovered={isHovered}
 *  />
 */
const Player: FC<IPlayer> = ({
  data,
  index,
  duration,
  isHovered,
}): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRecordIndex, setSelectedRecordIndex] = useState('');

  const audioRef = useRef<HTMLAudioElement>(null);
  const audioSrc = useGetAudioSrc(data, isLoading);

  const togglePlay = (index: string) => {
    setIsLoading(true);

    if (isPlaying && selectedRecordIndex === index && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setSelectedRecordIndex(index);
      setIsPlaying(true);
      setIsLoading(true);
      if (audioRef.current) {
        audioRef.current.src = audioSrc;
        audioRef.current.play();
      }
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };
  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className={cn(
        style.player__wrapper,
        isHovered ? style.player__wrapper_hover : ''
      )}
    >
      <div className={style.player__widget}>
        <Typography tag="p" className={style.primary}>
          {duration}
        </Typography>
        <ButtonIcon
          icon={isPlaying && selectedRecordIndex === index ? 'pause' : 'play'}
          isColored={false}
          extraClass={style.play}
          buttonClass={style.button}
          onClick={() => togglePlay(index)}
        />
        <div className={`${style.progress}`}></div>
        <ButtonIcon
          icon={'download'}
          isColored
          extraClass={style.download}
          buttonClass={style.button}
        />
        <ButtonIcon
          icon={'close'}
          isColored
          extraClass={style.close}
          buttonClass={style.button}
        />
        <audio
          ref={audioRef}
          controls={false}
          onLoadedData={handleLoadedData}
          onEnded={handleEnded}
        ></audio>
      </div>
    </div>
  );
};

export default Player;
