---
layout: base
title:  'Statistics of parataxis in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `parataxis`

This relation is universal.

122 nodes (0%) are attached to their parents as `parataxis`.

84 instances of `parataxis` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.41803278688525.

The following 17 pairs of parts of speech are connected with `parataxis`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (66; 54% instances), <tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (14; 11% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (9; 7% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (6; 5% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-X.html">X</a></tt>-<tt><a href="cs_fictree-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	Ponechejte	ponechat	VERB	Vi-P---2--A----	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	0:root	_
2	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	1:expl:pv	_
3	ho	on	PRON	PHMS4--3-------	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	1	obj	1:obj	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
5	prosím	prosit	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	1:parataxis	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
7	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	_
8	paměti	paměť	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	1	obl	1:obl:v:loc	_
9	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	11	case	11:case	_
10	tímto	tento	DET	PDIS7----------	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	11	det	11:det	_
11	úsměvem	úsměv	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	3	nmod	3:nmod:s:ins	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	nebudu	být	AUX	VB-S---1F-NA---	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	_
3	tom	ten	DET	PDNS6----------	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	5	obl:arg	5:obl:arg:o:loc	_
4	radši	rád	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	5	advmod	5:advmod	_
5	mluvit	mluvit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	parataxis	1:parataxis	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Plod	plod	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	Z:-------------	_	3	punct	3:punct	_
3	souplodí	souplodí	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	1	appos	1:appos	_
4	(	(	PUNCT	Z:-------------	_	5	punct	5:punct	SpaceAfter=No
5	sbírá	sbírat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	3:parataxis	_
6	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	5:expl:pass	_
7	jednou	jednou	ADV	Cv-------------	NumType=Mult	5	obl	5:obl	_
8	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	9:case	_
9	měsíc	měsíc	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	7:obl:za:acc	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
11	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	12:case	_
12	června	červen	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	5:obl:od:gen	_
13	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	14	case	14:case	_
14	září	září	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	5:obl:do:gen	SpaceAfter=No
15	)	)	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


