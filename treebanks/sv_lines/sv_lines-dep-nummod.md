---
layout: base
title:  'Statistics of nummod in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `nummod`

This relation is universal.

325 nodes (0%) are attached to their parents as `nummod`.

259 instances of `nummod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34461538461538.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (288; 89% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (22; 7% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="sv_lines-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="sv_lines-pos-SYM.html">SYM</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="sv_lines-pos-X.html">X</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	En	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	3	det	_	_
2	beriden	beriden	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	3	amod	_	_
3	eskort	eskort	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
4	på	på	ADP	_	_	7	case	_	_
5	omkring	omkring	ADV	_	_	6	advmod	_	_
6	30	30	NUM	CARD-PL	_	7	nummod	_	_
7	man	man	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Comma	_	3	punct	_	_
9	alla	all	PRON	TOT-PL-NOM	Definite=Ind|Number=Plur|PronType=Tot	10	nsubj	_	_
10	beväpnade	beväpna	VERB	AD-PL-IND	Mood=Ind|VerbForm=Inf|Voice=Pass	3	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	Öppna	öppna	VERB	IMP-ACT	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
2	sidan	sida	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	1	obj	_	_
3	i	i	ADP	_	_	4	case	_	_
4	designläget	designläge	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	1	obl	_	_
5	i	i	ADP	_	_	6	case	_	_
6	Access	Access	PROPN	SG-NOM	Case=Nom	4	nmod	_	_
7	2002	2002	NUM	ID	_	6	nummod	_	SpaceAfter=No
8	.	.	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	På	på	ADP	_	_	3	case	_	_
2	samma	samma	ADJ	POS-IND	Definite=Ind|PronType=Ind	3	amod	_	_
3	sätt	sätt	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	obl	_	_
4	valde	välja	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
6	ut	ut	ADV	_	_	4	compound:prt	_	_
7	de	den	DET	PL-DEF	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
8	tre	tre	NUM	CARD-PL	_	9	nummod	_	_
9	andra	annan	ADJ	CMP-DEF	Case=Nom|Definite=Def|Degree=Pos|Number=Plur	4	xcomp	_	_
10	att	att	PART	_	_	11	mark	_	_
11	spela	spela	VERB	INF-ACT	VerbForm=Inf|Voice=Act	4	xcomp	_	_
12	de	den	DET	PL-DEF	Definite=Def|Number=Plur|PronType=Art	13	det	_	_
13	roller	roll	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	11	obj	_	_
14	som	som	PRON	REL	PronType=Rel	16	nsubj:pass	_	_
15	var	vara	AUX	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	16	cop	_	_
16	avsedda	avse	VERB	AD-PL-IND	Mood=Ind|VerbForm=Inf|Voice=Pass	13	acl:relcl	_	_
17	för	för	ADP	_	_	18	case	_	_
18	dem	de	PRON	PERS-P3PL-ACC	Case=Acc|Definite=Def|Number=Plur|PronType=Prs	16	obl	_	SpaceAfter=No
19	.	.	PUNCT	Period	_	4	punct	_	_

~~~


