---
layout: base
title:  'Statistics of compound in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `compound`

This relation is universal.

9 nodes (0%) are attached to their parents as `compound`.

8 instances of `compound` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.55555555555556.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (4; 44% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (1; 11% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt> (1; 11% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-CCONJ.html">CCONJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 compound	color:blue
1	Acesta	acesta	PRON	Pd3msr	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	O
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	O
3	declarat	declara	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
4	:	:	PUNCT	COLON	_	11	punct	_	O
5	Aproximativ	aproximativ	ADV	Rgp	Degree=Pos	6	advmod	_	O
6	26	26	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	10	nummod	_	O
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
8	milioane	milion	NUM	Mcfprln	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	6	compound	_	O
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
10	americani	american	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	11	nsubj	_	O
11	au	avea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	O
12	acum	acum	ADV	Rgp	Degree=Pos	11	advmod:tmod	_	O
13	diabet	diabet	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	obj	_	B-DISO
14	zaharat	zaharat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	13	acl	_	I-DISO
15	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	I-DISO
16	tip	tip	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	13	nmod	_	I-DISO
17	2	2	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	16	nummod	_	I-DISO
18	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	El	el	PRON	Pp3msr--------s	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	2	nsubj	_	O
2	afirmă	afirma	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
3	că	că	SCONJ	Csssp	Polarity=Neg	5	mark	_	O
4	a	avea	AUX	Va--3s	Number=Sing|Person=3	5	aux	_	O
5	găsit	găsi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	ccomp	_	O
6	patru	patru	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	9	nummod	_	O
7	uncii	uncie	NOUN	Ncfprn	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	6	compound	_	O
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	O
9	sare	sare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	obj	_	B-CHEM
10	într-	întru	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	12	case	_	O
11	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	12	det	_	O
12	litru	litru	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	O
13	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	O
14	urină	urină	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	_	B-ANAT
15	și	și	CCONJ	Crssp	Polarity=Pos	21	cc	_	O
16	că	că	SCONJ	Csssp	Polarity=Neg	21	mark	_	O
17	setea	sete	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	21	nsubj	_	O
18	și	și	CCONJ	Crssp	Polarity=Pos	19	cc	_	O
19	poliuria	poliurie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	17	conj	_	B-DISO
20	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	21	expl:pv	_	O
21	datorează	datora	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	O
22	ei	el	PRON	Pp3fso--------s	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	21	nsubj	_	O
23	.	.	PUNCT	PERIOD	_	2	punct	_	O

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 compound	color:blue
1	Ținând	ține	VERB	Vmg	VerbForm=Ger	31	advcl	_	O
2	cont	cont	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	fixed	_	O
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	O
4	numărul	număr	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	nmod:pmod	_	O
5	mare	mare	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	O
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	O
7	celule	celulă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	nmod	_	B-ANAT
8	&b.beta;-pancreatice	&b.beta;-pancreatic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	I-ANAT
9	prezente	prezent	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	O
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	O
11	cele	acela	PRON	Pd3fpr	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	16	det	_	O
12	cca	cca	ADV	Yr	Abbr=Yes	13	advmod	_	O
13	1,5	1,5	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	14	nummod	_	O
14	milioane	milion	NUM	Mcfprln	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	16	compound	_	O
15	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	O
16	insule	insulă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	9	obl	_	B-ANAT
17	aflate	afla	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	16	acl	_	O
18	într-	întru	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	20	case	_	O
19	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	20	det	_	O
20	pancreas	pancreas	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	17	obl	_	B-ANAT
21	normal	normal	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	20	amod	_	O
22	și	și	CCONJ	Crssp	Polarity=Pos	28	cc	_	O
23	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	28	nsubj	_	O
24	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	O
25	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	28	case	_	O
26	cca	cca	ADV	Yr	Abbr=Yes	27	advmod	_	O
27	3	3	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	28	nummod	_	O
28	miliarde	miliarde	NUM	Mcfprln	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	5	conj	_	O
29	,	,	PUNCT	COMMA	_	1	punct	_	O
30	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	31	expl:impers	_	O
31	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
32	constata	constata	VERB	Vmnp	Tense=Pres|VerbForm=Inf	31	ccomp	_	O
33	că	că	SCONJ	Csssp	Polarity=Neg	54	mark	_	O
34	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	35	det	_	O
35	scădere	scădere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	54	nsubj	_	O
36	minoră	minor	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	35	amod	_	O
37	(	(	PUNCT	LPAR	_	39	punct	_	O
38	să	să	PART	Qs	Mood=Sub	39	mark	_	O
39	zicem	zice	VERB	Vmip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	36	parataxis	_	O
40	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	43	case	_	O
41	5	5	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	43	nummod	_	O
42	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	41	case	_	O
43	celule	celulă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	39	obj	_	B-ANAT
44	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	45	case	_	O
45	zi	zi	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	43	nmod	_	O
46	,	,	PUNCT	COMMA	_	47	punct	_	O
47	timp	timp	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	39	obl	_	O
48	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	50	case	_	O
49	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	50	det	_	O
50	an	an	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	47	nmod	_	O
51	)	)	PUNCT	RPAR	_	39	punct	_	O
52	,	,	PUNCT	COMMA	_	35	punct	_	O
53	va	vrea	AUX	Va--3s	Number=Sing|Person=3	54	aux	_	O
54	scădea	scădea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	32	ccomp	_	O
55	masa	masă	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	54	obj	_	O
56	&b.beta;-celulară	&b.beta;-celular	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	55	amod	_	O
57	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	60	case	_	O
58	numai	numai	ADV	Rgp	Degree=Pos	60	advmod	_	O
59	~	~	PUNCT	TILDA	_	60	punct	_	O
60	2	2	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	54	obl	_	O
61	%	%	PUNCT	PERCENT	_	60	punct	_	O
62	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	64	case	_	O
63	întreaga	întreg	ADJ	Afpfsry	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	64	amod	_	O
64	masă	masă	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	54	obl	_	O
65	&b.beta;-celulară	&b.beta;-celular	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	64	amod	_	O
66	totală	total	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	64	amod	_	O
67	.	.	PUNCT	PERIOD	_	31	punct	_	O

~~~


