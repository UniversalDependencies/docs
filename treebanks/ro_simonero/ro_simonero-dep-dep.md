---
layout: base
title:  'Statistics of dep in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `dep`

This relation is universal.

19 nodes (0%) are attached to their parents as `dep`.

13 instances of `dep` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68421052631579.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (5; 26% instances), <tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (4; 21% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (3; 16% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (3; 16% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 dep	color:blue
1	Diabetul	diabet	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	B-DISO
2	gestațional	gestațional	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	I-DISO
3	exprimă	exprima	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
4	incapacitatea	incapacitate	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	obj	_	O
5	celulelor	celulă	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	4	nmod	_	B-ANAT
6	&b.beta;	&b.beta;	X	X	_	7	dep	_	I-ANAT
7	pancreatice	pancreatic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	5	amod	_	I-ANAT
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	mark	_	O
9	a	a	PART	Qn	PartType=Inf	11	mark	_	O
10	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	11	expl:pv	_	O
11	adapta	adapta	VERB	Vmnp	Tense=Pres|VerbForm=Inf	4	acl	_	O
12	solicitărilor	solicitare	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	11	iobj	_	O
13	crescute	crescut	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	12	amod	_	O
14	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	O
15	cursul	curs	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	O
16	sarcinii	sarcină	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	15	nmod	_	O
17	(	(	PUNCT	LPAR	_	18	punct	_	O
18	46	46	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	3	parataxis	_	O
19	)	)	PUNCT	RPAR	_	18	punct	_	O
20	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	anul	an	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	nmod:tmod	_	O
3	1983	1983	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	2	nummod	_	O
4	,	,	PUNCT	COMMA	_	2	punct	_	O
5	Vanderschueren-Lodeweyckx	Vanderschueren-Lodeweyckx	PROPN	Np	_	9	nsubj	_	O
6	et	et	X	X	_	5	dep	_	O
7	al	al	X	X	_	6	flat	_	O
8	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	9	aux	_	O
9	efectuat	efectua	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
10	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	11	det	_	O
11	studiu	studiu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	obj	_	O
12	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	O
13	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	15	obl	_	O
14	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	15	aux	_	O
15	verificat	verifica	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	11	acl	_	O
16	nivelul	nivel	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	15	obj	_	B-PROC
17	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	I-PROC
18	auz	auz	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	16	nmod	_	I-PROC
19	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	O
20	45	45	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	22	nummod	_	O
21	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	O
22	copii	copil	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	16	nmod	_	O
23	diagnosticați	diagnostica	VERB	Vmp--pm	Gender=Masc|Number=Plur|VerbForm=Part	22	acl	_	O
24	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	25	case	_	O
25	hipotiroidism	hipotiroidism	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	23	obl	_	B-DISO
26	congenital	congenital	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	25	amod	_	I-DISO
27	.	.	PUNCT	PERIOD	_	9	punct	_	O

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 dep	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	mod	mod	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	17	obl	_	O
3	incontestabil	incontestabil	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	O
4	,	,	PUNCT	COMMA	_	2	punct	_	O
5	ligatura	ligatură	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	17	nsubj	_	B-PROC
6	și	și	CCONJ	Crssp	Polarity=Pos	7	cc	_	O
7	stripping-ul	stripping	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	conj	_	B-PROC
8	venei	venă	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	B-ANAT
9	safene	safenă	NOUN	Ncfson	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	8	amod	_	I-ANAT
10	interne	intern	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	I-ANAT
11	,	,	PUNCT	COMMA	_	14	punct	_	O
12	împreună	împreună	ADV	Rgp	Degree=Pos	14	case	_	O
13	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	12	fixed	_	O
14	flebectomiile	flebectomie	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	16	obl	_	B-DISO
15	individuale	individual	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	O
16	oferă	oferi	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
17	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	18	det	_	O
18	îmbunătățire	îmbunătățire	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	16	obj	_	O
19	semnificativă	semnificativ	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	O
20	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	21	det	_	O
21	calității	calitate	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	18	nmod	_	O
22	vieții	viață	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	21	nmod	_	O
23	,	,	PUNCT	COMMA	_	26	punct	_	O
24	comparativ	comparativ	ADV	Rgp	Degree=Pos	26	case	_	O
25	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	24	fixed	_	O
26	tratamentul	tratament	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	16	obl	_	O
27	non	non	X	X	_	26	dep	_	amod
28	chirurgical	chirurgical	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	27	goeswith	_	O
29	(	(	PUNCT	LPAR	_	30	punct	_	O
30	115	115	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	16	parataxis	_	O
31	,	,	PUNCT	COMMA	_	32	punct	_	O
32	116	116	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	30	conj	_	O
33	)	)	PUNCT	RPAR	_	30	punct	_	O
34	.	.	PUNCT	PERIOD	_	16	punct	_	O

~~~


