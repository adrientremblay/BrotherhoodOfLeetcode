const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql'

const DAILY_CODING_CHALLENGE_QUERY = `
query skillStats($username: String!) {
  matchedUser(username: $username) {
    tagProblemCounts {
      advanced {
        tagName
        tagSlug
        problemsSolved
      }
      intermediate {
        tagName
        tagSlug
        problemsSolved
      }
      fundamental {
        tagName
        tagSlug
        problemsSolved
      }
    }
  }
}
`

// We can pass the JSON response as an object to our createTodoistTask later.
const fetchDailyCodingChallenge = async () => {
    console.log(`Fetching daily coding challenge from LeetCode API.`)

    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: DAILY_CODING_CHALLENGE_QUERY,
            variables: `{
                "username": "adrientremblay"
            }`, 

        }),
    }

    const response = await fetch(LEETCODE_API_ENDPOINT, request)
    return response.json()
}

fetchDailyCodingChallenge().then((result) => {
    console.log(result);
});
