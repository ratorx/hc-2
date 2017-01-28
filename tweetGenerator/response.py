import json
import tweets

N = 10  # Number of pairs to send at once


def build_pair(fake_tweet, real_tweet):
    fake_tweet = {"real": False, "tweet": fake_tweet}
    real_tweet = {"real": True, "tweet": real_tweet}
    return [fake_tweet, real_tweet]


def build_pair_list(n):
    pairs = []
    for _ in range(n):
        pairs.append(build_pair(tweets.get_fake_tweet(), tweets.get_real_tweet()))
    return pairs


def get_json():
    return json.dumps(build_pair_list(N))