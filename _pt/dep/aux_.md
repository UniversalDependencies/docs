---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "pt/dep/aux.html"
---

An auxiliary of a clause is a [non-main verb](u-pos/AUX) of the
clause, e.g., a modal auxiliary, or a form of _ser, fazer_ or _ter_ in a
periphrastic tense. 

Note that in Portuguese, verbs as "começar", "acabar", "terminar" are analysed as aspectualizers of the main verb (following [ROCIO, S. Começar e acabar: aspestualizadores em processo de gramaticalização](http://acervodigital.ufpr.br/bitstream/handle/1884/37207/R%20-%20T%20-%20SIRLEI%20DO%20ROCIO%20CAVALLI.pdf?sequence=3), then they should be tagged as `aux`.

Exception: Auxiliary verb used to construct the passive
[voice](u-feat/Voice) is not labeled `aux` but [auxpass]().

~~~ sdparse
músicos talvez tenham estudado um pouco demais
aux(estudado, tenham)
~~~
~~~ sdparse
O mesmo não se pode dizer
aux(dizer, pode)
~~~

~~~ sdparse
Acabou assinando com o Interscope
aux(assinando, Acabou)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:08 CEST 2020 -->
