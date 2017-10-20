---
layout: base
title:  'Statistics of csubj in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="cs_fictree-dep-csubj-pass.html">csubj:pass</a></tt>.

499 nodes (0%) are attached to their parents as `csubj`.

451 instances of `csubj` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.7815631262525.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (302; 61% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (94; 19% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (37; 7% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (18; 4% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (12; 2% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (12; 2% instances), <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 csubj	color:blue
1	Pak	pak	ADV	Db-------------	_	5	advmod	_	_
2	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	_
3	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	5	obl	_	_
4	plaše	plaše	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	_
5	mžikla	mžiknout	VERB	VpFS----R-AA--1	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	a	a	CCONJ	J^-------------	_	7	cc	_	_
7	bylo	být	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	conj	_	_
8	znát	znát	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	7	ccomp	_	_
9	,	,	PUNCT	Z:-------------	_	13	punct	_	_
10	že	že	SCONJ	J,-------------	_	13	mark	_	_
11	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	13	obj	_	_
12	horečně	horečně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	13	advmod	_	_
13	pozoruje	pozorovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	csubj	_	_
14	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	Je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
2	ale	ale	CCONJ	J^-------------	_	4	cc	_	_
3	také	také	ADV	Db-------------	_	4	advmod	_	_
4	možné	možný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
5	pokorně	pokorně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	_	_
6	mlčet	mlčet	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	csubj	_	_
7	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj	color:blue
1	Potíž	potíž	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	_
2	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	,	,	PUNCT	Z:-------------	_	8	punct	_	_
4	že	že	SCONJ	J,-------------	_	8	mark	_	_
5	takových	takový	DET	PDMP2----------	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|PronType=Dem	6	det	_	_
6	lidí	člověk	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	8	obj	_	_
7	moc	moc	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	6	det:numgov	_	_
8	nemáme	mít	VERB	VB-P---1P-NA---	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	_	_
9	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


