#!/bin/bash
# PUT METHOD is allowed, we must follow redirection, we should be user_id = 98
curl -sLX PUT -H "origin: You got me!" -d "user id=98" 0.0.0.0:5000/catch_me
