---
layout: base
title:  'Statistics of det:numgov in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="cs_fictree-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_fictree-dep-det-nummod.html">det:nummod</a></tt>.

217 nodes (0%) are attached to their parents as `det:numgov`.

203 instances of `det:numgov` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.48847926267281.

The following 3 pairs of parts of speech are connected with `det:numgov`: <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (204; 94% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (11; 5% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:numgov	color:blue
1	Víte	vědět	VERB	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	_
3	mrzí	mrzet	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	_
4	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	3	obj	3:obj	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	6:case	_
6	životě	život	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	obl	3:obl:v:loc	_
7	hodně	hodně	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	8	det:numgov	8:det:numgov	_
8	věcí	věc	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 det:numgov	color:blue
1	Při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	_
2	každém	každý	DET	PLIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|PronType=Tot	3	det	3:det	_
3	závanu	závan	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	7:obl:při:loc	_
4	větru	vítr	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	3	nmod	3:nmod:gen	_
5	jich	on	PRON	PPIP2--3-------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	7	nsubj	7:nsubj	_
6	několik	několik	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	5	det:numgov	5:det:numgov	_
7	spadne	spadnout	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	9:case	_
9	zem	země	NOUN	NNFS4-----A---1	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	7	obl	7:obl:na:acc	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 det:numgov	color:blue
1	Tehdy	tehdy	ADV	Db-------------	PronType=Dem	2	advmod	2:advmod	_
2	byla	být	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
3	velká	velký	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	4:amod	_
4	nouze	nouze	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	2	nsubj	2:nsubj	_
5	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	6:case	_
6	byty	byt	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	4	nmod	4:nmod:o:acc	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
8	přišlo	přijít	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	2	conj	0:root|2:conj	_
9	sem	sem	ADV	Db-------------	_	8	advmod	8:advmod	_
10	hodně	hodně	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	12	det:numgov	12:det:numgov	_
11	vyhnaných	vyhnaný	ADJ	AAMP2----1A----	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	12	amod	12:amod	_
12	Čechů	Čech	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Nat|Number=Plur|Polarity=Pos	8	nsubj	8:nsubj	_
13	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	14	case	14:case	_
14	pohraničí	pohraničí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	12	nmod	12:nmod:z:gen	_
15	i	i	CCONJ	J^-------------	_	16	cc	16:cc	_
16	emigrantů	emigrant	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	12	conj	8:nsubj|12:conj	_
17	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	19	case	19:case	_
18	sousedních	sousední	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	19	amod	19:amod	_
19	zemí	země	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	16	nmod	16:nmod:z:gen	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


