---
layout: base
title:  'Statistics of compound in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="sv_lines-dep-compound-prt.html">compound:prt</a></tt>.

42 nodes (0%) are attached to their parents as `compound`.

42 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88095238095238.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (25; 60% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (16; 38% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	XSLT	XSLT	PROPN	SG-NOM	Case=Nom	0	root	_	_
2	(	(	PUNCT	LeftParenthesis	_	6	punct	_	SpaceAfter=No
3	Extensible	extensible	ADJ	POS-FGN	Degree=Pos	5	amod	_	_
4	Stylesheet	stylesheet	NOUN	SG-NOM-FGN	_	5	compound	_	_
5	Language	language	NOUN	SG-NOM-FGN	_	6	compound	_	_
6	Transformation	transformation	NOUN	SG-NOM-FGN	_	1	appos	_	SpaceAfter=No
7	)	)	PUNCT	RightParenthesis	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 compound	color:blue
1	Den	den	DET	SG-DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	3	det	_	_
2	konverterade	konvertera	ADJ	AD-DEF	Case=Nom|Definite=Def|Degree=Pos|Gender=Com|Number=Sing	3	amod	_	_
3	informationen	information	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nsubj:pass	_	_
4	visas	visa	VERB	PRES-PASS	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	som	som	ADP	_	_	7	case	_	_
6	Mom's	mom	NOUN	SG-GEN-FGN	_	7	nmod:poss	_	_
7	Boston	Boston	PROPN	SG-NOM	Case=Nom	9	compound	_	_
8	Crab	crab	NOUN	SG-NOM-FGN	_	9	compound	_	_
9	Meat	meat	NOUN	SG-NOM-FGN	_	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 34 compound	color:blue
1	Vanligen	vanligen	ADV	_	_	2	advmod	_	_
2	skapar	skapa	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	4	det	_	_
4	utvecklare	utvecklare	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	_	_
5	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	6	det	_	_
6	XSL-transformationsfil	XSL-transformationsfil	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
7	som	som	PRON	REL	PronType=Rel	16	nsubj	_	_
8	när	när	SCONJ	_	_	10	mark	_	_
9	den	den	PRON	PERS-P3SG	Definite=Def|Number=Plur|PronType=Prs	10	nsubj:pass	_	_
10	används	använda	VERB	PRES-PASS	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	16	advcl	_	_
11	under	under	ADP	_	_	12	case	_	_
12	exporten	export	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	10	obl	_	_
13	av	av	ADP	_	_	15	case	_	_
14	ett	en	DET	SG-IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	15	det	_	_
15	XML-dokument	XML-dokument	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	12	nmod	_	_
16	tolkar	tolka	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	_
17	eller	eller	CCONJ	_	_	18	cc	_	_
18	överför	överföra	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	16	conj	_	_
19	XML-informationen	XML-information	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	18	obj	_	_
20	till	till	ADP	_	_	22	case	_	_
21	ett	en	DET	SG-IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	22	det	_	_
22	presentationsformat	presentationsformat	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	18	obl	_	_
23	som	som	PRON	REL	PronType=Rel	25	nsubj:pass	_	_
24	kan	kunna	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	25	aux	_	_
25	tolkas	tolka	VERB	INF-PASS	VerbForm=Inf|Voice=Pass	22	acl	_	_
26	av	av	ADP	_	_	29	case	_	_
27	ett	en	DET	SG-IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	29	det	_	_
28	annat	annan	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	29	amod	_	_
29	program	program	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	25	obl:agent	_	SpaceAfter=No
30	,	,	PUNCT	Comma	_	32	punct	_	_
31	t.ex	t.ex	ADV	_	_	32	advmod	_	_
32	SAP	SAP	X	NOM	_	29	appos	_	_
33	(	(	PUNCT	LeftParenthesis	_	36	punct	_	SpaceAfter=No
34	Service	service	NOUN	SG-FGN	Case=Nom|Number=Sing	35	compound	_	_
35	Advertising	advertising	ADJ	FGN	Degree=Pos	36	amod	_	_
36	Protocol	protocol	NOUN	SG-FGN	Case=Nom|Number=Sing	32	appos	_	SpaceAfter=No
37	)	)	PUNCT	RightParenthesis	_	36	punct	_	_
38	eller	eller	CCONJ	_	_	41	cc	_	_
39	ett	en	DET	SG-IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	41	det	_	_
40	anpassat	anpassa	ADJ	AD-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	41	amod	_	_
41	kundorderformat	kundorderformat	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	32	conj	_	SpaceAfter=No
42	.	.	PUNCT	Period	_	2	punct	_	_

~~~


