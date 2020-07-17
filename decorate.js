module.exports = ({ include = [] }) => (tape, decorate) => {
    const test = decorate(tape);
    const testKeys = ['only', 'skip', ...include];
    const nestedTests = testKeys.filter(k => !!tape[k]).map(k => ({ [k]: decorate(tape[k]) }));
    return Object.assign(test, tape, ...nestedTests);
};
