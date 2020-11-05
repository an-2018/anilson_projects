// Sort array of map

Comparator<Map<String, String>> listcompare = Collections.reverseOrder((a, b) -> a.get("data_fase").compareToIgnoreCase(b.get("data_fase")));
Collections.sort(table, listcompare);