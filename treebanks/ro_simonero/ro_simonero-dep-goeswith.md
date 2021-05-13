---
layout: base
title:  'Statistics of goeswith in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `goeswith`

This relation is universal.

27 nodes (0%) are attached to their parents as `goeswith`.

27 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `goeswith`: <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (21; 78% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 goeswith	color:blue
1	Timpul	timp	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	22	nsubj	_	_
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	recuperare	recuperare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	_
4	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	_
5	indicilor	indice	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	3	nmod	_	_
6	ECG	ECG	NOUN	Yn	Abbr=Yes	5	nmod	_	BioNERLabel=B-PROC
7	până	până	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
8	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	7	fixed	_	_
9	cei	acela	PRON	Pd3mpr	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	10	det	_	_
10	inițiali	inițial	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	nmod	_	_
11	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	încetarea	încetare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	10	nmod	_	_
13	efortului	efort	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	_
14	a	avea	AUX	Va--3s	Number=Sing|Person=3	22	aux	_	_
15	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	22	cop	_	_
16	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	_
17	4.1	4.1	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	22	nummod	_	_
18	0.4	0.4	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	17	goeswith	_	_
19	și	și	CCONJ	Crssp	Polarity=Pos	20	cc	_	_
20	4.2	4.2	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	22	nummod	_	_
21	0.5	0.5	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	20	goeswith	_	_
22	min	min	NOUN	Yn	Abbr=Yes	0	root	_	SpaceAfter=No
23	,	,	PUNCT	COMMA	_	24	punct	_	_
24	respectiv	respectiv	ADV	Rgp	Degree=Pos	22	advmod	_	_
25	(	(	PUNCT	LPAR	_	26	punct	_	SpaceAfter=No
26	p	p	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	22	appos	_	_
27	>	>	PUNCT	GT	_	26	punct	_	_
28	0.1	0.1	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	26	nummod	_	SpaceAfter=No
29	)	)	PUNCT	RPAR	_	26	punct	_	SpaceAfter=No
30	.	.	PUNCT	PERIOD	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 28 goeswith	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	mod	mod	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	17	obl	_	_
3	incontestabil	incontestabil	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	SpaceAfter=No
4	,	,	PUNCT	COMMA	_	2	punct	_	_
5	ligatura	ligatură	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	17	nsubj	_	BioNERLabel=B-PROC
6	și	și	CCONJ	Crssp	Polarity=Pos	7	cc	_	_
7	stripping-ul	stripping	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	conj	_	BioNERLabel=B-PROC
8	venei	venă	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	BioNERLabel=B-ANAT
9	safene	safenă	NOUN	Ncfson	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	8	amod	_	BioNERLabel=I-ANAT
10	interne	intern	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	BioNERLabel=I-ANAT|SpaceAfter=No
11	,	,	PUNCT	COMMA	_	14	punct	_	_
12	împreună	împreună	ADV	Rgp	Degree=Pos	14	case	_	_
13	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	12	fixed	_	_
14	flebectomiile	flebectomie	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	16	obl	_	BioNERLabel=B-DISO
15	individuale	individual	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	_
16	oferă	oferi	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
17	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	18	det	_	_
18	îmbunătățire	îmbunătățire	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	16	obj	_	_
19	semnificativă	semnificativ	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	_
20	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	21	det	_	_
21	calității	calitate	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	18	nmod	_	_
22	vieții	viață	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	21	nmod	_	SpaceAfter=No
23	,	,	PUNCT	COMMA	_	26	punct	_	_
24	comparativ	comparativ	ADV	Rgp	Degree=Pos	26	case	_	_
25	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	24	fixed	_	_
26	tratamentul	tratament	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	16	obl	_	_
27	non	non	X	X	_	26	dep	_	BioNERLabel=amod
28	chirurgical	chirurgical	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	27	goeswith	_	_
29	(	(	PUNCT	LPAR	_	30	punct	_	SpaceAfter=No
30	115	115	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	16	parataxis	_	SpaceAfter=No
31	,	,	PUNCT	COMMA	_	32	punct	_	SpaceAfter=No
32	116	116	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	30	conj	_	SpaceAfter=No
33	)	)	PUNCT	RPAR	_	30	punct	_	SpaceAfter=No
34	.	.	PUNCT	PERIOD	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 34 goeswith	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
2	multe	mult	DET	Di3fp	Gender=Fem|Number=Plur|Person=3|PronType=Ind	3	det	_	_
3	cazuri	caz	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	obl	_	_
4	această	acest	DET	Dd3fsr---e	Case=Nom|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Dem	5	det	_	_
5	scădere	scădere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nsubj	_	_
6	nu	nu	PART	Qz	Polarity=Neg	7	advmod	_	_
7	atinge	atinge	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	pragul	prag	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_
9	(	(	PUNCT	LPAR	_	13	punct	_	SpaceAfter=No
10	destul	destul	ADV	Rgp	Degree=Pos	12	advmod	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	fixed	_	_
12	arbitrar	arbitrar	ADV	Rgp	Degree=Pos	13	advmod	_	_
13	ales	alege	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	8	acl	_	SpaceAfter=No
14	)	)	PUNCT	RPAR	_	13	punct	_	SpaceAfter=No
15	,	,	PUNCT	COMMA	_	16	punct	_	_
16	acela	acela	PRON	Pd3msr	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	appos	_	_
17	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	_
18	0.5	0.5	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	16	nummod	_	_
19	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
20	masa	masă	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	18	nmod	_	_
21	&b.beta;-celulară	&b.beta;-celular	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	20	amod	_	SpaceAfter=No
22	,	,	PUNCT	COMMA	_	23	punct	_	_
23	considerat	considera	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	16	acl	_	_
24	a	a	PART	Qn	PartType=Inf	26	mark	_	_
25	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	26	cop	_	_
26	pragul	prag	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	23	xcomp	_	_
27	dincolo	dincolo	ADV	Rgp	Degree=Pos	29	advmod	_	_
28	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	27	case	_	_
29	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	31	obl	_	_
30	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	31	expl:pv	_	_
31	manifestă	manifesta	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	26	acl	_	_
32	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	33	case	_	_
33	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	31	obl	_	_
34	compensarea	compensare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	33	goeswith	_	_
35	reglării	reglare	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	33	nmod	_	_
36	glicemice	glicemic	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	35	amod	_	SpaceAfter=No
37	,	,	PUNCT	COMMA	_	40	punct	_	_
38	adică	adică	ADV	Rgp	Degree=Pos	40	advmod	_	_
39	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	40	case	_	_
40	apariția	apariție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	33	nmod	_	_
41	diabetului	diabet	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	40	nmod	_	BioNERLabel=B-DISO
42	clinic	clinic	ADV	Rgp	Degree=Pos	43	advmod	_	_
43	manifest	manifest	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	41	amod	_	SpaceAfter=No
44	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


