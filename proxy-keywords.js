/**
 * @param {{some_prop: () => void}} fns
 */
const useKeywords = fns => new Proxy({
        pointables: fns,
        pointer: null,
        args: [],
        add_arg(prop = "") {
            let [pre, ...any] = prop
            any = any.join("")
            switch(pre) {
                case "n":
                    return this.args.push(Number(any))
                case "s":
                    return this.args.push(any)
                default: throw new TypeError(`Expected n<number> or s<string>, got: ${pre}<${any}>`)
            }
        }        
    }, {
    has(obj, prop, prox) {
        return true
    },
    get(obj, prop, prox) {
        if(!prop.length) return
        if(!obj.pointer) {
            if(prop in obj.pointables)
                obj.pointer = obj.pointables[prop]
            else throw new ReferenceError(`Unknown expected keyword '${prop}'`)
        }
        else {
            obj.add_arg(prop)
        }

        if(obj.pointer.length === obj.args.length) {
            obj.pointer.apply(null, obj.args)
            obj.pointer = null
            obj.args = []
        }
    }
})
