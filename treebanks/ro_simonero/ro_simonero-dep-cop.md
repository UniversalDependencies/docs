---
layout: base
title:  'Statistics of cop in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `cop`

This relation is universal.

1848 nodes (1%) are attached to their parents as `cop`.

1731 instances of `cop` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77435064935065.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (867; 47% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (616; 33% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (141; 8% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (111; 6% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (52; 3% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (50; 3% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 cop	color:blue
1	Tusea	tuse	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	11	nsubj	_	B-DISO
2	cronică	cronic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	I-DISO
3	,	,	PUNCT	COMMA	_	4	punct	_	O
4	seacă	sec	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	conj	_	I-DISO
5	,	,	PUNCT	COMMA	_	6	punct	_	O
6	echivalent	echivalent	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	conj	_	O
7	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	O
8	dispneei	dispnee	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	nmod	_	B-DISO
9	,	,	PUNCT	COMMA	_	1	punct	_	O
10	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	O
11	frecventă	frecvent	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	O
12	.	.	PUNCT	PERIOD	_	11	punct	_	O

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	Este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	O
2	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	3	det	_	O
3	test	test	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	O
4	indispensabil	indispensabil	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	O
5	evaluării	evaluare	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	4	iobj	_	O
6	eficacității	eficacitate	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	O
7	terapiei	terapie	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	nmod	_	O
8	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	ACO	ACO	NOUN	Yn	Abbr=Yes	4	nsubj	_	B-CHEM
2	noi	nou	ADJ	Afp-p-n	Definite=Ind|Degree=Pos|Number=Plur	1	amod	_	O
3	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	O
4	contraindicate	contraindica	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	O
5	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	clearence	clearance	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	O
7	<	<	PUNCT	LT	_	6	punct	_	O
8	30	30	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	9	nummod	_	O
9	ml	ml	NOUN	Yn	Abbr=Yes	4	obl	_	O
10	/	/	PUNCT	SLASH	AdpType=Prep	9	punct	_	O
11	min	min	NOUN	Yn	Abbr=Yes	9	nmod	_	O
12	.	.	PUNCT	PERIOD	_	4	punct	_	O

~~~


