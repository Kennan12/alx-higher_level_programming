#!/bin/bash
# cURL get body size
curl -sI "$" | grep -i Content-Length | awk '{print $2}'
