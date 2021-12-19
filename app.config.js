module.exports = () => {
  if (process.env.MY_ENVIRONMENT === 'production') {
    return {
    };
  } else {
    return {
      extra: {
        // use different test scenarios test-data1 thru test-data3
        testScenario: require('./data/test-data3.json'),
      },
    };
  }
};