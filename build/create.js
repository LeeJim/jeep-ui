const fs = require('fs')
const path = require('path')
const upperCamelCase = require('uppercamelcase');


const componentName = process.argv[2]
const upperComponentName = upperCamelCase(componentName)
const distPath = path.join(__dirname, '..', 'src', 'components')

fs.mkdirSync(path.resolve(distPath, componentName))

const templateOfVue = `
<template>
  <div class="j-${componentName}">
  </div>
</template>

<script>
  export default {

    name: 'j-${componentName}',

    data() {
      return {}
    }
  }
</script>

<style lang="less">
  .j-${componentName} {
  }
</style>
`

fs.writeFileSync(path.resolve(distPath, componentName, `${componentName}.vue`), templateOfVue)

const templateOfIndex = `
import ${upperComponentName} from './${componentName}'

export default ${upperComponentName}
`
fs.writeFileSync(path.resolve(distPath, componentName, 'index.js'), templateOfIndex)


