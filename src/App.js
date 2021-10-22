function createFrameworkManager() {
  const fw = ['Angular', 'React']
  return {
    print: function () {
      console.log(fw.join(' '))
    },
    add: function (framework) {
      fw.push(framework)
    }
  }
}

const manager = createFrameworkManager()
manager.print()
manager.add('VueJs')
manager.print()
console.log(manager)
