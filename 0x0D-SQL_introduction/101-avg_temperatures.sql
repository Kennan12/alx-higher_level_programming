-- Import database dump temperatures.sql to hbtn_0c_0 database
-- source temperatures.sql;
SELECT city, AVG(value) AS avg_temp
FROM temperatures
GROUP BY city
ORDER BY avg_temp DESC;
