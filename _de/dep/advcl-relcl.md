---
layout: relation
title:  'advcl:relcl'
shortdef : 'adverbial relative clause modifier'
udver: '2'
---

This relation applies to relative clauses that modify a clause (as opposed to typical relative clauses, which are
adnominal and use [acl:relcl]()).

For example, the antecedent is a clause in:

~~~ sdparse
Jedesmal war ein anderer Arzt da , was ich etwas unpersönlich finde . \n Each-time was a different doctor there , which I a-bit impersonal find .
advcl:relcl(war, finde)
obj(finde, was-8)
advcl:relcl(was-16, find)
obj(find, which)
~~~
