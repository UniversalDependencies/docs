---
layout: relation
title: 'nummod'
shortdef : 'numeric modifier'
---

*Numeric modifiers* of a noun or NP, when they function as quantifiers
are marked with the `nummod` dependency type. 

Ordinal numbers should get the `amod` type.

<!-- fname:num.pdf -->
~~~ sdparse
Бразилия өз жерінде чемпионатты екі рет өткізген бесінші ел болды . \n Brazil own land-in championship two times XX fifth country was .
nummod(рет-6, екі-5)
nmod(ел-9, рет-6)
amod(ел-9, бесінші-8)
~~~

Another example:

~~~ sdparse 
Баба-атаға да үш күн түнеді . \n Baba-ata-to also three days slept-over .
nummod(күн-4, үш-3)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:24 CEST 2020 -->
