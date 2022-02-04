---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This element is used for any piece of punctuation in a clause. 
The last punctuation mark of the sentence (usually a full stop or interrogative/exclamation mark) always depends on the root; within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity. In general, tokens with the relation <code>punct</code> always attach to content words (except in cases of ellipsis) and can never have dependents on their own.

~~~ sdparse
Evacuata la Tate Gallery .
punct(Tate, .)
~~~
~~~ sdparse
Le è simpatica Nicole Kidman ?
punct(simpatica, ?)
~~~
~~~ sdparse
Purché i partiti non si rimettano a litigare ...
punct(rimettano, ...)
~~~

A punctuation mark separating coordinated units is attached to the following conjunct.

~~~ sdparse
Proiettavano Dreyer , Bergman , Kazan , De Sica 
punct(Bergman, ,-3)
punct(Kazan, ,-5)
punct(De, ,-7)
~~~

A punctuation mark preceding or following a dependent unit is attached to that unit.

~~~ sdparse
" Chirac , ricorda ti Hiroshima "
punct(ricorda, "-1)
punct(Chirac, ,)
punct(ricorda, "-7)
~~~

Paired punctuation marks (e.g. quotes and brackets, sometimes also dashes, commas and other) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

~~~ sdparse
I carri armati , quando si muovevano , andavano a Budapest
punct(muovevano, ,-4)
punct(muovevano, ,-8)
~~~

<!-- Interlanguage links updated St lis 3 20:59:09 CET 2021 -->
