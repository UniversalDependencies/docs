---
layout: base
title:  'Statistics of iobj in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `iobj`

This relation is universal.

52 nodes (1%) are attached to their parents as `iobj`.

37 instances of `iobj` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34615384615385.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-PRON.html">PRON</a></tt> (41; 79% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (7; 13% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="el_cretan-pos-PRON.html">PRON</a></tt>-<tt><a href="el_cretan-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Ό,τι	ό,τι	PRON	PnRi	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	3	iobj	_	mwe=1
2	σε	εγώ	PRON	PnPe	Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs	3	obj	_	mwe=1
3	φωτίσει	φωτίζω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	mwe=1:VID
4	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Θιος	Θεός	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	7	punct	_	PunctType=Comm
7	αφεντικό	αφεντικό	NOUN	NoCm	Case=Voc|Gender=Neut|Number=Sing	3	vocative	_	SpaceAfter=No
8	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 iobj	color:blue
1	Ντα	ντα	INTJ	AdBa	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	AdBa	_	1	punct	_	PunctType=Comm
3	αυτός	αυτός	DET	PnDm	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	nsubj	_	_
4	δε	δεν	PART	PtNg	Polarity=Neg	5	advmod	_	_
5	δίνει	δίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	μούδε	μούδε	CCONJ	AdBa	_	5	cc	_	_
7	τ'	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	αγγέλου	άγγελος	NOUN	NoPr	Case=Gen|Gender=Masc|Number=Sing	5	iobj	_	_
9	του	εγώ	PRON	AtDf	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod	_	_
10	νερό	νερό	NOUN	NoCm	Case=Gen|Gender=Neut|Number=Sing	5	obj	_	SpaceAfter=No
11	.	.	PUNCT	PTERMP	_	5	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Και	και	CCONJ	CjCo	_	2	cc	_	_
2	γυρίζει	γυρίζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	και	και	CCONJ	CjCo	_	4	cc	_	_
4	κάνει	κάνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
5	του	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Νικολή	Νικολής	PROPN	NoPr	Case=Gen|Gender=Masc|Number=Sing	4	iobj	_	SpaceAfter=No
7	:	:	PUNCT	PTERM	_	4	punct	_	PunctType=Colo
8	«	«	PUNCT	OPUNCT	_	12	punct	_	PunctType=Quot|SpaceAfter=No
9	Μπας	μπας	PART	AdBa	ExtPos=ADV	12	advmod	_	_
10	και	και	CCONJ	CjCo	_	9	fixed	_	_
11	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	obj	_	_
12	'δες	βλέπω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	4	ccomp	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	12	punct	_	PunctType=Comm
14	κουμπαρίγκο	κουμπάρος	NOUN	AdBa	Case=Acc|Degree=Dim|Gender=Masc|Number=Sing	12	vocative	_	_
15	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	14	nmod	_	SpaceAfter=No
16	;	;	PUNCT	VbMn	_	12	punct	_	PunctType=Qest|SpaceAfter=No
17	»	»	PUNCT	VbMn	_	12	punct	_	PunctType=Quot|SpaceAfter=No
18	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


