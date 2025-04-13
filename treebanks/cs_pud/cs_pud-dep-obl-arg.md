---
layout: base
title:  'Statistics of obl:arg in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="cs_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="cs_pud-dep-obl-agent.html">obl:agent</a></tt>.

310 nodes (2%) are attached to their parents as `obl:arg`.

218 instances of `obl:arg` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6741935483871.

The following 15 pairs of parts of speech are connected with `obl:arg`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (169; 55% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (46; 15% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (29; 9% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (24; 8% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (21; 7% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (6; 2% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:arg	color:blue
1	Svědek	svědek	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
2	policii	policie	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing	3	obl:arg	3:obl:arg:dat	_
3	řekl	říci	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
5	že	že	SCONJ	J,-------------	_	10	mark	10:mark	LId=že-1
6	oběť	oběť	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	10:nsubj	_
7	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	LId=v-1
8	srpnu	srpen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	10	obl	10:obl:v:loc	_
9	podezřelého	podezřelý	ADJ	AAMS4----1A----	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	obj	10:obj	_
10	napadla	napadnout	VERB	VpQW---XR-AA--1	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	ccomp	3:ccomp	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:arg	color:blue
1	Divoch	divoch	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	xcomp	3:xcomp	_
2	mu	on	PRON	PHZS3--3-------	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	3	obl:arg	3:obl:arg:dat	LId=on-1
3	neříkám	říkat	VERB	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	jen	jen	PART	TT-------------	_	5	advmod:emph	5:advmod:emph	LId=jen-1
5	tak	tak	ADV	Db-------------	PronType=Dem	3	advmod	3:advmod	LId=tak-3
6	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	advmod	3:advmod	LId=pro-1
7	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	6	fixed	6:fixed	_
8	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	fixed	6:fixed	_
9	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	6	fixed	6:fixed	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:arg	color:blue
1	Samozřejmě	samozřejmě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	2	advmod	2:advmod	LDeriv=samozřejmý
2	nesmíme	smět	VERB	VB-P---1P-NA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	zapomenout	zapomenout	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	5:case	LId=na-1
5	Boba	Bob	PROPN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	3	obl:arg	3:obl:arg:na:acc	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
7	neustálý	neustálý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	8:amod	_
8	zdroj	zdroj	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	appos	5:appos	_
9	zábavy	zábava	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	8	nmod	8:nmod:gen	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


