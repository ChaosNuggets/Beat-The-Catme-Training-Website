function calculateAnswers(descriptions) {
    const NUMBER_OF_QUESTIONS = 5;

    const answers = [];

    // Calculate the answers for each of the descriptions
    for (const description of descriptions) {
        const sentences = _formatDescription(description);
        answers.push(_calculateParagraphRatings(sentences, NUMBER_OF_QUESTIONS));
    }

    return zip(answers);
}

function _formatDescription(description) {
    // Split the description into sentences
    const sentences = strip(description, [' ', '.']).toLowerCase().split('.');

    // Remove unnecessary whitespace
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = strip(sentences[i], [' ', '.']);
    }

    return sentences;
}

function _calculateParagraphRatings(sentences, NUMBER_OF_QUESTIONS) {
    const paragraphRatings = new Array(NUMBER_OF_QUESTIONS).fill(0);
    for (const sentence of sentences) {
        if (!(sentence in data)) {
            const errorMsg = `Error: sentence "${sentence}" could not be found in the data`;
            alert(errorMsg);
            throw errorMsg;
        }

        // give the data names
        const [questionNum, rating] = data[sentence];

        if (paragraphRatings[questionNum] == 0) {
            paragraphRatings[questionNum] = rating;
            continue;
        }

        const ratingSum = paragraphRatings[questionNum] + rating;

        // Change the paragraph rating to the correct rating
        if (6 < ratingSum && ratingSum < 10) {
            paragraphRatings[questionNum] = 4;
        } else if (2 < ratingSum && ratingSum < 6) {
            paragraphRatings[questionNum] = 2;
        }
    }
    return paragraphRatings;
}