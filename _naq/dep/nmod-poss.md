---
layout: relation
title: 'nmod:poss'
shortdef: 'possessive nominal modifier'
udver: '2'
---

`nmod:poss` is used for a possessive nominal modifier. In Khoekhoe, it could be marked with the use of possessive determiners _ti_ "my" and _sa_ "your (singular)", possessive associative pronouns (e.g., _âb_), possessive [postposition](naq-pos/ADP) _di_, or mostly unmarked with the possessor being in the nominative case.

~~~ sdparse
ti ǂkhanis \n my book
nmod:poss(ǂkhanis, ti)
nmod:poss(book, my)
~~~

~~~ sdparse
ǂkhanis âb \n book my
nmod:poss(ǂkhanis, âb)
nmod:poss(book, my)
~~~

~~~ sdparse
Amob di ǂkhanis \n Amos 's book
nmod:poss(ǂkhanis, Amob)
case(Amob, di)
nmod:poss(book, Amos)
case(Amos, 's)
~~~

~~~ sdparse
Amob ǂkhanis \n Amos book
nmod:poss(ǂkhanis, Amob)
nmod:poss(book, Amos)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:45 CEST -->
