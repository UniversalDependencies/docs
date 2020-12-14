---
layout: relation
title: 'nmod:lmod'
shortdef: 'noun modifier that describes the position/location relative to its parent noun'
udver: '2'
---

This is a special class of [nmod]().
This deprel is used in Indonesian grammar for locative nouns such as:
* _atas_ "above" such as in _di atas meja_ "on the table"
* _bawah_ "under" such as in _di bawah pengawasannya_ "under his watch"
* _seberang_ "across" such as in _di seberang lautan_ "across the ocean"


~~~ sdparse
di atas meja \n on the table
case(meja, di)
nmod:lmod(meja, atas)
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
