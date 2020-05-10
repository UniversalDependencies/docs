---
layout: base
title:  'Statistics of amod in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `amod`

This relation is universal.

1835 nodes (10%) are attached to their parents as `amod`.

1709 instances of `amod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23596730245232.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1727; 94% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (88; 5% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Nové	nový	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	2:amod	_
2	výdaje	výdaj	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj	_
3	pocházejí	pocházet	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	7:case	LId=z-1
5	bohatých	bohatý	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	_
6	bankovních	bankovní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	_
7	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	3	obl	3:obl:z:gen	_
8	Clintonové	Clintonová	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Sur|Number=Sing|Polarity=Pos	7	nmod	7:nmod:gen	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Epicentrem	epicentrum	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	_
2	těchto	tento	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	3	det	3:det	_
3	voleb	volba	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	1	nmod	1:nmod:gen	_
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	1:cop	_
5	Severní	severní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	Karolína	Karolína	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Giv|Number=Sing|Polarity=Pos	1	nsubj	1:nsubj	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Příběh	příběh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	5:nsubj	_
2	Dosse	Doss	PROPN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	1	nmod	1:nmod:gen	_
3	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	4:case	LId=v-1
4	sobě	se	PRON	P6-X6----------	Case=Loc|PronType=Prs|Reflex=Yes	5	obl	5:obl:v:loc	LGloss=(zvr._zájmeno/částice)
5	obsahuje	obsahovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	něco	něco	PRON	PZ--4----------	Case=Acc|PronType=Ind	5	obj	5:obj	_
7	neobvyklého	obvyklý	ADJ	AANS2----1N----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	6	amod	6:amod	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
9	což	což	PRON	PE--1----------	Case=Nom|PronType=Rel	11	nsubj	11:nsubj	LId=což-1
10	ho	on	PRON	PHZS4--3-------	Case=Acc|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	11	obj	11:obj|12:nsubj	LId=on-1
11	činí	činit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	0:root|5:conj	_
12	přitažlivým	přitažlivý	ADJ	AAIP3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	11	xcomp	11:xcomp	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


