---
layout: base
title:  'Statistics of flat in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `flat`

This relation is universal.

23 nodes (0%) are attached to their parents as `flat`.

23 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26086956521739.

The following 8 pairs of parts of speech are connected with `flat`: <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (14; 61% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (2; 9% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	studiul	studiu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	obl	_	O
3	DIG	DIG	NOUN	Yn	Abbr=Yes	2	nmod	_	O
4	(	(	PUNCT	LPAR	_	5	punct	_	O
5	Digitalis	Digitalis	X	X	_	2	appos	_	O
6	Intervention	Intervention	X	X	_	5	flat	_	O
7	Group	group	X	X	_	6	nmod	_	O
8	)	)	PUNCT	RPAR	_	5	punct	_	O
9	a	avea	AUX	Va--3s	Number=Sing|Person=3	11	aux	_	O
10	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	11	aux:pass	_	O
11	evaluat	evalua	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
12	tratamentul	tratament	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj:pass	_	O
13	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	O
14	digoxin	digoxin	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	12	nmod	_	B-CHEM
15	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	O
16	IC	IC	NOUN	Yn	Abbr=Yes	11	obl	_	B-DISO
17	.	.	PUNCT	PERIOD	_	11	punct	_	O

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 flat	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	intervalul	interval	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	obl	_	O
3	2000	2000	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	2	nummod	_	O
4	-	-	PUNCT	DASH	_	2	punct	_	O
5	2010	2010	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	2	nummod	_	O
6	,	,	PUNCT	COMMA	_	2	punct	_	O
7	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	9	aux	_	O
8	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	9	aux:pass	_	O
9	efectuate	efectua	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	O
10	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	O
11	IBCV	IBCV	NOUN	Yn	Abbr=Yes	9	obl	_	O
12	Iași	Iași	PROPN	Np	_	11	flat	_	O
13	1.148	1.148	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	15	nummod	_	O
14	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	O
15	intervenții	intervenție	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	9	nsubj:pass	_	O
16	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	O
17	bypass	bypass	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	15	nmod	_	B-PROC
18	aortocoronarian	aortocoronarian	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	17	amod	_	I-PROC
19	,	,	PUNCT	COMMA	_	22	punct	_	O
20	dintre	dintre	ADP	Spsa	AdpType=Prep|Case=Acc	21	case	_	O
21	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	22	nmod	_	O
22	33	33	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	15	nummod	_	O
23	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	24	case	_	O
24	regim	regim	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	22	nmod	_	O
25	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	26	case	_	O
26	urgență	urgență	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	24	nmod	_	O
27	și	și	CCONJ	Crssp	Polarity=Pos	29	cc	_	O
28	28	28	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	29	nummod	_	O
29	intervenții	intervenție	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	11	conj	_	B-PROC
30	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	31	case	_	I-PROC
31	cord	cord	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	29	nmod	_	I-PROC
32	bătând	bate	VERB	Vmg	VerbForm=Ger	9	advcl	_	I-PROC
33	.	.	PUNCT	PERIOD	_	9	punct	_	O

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	studiul	studiu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	10	obl	_	O
3	HFA	HFA	NOUN	Yn	Abbr=Yes	2	nmod	_	O
4	Hotline	Hotline	X	X	_	3	flat	_	O
5	(	(	PUNCT	LPAR	_	6	punct	_	O
6	2010	2010	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	3	nummod	_	O
7	)	)	PUNCT	RPAR	_	6	punct	_	O
8	a	avea	AUX	Va--3s	Number=Sing|Person=3	10	aux	_	O
9	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	10	aux:pass	_	O
10	utilizat	utiliza	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
11	tonapofilin	tonapofilin	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	nsubj:pass	_	B-CHEM
12	(	(	PUNCT	LPAR	_	13	punct	_	O
13	BG9928	BG9928	NOUN	Yn	Abbr=Yes	11	appos	_	B-CHEM
14	)	)	PUNCT	RPAR	_	13	punct	_	O
15	,	,	PUNCT	COMMA	_	20	punct	_	O
16	dar	dar	CCONJ	Ccssp	Polarity=Pos	20	cc	_	O
17	studiul	studiu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	20	nsubj:pass	_	O
18	a	avea	AUX	Va--3s	Number=Sing|Person=3	20	aux	_	O
19	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	20	aux:pass	_	O
20	întrerupt	întrerupe	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	10	conj	_	O
21	deoarece	deoarece	SCONJ	Csssp	Polarity=Pos	25	mark	_	O
22	nu	nu	PART	Qz	Polarity=Neg	25	advmod	_	O
23	s-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	25	expl:pass	_	O
24	a	avea	AUX	Va--3s	Number=Sing|Person=3	25	aux	_	O
25	constatat	constata	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	20	advcl	_	O
26	ameliorări	ameliorare	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	25	nsubj:pass	_	O
27	semnificative	semnificativ	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	26	amod	_	O
28	ale	al	DET	Tsfp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	29	det	_	O
29	dispneei	dispnee	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	26	nmod	_	B-DISO
30	sau	sau	CCONJ	Ccssp	Polarity=Pos	31	cc	_	O
31	reducerea	reducere	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	26	conj	_	O
32	greutății	greutate	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	31	nmod	_	O
33	corporale	corporal	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	32	amod	_	O
34	.	.	PUNCT	PERIOD	_	10	punct	_	O

~~~


