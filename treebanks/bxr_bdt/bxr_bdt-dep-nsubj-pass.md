---
layout: base
title:  'Statistics of nsubj:pass in UD_Buryat-BDT'
udver: '2'
---

## Treebank Statistics: UD_Buryat-BDT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="bxr_bdt-dep-nsubj.html">nsubj</a></tt>.

16 nodes (0%) are attached to their parents as `nsubj:pass`.

16 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt> (15; 94% instances), <tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Тогтоол	тогтоол	NOUN	_	Case=Nom	4	nsubj:pass	_	_
2	ноябрь	ноябрь	NOUN	_	Case=Nom	3	nmod	_	_
3	һарада	һара	NOUN	_	Case=Dat	4	nmod	_	_
4	табигдаһаан	табигда	VERB	_	VerbForm=Inf	0	root	_	_
5	байна	бай	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	Ажалаймни	ажал	NOUN	_	Case=Gen	2	nmod	_	_
2	эхиндэ	эхин	NOUN	_	Case=Dat	10	nmod	_	_
3	буряад	буряад	ADJ	_	_	4	amod	_	_
4	хэлэнэй	хэлэн	NOUN	_	Case=Gen	6	nmod	_	_
5	орёо	орёо	ADJ	_	_	6	amod	_	_
6	байдалаар	байдал	NOUN	_	_	7	obj	_	_
7	табигдаһан	табигда	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	acl	_	_
8	асуудалнууд	асуудал	NOUN	_	Case=Nom|Number=Plur	10	nsubj:pass	_	_
9	нэгэшье	нэгэшье	ADV	_	_	10	advmod	_	_
10	шиидхэгдээгүй	шиидхэхы	ADJ	_	_	0	root	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	улам	улам	ADV	_	_	13	advmod	_	_
13	хэсүү	хэсүү	ADV	_	_	14	amod	_	_
14	боложол	боложол	NOUN	_	Case=Nom	15	nsubj	_	_
15	байдаг	бай	VERB	_	_	10	parataxis	_	SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


