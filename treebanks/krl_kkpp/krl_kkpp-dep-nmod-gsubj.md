---
layout: base
title:  'Statistics of nmod:gsubj in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `nmod:gsubj`

This relation is a language-specific subtype of <tt><a href="krl_kkpp-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="krl_kkpp-dep-nmod-poss.html">nmod:poss</a></tt>.

5 nodes (0%) are attached to their parents as `nmod:gsubj`.

5 instances of `nmod:gsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 2 pairs of parts of speech are connected with `nmod:gsubj`: <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (4; 80% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nmod:gsubj	color:blue
1	Mie	mie	PRON	PRON	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	olin	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	Ainon	Aino	PROPN	PROPN	Case=Gen|Number=Sing	4	nmod:poss	_	PropnType=Ant|Gender=Female
4	roolissa	rooli	NOUN	NOUN	Case=Ine|Number=Sing	9	obl	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	9	punct	_	_
6	ka	ka	CCONJ	CCONJ	_	7	cc	_	_
7	miun	mie	PRON	PRON-	Case=Gen|Number=Sing|Person=1|PronType=Prs	9	nmod:gsubj	_	_
8	ei	ei	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	_
9	pitän	piteä	VERB	VERB	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
10	hukkuo	hukkuo	VERB	VERB	VerbForm=Inf	9	xcomp	_	_
11	veteh	vesi	NOUN	NOUN	Case=Ill|Number=Sing	10	obl	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 30 nmod:gsubj	color:blue
1	Muan	mua	NOUN	NOUN	Case=Gen|Number=Sing	4	nmod:poss	_	_
2	tunti	tunti	NOUN	NOUN	Case=Nom|Number=Sing	1	flat:name	_	_
3	-aktijon	-aktijo	NOUN	NOUN	Case=Gen|Number=Sing	1	compound	_	_
4	tarkotukšena	tarkotuš	NOUN	NOUN	Case=Ess|Number=Sing	0	root	_	_
5	ei	ei	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
6	ole	olla	AUX	AUX	Connegative=Yes|Number=Sing	4	cop	_	_
7	šähkön	šähkö	NOUN	NOUN	Case=Gen|Number=Sing	8	nmod:poss	_	_
8	šiäštö	šiäštö	NOUN	NOUN	Case=Nom|Number=Sing	4	nsubj:cop	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	4	punct	_	_
10	kun	kun	SCONJ	SCONJ	_	13	mark	_	_
11	ihmisien	ihmini	NOUN	NOUN	Case=Gen|Number=Plur	13	nmod:poss	_	_
12	huomijon	huomijo	NOUN	NOUN	Case=Gen|Number=Sing	13	nmod:poss	_	_
13	kiinittämini	kiinitämini	NOUN	NOUN	Case=Nom|Number=Sing	4	conj	_	_
14	muajilman	muajilma	NOUN	NOUN	Case=Gen|Number=Sing	16	nmod:poss	_	_
15	luonnon	luonto	NOUN	NOUN	Case=Gen|Number=Sing	16	nmod:poss	_	_
16	proplemoih	proplema	NOUN	NOUN	Case=Ill|Number=Plur	13	obl	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	13	punct	_	_
18	kumpasista	kumpaine	PRON	PRON	Case=Ela|Number=Plur|PronType=Ind	20	obl	_	_
19	šuurena	šuuri	ADJ	ADJ	Case=Ess|Number=Sing	20	amod	_	_
20	proplemana	proplema	NOUN	NOUN	Case=Ess|Number=Sing	4	conj	_	_
21	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	cop	_	_
22	meijän	myö	PRON	PRON	Case=Gen|Number=Plur|Person=1|PronType=Prs	25	nmod:poss	_	_
23	planetan	planetta	NOUN	NOUN	Case=Gen|Number=Sing	25	nmod:poss	_	_
24	ilmašton	ilmašto	NOUN	NOUN	Case=Gen|Number=Sing	25	nmod:poss	_	_
25	muuttumini	muuttumini	NOUN	NOUN	Case=Nom|Number=Sing	20	nsubj:cop	_	_
26	šekä	šekä	CCONJ	CCONJ	_	27	cc	_	Weight.01
27	näyttyä	näyttyä	VERB	VERB	VerbForm=Inf	25	acl	_	SpaceAfter=No
28	,	,	PUNCT	PUNCT	_	27	punct	_	_
29	jotta	jotta	SCONJ	SCONJ	_	31	mark	_	_
30	ihmisien	ihmini	NOUN	NOUN	Case=Gen|Number=Plur	31	nmod:gsubj	_	_
31	pitäy	piteä	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
32	yhistäytyö	yhistäytyö	VERB	VERB	VerbForm=Inf	31	xcomp	_	_
33	tätä	tämä	PRON	PRON	Case=Par|Number=Sing|PronType=Dem	34	det	_	_
34	proplemua	proplema	NOUN	NOUN	Case=Par|Number=Sing	31	obl	_	_
35	vaštah	vaštah	ADP	ADP	_	34	case	_	_
36	ta	ta	CCONJ	CCONJ	_	40	cc	_	_
37	jotta	jotta	SCONJ	SCONJ	_	40	mark	_	_
38	še	še	PRON	PRON	Case=Nom|Number=Sing|PronType=Dem	40	nsubj:cop	_	_
39	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	40	cop	_	_
40	mahollista	mahollini	ADJ	ADJ	Case=Par|Number=Sing	27	acl:relcl	_	SpaceAfter=No
41	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


