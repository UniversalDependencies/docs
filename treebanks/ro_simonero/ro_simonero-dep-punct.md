---
layout: base
title:  'Statistics of punct in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `punct`

This relation is universal.

19614 nodes (13%) are attached to their parents as `punct`.

10186 instances of `punct` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.33399612521668.

The following 16 pairs of parts of speech are connected with `punct`: <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (7885; 40% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (6111; 31% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (2720; 14% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (1323; 7% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (524; 3% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (337; 2% instances), <tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (332; 2% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (146; 1% instances), <tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (142; 1% instances), <tt><a href="ro_simonero-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (48; 0% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (29; 0% instances), <tt><a href="ro_simonero-pos-DET.html">DET</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="ro_simonero-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-PART.html">PART</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ro_simonero-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 punct	color:blue
1	Tusea	tuse	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	11	nsubj	_	BioNERLabel=B-DISO
2	cronică	cronic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	BioNERLabel=I-DISO|SpaceAfter=No
3	,	,	PUNCT	COMMA	_	4	punct	_	_
4	seacă	sec	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	conj	_	BioNERLabel=I-DISO|SpaceAfter=No
5	,	,	PUNCT	COMMA	_	6	punct	_	_
6	echivalent	echivalent	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	conj	_	_
7	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	_
8	dispneei	dispnee	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	nmod	_	BioNERLabel=B-DISO|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	1	punct	_	_
10	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	frecventă	frecvent	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 punct	color:blue
1	Din	din	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	contra	contra	ADV	Rgp	Degree=Pos	6	obl	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	venele	venă	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	6	nsubj	_	BioNERLabel=B-ANAT
5	centrale	central	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	4	amod	_	BioNERLabel=I-ANAT
6	devin	deveni	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	subțiri	subțire	ADJ	Afp-p-n	Definite=Ind|Degree=Pos|Number=Plur	6	xcomp	_	_
8	și	și	CCONJ	Crssp	Polarity=Pos	10	cc	_	_
9	ușor	ușor	ADV	Rgp	Degree=Pos	10	advmod	_	_
10	distensibile	distensibil	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	7	conj	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 punct	color:blue
1	Valoarea	valoare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	11	nsubj	_	_
2	medie	mediu	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	_
3	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	4	det	_	_
4	euroSCORE	euroSCORE	X	X	_	1	nmod	_	_
5	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	pacienții	pacient	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	1	nmod	_	_
7	tratați	tratat	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	6	acl	_	_
8	a	avea	AUX	Va--3s	Number=Sing|Person=3	11	aux	_	_
9	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	11	cop	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	3,45%	3,45%	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	0	root	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	11	punct	_	_

~~~


