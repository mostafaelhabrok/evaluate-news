# EVALUATE NEWS NLP
this project is about sending url for blogs or articles to meaningcloud api to analize them by natural language processing
in this project we used webpack, sass styles, jest tests and service workers to add offline available functionality

# GETTING STARTED
you need ti install npm using:
`npm install` in project directory
you need to register a new account in meaningcloud api and get your api key
this key can not be puplic when commiting the project so use environment variables to save it and call it when needed
we added service workers to make the application available even if the node server is offline
we added jest tests to test functions in the JS files and make sure it returns what is expected

# Example of the request to the API
curl -XPOST "http://api.meaningcloud.com/summarization-1.0?key=<<YOUR OWN KEY>>&url=http://en.wikipedia.org/wiki/Star_Trek&sentences=5"

that returns:
{
  "status": {
    "code": "0",
    "msg": "OK",
    "credits": "24"
  },
  "summary": "Star Trek is an American science fiction entertainment franchise based on the television series created by Gene Roddenberry.
    The first television series, simply called Star Trek and now referred to as The Original Series, debuted in 1966 and aired for three seasons on the television network NBC.
    ..."
}