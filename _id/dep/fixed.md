---
layout: relation
title: 'fixed'
shortdef: 'fixed MWE'
udver: '2'
---

We use deprel 'fixed' to annotate multi-word adverbs and prepositions in Indonesian.

Examples of adverb MWEs:
* _lebih dari/kurang dari_ "more than/less than" 
* _kurang lebih_ "approximately/more or less"
* _sering kali_ "often"
* _sama sekali_ "absolutely/totally/at all"
* _kadang kala_ "sometimes"

Examples of preposition MWEs:

* _antara lain_ "among others/such as"
* _oleh karena_ "therefore"


~~~ sdparse
lebih dari 500 pembangkit listrik \n more than 500 power plants
advmod(500-3, lebih)
fixed(lebih, dari)
nummod(pembangkit, 500-3)
nmod(pembangkit, listrik)
advmod(500-9, more)
fixed(more, than)
nummod(plants, 500-9)
~~~

~~~ sdparse
kurang lebih 100 orang \n approximately 100 people
advmod(100-3, kurang)
fixed(kurang, lebih)
nummod(orang, 100-3)
advmod(100-7, approximately)
~~~

~~~ sdparse
sering kali berakhir dengan pertengkaran \n often ending in a fight
advmod(berakhir, sering)
fixed(sering, kali)
advmod(ending, often)
~~~

~~~ sdparse
Saya sama sekali tidak setuju . \n I totally disagree .
advmod(sama, setuju)
fixed(sama, sekali)
advmod(setuju, tidak)
advmod(disagree, totally)
~~~

~~~ sdparse
antara lain buku pengetahuan dan agama \n such as books of knowledge and religion
case(buku, antara)
fixed(antara, lain)
nmod(buku, pengetahuan)
conj(pengetahuan, agama)
cc(dan, agama)
case(books, such)
fixed(such, as)
~~~

~~~ sdparse
Oleh karena itu , kamu harus berobat . \n Therefore , you must seek treatment .
case(itu, Oleh)
fixed(Oleh, karena)
obl(berobat, itu)
advmod(seek, Therefore)
~~~
