#!/bin/bash

curl --request POST \
  --url https://leetcode.com/graphql \
  --header 'Content-Type: application/json' \
  --data '{
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
    }'