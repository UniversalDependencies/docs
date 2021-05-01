---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

A determiner is the relation between the head of an NP and its determiner. The determiners in
Vietnamese are _những_, _các_, _mọi_, _cả_, _tất cả_... Beside, in Vietnamese, `det` also describes
dependencies between nouns and their pronoun, for example, _ấy_, _kia_, _này_, _đó_, _bây giờ_ ...
Meanwhile, we name this relationship `det:pmod`.

~~~ sdparse
Trời mưa cả ngày 。 \n It's raining all day .
nsubj(mưa, Trời)
obl(mưa, ngày)
det(ngày, cả)
punct(mưa, 。)
~~~

~~~ sdparse
Anh này rất cao 。 \n This guy is very tall .
det:pmod(Anh, này)
nsubj(cao, Anh)
advmod(cao, rất)
punct(cao, 。)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:23 CET 2020 -->
