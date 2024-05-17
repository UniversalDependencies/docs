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

- For combinations with the forms *γερο* and *παπα* as a first member and a PROPN or a NOUN as a second one; these combinations may be spelled with or without an '-'. The overall construct is "visible" with the PoS of the head of the compound  and this is the reason why the [flat]() dependency was not preferred because the construct would be visible with the PoS of the first member. Another reason is that these combinations may be spelled as one word, e.g., *γεροναύτης* 'old sailor', in which case they are assigned the PoS of the head of the compound.

~~~ sdparse
ο γερο-Αρτέμης
punct(Αρτέμης, -)
compound(Αρτέμης, γέρο)
det(Αρτέμης, ο)
~~~

~~~ sdparse
ο γερο Μαθιός
compound(Μαθιός, γέρο)
det(Μαθιός, ο)
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

The head of the compound cardinal numeral sometimes agrees with a modified noun. 

~~~ sdparse
τριάντα τρεις μέρες
compound(τρεις, τριάντα)
nummod(μέρες, τρεις)
~~~
The two other compounding relations are:

- [fixed]() for fixed grammaticized expressions with function words
- [flat]() for proper nouns constituted of multiple nominal elements
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:54 CEST -->
