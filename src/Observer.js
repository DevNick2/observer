let observers = []

export default {
  subscribe (callback) {
    observers.push(callback)
  },
  unsubscribe (callback) {
    observers = observers.filter(subscriber => subscriber !== callback)
  },
  notify (data) {
    observers.forEach(observer => observer(data))
  }
}
