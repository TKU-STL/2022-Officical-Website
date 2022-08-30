import React from 'react';
import YouTube from 'react-youtube';
import { Text } from '@nextui-org/react';
import styles from '../styles/Home.module.css';
import { STL_Logo } from './STL_Logo';

export default function About(){
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    return(<div className={styles.aboutBackground}>
        <STL_Logo />
        <Text h2>We are STL</Text>
        <div>And, this is what we do since 2017</div>
        <YouTube videoId="CY8Ggzuaj50" opts={opts}/>
    </div>);

}