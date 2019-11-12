---
layout: base
title:  'Statistics of nmod:agent in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `nmod:agent`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="ro_simonero-dep-nmod-pmod.html">nmod:pmod</a></tt>, <tt><a href="ro_simonero-dep-nmod-tmod.html">nmod:tmod</a></tt>.

46 nodes (0%) are attached to their parents as `nmod:agent`.

46 instances of `nmod:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.34782608695652.

The following 3 pairs of parts of speech are connected with `nmod:agent`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (40; 87% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (5; 11% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod:agent	color:blue
1	Homeostazia	homeostazie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	O
2	glicemică	glicemic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	O
3	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	O
4	asigurată	asigura	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	O
5	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	mecanisme	mecanism	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	nmod:agent	_	O
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	O
8	control	control	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	nmod	_	O
9	multiple	multiplu	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	6	amod	_	O
10	.	.	PUNCT	PERIOD	_	4	punct	_	O

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:agent	color:blue
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


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 nmod:agent	color:blue
1	De	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	advmod	_	O
2	asemenea	asemenea	ADV	Rgp	Degree=Pos	1	fixed	_	O
3	există	exista	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
4	similitudini	similitudine	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	3	nsubj	_	O
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	osteogeneza	osteogeneză	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nmod	_	O
7	,	,	PUNCT	COMMA	_	10	punct	_	O
8	procesul	proces	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	10	nsubj:pass	_	O
9	fiind	fi	AUX	Vag	VerbForm=Ger	10	aux:pass	_	O
10	reglat	regla	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	advcl	_	O
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	O
12	expresia	expresie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	10	nmod:agent	_	O
13	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	O
14	către	către	ADP	Spsa	AdpType=Prep|Case=Acc	13	fixed	_	O
15	valve	valvă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	12	nmod:agent	_	B-ANAT
16	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	17	det	_	O
17	markerilor	marker	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	12	nmod	_	B-CHEM
18	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	O
19	diferențiere	diferențiere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	17	nmod	_	O
20	osteoblastică	osteoblastic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	19	amod	_	O
21	(	(	PUNCT	LPAR	_	22	punct	_	O
22	34	34	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	3	parataxis	_	O
23	)	)	PUNCT	RPAR	_	22	punct	_	O
24	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


