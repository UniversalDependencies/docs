---
layout: base
title:  'Statistics of xcomp in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `xcomp`

This relation is universal.

68 nodes (0%) are attached to their parents as `xcomp`.

65 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.48529411764706.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (27; 40% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (14; 21% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (11; 16% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (8; 12% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Prezența	prezență	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubj	_	O
2	comorbidităților	comorbiditate	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	1	nmod	_	B-DISO
3	reprezintă	reprezenta	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
4	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	5	det	_	O
5	particularitate	particularitate	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	3	xcomp	_	O
6	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	7	det	_	O
7	IC	IC	NOUN	Yn	Abbr=Yes	5	nmod	_	B-DISO
8	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	O
9	vârstnici	vârstnic	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	5	nmod	_	O
10	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	Acizii	acid	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubj	_	B-CHEM
2	biliari	biliar	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	amod	_	I-CHEM
3	sintetizați	sintetiza	VERB	Vmp--pm	Gender=Masc|Number=Plur|VerbForm=Part	1	acl	_	O
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	O
5	ficat	ficat	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	B-ANAT
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	O
7	numesc	numi	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
8	acizi	acid	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	7	nmod	_	B-CHEM
9	biliari	biliar	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	7	xcomp	_	I-CHEM
10	primari	primar	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	I-CHEM
11	(	(	PUNCT	LPAR	_	12	punct	_	O
12	acidul	acid	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	appos	_	B-CHEM
13	colic	colic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	I-CHEM
14	și	și	CCONJ	Crssp	Polarity=Pos	15	cc	_	O
15	dezoxicolic	dezoxicolic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	13	conj	_	I-CHEM
16	)	)	PUNCT	RPAR	_	12	punct	_	O
17	.	.	PUNCT	PERIOD	_	7	punct	_	O

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
1	Efectele	efect	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	6	nsubj	_	O
2	antagonizante	antagonizant	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	1	amod	_	O
3	față	față	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	case	_	O
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	fixed	_	O
5	insulină	insulină	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	B-CHEM
6	par	părea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
7	a	a	PART	Qn	PartType=Inf	9	mark	_	O
8	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	9	aux:pass	_	O
9	localizate	localiza	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	6	xcomp	_	O
10	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	O
11	nivel	nivel	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	obl	_	O
12	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	O
13	postreceptor	postreceptor	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	nmod	_	O
14	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


