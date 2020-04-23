---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier of an NP is any adjectival phrase that serves to modify the meaning of the NP.

### Examples


#### Descriptive adjectives

_tíortha <b>forbatha</b>_   '<b>developed</b> countries'

~~~ sdparse
tíortha forbatha \n countries developed
amod(tíortha, forbatha)
~~~

_bláthanna <b>bán</b> nó <b>glas</b>_  '<b>white</b> or <b>green</b> flowers'

~~~ sdparse
bláthanna bán nó glas \n flowers white or green
amod(bláthanna, bán)
amod(bláthanna, glas)
~~~


#### Indefinite adjectives

_Baineann na prionsabail <b>chéanna</b> leis_ 'The <b>same</b> principles apply'

~~~ sdparse
Baineann na prionsabail chéanna leis \n Relate the principles same with_it
amod(prionsabail, chéanna)
~~~

_daoine <b>áirithe</b>_ '<b>certain</b> people'

~~~ sdparse
daoine áirithe \n people certain
amod(daoine, áirithe)
~~~


#### Ordinal numbers

_<b>19ú</b> haois_ '<b>19th</b> century'

~~~ sdparse
19ú haois \n 19th age
amod(haois, 19ú)
~~~

_mac léinn ar choláistí ar an <b>dara</b> nó ar an <b>tríú</b> leibhéal_ 'students of <b>second-</b> or <b>third-</b>level colleges'

~~~ sdparse
mac léinn ar choláistí ar an dara nó ar an tríú leibhéal \n students [] on colleges on the second or on the third level
amod(leibhéal, dara)
conj(dara, tríú)
~~~
