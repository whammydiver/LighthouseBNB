SELECT properties.city, count(*) as total_reservations
FROM reservations
JOIN properties ON property_id = properties.id
GROUP BY city
ORDER BY count(*) DESC;