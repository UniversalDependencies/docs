---
layout: base
title:  'Statistics of obl:agent in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_lines-dep-obl-unmarked.html">obl:unmarked</a></tt>.

4 nodes (0%) are attached to their parents as `obl:agent`.

4 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 obl:agent	color:blue
1	The	the	DET	DEF	Definite=Def|PronType=Art	2	det	_	_
2	orders	order	NOUN	PL-NOM	Number=Plur	11	nsubj	_	_
3	given	give	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	2	acl:relcl	_	_
4	by	by	ADP	_	_	9	case	_	_
5	these	this	DET	DEM-PL	Number=Plur|PronType=Dem	9	det	_	_
6	young	young	ADJ	POS	Degree=Pos	9	amod	_	_
7	gentile	gentile	ADJ	POS	Degree=Pos	9	amod	_	_
8	uniformed	uniformed	ADJ	POS	Degree=Pos	9	amod	_	_
9	females	female	NOUN	PL-NOM	Number=Plur	3	obl:agent	_	_
10	are	be	AUX	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	nothing	nothing	PRON	NEG-SG	Number=Sing|PronType=Neg	0	root	_	_
12	to	to	ADP	_	_	13	case	_	_
13	them	they	PRON	PERS-P3PL-ACC	Case=Acc|Number=Plur|Person=3|PronType=Prs	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	Period	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 obl:agent	color:blue
1	E	E	PROPN	INTL	Number=Sing	12	nsubj	_	_
2	E	E	PROPN	INTL	Number=Sing	1	flat	_	_
3	Cummings	Cummings	PROPN	SG-NOM	Number=Sing	1	flat	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	5	punct	_	_
5	locked	lock	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	1	acl	_	_
6	up	up	ADV	_	_	5	compound:prt	_	_
7	by	by	ADP	_	_	10	case	_	_
8	the	the	DET	DEF	Definite=Def|PronType=Art	10	det	_	_
9	French	french	ADJ	POS	Degree=Pos	10	amod	_	_
10	government	government	NOUN	SG-NOM	Number=Sing	6	obl:agent	_	SpaceAfter=No
11	,	,	PUNCT	Comma	_	5	punct	_	_
12	finds	find	VERB	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
13	his	his	PRON	P3SG-GEN	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	15	nmod:poss	_	_
14	aesthetic	aesthetic	ADJ	POS	Degree=Pos	15	amod	_	_
15	paradise	paradise	NOUN	SG-NOM	Number=Sing	12	obj	_	_
16	in	in	ADP	_	_	19	case	_	_
17	the	the	DET	DEF	Definite=Def|PronType=Art	19	det	_	_
18	detention	detention	NOUN	SG-NOM	Number=Sing	19	compound	_	_
19	camp	camp	NOUN	SG-NOM	Number=Sing	12	obl	_	_
20	of	of	ADP	_	_	21	case	_	_
21	Ferte	Ferte	PROPN	SG-NOM	Number=Sing	19	nmod	_	_
22	Mace	Mace	PROPN	SG-NOM	Number=Sing	21	flat	_	SpaceAfter=No
23	.	.	PUNCT	Period	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	That	that	PRON	DEM-SG	Number=Sing|PronType=Dem	4	nsubj:pass	_	_
2	was	be	AUX	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
3	also	also	ADV	_	_	4	advmod	_	_
4	mentioned	mention	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	by	by	ADP	_	_	7	case	_	_
6	Mrs	Mrs	NOUN	SG-NOM	Number=Sing	7	nmod:unmarked	_	_
7	Oomen-Ruijten	Oomen-ruijten	PROPN	SG-NOM	Number=Sing	4	obl:agent	_	_
8	and	and	CCONJ	_	_	9	cc	_	_
9	Mrs	Mrs	NOUN	SG-NOM	Number=Sing	10	nmod:unmarked	_	_
10	Glase	Glase	PROPN	SG-NOM	Number=Sing	7	conj	_	SpaceAfter=No
11	.	.	PUNCT	Period	_	4	punct	_	_

~~~


