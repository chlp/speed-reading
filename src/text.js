export default class Text {
    constructor(obj = {
        title: '',
        text: ''
    }) {
        this.title = obj.title;
        this.text = obj.text;
        this.guid = this.guid();
    }

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}