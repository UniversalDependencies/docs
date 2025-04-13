---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause which is a core argument. That is, it functions like an object of the verb, or adjective. With a speech verb like _say_, the content of reported speech is part of the verb’s valency. It therefore attaches as `ccomp` not only when integrated within the clause as an indirect quotation (_said that…_), but also when set off as a direct quotation.

~~~ sdparse
Եւ ասէ ց նոսա ՝ տեսէք զինչ լսէք դ ։ \n And he said unto them , Take heed what ye hear .
ccomp(ասէ, տեսէք)
ccomp(տեսէք, լսէք)
ccomp(said, Take)
ccomp(Take, hear)
~~~

If the speech verb interrupts the reported speech content, [parataxis]() is used instead. The speech verb attaches to the root of the reported speech.

~~~ sdparse
Եւ ասէ ՝ պատանի դու ՝ քեզ ասեմ ՝ արի : \n And he said , Young man , I say unto thee , Arise .
ccomp(ասէ, արի)
parataxis(արի, ասեմ)
ccomp(said, Arise)
parataxis(Arise, say)
~~~

### References

Jensen, Hans. 1959. Altarmenische Grammatik. Heidelberg: Winter.

Ouzounian, Agnès. 1992. _Le discours rapporté en arménien classique_. Louvain-La-Neuve: Peeters, 1992.
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:33 CET -->
