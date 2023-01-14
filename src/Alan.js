import {useEffect, useRef} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

export default function Alan({fetchWeatherData}){
    
    const getWeather=async(location)=>{
      const weather=await fetchWeatherData(location);
      alanBtnInstance.current.playText(`
      It's ${weather.temp} degrees celcius in
      ${location} and expected ${weather.description}
      `)
   }
    const alanBtnInstance = useRef(null);
    const alankey='198bd3488cba34e187bd8edccb8eef0a2e956eca572e1d8b807a3e2338fdd0dc/stage';
    
    useEffect(()=>{
     if (!alanBtnInstance.current) {
       alanBtnInstance.current = alanBtn({
       key:alankey,
       onCommand:async(data)=>{
       console.log(data);
       getWeather(data.location);
      },
     })
     }
    },[])
    
  return null;
}
