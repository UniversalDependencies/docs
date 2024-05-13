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
1	Zřejmě	zřejmě	PART	TT-------------	_	3	advmod	3:advmod	_
2	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	3:expl:pass	_
3	předpokládalo	předpokládat	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
5	že	že	SCONJ	J,-------------	_	9	mark	9:mark	_
6	hudbu	hudba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	9	obj	9:obj	_
7	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	9:expl:pv	_
8	obecenstvo	obecenstvo	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	9	nsubj	9:nsubj	_
9	domyslí	domyslet	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj:pass	3:csubj:pass	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 csubj:pass	color:blue
1	"	"	PUNCT	Z:-------------	_	5	punct	5:punct	SpaceAfter=No
2	Tomu	ten	DET	PDMS3----------	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	5	obl:arg	5:obl:arg:dat	_
3	druhému	druhý	ADJ	CrMS3----------	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|NumType=Ord	2	amod	2:amod	_
4	bylo	být	AUX	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	aux:pass	5:aux:pass	_
5	souzeno	souzený	ADJ	VsNS------AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
7	že	že	SCONJ	J,-------------	_	10	mark	10:mark	_
8	ten	ten	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	9	det	9:det	_
9	den	den	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	10	obl	10:obl:acc	_
10	najde	najít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj:pass	5:csubj:pass	_
11	peněženku	peněženka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	10	obj	10:obj	_
12	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	14	case	14:case	_
13	tisíci	tisíc	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	14	nmod	14:nmod:ins	_
14	dináry	dinár	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	11	nmod	11:nmod:s:ins	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 csubj:pass	color:blue
1	Tady	tady	ADV	Db-------------	PronType=Dem	5	advmod	5:advmod	_
2	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	3	case	3:case	_
3	vesnici	vesnice	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	5:obl:v:loc	_
4	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	5:expl:pass	_
5	říká	říkat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	13	punct	13:punct	_
7	že	že	SCONJ	J,-------------	_	13	mark	13:mark	_
8	některé	některý	DET	PZIP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	10	det	10:det	_
9	ty	ten	DET	PDIP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	10	det	10:det	_
10	léky	lék	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	13	nsubj	13:nsubj	_
11	nejsou	být	AUX	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	13:cop	_
12	oficiálně	oficiálně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	13	advmod	13:advmod	_
13	povolené	povolený	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	5	csubj:pass	5:csubj:pass	_
14	a	a	CCONJ	J^-------------	_	17	cc	17:cc	_
15	že	že	SCONJ	J,-------------	_	17	mark	17:mark	_
16	je	on	PRON	PPIP4--3-------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	17	obj	17:obj	_
17	zkoušejí	zkoušet	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	conj	5:csubj:pass|13:conj	_
18	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	19	case	19:case	_
19	dobrovolnících	dobrovolník	NOUN	NNMP6-----A----	Animacy=Anim|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	17	obl	17:obl:na:loc	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	SpaceAfter=No
21	"	"	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


