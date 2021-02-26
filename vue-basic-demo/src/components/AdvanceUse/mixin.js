export default {
  data(){
    return {
      city: '深圳',
    }
  },
  methods: {
    showName(){
      console.log(this.name)
    }
  },
  mounted(){
    console.log('component mounted', this.city)
  }
}