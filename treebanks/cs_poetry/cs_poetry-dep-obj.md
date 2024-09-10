---
layout: base
title:  'Statistics of obj in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `obj`

This relation is universal.

263 nodes (4%) are attached to their parents as `obj`.

142 instances of `obj` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.38022813688213.

The following 11 pairs of parts of speech are connected with `obj`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (170; 65% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (63; 24% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (11; 4% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt> (8; 3% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	Až	až	SCONJ	J,-------------	_	4	mark	_	_
2	všechny	všechen	DET	PLYP4----------	Case=Acc|Gender=Masc|Number=Plur|PronType=Tot	3	det	_	_
3	draky	drak	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	4	obj	_	_
4	posekám	posekat	VERB	VB-S---1P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	4	punct	_	_
6	chci	chtít	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	přijít	přijít	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	6	xcomp	_	_
8	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	9	case	_	_
9	Tobě	ty	PRON	P6-X3----------	Case=Dat|Number=Sing|Person=2|PronType=Prs	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	11	punct	_	_
11	nevím	vědět	VERB	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
12	kam	kam	ADV	Db-------------	PronType=Int	11	advmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Rel	2	obj	_	_
2	chce	chtít	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
3	Paříž	Paříž	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	2	punct	_	_
5	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	obj	_	_
6	chce	chtít	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	Pán	pán	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	nmod	_	_
8	Bůh	bůh	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obj	color:blue
1	Že	že	SCONJ	J,-------------	_	3	mark	_	SpacesBefore=\s
2	nejsem	být	AUX	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	čist	čist	ADJ	ACYS------A----	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	5	acl	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	obj	_	_
6	dobře	dobře	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	_	_
7	vím	vědět	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	13	punct	_	_
9	leč	leč	CCONJ	J,-------------	_	13	cc	_	_
10	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	_	_
11	hříchu	hřích	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	12	obl	_	_
12	žít	žít	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	13	xcomp	_	_
13	neumím	umět	VERB	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


