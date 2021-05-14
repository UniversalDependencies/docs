---
layout: relation
title: 'nmod:lmod'
shortdef: 'noun modifier that describes the position/location relative to its parent noun'
udver: '2'
---

This is a special class of [nmod]().
This deprel is used in Indonesian grammar for locative nouns such as:
* _atas_ "above/on" such as in _di atas meja_ "on the table"
* _bawah_ "under" such as in _di bawah pengawasannya_ "under his watch"
* _seberang_ "across" such as in _di seberang lautan_ "across the ocean"
* _luar_ "outside" such as in _ke luar negeri_ "abroad"


~~~ sdparse
Letakkan di atas meja ! \n Put it on the table !
obl(Letakkan, meja)
case(meja, di)
nmod:lmod(meja, atas)
punct(Letakkan, !)
~~~

~~~ sdparse
di bawah pengawasan nya \n under his watch
case(pengawasan, di)
nmod:lmod(pengawasan, bawah)
nmod:poss(pengawasan, nya)
~~~

~~~ sdparse
di seberang lautan \n across the ocean
case(lautan, di)
nmod:lmod(lautan, seberang)
~~~

~~~ sdparse
pergi ke luar negeri \n go abroad
obl(pergi, negeri)
case(negeri, ke)
nmod:lmod(negeri, luar)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:11 CEST 2021 -->
