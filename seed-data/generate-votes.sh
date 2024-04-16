#!/bin/sh

# create 3000 votes (2000 for option a, 1000 for option b)
ab -n 3 -p posta -T "application/x-www-form-urlencoded" http://192.168.49.2:31000/
ab -n 4 -p postb -T "application/x-www-form-urlencoded" http://192.168.49.2:31000/
ab -n 2 -p postc -T "application/x-www-form-urlencoded" http://192.168.49.2:31000/
