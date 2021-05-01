---
layout: relation
title: 'obl:mcl'
shortdef: 'obl indicating manner'
udver: '2'
---

The `obl:mcl` relation is used for oblique modifiers indicating manner, see also `advmod:mmod`.
Some manner obliques are associated with the words `ног` and `моз`.

~~~ sdparse
Гашкӧ , выль ног важсӧ сьылам ... \n Maybe, we'll sing the old one in a new way...
advmod:eval(сьылам-6, Гашкӧ-1)
punct(Гашкӧ-1, ,-2)
amod(ног-4, выль-3)
obl:mcl(сьылам-6, ног-4)
obj(сьылам-6, важсӧ-5)
punct(сьылам-6, ...-7)

~~~

<!-- Interlanguage links updated Čt lis 12 09:43:27 CET 2020 -->
