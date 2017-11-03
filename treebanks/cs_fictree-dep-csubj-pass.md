---
layout: base
title:  'Statistics of csubj:pass in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_fictree-dep-csubj.html">csubj</a></tt>.

25 nodes (0%) are attached to their parents as `csubj:pass`.

21 instances of `csubj:pass` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.92.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (20; 80% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (4; 16% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj:pass	color:blue
1	Zřejmě	zřejmě	PART	TT-------------	_	3	advmod	_	_
2	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	_	_
3	předpokládalo	předpokládat	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	,	,	PUNCT	Z:-------------	_	9	punct	_	_
5	že	že	SCONJ	J,-------------	_	9	mark	_	_
6	hudbu	hudba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	9	obj	_	_
7	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	_	_
8	obecenstvo	obecenstvo	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	9	nsubj	_	_
9	domyslí	domyslet	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj:pass	_	_
10	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 csubj:pass	color:blue
1	"	"	PUNCT	Z:-------------	_	5	punct	_	_
2	Tomu	ten	DET	PDMS3----------	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	5	obj	_	_
3	druhému	druhý	ADJ	CrMS3----------	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|NumType=Ord	2	amod	_	_
4	bylo	být	AUX	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	aux:pass	_	_
5	souzeno	souzený	ADJ	VsNS------AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	,	,	PUNCT	Z:-------------	_	10	punct	_	_
7	že	že	SCONJ	J,-------------	_	10	mark	_	_
8	ten	ten	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	den	den	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	10	obl	_	_
10	najde	najít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj:pass	_	_
11	peněženku	peněženka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	10	obj	_	_
12	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	14	case	_	_
13	tisíci	tisíc	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	14	nmod	_	_
14	dináry	dinár	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	11	nmod	_	_
15	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 csubj:pass	color:blue
1	Tady	tady	ADV	Db-------------	PronType=Dem	5	advmod	_	_
2	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	3	case	_	_
3	vesnici	vesnice	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	_	_
4	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	_
5	říká	říkat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	,	,	PUNCT	Z:-------------	_	13	punct	_	_
7	že	že	SCONJ	J,-------------	_	13	mark	_	_
8	některé	některý	DET	PZIP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	10	det	_	_
9	ty	ten	DET	PDIP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	10	det	_	_
10	léky	lék	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	13	nsubj	_	_
11	nejsou	být	AUX	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
12	oficiálně	oficiálně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	13	advmod	_	_
13	povolené	povolený	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	5	csubj:pass	_	_
14	a	a	CCONJ	J^-------------	_	17	cc	_	_
15	že	že	SCONJ	J,-------------	_	17	mark	_	_
16	je	on	PRON	PPIP4--3-------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	17	obj	_	_
17	zkoušejí	zkoušet	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	conj	_	_
18	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	19	case	_	_
19	dobrovolnících	dobrovolník	NOUN	NNMP6-----A----	Animacy=Anim|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	17	obl	_	_
20	.	.	PUNCT	Z:-------------	_	5	punct	_	_
21	"	"	PUNCT	Z:-------------	_	5	punct	_	_

~~~


