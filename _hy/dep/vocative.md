---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

The `vocative` relation is used to mark the dialogue participant addressed in text.
The relation links the addressee's name or title to its host sentence.
In Armenian vocative is always [indefinite](Definite) and always in nominative [case](Case). 

~~~ sdparse
Պարոն ՛ , Դուք հիմար եք ։ \n Sir , you are fool !
vocative(հիմար, Պարոն)
vocative(fool, Sir)
cop(հիմար, եք)
cop(fool, are)
~~~

~~~ sdparse
Տղերք ՛ , թեթև տարեք ։ \n Guys , take-it easy !
vocative(թեթև, Տղերք) 
vocative(easy, Guys)
compound:lvc(թեթև, տարեք)
compound:lvc(easy, take-it)
~~~
<!-- Interlanguage links updated St lis 3 20:59:10 CET 2021 -->
