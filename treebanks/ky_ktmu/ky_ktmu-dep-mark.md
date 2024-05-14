---
layout: base
title:  'Statistics of mark in UD_Kyrgyz-KTMU'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-KTMU: Relations: `mark`

This relation is universal.

38 nodes (1%) are attached to their parents as `mark`.

36 instances of `mark` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23684210526316.

The following 8 pairs of parts of speech are connected with `mark`: <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (11; 29% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (10; 26% instances), <tt><a href="ky_ktmu-pos-ADV.html">ADV</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (6; 16% instances), <tt><a href="ky_ktmu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (3; 8% instances), <tt><a href="ky_ktmu-pos-PRON.html">PRON</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (3; 8% instances), <tt><a href="ky_ktmu-pos-NUM.html">NUM</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (2; 5% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-SCONJ.html">SCONJ</a></tt> (2; 5% instances), <tt><a href="ky_ktmu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 mark	color:blue
1	Сенин	сен	PRON	PRP	Case=Gen|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	_
2	союлуң	союл	NOUN	NN	Case=Acc|Number=Sing|Person=3	8	obj	_	_
3	карагай	карагай	NOUN	NN	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
4	жаргандай	жаргандай	ADV	ADV	_	3	case	_	_
5	такылдап	такыл	VERB	VB	Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Conv	8	advcl	_	_
6	турганы	тур	VERB	VB	Number=Sing|Person=3|Person[psor]=2|Polarity=Pos|Tense=Past|VerbForm=Conv	8	ccomp	_	_
7	да	да	CCONJ	CCONJ	_	6	mark	_	_
8	эсимде	эсимде	NOUN	NN	Aspect=Perf|Case=Gen,Loc|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	PCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 mark	color:blue
1	Мени	мен	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	nmod	_	_
2	атам	ата	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	obl	_	_
3	кыстабадыбы	кыста	VERB	VB	Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Part	12	ccomp	_	SpaceAfter=No
4	,	,	PUNCT	PCT	_	3	punct	_	_
5	мен	мен	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
6	азыр	азыр	ADV	ADV	_	12	advmod	_	_
7	баламын	бала	NOUN	NN	Case=Gen|Number=Sing|Person=1	12	obj	_	_
8	да	да	CCONJ	CCONJ	_	7	mark	_	SpaceAfter=No
9	,	,	PUNCT	PCT	_	8	punct	_	_
10	тил	тил	NOUN	NN	Case=Nom|Number=Sing|Person=3	12	nmod	_	_
11	алышым	алыш	VERB	VB	Case=Gen|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Part	12	compound	_	_
12	керек	керек	VERB	VB	Aspect=Prog|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
13	.	.	PUNCT	PCT	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	Анан	анан	ADV	ADV	_	9	advmod	_	_
2	да	да	CCONJ	CCONJ	_	1	mark	_	_
3	кайсы	кайсы	DET	DET	_	4	det	_	_
4	жерден	жер	NOUN	NN	Case=Abl|Number=Sing|Person=3	9	obl	_	_
5	төрт	төрт	NUM	NUM	NumType=Card	6	nummod	_	_
6	живец	живец	NOUN	NN	Case=Nom|Number=Sing|Person=3	9	nmod	_	_
7	таба	тап	VERB	VB	Person=3|Polarity=Pos|Tense=Pres|VerbForm=Conv	8	advcl	_	_
8	аларымды	ала	ADV	ADV	Person=1	9	compound	_	_
9	билем	бил	NOUN	NN	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
10	.	.	PUNCT	PCT	_	9	punct	_	_

~~~


