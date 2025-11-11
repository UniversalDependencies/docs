---
layout: base
title:  'Statistics of csubj in UD_Uzbek-UzUDT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UzUDT: Relations: `csubj`

This relation is universal.

16 nodes (0%) are attached to their parents as `csubj`.

16 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.875.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (8; 50% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (3; 19% instances), <tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (2; 13% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	tarixni	tarixni	NOUN	N	Case=Acc	2	obj	_	_
2	tushunishimiz	tushunishimiz	VERB	V	_	6	csubj	_	_
3	va	va	CCONJ	C	_	5	cc	_	_
4	turmushni	turmushni	NOUN	N	Case=Acc	5	obj	_	_
5	tushunishimiz	tushunishimiz	VERB	V	_	2	conj	_	_
6	chuqurlashadi	chuqurlashadi	VERB	V	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	Y	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	ehtimol	ehtimol	PART	T	_	5	mark	_	_
2	u	ehtimol	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
3	osmondan	osmon	NOUN	N	Case=Abl	5	obl	_	_
4	tushkan	tushmoq	VERB	V	Case=Nom|Tense=Past	5	compound	_	_
5	boʻlishi	boʻlmoq	VERB	V	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	6	csubj	_	_
6	mumkin	mumkin	NOUN	A	Case=Nom	0	root	_	_
7	!	mumkin	PUNCT	Y	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	oltmish	olt	NUM	M	_	2	nummod	_	_
2	odamni	oda	NOUN	N	Case=Acc	4	obj	_	_
3	tezda	tez	ADV	D	_	4	advmod	_	_
4	qutqarish	qutqarmoq	VERB	V	_	5	csubj	_	_
5	kerak	kerak	ADJ	A	_	0	root	_	_
6	!	.	PUNCT	Y	_	5	punct	_	_

~~~


