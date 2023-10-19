-- Displays the max temprature of each state ordered by ststename
-- source tempratures.sql;
SELECT state, MAX(value) AS max_temp
FROM tempratures
GROUP BY state
ORDER BY state ASC;
