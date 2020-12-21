module.exports = {
  onAppConfig({ config }) {
    const onLaunch = config.onLaunch
    config.onLaunch = () => {
      console.log('onLaunch from plugin')
      if (onLaunch) {
        onLaunch()
      }
    }
    return config
  },
  onPageConfig({ config }) {
    const onLoad = config.onLoad
    config.onLoad = () => {
      console.log('onLoad from plugin')
      if (onLoad) {
        onLoad()
      }
    }
    return config
  },
}
