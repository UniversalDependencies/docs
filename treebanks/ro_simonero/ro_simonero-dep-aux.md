---
layout: base
title:  'Statistics of aux in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ro_simonero-dep-aux-pass.html">aux:pass</a></tt>.

1987 nodes (1%) are attached to their parents as `aux`.

1953 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31706089582285.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (1798; 90% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (81; 4% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (52; 3% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (33; 2% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (18; 1% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Frison	frison	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	nsubj	_	BioNERLabel=B-DISO
2	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	3	aux	_	_
3	prezentat	prezenta	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	2	2	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	5	nummod	_	_
5	pacienți	pacient	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Evoluția	evoluție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	_
2	lor	lui	DET	Ds3---p	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	1	det	_	_
3	a	avea	AUX	Va--3s	Number=Sing|Person=3	5	aux	_	_
4	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	5	cop	_	_
5	favorabilă	favorabil	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	8	punct	_	_
7	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	normalizarea	normalizare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	5	obl	_	_
9	K	K	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	_
10	seric	seric	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
11	și	și	CCONJ	Crssp	Polarity=Pos	13	cc	_	_
12	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	13	det	_	_
13	TA	TA	NOUN	Yn	Abbr=Yes	5	conj	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux	color:blue
1	Reacțiile	reacție	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	11	nsubj	_	_
2	adverse	advers	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	1	amod	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	6	punct	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
5	orice	orice	DET	Di3--r---e	Case=Nom|Person=3|Position=Prenom|PronType=Ind	6	det	_	_
6	caz	caz	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	6	punct	_	_
8	nu	nu	PART	Qz	Polarity=Neg	11	advmod	_	_
9	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	11	aux	_	_
10	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	11	cop	_	_
11	motive	motiv	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	0	root	_	_
12	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	întrerupere	întrerupere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	11	nmod	_	_
14	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	15	det	_	_
15	tratamentului	tratament	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	11	punct	_	_

~~~


