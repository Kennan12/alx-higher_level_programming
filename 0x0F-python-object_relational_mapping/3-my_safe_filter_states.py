#!/usr/bin/python3
# List all states from the database hbtn_0e_0_usa.
# Usage: ./0_select_states.py <mysql username> \
#                             <mysql password> \
#                              <database name>
import sys
import MySQLdb

if __name__ == "__main__":
    db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3])
    c = db.cursor()
    c.execute("SELECT * FROM `state`")
    [print(state) for state in c.fetchall() if state[1] == sys.argv[4]]
