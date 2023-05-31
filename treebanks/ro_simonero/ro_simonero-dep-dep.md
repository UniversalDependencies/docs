---
layout: base
title:  'Statistics of dep in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `dep`

This relation is universal.

19 nodes (0%) are attached to their parents as `dep`.

12 instances of `dep` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.15789473684211.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (5; 26% instances), <tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (4; 21% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (3; 16% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (2; 11% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 dep	color:blue
1	Diabetul	diabet	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	BioNERLabel=B-DISO
2	gestațional	gestațional	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	BioNERLabel=I-DISO
3	exprimă	exprima	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	incapacitatea	incapacitate	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	obj	_	_
5	celulelor	celulă	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	4	nmod	_	BioNERLabel=B-ANAT
6	&b.beta;	&b.beta;	X	X	_	7	dep	_	BioNERLabel=I-ANAT
7	pancreatice	pancreatic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	5	amod	_	BioNERLabel=I-ANAT
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	mark	_	_
9	a	a	PART	Qn	PartType=Inf	11	mark	_	_
10	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	11	expl:pv	_	_
11	adapta	adapta	VERB	Vmnp	Tense=Pres|VerbForm=Inf	4	acl	_	_
12	solicitărilor	solicitare	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	11	iobj	_	_
13	crescute	crescut	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	12	amod	_	_
14	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	cursul	curs	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	_
16	sarcinii	sarcină	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	15	nmod	_	_
17	(	(	PUNCT	LPAR	_	18	punct	_	SpaceAfter=No
18	46	46	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	3	parataxis	_	SpaceAfter=No
19	)	)	PUNCT	RPAR	_	18	punct	_	SpaceAfter=No
20	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	anul	an	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	nmod:tmod	_	_
3	1983	1983	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	2	nummod	_	SpaceAfter=No
4	,	,	PUNCT	COMMA	_	2	punct	_	_
5	Vanderschueren-Lodeweyckx	Vanderschueren-Lodeweyckx	PROPN	Np	_	9	nsubj	_	_
6	et	et	X	X	_	5	dep	_	_
7	al	al	X	X	_	6	flat	_	_
8	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	9	aux	_	_
9	efectuat	efectua	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
10	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	11	det	_	_
11	studiu	studiu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	obj	_	_
12	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	15	obl	_	_
14	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	15	aux	_	_
15	verificat	verifica	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	11	acl	_	_
16	nivelul	nivel	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	15	obj	_	BioNERLabel=B-PROC
17	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	BioNERLabel=I-PROC
18	auz	auz	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	16	nmod	_	BioNERLabel=I-PROC
19	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	_
20	45	45	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	22	nummod	_	_
21	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
22	copii	copil	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	16	nmod	_	_
23	diagnosticați	diagnostica	VERB	Vmp--pm	Gender=Masc|Number=Plur|VerbForm=Part	22	acl	_	_
24	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	25	case	_	_
25	hipotiroidism	hipotiroidism	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	23	obl	_	BioNERLabel=B-DISO
26	congenital	congenital	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	25	amod	_	BioNERLabel=I-DISO|SpaceAfter=No
27	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dep	color:blue
1	Exercise	Exercise	X	X	_	0	root	_	_
2	Versus	Versus	X	X	_	1	dep	_	_
3	Endoluminal	Endoluminal	X	X	_	1	dep	_	_
4	Revascularization	Revascularization	X	X	_	1	dep	_	SpaceAfter=No
5	)	)	PUNCT	RPAR	_	1	punct	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	8	punct	_	_
7	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	8	nsubj	_	_
8	compară	compara	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl	_	_
9	terapia	terapie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	obj	_	_
10	medicală	medical	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
11	optimă	optim	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
12	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	exercițiul	exercițiu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	obl:pmod	_	_
14	fizic	fizic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
15	și	și	CCONJ	Crssp	Polarity=Pos	17	cc	_	_
16	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	terapia	terapie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	conj	_	BioNERLabel=B-PROC
18	endovasculară	endovascular	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	BioNERLabel=I-PROC
19	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
20	pacienți	pacient	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	17	nmod	_	_
21	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	_
22	boală	boală	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	20	nmod	_	BioNERLabel=B-DISO
23	aorto-iliacă	aorto-iliac	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	BioNERLabel=I-DISO|SpaceAfter=No
24	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


