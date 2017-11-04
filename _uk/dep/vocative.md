---
layout: relation
title: 'vocative'
shortdef: 'vocative'
---
The `vocative` relation is used to mark dialogue participant addressed in text.
The relation links the addressee's name to its host sentence.
In Ukrainian, the addressee's name must also appear in the vocative [uk-feat/Case]() form.

~~~ sdparse
Пане Президенте , скільки можна ? \n Mister President , you-should-stop-it !
vocative(можна, Президенте)
vocative(you-should-stop-it, President)
~~~

~~~ sdparse
Громадяни , ану в чергу ! \n Citizens , go to the-queue !
vocative(ану, Громадяни)
vocative(go, Citizens)
~~~
