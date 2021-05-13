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
1	Acesta	acesta	PRON	Pd3msr	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	_
3	declarat	declara	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No
4	:	:	PUNCT	COLON	_	11	punct	_	_
5	Aproximativ	aproximativ	ADV	Rgp	Degree=Pos	6	advmod	_	_
6	26	26	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	10	nummod	_	_
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
8	milioane	milion	NUM	Mcfprln	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	6	compound	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
10	americani	american	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	11	nsubj	_	_
11	au	avea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
12	acum	acum	ADV	Rgp	Degree=Pos	11	advmod:tmod	_	_
13	diabet	diabet	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	obj	_	BioNERLabel=B-DISO
14	zaharat	zaharat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	13	acl	_	BioNERLabel=I-DISO
15	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	BioNERLabel=I-DISO
16	tip	tip	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	13	nmod	_	BioNERLabel=I-DISO
17	2	2	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	16	nummod	_	BioNERLabel=I-DISO|SpaceAfter=No
18	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	El	el	PRON	Pp3msr--------s	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	2	nsubj	_	_
2	afirmă	afirma	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	că	că	SCONJ	Csssp	Polarity=Neg	5	mark	_	_
4	a	avea	AUX	Va--3s	Number=Sing|Person=3	5	aux	_	_
5	găsit	găsi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	ccomp	_	_
6	patru	patru	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	9	nummod	_	_
7	uncii	uncie	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	6	compound	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	sare	sare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	obj	_	BioNERLabel=B-CHEM
10	într-	întru	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	12	case	_	SpaceAfter=No
11	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	12	det	_	_
12	litru	litru	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	_
13	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	urină	urină	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	_	BioNERLabel=B-ANAT
15	și	și	CCONJ	Crssp	Polarity=Pos	21	cc	_	_
16	că	că	SCONJ	Csssp	Polarity=Neg	21	mark	_	_
17	setea	sete	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	21	nsubj	_	_
18	și	și	CCONJ	Crssp	Polarity=Pos	19	cc	_	_
19	poliuria	poliurie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	17	conj	_	BioNERLabel=B-DISO
20	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	21	expl:pv	_	_
21	datorează	datora	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
22	ei	el	PRON	Pp3fso--------s	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	21	nsubj	_	SpaceAfter=No
23	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 compound	color:blue
1	Ținând	ține	VERB	Vmg	VerbForm=Ger	31	advcl	_	_
2	cont	cont	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	fixed	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	numărul	număr	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	obl:pmod	_	_
5	mare	mare	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	celule	celulă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	nmod	_	BioNERLabel=B-ANAT
8	&b.beta;-pancreatice	&b.beta;-pancreatic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	BioNERLabel=I-ANAT
9	prezente	prezent	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	_
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	_
11	cele	acela	PRON	Pd3fpr	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	16	det	_	_
12	cca	cca	ADV	Yr	Abbr=Yes	13	advmod	_	_
13	1,5	1,5	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	14	nummod	_	_
14	milioane	milion	NUM	Mcfprln	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	16	compound	_	_
15	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
16	insule	insulă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	9	obl	_	BioNERLabel=B-ANAT
17	aflate	afla	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	16	acl	_	_
18	într-	întru	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	20	case	_	SpaceAfter=No
19	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	20	det	_	_
20	pancreas	pancreas	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	17	obl	_	BioNERLabel=B-ANAT
21	normal	normal	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	20	amod	_	_
22	și	și	CCONJ	Crssp	Polarity=Pos	28	cc	_	_
23	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	28	nsubj	_	_
24	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	_
25	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	28	case	_	_
26	cca	cca	ADV	Yr	Abbr=Yes	27	advmod	_	_
27	3	3	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	28	nummod	_	_
28	miliarde	miliarde	NUM	Mcfprln	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	5	conj	_	SpaceAfter=No
29	,	,	PUNCT	COMMA	_	1	punct	_	_
30	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	31	expl:impers	_	_
31	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
32	constata	constata	VERB	Vmnp	Tense=Pres|VerbForm=Inf	31	ccomp	_	_
33	că	că	SCONJ	Csssp	Polarity=Neg	54	mark	_	_
34	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	35	det	_	_
35	scădere	scădere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	54	nsubj	_	_
36	minoră	minor	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	35	amod	_	_
37	(	(	PUNCT	LPAR	_	39	punct	_	SpaceAfter=No
38	să	să	PART	Qs	Mood=Sub	39	mark	_	_
39	zicem	zice	VERB	Vmip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	36	parataxis	_	_
40	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	43	case	_	_
41	5	5	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	43	nummod	_	_
42	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	41	case	_	_
43	celule	celulă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	39	obj	_	BioNERLabel=B-ANAT
44	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	45	case	_	_
45	zi	zi	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	43	nmod	_	SpaceAfter=No
46	,	,	PUNCT	COMMA	_	47	punct	_	_
47	timp	timp	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	39	obl	_	_
48	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	50	case	_	_
49	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	50	det	_	_
50	an	an	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	47	nmod	_	SpaceAfter=No
51	)	)	PUNCT	RPAR	_	39	punct	_	SpaceAfter=No
52	,	,	PUNCT	COMMA	_	35	punct	_	_
53	va	vrea	AUX	Va--3s	Number=Sing|Person=3	54	aux	_	_
54	scădea	scădea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	32	ccomp	_	_
55	masa	masă	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	54	obj	_	_
56	&b.beta;-celulară	&b.beta;-celular	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	55	amod	_	_
57	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	60	case	_	_
58	numai	numai	ADV	Rgp	Degree=Pos	60	advmod	_	_
59	~	~	PUNCT	TILDA	_	60	punct	_	_
60	2	2	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	54	obl	_	SpaceAfter=No
61	%	%	PUNCT	PERCENT	_	60	punct	_	_
62	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	64	case	_	_
63	întreaga	întreg	ADJ	Afpfsry	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	64	amod	_	_
64	masă	masă	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	54	obl	_	_
65	&b.beta;-celulară	&b.beta;-celular	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	64	amod	_	_
66	totală	total	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	64	amod	_	SpaceAfter=No
67	.	.	PUNCT	PERIOD	_	31	punct	_	_

~~~


