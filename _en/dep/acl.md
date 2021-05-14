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
Points to establish are ...
acl(Points, establish)
~~~

~~~ sdparse
I don't have anything to say to you
acl(anything, say)
~~~

Non-relative clause finite clausal complements for nouns are limited to complement clauses with a subset of nouns like *fact* or *report*.  We analyze them as `acl` (parallel to the analysis of this class as "content clauses" in Huddleston and Pullum 2002). Such clausal complements are usually finite (though there are occasional remnant English subjunctives).

~~~ sdparse
I admire the fact that you are honest
acl(fact, honest)
mark(honest, that)
cop(honest, are)
nsubj(honest, you)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:44 CEST 2021 -->
