---
layout: relation
title: 'fixed'
shortdef: 'fixed MWE'
udver: '2'
---

We annotated the following phrases in Indonesian using 'fixed':

* _lebih dari/kurang dari_ "more than/less than" 
* _kurang lebih_ "approximately/more or less"
* _sering kali_ "often"
* _antara lain_ "among others"
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
advmod(kurang, 100)
fixed(kurang, lebih)
nummod(orang, 100)
advmod(100, approximately)
~~~

~~~ sdparse
sering kali berakhir dengan keributan \n often often ending in a fuss
advmod(berakhir, sering)
fixed(sering, kali)
case(keributan, dengan)
obl(berakhir, keributan)
~~~

~~~ sdparse
antara lain buku pengetahuan dan agama \n among others, books of knowledge and religion
advmod(antara, buku)
fixed(antara, lain)
nmod(buku, pengetahuan)
conj(pengetahuan, agama)
cc(dan, agama)
~~~

~~~ sdparse
Oleh karena itu , kamu harus berobat . \n Therefore , you must seek treatment .
case(itu, Oleh)
fixed(Oleh, karena)
obl(berobat, itu)
advmod(seek, Therefore)
~~~
