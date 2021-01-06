---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This is used for any piece of punctuation in a clause, if punctuation
is being retained in the typed dependencies. This relation is universal.

~~~ sdparse
Tem sentido -- aliás, muitíssimo sentido.
punct(Tem, --)
punct(sentido,  ,)
punct(Tem, .)
~~~

Tokens with the relation [u-dep/punct]() always attach to content words (except in cases of ellipsis) and can never have dependents.
Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply.
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the first conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

<div id="punct1" class="sd-parse">
Os jogadores se dividem pelos dez quartos do alojamento , equipados com frigobar , ar condicionado , televisão e telefone .
nmod(equipados, frigobar)
conj(frigobar, ar condicionado)
conj(frigobar, televisão)
conj(frigobar, telefone)
cc(telefone, e)
punct(ar condicionado, ,-14)
punct(televisão, ,-17)
punct(dividem, .)
</div>

<div id="punct2" class="sd-parse">
«É uma coisa do Primeiro Mundo», afirmou o levantador Maurício (leia matéria ao lado).
punct(coisa, «)
punct(coisa, »)
punct(coisa, ,)
punct(leia, ()
punct(leia, ))
punct(afirmou, .)
</div>
<!-- Interlanguage links updated Čt lis 12 09:43:38 CET 2020 -->
