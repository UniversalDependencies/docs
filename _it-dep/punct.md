---
layout: relation
title: 'punct'
shortdef: 'punctuation'
---

This is used for any piece of punctuation in a clause. 
The last punctuation mark of the sentence (usually a full stop or interrogative/exclamation point) always depends on the root; commas, apexes and similar depend on the head of the clause, or the complement, they refer to. In general, tokens with the relation <code>punct</code> always attach to content words (except in cases of ellipsis) and can never have dependents.

~~~ sdparse
" Chirac , ricorda ti Hiroshima "
punct(Chirac, "-1)
punct(Chirac, ,)
punct(Chirac, "-7)
~~~
~~~ sdparse
I carri armati , quando si muovevano , andavano a Budapest
punct(carri, ,-4)
punct(muovevano, ,-8)
~~~

A punctuation mark separating coordinated units is attached to the first conjunct.

~~~ sdparse
Proiettavano Dreyer , Bergman , Kazan , De Sica 
punct(Dreyer, ,-3)
punct(Dreyer, ,-5)
punct(Dreyer, ,-7)
~~~
