---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation is used for linking prepositions to their heads:

~~~ sdparse
O văd pe Maria . \n Her see-I PE Mary . (I can see Mary.)
case(Maria, pe)
~~~

~~~ sdparse
Pun cartea pe masă . \n Put-I book-the on table .
case(masă, pe)
~~~

When a preposition is used with non-finite verbs, it is analysed as `mark`:

~~~ sdparse
Plecăm devreme pentru a nu întârzia . \n Leave-we early for to not be_late .
mark(întârzia, pentru)
~~~

Prepositions linking numerals to their nominal heads are dependents of the numerals.

~~~ sdparse
30 de copii \n 30 of children
nummod(copii, 30)
case(30, de)
~~~
Compare this with numerals from 0 to 19 which take no preposition when modifying nouns:

~~~ sdparse
3 copii \n 3 children
nummod(copii, 3)
~~~

Prepositions linking adverbs to their post-poned adjective or adverb heads are also `mark` on the modifying adverb:

~~~ sdparse
incredibil de bun \n incredibly of good
advmod(bun, incredibil)
case(incredibil, de)
~~~

~~~ sdparse
incredibil de bine \n incredibly of well
advmod(bine, incredibil)
case(incredibil, de)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:53 CEST 2021 -->
