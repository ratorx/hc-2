#! /usr/bin/python3
import random
import markovify
import processing

LINES = []
try:
    LINES = open("trump.txt", encoding="utf8").readlines()
except FileNotFoundError:
    raise SystemExit

MODEL = markovify.NewlineText("\n".join(LINES))

def get_fake_tweet():
    fake = processing.post(MODEL.make_short_sentence(140,
                                                     tries=10000000,
                                                     max_overlap_ratio=0.81,
                                                     max_overlap_total=15))
    return fake

def get_real_tweet():
    return LINES[random.randint(0, len(LINES) - 1)]
