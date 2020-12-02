---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

We use the `compound` relation for

- the few noun noun compounds of Modern Greek:

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

- for combinations of numbers:

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
<!-- Interlanguage links updated Čt lis 12 09:43:18 CET 2020 -->
