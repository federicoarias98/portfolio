const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName: "GitHub Username is undefined. Please set all relevant environment variables.",
  requestFailed: "The request to GitHub didn't succeed. Check if the GitHub token in your .env file is correct.",
  requestFailedMedium: "The request to Medium didn't succeed. Check if the Medium username in your .env file is correct.",
};

// Validate required environment variables
if (!GITHUB_TOKEN) {
  throw new Error("GITHUB_TOKEN is not set in the .env file.");
}
if (!GITHUB_USERNAME && USE_GITHUB_DATA === "true") {
  throw new Error(ERR.noUserName);
}

// Fetch GitHub profile data
if (USE_GITHUB_DATA === "true") {
  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const githubQuery = `
  {
    user(login: "${GITHUB_USERNAME}") { 
      name
      bio
      avatarUrl
      location
      pinnedItems(first: 6, types: [REPOSITORY]) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  }
  `;
  const githubData = JSON.stringify({ query: githubQuery });

  const githubOptions = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node.js",
      "Content-Type": "application/json",
    },
  };

  const githubReq = https.request(githubOptions, (res) => {
    let data = "";

    console.log(`GitHub API response status code: ${res.statusCode}`);

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      if (res.statusCode !== 200) {
        console.error("GitHub API error response:", data);
        throw new Error(ERR.requestFailed);
      }

      fs.writeFile("./public/profile.json", data, (err) => {
        if (err) {
          console.error("Error saving GitHub profile data:", err.message);
        } else {
          console.log("GitHub profile data saved to public/profile.json");
        }
      });
    });
  });

  githubReq.on("error", (error) => {
    console.error("GitHub API request error:", error.message);
  });

  githubReq.write(githubData);
  githubReq.end();
}

// Fetch Medium blogs data
if (MEDIUM_USERNAME && MEDIUM_USERNAME.trim() !== "") {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);

  const mediumOptions = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${encodeURIComponent(
      MEDIUM_USERNAME
    )}`,
    port: 443,
    method: "GET",
  };

  const mediumReq = https.request(mediumOptions, (res) => {
    let mediumData = "";

    console.log(`Medium API response status code: ${res.statusCode}`);

    res.on("data", (chunk) => {
      mediumData += chunk;
    });

    res.on("end", () => {
      if (res.statusCode !== 200) {
        console.error("Medium API error response:", mediumData);
        throw new Error(ERR.requestFailedMedium);
      }

      fs.writeFile("./public/blogs.json", mediumData, (err) => {
        if (err) {
          console.error("Error saving Medium blogs data:", err.message);
        } else {
          console.log("Medium blogs data saved to public/blogs.json");
        }
      });
    });
  });

  mediumReq.on("error", (error) => {
    console.error("Medium API request error:", error.message);
  });

  mediumReq.end();
} else {
  console.log("Skipping Medium data fetch as MEDIUM_USERNAME is not set.");
}
