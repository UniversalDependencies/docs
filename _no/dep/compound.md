---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

Norwegian compounds are usually written as one word, without a whitespace separating the compound parts. A whitespace or punctuation may occasionally occur in a compound, e.g. due to non-standard orthography or when the first compound part is phrase. In such cases, the last token of the compound is the head, and the other tokens are dependents with the relation `compound`:
~~~ sdparse
fakta / tall-kilder \n fact / number-sources
compound(tall-kilder,/)
compound(tall-kilder,fakta)
~~~

~~~ sdparse
Michael Kiwanuka-låt \n Michael Kiwanuka-tune
compound(Kiwanuka-låt,Michael)
~~~


In addition to this, the language-specific subtype [compound:prt](compound-prt) is used for verbal particles.

<!-- Interlanguage links updated St lis 3 20:58:45 CET 2021 -->
