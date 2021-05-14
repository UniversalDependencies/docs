---
layout: relation
title:  'punct'
shortdef : 'punctuation'
udver: '2'
---

The dependency type `punct` is used to mark punctuation. The dependent is the punctuation symbol, and the governor is the element which the punctuation symbol delimits. For instance, with coordination, the first coordinated element is the head of all `punct` dependencies in the coordination, and with subordinate clauses, the head of the subordinate clause is the governor of the `punct`.

<!-- fname:punct_coord.pdf -->
~~~ sdparse
kerrostaloja , rivitaloja ja omakotitaloja \n blockhouses , rowhouses and one_family_houses
punct(rivitaloja-3, ,-2)
conj(kerrostaloja-1, rivitaloja-3)
cc(omakotitaloja-5, ja-4)
conj(kerrostaloja-1, omakotitaloja-5)
~~~

<!-- fname:punct_subord.pdf -->
~~~ sdparse
Kotona oli hiljaista , kun hän palasi . \n At_home was quiet , when he returned .
advmod(oli-2, Kotona-1)
xcomp(oli-2, hiljaista-3)
advcl(oli-2, palasi-7)
punct(palasi-7, ,-4)
punct(oli-2, .-8)
mark(palasi-7, kun-5)
nsubj(palasi-7, hän-6)
~~~

<!-- TODO Attaching punctuation correctly is described more closely in Section [punctspecial](#sec-punctspecial). -->

###Diffs

By the current release of FI_FTB (FinnTreeBank), the manual annotation of
punctuation marks has not been completed. Instead the automatic
annotation links the punctuation marks to the closest token
available (usually the previous one).
<!-- Interlanguage links updated Pá kvě 14 11:09:21 CEST 2021 -->
