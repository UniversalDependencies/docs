---
layout: base
title:  'Statistics of nummod in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `nummod`

This relation is universal.

3169 nodes (2%) are attached to their parents as `nummod`.

1733 instances of `nummod` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88892395077311.

The following 17 pairs of parts of speech are connected with `nummod`: <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (2643; 83% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (191; 6% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (121; 4% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (66; 2% instances), <tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (34; 1% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (30; 1% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (29; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (25; 1% instances), <tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (16; 1% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-DET.html">DET</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	ACO	ACO	NOUN	Yn	Abbr=Yes	4	nsubj	_	BioNERLabel=B-CHEM
2	noi	nou	ADJ	Afp-p-n	Definite=Ind|Degree=Pos|Number=Plur	1	amod	_	_
3	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	contraindicate	contraindica	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	_
5	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	clearence	clearance	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	_
7	<	<	PUNCT	LT	_	6	punct	_	_
8	30	30	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	9	nummod	_	_
9	ml	ml	NOUN	Yn	Abbr=Yes	4	obl	_	SpaceAfter=No
10	/	/	PUNCT	SLASH	AdpType=Prep	9	punct	_	SpaceAfter=No
11	min	min	NOUN	Yn	Abbr=Yes	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nummod	color:blue
1	Afectează	afecta	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	cca	cca	ADV	Yr	Abbr=Yes	3	advmod	_	_
3	0.7	0.7	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	1	nummod	_	_
4	dintre	dintre	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	femeile	femeie	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	3	nmod	_	_
6	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	SOP	SOP	NOUN	Yn	Abbr=Yes	5	nmod	_	BioNERLabel=B-DISO|SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nummod	color:blue
1	El	el	PRON	Pp3msr--------s	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	2	nsubj	_	_
2	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	asocia	asocia	VERB	Vmnp	Tense=Pres|VerbForm=Inf	2	ccomp	_	_
4	acnee	acnee	NOUN	Ncf--n	Definite=Ind|Gender=Fem	3	obj	_	BioNERLabel=B-DISO
5	(	(	PUNCT	LPAR	_	6	punct	_	SpaceAfter=No
6	15	15	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	4	parataxis	_	SpaceAfter=No
7	-	-	PUNCT	DASH	_	6	punct	_	SpaceAfter=No
8	25	25	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	6	nummod	_	SpaceAfter=No
9	%	%	PUNCT	PERCENT	_	6	punct	_	SpaceAfter=No
10	)	)	PUNCT	RPAR	_	6	punct	_	_
11	și	și	CCONJ	Crssp	Polarity=Pos	12	cc	_	_
12	alopecie	alopecie	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	4	conj	_	BioNERLabel=B-DISO
13	androgenică	androgenic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	BioNERLabel=I-DISO
14	(	(	PUNCT	LPAR	_	15	punct	_	SpaceAfter=No
15	0.05	0.05	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	12	parataxis	_	SpaceAfter=No
16	)	)	PUNCT	RPAR	_	15	punct	_	SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


