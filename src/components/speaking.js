// import axios from 'axios'
import data from '../data/speaking.json'

export default {
  name: 'Speaking',
  data () {
    return {
      events: data
    }
  }
//   mounted () {
//     axios
//       .get('speaking.json')
//       .then(response => (this.info = response.speaking))
//   }
}