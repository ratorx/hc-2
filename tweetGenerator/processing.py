#! /usr/bin/python3
LOWERCASE = "abcdefghijklmnopqrstuvwxyz"
# UPPERCASE = LOWERCASE.upper()


def post(generated):
    if generated[0] in LOWERCASE:
        generated = chr(ord(generated[0])-32) + generated[1:]

    generated = generated.replace("&amp;", "&")
    generated = generated.replace("…", "")
    return generated
