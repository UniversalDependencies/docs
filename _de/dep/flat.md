---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

The `flat` relation is one of the three relations for compounding in UD (together with [compound]() and [fixed]()). It is used for proper nouns constituted of multiple nominal elements. For example, `flat` would be used between the words of _Hillary Rodham Clinton_, _New York_, or _Carl XVI Gustaf_ but not to replace the usual relations in a phrasal or clausal name like _The king of Sweden_ or the novels _The Lord of the Rings_ and _Captured By Aliens_.

Words joined by `flat` should all be part of a minimal noun phrase; otherwise regular syntactic relations should be used. This is basically similar to the treatment of noun compounds with [compound](), except that in many cases parts of the name may be another nominal element such as an adjective (_United Airlines_).

In general, names are annotated in a flat, head-initial structure, in which all words in the name modify the first one using the `flat` label.

~~~ sdparse
Carl XVI Gustav
flat(Carl, XVI)
flat(Carl, Gustav)
~~~

~~~ sdparse
Frankfurt an dem Main
nmod(Frankfurt, Main)
case(Main, an)
det(Main, dem)
~~~

The relation `flat` is also used with titles that would otherwise not be considered a complete noun phrase on their own.

~~~ sdparse
Herr Meier
flat(Herr, Meier)
~~~

Moreover, dates are also connected with the relation `flat`.

~~~ sdparse
24 Dezember 2011
flat(24, Dezember)
flat(24, 2011)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:26 CET 2020 -->
