---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
udver: '2'
---

We use deprel 'aux' to annotate Indonesian words that serve as:
- tenses marking: _akan/bakal_ for future tense, _sedang/tengah_ for present tense, _telah/sudah_ for past tense
- modals: _bisa/dapat/sanggup/mampu_ "can/could", _harus/mesti/wajib_ "must", _seharusnya/sebaiknya_ "shall/should", _boleh/mungkin_ "may/might"

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

<!-- Interlanguage links updated Pá kvě 14 11:08:51 CEST 2021 -->
