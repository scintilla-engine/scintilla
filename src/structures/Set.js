import MergeSort from "./useful/MergeSort";


export default class DataSet {

    constructor(elements) {
        this._content = [];
        this._size = 0;

        if (Array.isArray(elements))
        {
            for (let i = 0; i < elements.length; i++)
                this.insert(elements[i]);
        }

    }

    get size () { return this._content.length; }
    get length () { return this._content.length; }

    insert(value) {
        if (this._content.indexOf(value) === -1)
            this._content.push(value);

        return this;
    }

    get(value) {
        let index = this._content.indexOf(value);
        if (index > -1)
        {
            return this._content[index];
        } else {
            return null;
        }
    }

    at(index) {
        return this._content[index];
    }

    has(value) {
        return (this._content.indexOf(value) > -1);
    }

    erase(value) {
        var idx = this._content.indexOf(value);

        if (idx > -1)
            this._content.splice(idx, 1);

        return this;
    }

    clear() {
        this._content.length = 0;
        return this;
    }

    each(callback, context) {
        var content = this._content.slice();
        var size = content.length;
        var i;

        if (context)
        {
            for (i = 0; i < size; i++)
            {
                if (callback.call(context, content[i], i) === false)
                    break;                
            }
        } else {
            for (i = 0; i < size; i++)
            {
                if (callback(content[i], i) === false)
                    break;                
            }
        }

      return this;
    }

    sort(predicate) {
        if (predicate === undefined) return;
        return MergeSort(this._content, predicate);
    }

   content() {
       return this._content;
   }

}
