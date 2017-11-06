---
layout: base
title:  'Statistics of appos in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `appos`

This relation is universal.

108 nodes (0%) are attached to their parents as `appos`.

108 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44444444444444.

The following 15 pairs of parts of speech are connected with `appos`: <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (37; 34% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-PROPN.html">PROPN</a></tt> (22; 20% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (17; 16% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (10; 9% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (6; 6% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-PROPN.html">PROPN</a></tt> (5; 5% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ga-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 appos	color:blue
1	Cuimhní	cuimhne	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	0	root	_	_
2	ó	ó	ADP	Simp	_	3	case	_	_
3	áit	áit	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nmod	_	_
4	éigin	éigin	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	3	amod	_	_
5	eile	eile	DET	Det	PronType=Dem	3	det	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	8	punct	_	_
7	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	blianta	bliain	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Plur	1	appos	_	_
9	fada	fada	ADJ	Adj	Degree=Pos	8	amod	_	_
10	ó	ó	ADP	Simp	_	11	case	_	_
11	shin	sin	PRON	Dem	PronType=Dem	8	nmod	_	SpaceAfter=No
12	?	?	PUNCT	?	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	Níl	bí	VERB	PresInd	Mood=Ind|Polarity=Neg|Tense=Pres	0	root	_	_
2	fágtha	fágtha	ADJ	Adj	VerbForm=Part	1	xcomp:pred	_	_
3	den	de	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	seandream	dream	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	obl	_	_
5	ach	ach	SCONJ	Subord	_	1	mark:prt	_	_
6	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	Ceannaire	ceannaire	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	9	punct	_	_
9	Mary	Mary	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	7	appos	_	_
10	Harney	Harney	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	flat:name	_	SpaceAfter=No
11	,	,	PUNCT	Punct	_	12	punct	_	_
12	agus	agus	CCONJ	Coord	_	13	cc	_	_
13	Liz	Liz	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	7	conj	_	_
14	O'	o'	PART	Pat	PartType=Pat	13	flat:name	_	_
15	Donnell	Donnell	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	13	flat:name	_	SpaceAfter=No
16	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Helena	Helena	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
3	McMahon	McMahon	PROPN	Noun	Case=Gen|Gender=Masc|Number=Sing	2	flat:name	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	5	punct	_	_
5	duine	duine	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	appos	_	_
6	a	a	PART	Vb	PartType=Vb|PronType=Rel	7	nsubj	_	_
7	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	5	acl:relcl	_	_
8	baint	baint	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	7	nsubj	_	_
9	aici	ag	ADP	Prep	Gender=Fem|Number=Sing|Person=3	7	obl:prep	_	_
10	le	le	ADP	Simp	_	11	case	_	_
11	healaín	ealaín	NOUN	Noun	Case=NomAcc|Form=HPref|Gender=Fem|Number=Sing	7	obl	_	_
12	phobail	pobal	NOUN	Noun	Case=Gen|Form=Len|Gender=Masc|Number=Sing	11	compound	_	_
13	i	i	ADP	Simp	_	14	case	_	_
14	Luimneach	Luimneach	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


