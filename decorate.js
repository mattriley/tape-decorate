module.exports = customTestKeys => (tape, decorate) => {
    const test = decorate(tape);
    const testKeys = ['only', 'skip', ...customTestKeys];
    const nestedTests = testKeys.filter(k => !!tape[k]).map(k => ({ [k]: decorate(tape[k]) }));
    return Object.assign(test, tape, ...nestedTests);
};
