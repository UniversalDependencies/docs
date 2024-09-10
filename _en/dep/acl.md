---
layout: relation
title:  'acl'
shortdef : 'clausal modifier of noun'
udver: '2'
---

`acl` is used for finite and non-finite clauses that modify a
noun. Note that in English relative clauses get assigned a specific
relation [acl:relcl](), a subtype of `acl`.

~~~ sdparse
the issues as he sees them
acl(issues, sees)
~~~

~~~ sdparse
There are many online sites offering booking facilities .
acl(sites, offering)
~~~

~~~ sdparse
I have a parakeet named cookie .
acl(parakeet, named)
~~~

~~~ sdparse
A president certain that they are correct is dangerous . 
acl(president, certain)
ccomp(certain, correct)
nsubj(dangerous, president)
~~~

~~~ sdparse
I just want a simple way to get my discount .
acl(way, get)
~~~

~~~ sdparse
Points to establish are ...
acl(Points, establish)
~~~

Non-relative clause finite clausal complements for nouns are limited to complement clauses with a subset of nouns like *fact* or *report*.  We analyze them as `acl` (parallel to the analysis of this class as "content clauses" in Huddleston and Pullum 2002). Such clausal complements are usually finite (though there are occasional remnant English subjunctives).

~~~ sdparse
I admire the fact that you are honest
acl(fact, honest)
mark(honest, that)
cop(honest, are)
nsubj(honest, you)
~~~

This relation is no longer used for optional depictives: [advcl]() should be used instead.

<!-- Interlanguage links updated Ne 5. května 2024, 18:20:29 CEST -->
