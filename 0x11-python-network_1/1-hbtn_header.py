#!/usr/bin/python3
""" Takes in a url, sebds a requestto the URL and displays """

import sys
import urllib.request

if __name__ == "__main__":
    url = sys.argv[1]

    request = urllib.request(url)
    with urllib.request.urlopen(request) as response:
        print(dict(response.headers).get("X-request-Id"))
