---
layout: base
title:  'Statistics of xcomp in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `xcomp`

This relation is universal.

479 nodes (0%) are attached to their parents as `xcomp`.

457 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.32776617954071.

The following 16 pairs of parts of speech are connected with `xcomp`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (207; 43% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (123; 26% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (56; 12% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (40; 8% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (25; 5% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Lanțul	lanț	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	parataxis	_	O
2	B	B	NOUN	Yn	Abbr=Yes	1	nmod	_	O
3	18	18	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	5	nummod	_	O
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
5	Zn	Zn	NOUN	Yn	Abbr=Yes	1	nmod	_	B-CHEM
6	)	)	PUNCT	RPAR	_	5	punct	_	O
7	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	O
8	numite	numi	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	O
9	granule	granulă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	xcomp	_	B-CHEM
10	mature	matur	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	I-CHEM
11	.	.	PUNCT	PERIOD	_	8	punct	_	O

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Din	din	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	contra	contra	ADV	Rgp	Degree=Pos	6	obl	_	O
3	,	,	PUNCT	COMMA	_	2	punct	_	O
4	venele	venă	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	6	nsubj	_	B-ANAT
5	centrale	central	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	4	amod	_	I-ANAT
6	devin	deveni	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
7	subțiri	subțire	ADJ	Afp-p-n	Definite=Ind|Degree=Pos|Number=Plur	6	xcomp	_	O
8	și	și	CCONJ	Crssp	Polarity=Pos	10	cc	_	O
9	ușor	ușor	ADV	Rgp	Degree=Pos	10	advmod	_	O
10	distensibile	distensibil	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	7	conj	_	O
11	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 xcomp	color:blue
1	Doza	doză	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	O
2	optimă	optim	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	acl	_	O
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	O
4	statină	statină	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	B-CHEM
5	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	prevenția	prevenție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	O
7	evenimentelor	eveniment	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	6	nmod	_	B-DISO
8	perioperatorii	perioperatoriu	ADJ	Afp-p-n	Definite=Ind|Degree=Pos|Number=Plur	7	amod	_	I-DISO
9	rămâne	rămâne	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
10	să	să	PART	Qs	Mood=Sub	12	mark	_	O
11	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	12	aux:pass	_	O
12	elucidată	elucida	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	9	xcomp	_	O
13	.	.	PUNCT	PERIOD	_	9	punct	_	O

~~~


