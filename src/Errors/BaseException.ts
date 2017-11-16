export default class BaseException {
    constructor() {
        Error.apply(this, arguments);
    }
}
