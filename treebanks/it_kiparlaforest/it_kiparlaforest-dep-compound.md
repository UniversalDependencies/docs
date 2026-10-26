---
layout: base
title:  'Statistics of compound in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `compound`

This relation is universal.

8 nodes (0%) are attached to their parents as `compound`.

8 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.875.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (6; 75% instances), <tt><a href="it_kiparlaforest-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_kiparlaforest-pos-INTJ.html">INTJ</a></tt> (1; 13% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	per	per	ADP	_	_	2	mark	_	Begin=1875.739|KID=733-0
2	dire	dire	VERB	_	VerbForm=Inf	0	root	_	KID=733-1
3	chewing	chewing	NOUN	_	_	2	obj	_	KID=733-2
4	gum	gum	NOUN	_	_	3	compound	_	End=1876.671|KID=733-3

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	ha	ha	INTJ	_	_	4	discourse	_	KID=378-3|OverlappingGroup=66
2	ha	ha	INTJ	_	_	1	compound	_	End=583.19|KID=378-4|OverlappingGroup=66
3	viene	venire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	Begin=583.267|KID=380-0
4	oscurato	oscurare	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	KID=380-1
5	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	KID=380-2
6	nome	nome	NOUN	_	Gender=Masc|Number=Sing	4	nsubj:pass	_	KID=380-3
7	non	non	ADV	_	PronType=Neg	8	advmod	_	KID=380-4
8	sapranno	sapere	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	4	conj	_	KID=380-5
9	che	che	ADV	_	_	10	mark	_	KID=380-6
10	mangio	mangiare	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	ccomp	_	KID=380-7
11	l'	il	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	KID=380-8|SpaceAfter=No
12	insalata	insalata	NOUN	_	Gender=Fem|Number=Sing	10	obj	_	End=585.94|KID=380-9

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	chubby	Chubby	PROPN	_	_	0	root	_	Begin=938.375|KID=628-0
2	bunny	Bunny	PROPN	_	_	1	compound	_	End=939.04|KID=628-1|OverlappingGroup=110

~~~


