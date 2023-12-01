#!/usr/bin/python3
"""
same as task 0 but using request package
"""

import request

if __name__ == "__main__":
    response = request.get('https://intranet.hbtn.io/status')
    print("Body response:")
    print("\t- type: {}".format(type(response.text)))
    print("\t- content: ()". {}".format(response.text))
