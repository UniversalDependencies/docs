---
layout: base
title:  'Statistics of fixed in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `fixed`

This relation is universal.

156 nodes (0%) are attached to their parents as `fixed`.

156 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15384615384615.

The following 8 pairs of parts of speech are connected with `fixed`: <tt><a href="sk_snk-pos-ADP.html">ADP</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (58; 37% instances), <tt><a href="sk_snk-pos-ADP.html">ADP</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (31; 20% instances), <tt><a href="sk_snk-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (30; 19% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (19; 12% instances), <tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (7; 4% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (6; 4% instances), <tt><a href="sk_snk-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sk_snk-pos-PART.html">PART</a></tt> (4; 3% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	Ďalších	ďalší	ADJ	AAmp2x	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	2	amod	2:amod	_
2	10	10	NUM	0	NumForm=Digit	4	nsubj	4:nsubj	_
3	jednotlivcov	jednotlivec	NOUN	SSmp2	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	2	nmod	2:nmod:gen	_
4	zomrelo	zomrieť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
5	v	v	ADP	Eu6	AdpType=Prep|Case=Loc|ExtPos=ADP	7	case	7:case	_
6	dôsledku	dôsledok	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	fixed	5:fixed	_
7	havárie	havária	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	4	obl	4:obl:v_dôsledku:gen	_
8	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	9	case	9:case	_
9	rakovinu	rakovina	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	4	obl	4:obl:na:acc	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Sultán	sultán	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nmod	2:nmod:nom	_
2	Mustafa	mustafa	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
3	II	ii	NUM	0	NumForm=Digit	2	nummod	2:nummod	SpaceAfter=No
4	.	.	PUNCT	Z	_	3	punct	3:punct	_
5	vytiahol	vytiahnuť	VERB	VLdscm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
6	po	po	ADP	Eu6	AdpType=Prep|Case=Loc|ExtPos=ADP	8	case	8:case	_
7	pozdĺž	pozdĺž	ADP	Eu2	AdpType=Prep|Case=Gen	6	fixed	6:fixed	_
8	Dunaja	dunaj	PROPN	SSis2:r	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obl	5:obl:po_pozdĺž:gen	_
9	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	10	case	10:case	_
10	sever	sever	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	5:obl:na:acc	SpaceAfter=No
11	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Aj	aj	CCONJ	O	ExtPos=SCONJ	5	mark	5:mark	_
2	keď	keď	SCONJ	O	_	1	fixed	1:fixed	_
3	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
4	bolo	byť	AUX	VLescn+	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	5	cop	5:cop	_
5	nebezpečné	nebezpečný	ADJ	AAns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	9	advcl	9:advcl:aj_keď	SpaceAfter=No
6	,	,	PUNCT	Z	_	5	punct	5:punct	_
7	nebola	byť	AUX	VLescf-	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part	9	cop	9:cop	_
8	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj	9:nsubj	_
9	otázka	otázka	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
10	života	život	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod	9:nmod:gen	_
11	a	a	CCONJ	O	_	12	cc	12:cc	_
12	smrti	smrť	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	10	conj	9:nmod:gen|10:conj	SpaceAfter=No
13	.	.	PUNCT	Z	_	9	punct	9:punct	_

~~~


