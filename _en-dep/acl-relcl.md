---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
---

A relative clause modifier of an noun is a relative clause modifying
the noun.  The relation points from the noun that is modified to the
head of the relative clause. Relative clauses are finite.

~~~ sdparse
I saw the man you love
acl:relcl(man, love)
~~~

~~~ sdparse
I saw the book which you bought
acl:relcl(book, bought)
~~~
