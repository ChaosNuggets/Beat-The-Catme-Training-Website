class SentenceNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "SentenceNotFoundError";
    }
}