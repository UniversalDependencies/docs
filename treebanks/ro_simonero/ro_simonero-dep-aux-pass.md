---
layout: base
title:  'Statistics of aux:pass in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-aux.html">aux</a></tt>.

1077 nodes (1%) are attached to their parents as `aux:pass`.

1071 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11142061281337.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (1013; 94% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (58; 5% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (6; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Stentarea	stentare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubj:pass	_	B-PROC
2	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	O
3	rezervată	rezerva	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	O
4	cazurilor	caz	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	3	iobj	_	O
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	APTL	APTL	NOUN	Yn	Abbr=Yes	4	nmod	_	B-PROC
7	suboptimală	suboptimal	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	O
8	(	(	PUNCT	LPAR	_	9	punct	_	O
9	39	39	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	3	parataxis	_	O
10	)	)	PUNCT	RPAR	_	9	punct	_	O
11	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux:pass	color:blue
1	Din	din	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
2	cauza	cauză	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	obl	_	O
3	costului	cost	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	13	obl	_	O
4	ridicat	ridicat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	O
5	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	6	det	_	O
6	materialelor	material	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	3	nmod	_	O
7	,	,	PUNCT	COMMA	_	3	punct	_	O
8	numărul	număr	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	13	nsubj:pass	_	O
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	O
10	intervenții	intervenție	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	nmod	_	O
11	a	avea	AUX	Va--3s	Number=Sing|Person=3	13	aux	_	O
12	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	13	aux:pass	_	O
13	limitat	limitat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	O
14	.	.	PUNCT	PERIOD	_	13	punct	_	O

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Acești	acest	DET	Dd3mpr---e	Case=Nom|Gender=Masc|Number=Plur|Person=3|Position=Prenom|PronType=Dem	2	det	_	O
2	precursori	precursor	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	3	nsubj	_	O
3	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
4	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	5	aux:pass	_	O
5	aminoacizi	aminoacid	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	3	ccomp	_	B-CHEM
6	,	,	PUNCT	COMMA	_	7	punct	_	O
7	lactat	lactat	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	conj	_	B-CHEM
8	,	,	PUNCT	COMMA	_	9	punct	_	O
9	piruvat	piruvat	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	conj	_	B-CHEM
10	și	și	CCONJ	Crssp	Polarity=Pos	11	cc	_	O
11	glicerol	glicerol	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	conj	_	B-CHEM
12	(	(	PUNCT	LPAR	_	13	punct	_	O
13	18	18	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	3	parataxis	_	O
14	)	)	PUNCT	RPAR	_	13	punct	_	O
15	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


