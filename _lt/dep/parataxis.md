---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

The `parataxis` relation is a relation between a word (often the main predicate of a
sentence) and other elements, such as a sentential parenthetical, placed side by side without any
explicit coordination, subordination, or argument relation with the head word.

`Parataxis` is a relation for “side-by-side sentences” including reported speech (1, 2,
3, 4), clauses introduced in brackets (5, 6), parenthetical comments detached from the sentence
(7), and certain parenthetical elements (8, 9).

### Treatment of reported speech

When a speech verb interrupts reported speech content, the interruption is treated as a
parenthetical `parataxis`:

~~~ sdparse
Jonas pasakė : einu namo . \n Jonas told : I-go home .
parataxis(pasakė, einu)
parataxis(told, I-go)
~~~

~~~ sdparse
Vaikai , Jonas pasakė , išvyko anksti ryte . \n The-children , Jonas said , left early in-the-morning .
parataxis(išvyko, pasakė)
parataxis(left, said)
~~~

~~~ sdparse
Yra sakoma : „ Paprasčiau valgyk , būsi sveikesnis “ . \n It-is said : “ Eat more-simply , you-will-be healthier ” .
parataxis(sakoma, valgyk)
parataxis(said, Eat)
~~~

~~~ sdparse
Sako , rytoj lis . \n They-say it-will-rain tomorrow .
parataxis(lis, Sako)
parataxis(it-will-rain, They-say)
~~~

### Parataxis in brackets

The `parataxis` relation is used to connect parts of the sentence written as explanation in brackets (5, 6) as well as comments that are less related to the sentence (7).

~~~ sdparse
Jonas sėdi ( nuotraukoje dešinėje ) . \n Jonas is-sitting ( in-the-photo , on-the-right ) .
parataxis(sėdi, nuotraukoje)
parataxis(is-sitting, in-the-photo)
~~~

~~~ sdparse
Išvengti Lietuvos Respublikos asmens duomenų teisinės apsaugos įstatymo ( toliau  – ADTAĮ ) reikalavimų pažeidimų . \n To-avoid violations of-the-requirements of-the-Law of-Republic of-Lithuania on-Legal Protection of-Personal Data ( hereinafter , LPPD ) .
parataxis(įstatymo, ADTAĮ)
parataxis(of-the-Law, LPPD)
~~~

~~~ sdparse
Aš grąžinau skolą ( keturi eurai už kebabą nesiskaito ) . \n I repaid the-debt ( four euros for a-kebab don’t-count ) .
parataxis(grąžinau, nesiskaito)
parataxis(repaid, don’t-count)
~~~

### Parentheticals

Parentheticals are annotated as `parataxis` when the inserted word group or clause (containing a verb) can be regarded as a sentence component that has its own grammatical head.

~~~ sdparse
Aišku , jis nežinojo . \n Of-course , he didn‘t-know .
parataxis(nežinojo, Aišku)
parataxis(didn‘t-know, Of-course)
~~~

~~~ sdparse
Kaip nurodo autorė , šie žanrai yra mažai tirti . \n As the-author notes , these genres are little studied .
parataxis(tirti, nurodo)
parataxis(studied, notes)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:13:07 CEST -->
