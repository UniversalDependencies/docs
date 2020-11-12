---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
---

An adjectival modifier of a noun is any adjectival phrase that serves
to modify the meaning of the noun. This relation is universal.

~~~ sdparse
Desde o último dia 13, «Confissões de Adolescente» pode ser vista pelos teens portugueses.
amod(dia, último)
~~~

~~~ sdparse
"Câmera Manchete" é o nome do novo programa jornalístico.
amod(programa, jornalístico)
amod(programa, novo)
~~~

~~~ sdparse
Na época, o então ministro da Fazenda, Fernando Henrique Cardoso, fez um pronunciamento em cadeia nacional.
amod(ministro, então)
amod (cadeia, nacional)
~~~

Note that in the last example, "então" behaves as an adjective
(denotes "o atual ministro").

Note that "Confissões de Adolescente" and "ministro da Fazenda" are
multi word expressions and therefore "de Adolescente" and "da Fazenda"
are part of the mwe token in the current version of Portuguese corpus,
so they do not hold the `amod` relation.
<!-- Interlanguage links updated Čt lis 12 09:43:12 CET 2020 -->
