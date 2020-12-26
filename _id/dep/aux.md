---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
udver: '2'
---

We use deprel 'aux' to annotate Indonesian words that serve as:
- tenses marking: _akan/bakal_ for future tense, _sedang_ for present tense, _telah/sudah_ for past tense
- modals: _bisa/dapat_ "can", _harus/mesti_ "must", _seharusnya/sebaiknya_ "shall/should", _boleh_ "may/might"

~~~ sdparse
Dia telah pergi \n She has gone
nsubj(pergi, Dia)
aux(pergi, telah)
nsubj(gone, She)
aux(gone, has)
~~~

~~~ sdparse
Kamu seharusnya mengerti  \n You should understand
nsubj(mengerti, Kamu)
aux(mengerti, seharusnya)
nsubj(understand, You)
aux(understand, should)
~~~

