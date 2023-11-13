---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

We use the `compound` relation for

- The NOUN-NOUN compounds of Modern Greek (they may be spelled with or without an '_'):

~~~ sdparse
κράτος μέλος
compound(κράτος, μέλος)
~~~

~~~ sdparse
απόφαση - κόλαφος
compound(απόφαση, κόλαφος)
punct(απόφαση, -)
~~~

~~~ sdparse
λέξης κλειδί
compound(λέξης, κλειδί)
~~~



- For combinations of numbers:

~~~ sdparse
Είκοσι χιλιάδες λεύγες
compound(χιλιάδες, Είκοσι)
nummod(χιλιάδες, λεύγες)
~~~

~~~ sdparse
Πάνω από τρία εκατομμύρια ευρώ
compound(εκατομμύρια, τρία)
nummod(ευρώ, εκατομμύρια)
~~~

The two other compounding relations are:

- [fixed]() for fixed grammaticized expressions with function words
- [flat]() for proper nouns constituted of multiple nominal elements
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:36 CET -->
