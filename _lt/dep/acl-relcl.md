---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
---

The label `acl:relcl` is used to mark relative clauses that modify a nominal (a noun or pronoun). In Lithuanian, these clauses begin with relative pronouns (_kuris (which / who / that), katras (which one), koks (what kind of / which), kas (who / what)_).

~~~ sdparse
Dviratis yra toks , kokio aš norėjau . \n The-bicycle is such as I wanted . 
acl:relcl(toks, norėjau)
acl:relcl(such, wanted)
~~~

~~~ sdparse
Padėk knygą ant stalo , kuris stovi prie lango . \n Put the-book on the-table that stands by the-window .
acl:relcl(stalo, stovi)
acl:relcl(the-table, stands)
~~~

~~~ sdparse
Valstybė daro tai , ką ir turi daryti. \n The-state does that what it-has to-do .
acl:relcl(tai, turi)
acl:relcl(that, it-has)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:58:54 CEST -->
