import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://dust.devbitapp.be/api',

});

export const Trees = {
  resource: 'trees',

  fetch_all(){
    return Api.get(`/${this.resource}/`); // Promise
  },
  fetch_one(){
    return Api.get(`/${this.resource}/V63Nuc0Nl80PXTpTd6xH7`);
  }
}