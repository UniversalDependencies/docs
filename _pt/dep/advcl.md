---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
---

An adverbial clause modifier is a clause which modifies a verb or
other predicate (adjective, etc.), as a modifier not as a core
complement. This includes things such as a temporal clause,
consequence, conditional clause, purpose clause, etc. The dependent
must be clausal (or else it is an [advmod]()) and the dependent is the
main predicate of the clause.

~~~ sdparse
Na Vila, quando recebo a bola, tenho que ficar olhando sua trajetória, para não ser surpreendido.

advcl(recebo, olhando)  (temporal clause)
advcl(surpreendido, olhando)  (purpose clause)
~~~

~~~ sdparse
Eles tiveram que fazer isso se os escravos fossem superiores em qualidades que os próprios brancos valorizavam, onde estaria a justificativa moral para mantê-los escravizados?

advcl(superiores, tiveram) (conditional clause)
~~~

Note in the example above, that the `advcl` relation holds between an
`ADJ` and a `VERB`, since the head of the adverbial clause ("se os
escravos fossem superiores em qualidades que os próprios brancos
valoriavam") is "superiores", as the verb to be ("fossem") holds a
`cop` relation and therefore it is not the head (the main predicate)
of the clause.
<!-- Interlanguage links updated Út zář 29 20:23:16 CEST 2020 -->
