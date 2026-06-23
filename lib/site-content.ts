import { supabase } from './supabase';
import { homeHeroData } from '../data/home';

export interface HeroContent {
  locationText: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  backgroundImage: string;
  ctaText: string;
  scrollText: string;
}

export interface SiteContent<T = HeroContent> {
  id: number | string;
  key: string;
  value: T;
}

function adaptLocalHeroData(data: typeof homeHeroData | undefined | null): HeroContent {
  if (!data) {
    return getEmptyHeroContent();
  }
  return {
    locationText: typeof data.locationText === 'string' ? data.locationText : '',
    titlePart1: typeof data.titlePart1 === 'string' ? data.titlePart1 : '',
    titlePart2: typeof data.titlePart2 === 'string' ? data.titlePart2 : '',
    description: typeof data.description === 'string' ? data.description : '',
    backgroundImage: typeof data.backgroundImage === 'string' ? data.backgroundImage : '',
    ctaText: typeof data.ctaText === 'string' ? data.ctaText : '',
    scrollText: typeof data.scrollText === 'string' ? data.scrollText : ''
  };
}

function getEmptyHeroContent(): HeroContent {
  return {
    locationText: '',
    titlePart1: '',
    titlePart2: '',
    description: '',
    backgroundImage: '',
    ctaText: '',
    scrollText: ''
  };
}

export async function getHeroContent(): Promise<SiteContent<HeroContent>> {
  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('*')
      .eq('key', 'hero')
      .single();

    if (error || !data) {
      console.log('[Supabase Fallback Activated]');
      
      try {
        const localData = adaptLocalHeroData(homeHeroData);
        console.log('[Local Data Loaded]');
        return {
          id: 'fallback-hero',
          key: 'hero',
          value: localData
        };
      } catch (fallbackError) {
        return {
          id: 'empty-hero',
          key: 'hero',
          value: getEmptyHeroContent()
        };
      }
    }

    console.log('[Supabase Success]');
    return {
      id: data.id,
      key: data.key,
      value: data.value as HeroContent
    };
  } catch (err) {
    console.log('[Supabase Fallback Activated]');
    
    try {
      const localData = adaptLocalHeroData(homeHeroData);
      console.log('[Local Data Loaded]');
      return {
        id: 'fallback-hero',
        key: 'hero',
        value: localData
      };
    } catch (fallbackError) {
      return {
        id: 'empty-hero',
        key: 'hero',
        value: getEmptyHeroContent()
      };
    }
  }
}
