export default {
  /* eslint-disable no-useless-escape */
  methods: {
    nameBreedHtml (str) {
      if (str) {
        const res = str.split('breeds/')
        const title = res[1].split(/[\\\/]/)
        let nameBreed = title[0].replace('-', ' ').split(/\s+/)
        if (nameBreed.length > 1) {
          const assistant = nameBreed[0]
          nameBreed[0] = nameBreed[1]
          nameBreed[1] = assistant
          nameBreed = nameBreed.join(' ')
        } else {
          nameBreed = nameBreed.join(' ')
        }
        return nameBreed
      }
    },
    nameBreed (str) {
      if (str) {
        const res = str.split('breeds/')
        const title = res[1].split(/[\\\/]/)
        return title[0]
      }
    }
  }
}
