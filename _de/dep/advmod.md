---
udver: '2'
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
---

The relation `advmod` is used for adverbs and adverbial phrases that modify another word. The negation words "nicht" and "kein" also receive the relation `advmod`.

~~~ sdparse
Darüber sind keine Daten verfügbar . \n No data is available about that .
advmod(verfügbar, Darüber)
advmod(Daten, keine)
~~~

~~~ sdparse
Kannst du schneller laufen ? \n Can you run faster ?
advmod(laufen, schneller)
~~~

~~~ sdparse
Das ist nicht viel . \n This is not much .
advmod(viel, nicht)
~~~

~~~ sdparse
Hier wohnt kein einziger Mensch . \n Not a single person lives here .
advmod(Mensch, kein)
~~~

Note that adverbs can also modify other adverbs:

~~~ sdparse
Er weiß es möglicherweise selbst noch nicht . \n He possibly does not know it himself yet .
advmod(weiß, möglicherweise)
advmod(weiß, selbst)
advmod(weiß, nicht)
advmod(nicht, noch)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:11 CET 2020 -->
