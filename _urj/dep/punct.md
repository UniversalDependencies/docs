---
layout: relation
title:  'punct'
shortdef : 'punctuation'
---

The dependency type `punct` is used to mark punctuation. The dependent is the punctuation symbol, and the governor is the element which the punctuation symbol delimits. For instance, with coordination, the first coordinated element is the head of all `punct` dependencies in the coordination, and with subordinate clauses, the head of the subordinate clause is the governor of the `punct`.

<!-- fname:punct_coord.pdf -->
~~~ sdparse
kerrostaloja , rivitaloja ja omakotitaloja \n blockhouses , rowhouses and one_family_houses
punct(kerrostaloja-1, ,-2)
conj(kerrostaloja-1, rivitaloja-3)
cc(kerrostaloja-1, ja-4)
conj(kerrostaloja-1, omakotitaloja-5)
~~~

~~~ conllu
1       Kõik    kõik    PRON    P       Case=Nom|Number=Sing|PronType=Tot       2       nsubj   _       _
2       oleneb  olenema VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root    _       _
3       otstarbest      ots_tarve       NOUN    S       Case=Ela|Number=Sing    2       nmod    _       _
4       ,       ,       PUNCT   Z       _       3       punct   _       _
5       ümbrusest       ümbrus  NOUN    S       Case=Ela|Number=Sing    3       conj    _       _
6       ja      ja      CONJ    J       _       3       cc      _       _
7       kasutajast      kasutaja        NOUN    S       Case=Ela|Number=Sing    3       conj    _       _
8       .       .       PUNCT   Z       _       2       punct   _       _
~~~

<!-- TODO: HUNGARIAN -->

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

~~~ conllu
1       See     see     PRON    P       Case=Nom|Number=Sing|PronType=Dem       3       nsubj:cop       _       _
2       oli     olema   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 3       cop     _       _
3       tuba    tuba    NOUN    S       Case=Nom|Number=Sing    0       root    _       _
4       ,       ,       PUNCT   Z       _       6       punct   _       _
5       kus     kus     ADV     D       _       6       mark    _       _
6       elas    elama   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 3       advcl   _       _
7       Jooga   Jooga   PROPN   S       Case=Nom|Number=Sing    6       nsubj   _       _
8       .       .       PUNCT   Z       _       3       punct   _       _
~~~

<!-- TODO: HUNGARIAN -->

###Diffs

By the current release of FI_FTB (FinnTreeBank), the manual annotation of
punctuation marks has not been completed. Instead the automatic
annotation links the punctuation marks to the closest token
available (usually the previous one).
<!-- Interlanguage links updated Út zář 29 20:32:02 CEST 2020 -->
