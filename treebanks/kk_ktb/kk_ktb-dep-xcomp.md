---
layout: base
title:  'Statistics of xcomp in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `xcomp`

This relation is universal.

77 nodes (1%) are attached to their parents as `xcomp`.

77 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18181818181818.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (59; 77% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (10; 13% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (6; 8% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp	color:blue
1	Оны	ол	PRON	prn	Case=Acc|PronType=Dem	2	obj	_	_
2	түсіндіре	түсіндір	VERB	v	Aspect=Imp|VerbForm=Inf	3	xcomp	_	_
3	білу	біл	VERB	vaux	Case=Nom|VerbForm=Ger	4	csubj	_	_
4	керек	керек	ADJ	adj	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Бұл	бұл	PRON	prn	Case=Nom|PronType=Dem	4	nsubj	_	_
2	сені	сен	PRON	prn	Case=Acc|Number=Sing|Person=2|PronType=Prs	4	obj	_	_
3	қатын	қатын	NOUN	n	Case=Nom	4	xcomp	_	_
4	қылады	қыл	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 xcomp	color:blue
1	Өкінішке	өкініш	NOUN	n	Case=Dat	10	obl	_	_
2	орай	орай	ADP	post	_	1	case	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	1	punct	_	_
4	олар	олар	PRON	prn	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	_
5	бұл	бұл	DET	det	PronType=Dem	6	det	_	_
6	мәселені	мәселе	NOUN	n	Case=Acc	7	obj	_	_
7	шешуге	шеш	VERB	v	Case=Dat|VerbForm=Ger	8	advcl	_	_
8	қабілетсіз	қабілетсіз	ADJ	adj	_	10	xcomp	_	_
9	болып	бол	AUX	v	Aspect=Perf|VerbForm=Inf	8	cop	_	_
10	шықты	шық	VERB	vaux	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


