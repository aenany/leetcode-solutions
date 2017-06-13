SELECT Email from Person
GROUP BY
    Email
HAVING
    COUNT(*) > 1