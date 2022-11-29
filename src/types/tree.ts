import type { Location } from '@/types/location'

export interface Tree {
  id: string,
  name: string,
  descritpion: string,
  location: Location,
  img_url: string,
  sensors: [{
    type: string,
    last_value: {
      value: number,
      datum: string
    }
  }],
}