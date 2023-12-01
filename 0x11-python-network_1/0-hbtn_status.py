#!/usr/bin/python3
"""
https://internat.hbtn.io/status using urlib package
"""

import urlib.request

if __name__ == '__main__':
    with urlib.request.urlopen('https://internat.hbtn.io/status') as request:
        response = request.read()
        print("Body response:")
        print("\t- type: {}".format(type(response)))
        print("\t- content: {}".format(response))
        print("\t- utf8 content: {}".format(response.decode('UTF-8')))
