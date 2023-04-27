---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence.
A fake node "ROOT" is used as the governor.
The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1.

~~~ sdparse
ROOT Менин машинам бар . \n I have a car.
root(ROOT, бар)
~~~

~~~ sdparse
ROOT Тазалык жумушчуларды издейт. \n Cleanliness seeks workers.
root(ROOT, издейт)
~~~

~~~ sdparse
ROOT Ошто дайынсыз болуп жаткан 24 жаштагы Гаухар изделүүдө. \n 24-year-old Gauhar, who is missing in Osh, is being sought.
root(ROOT, изделүүдө)
~~~

