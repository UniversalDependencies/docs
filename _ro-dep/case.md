---
layout: relation
title: 'case'
shortdef: 'case marking'
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
