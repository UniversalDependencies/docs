---
layout: relation
title: 'name'
shortdef: 'name'
---

`name` is one of the three relations for compounding in UD (together with [compound]() and [mwe]()).
It is used for proper nouns constituted of multiple nominal elements.
For phrasal or clausal names the usual relations are used.

~~~ sdparse
Mustafa Kemal
name(Kemal, Mustafa)
~~~

~~~ sdparse
Mustafa Kemal Paşa
name(Kemal, Mustafa)
nmod(Paşa, Kemal)
~~~

~~~ sdparse
Necla Hanım
nmod(Hanım, Necla)
~~~

~~~ sdparse
Mahmut öğretmen
nmod(öğretmen, Mahmut)
~~~

~~~ sdparse
Türkiye Büyük Millet Meclisi
nmod:poss(Meclisi, Millet)
amod(Meclisi, Büyük)
nmod:poss(Meclisi, Türkiye)
~~~

~~~ sdparse
Van Gölü
nmod:poss(Gölü, Van)
~~~
