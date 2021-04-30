---
layout: relation
title:  'dep:alt'
shortdef : 'alternative gender suffix'
udver: '2'
---

In situations where a masculine verb form is accompanied by an alternative suffix
to signal the possible feminine reading (which depends on external context, unknown
to the speaker), we attach the alternative suffix to the verb using the relation
`dep:alt`.

~~~ sdparse
Jeli sy jedyn z mjenowanych njedostatkow skorigował ( a ) , wotstroń prošu potrjecheny parameter předłohi . \n If you one of mentioned shortcomings corrected.MASC ( FEM ) , remove please the.said parameter of.template .
dep:alt(skorigował, a-9)
punct(a-9, (-8)
punct(a-9, )-10)
dep:alt(corrected.MASC, FEM)
punct(FEM, (-25)
punct(FEM, )-27)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:09 CET 2020 -->
