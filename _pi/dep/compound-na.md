---
layout: relation
title: 'compound:na'
shortdef: 'nañtatpuruṣa compound'
udver: '2'
---

nañtatpuruṣa compounds are those that whose first member is a negation. "Compounds" that are only compounds because they are *na-* negated should **not** be treated as compounds.
If the *na-* is in "n'" form (on a verb, as in "*nānubhava*" "doesn't accomplish"), that should be treated as sandhi (as above).
If the *na-* is in "a-" prefix (on a adjective/participle, as in "*amakkhito*" "undefiled"), then you should treat the entire negated word as a single token and use the `Polarity=Neg` feature to mark the negation.
If, however, the negated word is a compound even without the negation, as in "*anindārosa*" "free of blaming and offense", then the *na* should be treated as a compound part and given the `compound:na` relation in that case.

~~~ sdparse
a- nindā- rosa \n NEG blaming offense

compound:na{nindā-, a-}
compound:dv{nindā-, rosa}
~~~


