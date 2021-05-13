---
layout: base
title:  'Statistics of iobj in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `iobj`

This relation is universal.

5 nodes (0%) are attached to their parents as `iobj`.

5 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 iobj	color:blue
1	Өліп	өл	VERB	v	Aspect=Perf|VerbForm=Inf	4	ccomp	_	_
2	бара	бар	AUX	vaux	Aspect=Imp|VerbForm=Inf	1	aux	_	_
3	жатырмын	жат	AUX	vaux	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	aux	_	_
4	десең	де	VERB	v	Mood=Cnd|Number=Sing|Person=2|VerbForm=Conv	9	advcl	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	4	punct	_	_
6	қойға	қой	NOUN	n	Case=Dat	9	obl	_	_
7	бір	бір	DET	det	PronType=Ind	8	det	_	_
8	тайын	тай	NOUN	n	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	9	iobj	_	_
9	мінгізбейді	мінгіз	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 iobj	color:blue
1	19	19	NUM	num	NumType=Ord	2	amod	_	_
2	ғасырдың	ғасыр	NOUN	n	Case=Gen	5	nmod:poss	_	_
3	2	2	NUM	num	NumType=Ord	5	amod	_	SpaceAfter=No
4	-	-	PUNCT	guio	_	3	punct	_	SpaceAfter=No
5	жартысынан	жарты	ADJ	adj	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	11	nmod	_	_
6	Иран	Иран	PROPN	np	Case=Nom	7	nmod:poss	_	_
7	музыкасына	музыка	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	11	iobj	_	_
8	еуропалық	еуропалық	ADJ	adj	_	10	amod	_	_
9	музыка	музыка	NOUN	n	Case=Nom	10	nmod:poss	_	_
10	мәдениеті	мәдениет	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	11	nsubj	_	_
11	әсер	әсер	NOUN	n	Case=Nom	12	obj	_	_
12	етті	ет	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
13	.	.	PUNCT	sent	_	12	punct	_	_

~~~


