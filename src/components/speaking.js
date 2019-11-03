// import axios from 'axios'
import data from '../../speaking.json'

export default {
  name: 'Speaking',
  data () {
    return {
      events: data.speaking
    }
  }
//   mounted () {
//     axios
//       .get('speaking.json')
//       .then(response => (this.info = response.speaking))
//   }
}