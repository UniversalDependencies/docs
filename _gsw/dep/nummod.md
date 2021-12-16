---
udver: '2'
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

`nummod` marks numeric modifiers that modify the meaning of a noun with a quantity. 

~~~ sdparse
eine Milliarde Menschen \n one billion people
nummod(Menschen, Milliarde)
~~~

~~~ sdparse
Er bezahlte 50 Euro . \n He paid 50 Euros .
nummod(Euro, 50)
~~~

The word "ein-" is also marked as nummod when it denotes the number one instead of being simply used as an indefinite article. 

~~~ sdparse
Ich komme in einer Stunde . \n I will come in one hour .
nummod(Stunde, einer)
~~~
<!-- Interlanguage links updated St lis 3 20:59:02 CET 2021 -->
