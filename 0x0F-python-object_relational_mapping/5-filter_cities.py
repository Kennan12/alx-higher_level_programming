#!/usr/bin/python3
# Display all cities of a given state from the
# List all states from the database hbtn_0e_0_usa.
# Usage: ./0_select_states.py <mysql username> \
#                             <mysql password> \
#                             <database name>
#                             <state name searched>
import sys
import MySQLdb

if __name__ == "__main__":
    db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3])
    c = db.cursor()
    c.execute("SELECT * FROM `cities` as `c` \
            INNER JOIN `state` as `s` \
            ON `c`.`state_id` = `s`.`id` \
            ORDER BY `c`.`id`")
    [print(", ".join([ct[2] for ct in c.fetchall() ct[4] == sys.argv[4]]))
