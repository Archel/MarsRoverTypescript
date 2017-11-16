class BaseException {
    constructor() {
        Error.apply(this, arguments);
    }
}

export default BaseException;
