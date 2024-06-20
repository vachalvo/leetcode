class EventEmitter {
    constructor() {
        this.callbackMap = {}
    }
    subscribe(eventName, callback) {
        if(!this.callbackMap[eventName]) {
            this.callbackMap[eventName] = []
        }

        const index = this.callbackMap[eventName].length

        this.callbackMap[eventName] = [...this.callbackMap[eventName], callback]

        return {
            unsubscribe: () => {
                delete this.callbackMap[eventName][index]
            }
        };
    }

    emit(eventName, args = []) {
        const callback = this.callbackMap[eventName]

        const res = []
        if(!callback) return res

        callback.forEach((callback) => {
            res.push(callback(...args))
        })

        return res
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
