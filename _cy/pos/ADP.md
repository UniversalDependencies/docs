---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

Adpositions is a term that covers both prepositions and postpositions. Welsh only has prepositions.


#### Inflected prepositions

Some of the most common simple prepositions can be inflected to mark pronominal objects. These are referred to as inflected prepositions.

* _arnaf_ "on me"
* _arnom_ "on us"
* _ganddo_ "with him"

Inflected prepositions can be followoed by the corresponding pronoun

* _arnaf fi_ "on me"
* _arnom ni_ "on us"
* _ganddo fo_ "with him"

In the Welsh Treebank, inflected prepositions are annotated as multitoken words _... wrthym ..._
```
...
16-17   wrthym  _       _       _       _       _       _       _       _
16      wrth    wrth    ADP     iprep   _       17      case    _       _
17      ni      ni      PRON    indep   Number=Plur|Person=1|PronType=Prs       15      obl     _       _
```

if there is a overt pronoun, we annotate as follows: _... amdanyn nhw..._
```
8-9     amdanyn _       _       _       _       _       _       _       _
8       am      am      ADP     iprep   _       9       case    _       _
9       hwy     hwy     PRON    indep   Number=Plur|Person=3|PronType=Prs       7       obl     _       _
10      nhw     hwy     PRON    indep   Number=Plur|Person=3|PronType=Prs       9       compound:redup  _       SpaceAfter=No
```

<!-- Interlanguage links updated St lis 3 20:58:07 CET 2021 -->
