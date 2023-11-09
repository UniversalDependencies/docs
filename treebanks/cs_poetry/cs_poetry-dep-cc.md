---
layout: base
title:  'Statistics of cc in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `cc`

This relation is universal.

212 nodes (3%) are attached to their parents as `cc`.

210 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66981132075472.

The following 11 pairs of parts of speech are connected with `cc`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (96; 45% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (77; 36% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (15; 7% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (9; 4% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (7; 3% instances), <tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 cc	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc	color:blue
1	A	a	CCONJ	J^-------------	_	2	cc	_	_
2	život	život	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
3	ten	ten	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Rozhučela	rozhučet	VERB	VpQW---XR-AA---	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	_
3	Svitava	Svitava	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	1	nsubj	_	_
4	kalná	kalný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
5	a	a	CCONJ	J^-------------	_	6	cc	_	_
6	rozvodněná	rozvodněný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


