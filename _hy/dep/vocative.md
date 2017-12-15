---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

The `vocative` relation is used to mark the dialogue participant addressed in text.
The relation links the addressee's name or title to its host sentence.
In Armenian vocative is always indefinite and always in nominative case. 

~~~ sdparse
Պարո՛ն, դուք հիմար եք ։ \n Sir, you are fool !
vocative(հիմար, Պարո՛ն)
vocative(fool, Sir)
cop(հիմար, եք)
cop(fool, are)
~~~
