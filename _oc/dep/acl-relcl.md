---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
---

The `acl:relcl` relation is used in the Old Gascon corpus **UD_Occitan-CorAG** for relative clauses modifying
a noun or a pronoun. The relation points from the head of the nominal to the head of the relative clause.


Some examples from **UD_Occitan-CorAG**:

~~~ sdparse
car la pene qui l'escrivan passare lo deffenedor deu passar et prener \n because the sentence that the copyist will suffer the defender must suffer and take
acl:relcl(pene, passare)
obj(passare, qui)
~~~

~~~ sdparse
car, si no, lo qui coelher ac deu sere decebut \n because, if not, the one who must gather it will be disappointed
acl:relcl(lo, deu)
nsubj(deu, qui)

~~~

<!-- Interlanguage links updated So 10. května 2025, 18:14:45 CEST -->
