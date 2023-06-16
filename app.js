const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const PROBLEMS_SOLVED_QUERY = `
query userProblemsSolved($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      problemsSolvedBeatsStats {
        difficulty
        percentage
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

const fetchUserData = async (username) => {
    console.log(`Fetching daily coding challenge from LeetCode API.`)


    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: PROBLEMS_SOLVED_QUERY,
            variables: `{
                "username": "${username}"
            }`, 

        }),
    }

    const response = await fetch(LEETCODE_API_ENDPOINT, request)
    return response.json();
}

const extractProblemSolvedData = async (username) => {
  const userData = await fetchUserData(username);
  //console.log(JSON.stringify(userData));
  
  const problemData = userData.data.matchedUser.submitStatsGlobal.acSubmissionNum;

  let result = {
    totalCount : problemData[0].count,
    easyCount : problemData[1].count,
    medCount : problemData[2].count,
    hardCount : problemData[3].count
  };

  return result;
}

extractProblemSolvedData("adrientremblay").then(results => {
  console.log(results);
})