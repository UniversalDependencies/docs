---
layout: base
title:  'Statistics of cop in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `cop`

This relation is universal.

183 nodes (1%) are attached to their parents as `cop`.

171 instances of `cop` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75409836065574.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (89; 49% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (60; 33% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (14; 8% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (13; 7% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (5; 3% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (1; 1% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Ularitide	Ularitide	PROPN	Np	_	6	nsubj	_	B-CHEM
2	/	/	PUNCT	SLASH	AdpType=Prep	1	punct	_	O
3	uradilatin	uradilatin	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	conj	_	B-CHEM
4	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	O
5	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	6	det	_	O
6	peptid	peptid	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	B-CHEM
7	natriuretic	natriuretic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	I-CHEM
8	izolat	izola	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	6	acl	_	O
9	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	O
10	urina	urină	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	obl	_	B-ANAT
11	umană	uman	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	O
12	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 cop	color:blue
1	Dacă	dacă	SCONJ	Csssp	Polarity=Pos	10	mark	_	O
2	infecțiile	infecție	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	10	nsubj	_	B-DISO
3	cutanate	cutanat	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	2	amod	_	I-DISO
4	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	O
5	jurul	jur	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	O
6	cateterului	cateter	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	O
7	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	O
8	ușor	ușor	ADV	Rgp	Degree=Pos	10	advmod	_	O
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	O
10	identificat	identifica	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	15	advcl	_	O
11	,	,	PUNCT	COMMA	_	10	punct	_	O
12	cele	acela	PRON	Pd3fpr	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	15	nsubj	_	O
13	pericateterale	pericateteral	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	12	amod	_	I-DISO
14	profunde	profund	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	12	amod	_	I-DISO
15	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
16	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	19	cop	_	O
17	destul	destul	ADV	Rgp	Degree=Pos	19	advmod	_	O
18	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	O
19	greu	greu	ADV	Rgp	Degree=Pos	15	ccomp	_	O
20	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	21	mark	_	O
21	diagnosticat	diagnostica	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	19	advcl	_	O
22	.	.	PUNCT	PERIOD	_	15	punct	_	O

~~~


