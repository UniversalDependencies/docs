---
layout: relation
title: 'compound:tp'
shortdef: 'tatpuruṣa compound'
udver: '2'
---

Tatpuruṣa compounds are compounds whose first member is in an oblique case relationship with its head. For example, a genitive relation:

~~~ sdparse
bodhisatta- mātā \n the-Bodhisattva's mother

compound:tp(mātā, bodhisatta-)
compound:tp(mother, the-Bodhisattva's)
~~~

Always point the dependent to the head of the relation, which may or may not be the head of the whole compound:

~~~ sdparse
kāma- guṇ- ūpasaṃhitaṃ \n sensual quality concern

compound:tp(guṇ-, kāma-)
compound:tp(ūpasaṃhitaṃ, guṇ-)
compound:tp(quality, sensual)
compound:tp(concern, quality)
~~~

