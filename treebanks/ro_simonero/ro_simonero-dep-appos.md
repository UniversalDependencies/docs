---
layout: base
title:  'Statistics of appos in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `appos`

This relation is universal.

191 nodes (1%) are attached to their parents as `appos`.

191 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.58115183246073.

The following 14 pairs of parts of speech are connected with `appos`: <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (155; 81% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (12; 6% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 appos	color:blue
1	Transferul	transfer	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	O
2	acetil-CoA	acetil-CoA	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	B-CHEM
3	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	O
4	mitocondrii	mitocondrie	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	1	nmod	_	B-CHEM
5	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	citosol	citosol	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	B-CHEM
7	necesită	necesita	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
8	mai	mai	ADV	Rp	_	9	advmod	_	O
9	multe	mult	DET	Di3fp	Gender=Fem|Number=Plur|Person=3|PronType=Ind	10	det	_	O
10	reacții	reacție	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	obj	_	O
11	(	(	PUNCT	LPAR	_	12	punct	_	O
12	ciclul	ciclu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	10	appos	_	O
13	malat-citrat	malat-citrat	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	12	amod	_	O
14	)	)	PUNCT	RPAR	_	12	punct	_	O
15	.	.	PUNCT	PERIOD	_	7	punct	_	O

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 appos	color:blue
1	Pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	evaluarea	evaluare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	obl	_	O
3	pacientului	pacient	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	O
4	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	O
5	ICA	ICA	NOUN	Yn	Abbr=Yes	3	nmod	_	B-DISO
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	8	expl:pass	_	O
7	mai	mai	ADV	Rp	_	8	advmod	_	O
8	utilizează	utiliza	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
9	creatinkinaza	creatinkinază	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	nsubj:pass	_	B-CHEM
10	MB	MB	NOUN	Yn	Abbr=Yes	9	nmod	_	I-CHEM
11	,	,	PUNCT	COMMA	_	12	punct	_	O
12	miozina-1	miozina-1	X	X	_	9	appos	_	B-CHEM
13	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	O
14	lanțuri	lanț	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	12	nmod	_	O
15	ușoare	ușor	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	O
16	.	.	PUNCT	PERIOD	_	8	punct	_	O

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 23 appos	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	prezent	prezent	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	O
3	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	O
4	disponibile	disponibil	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	O
5	două	doi	NUM	Mcfp-l	Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	6	nummod	_	O
6	tipuri	tip	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	nsubj	_	O
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	O
8	proteze	proteză	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	6	nmod	_	O
9	,	,	PUNCT	COMMA	_	10	punct	_	O
10	una	unul	PRON	Pi3fsr	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	6	appos	_	O
11	expandabilă	expandabil	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	O
12	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	O
13	balon	balon	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	nmod:pmod	_	O
14	(	(	PUNCT	LPAR	_	15	punct	_	O
15	Edwards	Edwards	PROPN	Np	_	6	appos	_	O
16	Sapien	Sapien	PROPN	Np	_	15	nmod	_	O
17	XT	XT	X	X	_	16	nmod	_	O
18	,	,	PUNCT	COMMA	_	19	punct	_	O
19	Edwards	Edwards	PROPN	Np	_	15	conj	_	O
20	Lifesciences	Lifesciences	PROPN	Np	_	19	flat	_	O
21	)	)	PUNCT	RPAR	_	15	punct	_	O
22	,	,	PUNCT	COMMA	_	23	punct	_	O
23	alta	altul	PRON	Pi3fsr	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	6	appos	_	O
24	autoexpandabilă	autoexpandabil	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	23	amod	_	O
25	(	(	PUNCT	LPAR	_	26	punct	_	O
26	CoreValve	CoreValve	PROPN	Np	_	23	nmod	_	O
27	,	,	PUNCT	COMMA	_	28	punct	_	O
28	Medtronic	Medtronic	PROPN	Np	_	26	conj	_	O
29	)	)	PUNCT	RPAR	_	26	punct	_	O
30	.	.	PUNCT	PERIOD	_	4	punct	_	O

~~~


