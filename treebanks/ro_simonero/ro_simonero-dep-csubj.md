---
layout: base
title:  'Statistics of csubj in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="ro_simonero-dep-csubj-pass.html">csubj:pass</a></tt>.

26 nodes (0%) are attached to their parents as `csubj`.

26 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.84615384615385.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (20; 77% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (3; 12% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	De	de	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	menționat	menționa	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
3	că	că	SCONJ	Csssp	Polarity=Pos	6	mark	_	O
4	tolvaptanul	tolvaptan	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj:pass	_	B-CHEM
5	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	O
6	aprobat	aproba	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	csubj	_	O
7	atât	atât	ADV	Rgp	Degree=Pos	9	advmod	_	O
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	O
9	SUA	SUA	NOUN	Yn	Abbr=Yes	6	obl	_	O
10	,	,	PUNCT	COMMA	_	14	punct	_	O
11	cât	cât	ADV	Rw	PronType=Int,Rel	14	cc	_	O
12	și	și	CCONJ	Crssp	Polarity=Pos	11	fixed	_	O
13	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	O
14	Europa	Europa	PROPN	Np	_	9	conj	_	O
15	,	,	PUNCT	COMMA	_	19	punct	_	O
16	dar	dar	CCONJ	Ccssp	Polarity=Pos	19	cc	_	O
17	numai	numai	ADV	Rgp	Degree=Pos	19	advmod	_	O
18	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	O
19	tratamentul	tratament	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	14	conj	_	O
20	hiponatremiei	hiponatremie	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	19	nmod	_	B-DISO
21	.	.	PUNCT	PERIOD	_	2	punct	_	O

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 csubj	color:blue
1	Vindecarea	vindecare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	O
2	tuberculozei	tuberculoză	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	B-DISO
3	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	O
4	mai	mai	ADV	Rp	_	5	advmod	_	O
5	dificilă	dificil	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	O
6	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	O
7	diabetic	diabetic	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	O
8	,	,	PUNCT	COMMA	_	16	punct	_	O
9	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	16	mark	_	O
10	cum	cum	ADV	Rw	PronType=Int,Rel	9	fixed	_	O
11	și	și	CCONJ	Crssp	Polarity=Pos	9	fixed	_	O
12	echilibrarea	echilibrare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	16	nsubj	_	O
13	diabetului	diabet	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	B-DISO
14	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	O
15	mai	mai	ADV	Rp	_	16	advmod	_	O
16	greu	greu	ADV	Rgp	Degree=Pos	5	advcl	_	O
17	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	18	mark	_	O
18	realizat	realiza	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	16	csubj	_	O
19	,	,	PUNCT	COMMA	_	21	punct	_	O
20	datorită	datorită	ADP	Spsd	AdpType=Prep|Case=Dat	21	case	_	O
21	necesarului	necesar	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	18	obl	_	O
22	insulinic	insulinic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	21	amod	_	O
23	mai	mai	ADV	Rp	_	24	advmod	_	O
24	mare	mare	ADJ	Afpmsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	21	amod	_	O
25	și	și	CCONJ	Crssp	Polarity=Pos	27	cc	_	O
26	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	27	det	_	O
27	stării	stare	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	18	conj	_	O
28	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	29	case	_	O
29	nutriție	nutriție	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	27	nmod	_	O
30	deficitare	deficitar	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	29	nmod	_	O
31	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	33	det	_	O
32	acestor	acest	DET	Dd3-po---e	Case=Gen|Number=Plur|Person=3|Position=Prenom|PronType=Dem	33	det	_	O
33	bolnavi	bolnav	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	30	nmod	_	O
34	(	(	PUNCT	LPAR	_	35	punct	_	O
35	13	13	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	5	parataxis	_	O
36	)	)	PUNCT	RPAR	_	35	punct	_	O
37	.	.	PUNCT	PERIOD	_	5	punct	_	O

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 22 csubj	color:blue
1	Când	când	ADV	Rw	PronType=Int,Rel	2	advmod:tmod	_	O
2	există	exista	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	advcl	_	O
3	suspiciune	suspiciune	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	2	nsubj	_	O
4	clinică	clinic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	O
5	ridicată	ridicat	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	acl	_	O
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	O
7	EI	EI	NOUN	Yn	Abbr=Yes	5	nmod:agent	_	B-DISO
8	,	,	PUNCT	COMMA	_	13	punct	_	O
9	iar	iar	ADV	Rc	_	13	cc	_	O
10	ecocardiografia	ecocardiografie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	nsubj	_	B-PROC
11	inițială	inițial	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	O
12	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	O
13	negativă	negativ	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	conj	_	O
14	,	,	PUNCT	COMMA	_	2	punct	_	O
15	e	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	O
16	necesar	necesar	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	O
17	ca	ca	ADV	Rc	_	22	mark	_	O
18	examenul	examen	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	22	nsubj	_	B-PROC
19	ecocardiografic	ecocardiografic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	18	amod	_	I-PROC
20	să	să	PART	Qs	Mood=Sub	22	mark	_	O
21	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	22	expl:pv	_	O
22	repete	repeta	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	16	csubj	_	O
23	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	25	case	_	O
24	43291	43291	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	25	nummod	_	O
25	zile	zi	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	22	obl	_	O
26	.	.	PUNCT	PERIOD	_	16	punct	_	O

~~~


