---
layout: relation
title: 'compound:na'
shortdef: 'nañtatpuruṣa compound'
udver: '2'
---

Nañtatpuruṣa compounds are complex compounds whose first member is a negation.

## When not to use `compound:na`

Words that would only be compounds because they are *na-* negated should **not** be treated as compounds! 

If the *na-* is in "n'" form (such as on a verb like "*nānubhava*" = "doesn't accomplish"), that should be treated as simple *sandhi*.

If the *na-* is an "a-" prefix (on a adjective/participle, such as "*amakkhito*" = "undefiled"), then you should treat the entire negated word as a single token and use the `Polarity=Neg` feature to mark the negation.  This also holds for e.g. [tatpuruṣa compounds](./compound-tp) whose first part is negated:

~~~ sdparse
adhamma-/NOUN[Polarity=Neg] savaṇa/NOUN \n false-teaching listening

compound:tp(savaṇa, adhamma-)
compound:tp(listening, false-teaching)
~~~

Despite being a tatpuruṣa with a negation, *adhammasavaṇa* is not a nañtatpuruṣa.

## When to use `compound:na`

If, however, the negated word is a compound even without the negation and the negation is applied to the compound as a whole, then the *na* should be treated as a compound part and given the `compound:na` relation:

~~~ sdparse
a- nindā- rosa \n NEG blaming offense

compound:na(rosa, a-)
compound:dv(rosa, nindā-)
compound:na(offense, NEG)
compound:dv(offense, blaming)
~~~


