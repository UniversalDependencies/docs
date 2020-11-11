---
layout: base
title:  'Statistics of expl:pass in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_simonero-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_simonero-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_simonero-dep-expl-pv.html">expl:pv</a></tt>.

704 nodes (0%) are attached to their parents as `expl:pass`.

682 instances of `expl:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29403409090909.

The following 4 pairs of parts of speech are connected with `expl:pass`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (701; 100% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl:pass	color:blue
1	Acest	acest	DET	Dd3msr---e	Case=Nom|Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Dem	2	det	_	O
2	efect	efect	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	nsubj	_	O
3	secundar	secundar	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	O
4	nu	nu	PART	Qz	Polarity=Neg	6	advmod	_	O
5	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	6	expl:pass	_	O
6	întâlnește	întâlni	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	O
8	cazul	caz	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	obl	_	O
9	glarginei	glargină	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	B-CHEM
10	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 expl:pass	color:blue
1	Din	din	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	analiza	analiză	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	obl	_	O
3	subgrupurilor	subgrup	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	2	nmod	_	O
4	predefinite	predefinit	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	3	amod	_	O
5	s-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	7	expl:pass	_	O
6	a	avea	AUX	Va--3s	Number=Sing|Person=3	7	aux	_	O
7	demonstrat	demonstrat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	O
8	că	că	SCONJ	Csssp	Polarity=Neg	20	mark	_	O
9	administrarea	administrare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	20	nsubj	_	O
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	O
11	prasugrel	prasugrel	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	nmod	_	B-CHEM
12	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	O
13	pacienții	pacient	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	9	nmod	_	O
14	vârstnici	vârstnic	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	13	amod	_	O
15	peste	peste	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	O
16	75	75	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	18	nummod	_	O
17	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	O
18	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	13	nmod	_	O
19	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	20	expl:pv	_	O
20	asociază	asocia	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	O
21	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	O
22	eficacitate	eficacitate	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	20	obl	_	O
23	clinică	clinic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	O
24	mai	mai	ADV	Rp	_	25	advmod	_	O
25	redusă	redus	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	O
26	și	și	CCONJ	Crssp	Polarity=Pos	27	cc	_	O
27	risc	risc	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	22	conj	_	B-DISO
28	absolut	absolut	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	27	amod	_	O
29	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	30	case	_	O
30	sângerare	sângerare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	27	nmod	_	B-DISO
31	mai	mai	ADV	Rp	_	32	advmod	_	O
32	mare	mare	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	30	amod	_	O
33	,	,	PUNCT	COMMA	_	20	punct	_	O
34	ceea	acela	PRON	Pd3fsr	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	36	nsubj	_	O
35	ce	ce	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	34	fixed	_	O
36	rezultă	rezulta	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	20	advcl	_	O
37	într-	întru	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	39	case	_	O
38	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	39	det	_	O
39	beneficiu	beneficiu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	36	obl	_	O
40	clinic	clinic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	39	amod	_	O
41	net	net	ADV	Rgp	Degree=Pos	39	amod	_	O
42	scăzut	scăzut	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	39	amod	_	O
43	.	.	PUNCT	PERIOD	_	7	punct	_	O

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 27 expl:pass	color:blue
1	Analiza	analiză	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	11	nsubj	_	O
2	leziunilor	leziune	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	1	nmod	_	B-DISO
3	coronariene	coronarian	ADJ	Afpfprn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	2	amod	_	I-DISO
4	și	și	CCONJ	Crssp	Polarity=Pos	6	cc	_	O
5	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det	_	O
6	contextului	context	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	2	conj	_	O
7	clinic	clinic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	O
8	general	general	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	O
9	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	10	det	_	O
10	pacientului	pacient	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	nmod	_	O
11	permit	permite	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
12	stabilirea	stabilire	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	11	obj	_	O
13	oportunității	oportunitate	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	12	nmod	_	O
14	abordului	abord	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	13	nmod	_	B-PROC
15	chirurgical	chirurgical	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	I-PROC
16	,	,	PUNCT	COMMA	_	17	punct	_	O
17	elaborarea	elaborare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	14	appos	_	O
18	planului	plan	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	17	nmod	_	O
19	operator	operator	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	18	amod	_	O
20	și	și	CCONJ	Crssp	Polarity=Pos	21	cc	_	O
21	alegerea	alegere	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	conj	_	O
22	tehnicii	tehnică	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	21	nmod	_	O
23	optime	optim	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	O
24	,	,	PUNCT	COMMA	_	28	punct	_	O
25	intervenția	intervenție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	28	nsubj:pass	_	O
26	practicându-	practica	VERB	Vmg-------y	Variant=Short|VerbForm=Ger	25	amod	_	O
27	se	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	28	expl:pass	_	O
28	electiv	electiv	ADV	Rgp	Degree=Pos	11	conj	_	O
29	sau	sau	CCONJ	Ccssp	Polarity=Pos	31	cc	_	O
30	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	31	case	_	O
31	urgență	urgență	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	28	obl	_	O
32	.	.	PUNCT	PERIOD	_	11	punct	_	O

~~~


