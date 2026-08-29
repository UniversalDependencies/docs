---
layout: relation
title: 'compound:dg'
shortdef: 'dvigu compound'
udver: '2'
---

Dvigu compounds are compounds whose first member is a numeral.

~~~ sdparse
satta- ratanāni \n seven-fold jewels

compound:dg(ratanāni, satta-)
compound:dg(jewels, seven-fold)
~~~

The numeral is the dependent and the part of the compound being modified (usually the immediate next token) is the head.

Note that "hundreds" and "thousands" in Pāli are done in the reverse order, with the number as the substantive and quantified noun in a case relation. For such cases, use the [compound:tp]().

For cases with both kinds of numbers, use both:

~~~ sdparse
asīti- vassa- sahassāni \n 80 of-rains thousands

compound:dg(sahassāni, asīti-)
compound:tp(sahassāni, vassa-)
compound:dg(thousands, 80)
compound:tp(thousands, of-rains)
~~~
