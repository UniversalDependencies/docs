---
layout: base
title:  'Statistics of iobj in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `iobj`

This relation is universal.

1742 nodes (1%) are attached to their parents as `iobj`.

891 instances of `iobj` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01836969001148.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (1059; 61% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (510; 29% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (78; 4% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (69; 4% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (24; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 iobj	color:blue
1	"	"	PUNCT	Z:-------------	_	9	punct	_	_
2	Že	že	SCONJ	J,-------------	_	4	mark	_	_
3	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	pravdivý	pravdivý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	11	ccomp	_	_
5	,	,	PUNCT	Z:-------------	_	4	punct	_	_
6	vám	ty	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	11	iobj	_	_
7	ale	ale	CCONJ	J^-------------	_	9	cc	_	_
8	budu	být	AUX	VB-S---1F-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux	_	_
9	moci	moci	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	0	root	_	_
10	snadno	snadno	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	11	advmod	_	_
11	dokázat	dokázat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	9	xcomp	_	_
12	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	"	"	PUNCT	Z:-------------	_	6	punct	_	_
2	Nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	6	obj	_	_
3	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
4	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	_
5	životě	život	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	iobj	_	_
6	nevěděla	vědět	VERB	VpFS----R-NA---	Gender=Fem|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	4	obj	_	_
2	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	_
3	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	iobj	_	_
4	říct	říci	VERB	Vf--------A---1	Polarity=Pos|VerbForm=Inf	0	root	_	_
5	.	.	PUNCT	Z:-------------	_	4	punct	_	_
6	.	.	PUNCT	Z:-------------	_	4	punct	_	_
7	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


