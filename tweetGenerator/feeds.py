import requests
import json
import tweets

url = "https://api.private-beta-1.pusherplatform.com:443/apps/4c8e99f4-984d-4a07-a7f2-9d9a3c6877da/feeds/faketrump"

payload = json.dumps({"items": [{"tweet": tweets.get_fake_tweet()}]})

requests.request("POST", url, data=payload)
