---
layout: base
title:  'Statistics of case in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `case`

This relation is universal.

544 nodes (9%) are attached to their parents as `case`.

544 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33639705882353.

The following 7 pairs of parts of speech are connected with `case`: <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-ADP.html">ADP</a></tt> (447; 82% instances), <tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_poetry-pos-ADP.html">ADP</a></tt> (65; 12% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-ADP.html">ADP</a></tt> (14; 3% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-ADP.html">ADP</a></tt> (13; 2% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 case	color:blue
1	Krákorala	krákorat	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	_
3	svém	svůj	DET	P8ZS6----------	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	4	det	_	_
4	plenu	plen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	1	obl:arg	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	7	punct	_	_
6	družkám	družka	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur|Polarity=Pos	7	nmod	_	_
7	sovám	sova	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur|Polarity=Pos	1	obl	_	_
8	–	–	PUNCT	Z:-------------	_	10	punct	_	_
9	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	_
10	jelenu	jelen	NOUN	NNMS6-----A---1	Animacy=Anim|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	1	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Deset	deset	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	2	nummod:gov	_	_
2	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	6	obl	_	_
3	už	už	ADV	Db-------------	_	6	advmod	_	_
4	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	_
5	tom	ten	DET	PDZS6----------	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	6	obl:arg	_	_
6	píše	psát	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	8	punct	_	_
8	pan	pan	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	_	_
9	Vejr	Vejr	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	8	flat	_	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	_
11	Švandě	Švanda	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	_	_
12	Dudákovi	Dudák	PROPN	NNMS6-----A----	Animacy=Anim|Case=Loc|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	11	flat	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


