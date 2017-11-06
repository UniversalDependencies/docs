---
layout: base
title:  'Statistics of aux:pass in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-aux.html">aux</a></tt>.

103 nodes (0%) are attached to their parents as `aux:pass`.

103 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35922330097087.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (99; 96% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux:pass	color:blue
1	Den	den	PRON	PERS-P3SG	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	6	nsubj	_	_
2	är	vara	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
3	till	till	ADV	_	_	6	advmod	_	_
4	och	och	CCONJ	_	_	3	fixed	_	_
5	med	med	ADV	_	Case=Nom	3	fixed	_	_
6	utställd	ställa+ut	VERB	AD-SG-IND	Mood=Ind|VerbForm=Inf|Voice=Pass	0	root	_	_
7	på	på	ADP	_	_	8	case	_	_
8	er	ni	PRON	PERS-P2PL-ACC	Case=Gen|Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
2	fick	få	AUX	PAST-AUX	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
3	bara	bara	ADV	_	_	4	advmod	_	_
4	hoppas	hoppas	VERB	INF-DPO	Mood=Ind|VerbForm=Inf|Voice=Act	0	root	_	_
5	att	att	SCONJ	_	_	9	mark	_	_
6	Stillman	Stillman	PROPN	SG-NOM	Case=Nom|Number=Sing	9	nsubj	_	_
7	inte	inte	PART	NEG	_	9	advmod	_	_
8	blivit	bli	VERB	SUP-ACT	VerbForm=Sup|Voice=Act	9	aux:pass	_	_
9	förvarnad	förvarna	VERB	AD-SG-IND	Mood=Ind|VerbForm=Part|Voice=Pass	4	ccomp	_	_
10	om	om	ADP	_	_	12	case	_	_
11	hans	han	PRON	P3SG-GEN	Case=Gen|Definite=Def|Poss=Yes|PronType=Prs	12	nmod:poss	_	_
12	närvaro	närvaro	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 24 aux:pass	color:blue
1	När	när	SCONJ	_	_	17	mark	_	_
2	Microsoft	Microsoft	PROPN	SG-NOM	Case=Nom|Number=Sing	4	compound	_	_
3	SQL	SQL	PROPN	SG-NOM	Case=Nom|Number=Sing	4	compound	_	_
4	Server	server	NOUN	SG-IND-NOM	Case=Nom|Number=Sing	7	nmod	_	_
5	2000	2000	NUM	ID	_	4	nummod	_	_
6	Desktop	desktop	NOUN	SG-IND-NOM	Case=Nom|Number=Sing	7	compound	_	_
7	Engine	engine	NOUN	SG-IND-NOM	Case=Nom|Number=Sing	17	nsubj	_	_
8	(	(	PUNCT	LeftParenthesis	_	9	punct	_	SpaceAfter=No
9	kallades	kallas	VERB	PAST-PASS	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	4	parataxis	_	_
10	tidigare	tidigt	ADV	CMP	Degree=Cmp	9	advmod	_	_
11	Microsoft	Microsoft	PROPN	SG-NOM	Case=Nom|Number=Sing	13	compound	_	_
12	Database	database	NOUN	SG-IND-NOM	Case=Nom|Number=Sing	13	compound	_	_
13	Engine	engine	NOUN	SG-IND-NOM	Case=Nom|Number=Sing	9	xcomp	_	_
14	eller	eller	CCONJ	_	_	15	cc	_	_
15	MSDE	MSDE	X	NOM	_	13	conj	_	SpaceAfter=No
16	)	)	PUNCT	RightParenthesis	_	9	punct	_	_
17	finns	finnas	VERB	PRES-DPO	Mood=Ind|Tense=Pres|VerbForm=Fin	26	advcl	_	_
18	installerad	installerad	VERB	AD-SG-IND	Mood=Ind|VerbForm=Part|Voice=Pass	17	xcomp	_	_
19	på	på	ADP	_	_	22	case	_	_
20	Microsoft	Microsoft	PROPN	SG-NOM	Case=Nom|Number=Sing	22	compound	_	_
21	Windows	Windows	PROPN	SG-NOM	Case=Nom|Number=Sing	20	flat	_	_
22	NT-datorer	NT-dator	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	17	obl	_	SpaceAfter=No
23	,	,	PUNCT	Comma	_	17	punct	_	_
24	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	26	aux:pass	_	_
25	den	den	PRON	PERS-P3SG	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	26	nsubj	_	_
26	installerad	installerad	ADJ	POS-DEF	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	0	root	_	_
27	med	med	ADP	_	_	29	case	_	_
28	Windows	Windows	PROPN	SG-NOM	Case=Nom|Number=Sing	29	nmod	_	_
29	NT-verifiering	NT-verifiering	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	26	obl	_	_
30	(	(	PUNCT	LeftParenthesis	_	33	punct	_	SpaceAfter=No
31	denna	denna	DET	DEM-SG-IND	Definite=Def|Gender=Com|Number=Sing|PronType=Dem	32	det	_	_
32	funktion	funktion	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	33	nsubj:pass	_	_
33	kallas	kallas	VERB	PRES-PASS	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	26	parataxis	_	_
34	också	också	ADV	_	_	33	advmod	_	_
35	integrerad	integrera	ADJ	AD-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	36	amod	_	_
36	säkerhet	säkerhet	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	33	xcomp	_	SpaceAfter=No
37	)	)	PUNCT	RightParenthesis	_	33	punct	_	SpaceAfter=No
38	.	.	PUNCT	Period	_	26	punct	_	_

~~~


