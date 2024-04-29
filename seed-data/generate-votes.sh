#!/bin/sh

echo Please enter the External IP of the Vote Pod:
read addr
echo IP Address $addr Entered.

ab -n 3 -p posta -T "application/x-www-form-urlencoded" http://$addr/
ab -n 4 -p postb -T "application/x-www-form-urlencoded" http://$addr/
ab -n 2 -p postc -T "application/x-www-form-urlencoded" http://$addr/
