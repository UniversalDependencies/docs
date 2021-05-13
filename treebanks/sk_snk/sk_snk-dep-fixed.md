---
layout: base
title:  'Statistics of fixed in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `fixed`

This relation is universal.

189 nodes (0%) are attached to their parents as `fixed`.

189 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12698412698413.

The following 12 pairs of parts of speech are connected with `fixed`: <tt><a href="sk_snk-pos-ADP.html">ADP</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (58; 31% instances), <tt><a href="sk_snk-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (45; 24% instances), <tt><a href="sk_snk-pos-ADP.html">ADP</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (31; 16% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (19; 10% instances), <tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (15; 8% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (6; 3% instances), <tt><a href="sk_snk-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sk_snk-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="sk_snk-pos-PART.html">PART</a></tt>-<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (4; 2% instances), <tt><a href="sk_snk-pos-PART.html">PART</a></tt>-<tt><a href="sk_snk-pos-PART.html">PART</a></tt> (3; 2% instances), <tt><a href="sk_snk-pos-PART.html">PART</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (1; 1% instances).


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
5	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	7	case	7:case	_
6	dôsledku	dôsledok	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	fixed	5:fixed	_
7	havárie	havária	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	4	obl	4:obl:v_dôsledok:gen	_
8	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	9	case	9:case	_
9	rakovinu	rakovina	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	4	obl	4:obl:na:acc	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 fixed	color:blue
1	Srdce	srdce	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	3:nsubj	_
2	mi	ja	PRON	PPhs3	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	obl:arg	3:obl:arg:dat	_
3	bilo	biť	VERB	VLescn+	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
4	ako	ako	SCONJ	O	_	5	mark	5:mark	_
5	zvon	zvon	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	dep	3:dep	SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	8:punct	_
7	no	no	CCONJ	O	_	8	cc	8:cc	_
8	odľahlo	odľahnúť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	3	conj	0:root|3:conj	_
9	mi	ja	PRON	PPhs3	Case=Dat|Number=Sing|Person=1|PronType=Prs	8	obl:arg	8:obl:arg:dat	SpaceAfter=No
10	,	,	PUNCT	Z	_	15	punct	15:punct	_
11	len	len	CCONJ	O	_	15	mark	15:mark	_
12	čo	čo	SCONJ	O	_	11	fixed	11:fixed	_
13	za	za	ADP	Eu7	AdpType=Prep|Case=Ins	14	case	14:case	_
14	sebou	seba	PRON	PPhs7	Case=Ins|Number=Sing|PronType=Prs|Reflex=Yes	15	obl	15:obl:za:ins	_
15	zavrela	zavrieť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	8	advcl	8:advcl:len_čo	SpaceAfter=No
16	.	.	PUNCT	Z	_	3	punct	3:punct	_

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
6	po	po	ADP	Eu6	AdpType=Prep|Case=Loc	8	case	8:case	_
7	pozdĺž	pozdĺž	ADP	Eu2	AdpType=Prep|Case=Gen	6	fixed	6:fixed	_
8	Dunaja	dunaj	PROPN	SSis2:r	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obl	5:obl:po_pozdĺž:gen	_
9	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	10	case	10:case	_
10	sever	sever	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	5:obl:na:acc	SpaceAfter=No
11	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


