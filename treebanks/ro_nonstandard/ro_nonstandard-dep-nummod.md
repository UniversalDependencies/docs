---
layout: base
title:  'Statistics of nummod in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `nummod`

This relation is universal.

2125 nodes (1%) are attached to their parents as `nummod`.

1655 instances of `nummod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38023529411765.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (1838; 86% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (85; 4% instances), <tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (66; 3% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (64; 3% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (43; 2% instances), <tt><a href="ro_nonstandard-pos-X.html">X</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Şi	și	CCONJ	Ccssp	Polarity=Pos	4	cc:preconj	_	ref=MATT17.23|SpaceAfter=No
2	-l	el	PRON	Pp3mpa--------w	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Weak	4	obj	_	ref=MATT17.23
3	vor	vrea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	4	aux	_	ref=MATT17.23
4	omorî	omorî	VERB	Vmn	VerbForm=Inf	0	root	_	ref=MATT17.23
5	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	ref=MATT17.23
6	El	el	PRON	Pp3msa--------s	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	4	nmod:pmod	_	ref=MATT17.23
7	și	și	CCONJ	Ccssp	Polarity=Pos	12	cc	_	ref=MATT17.23
8	a	al	DET	Tsfsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Poss=Yes|PronType=Art	9	det	_	ref=MATT17.23
9	treia	trei	NUM	Mofs-ly	Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	10	nummod	_	ref=MATT17.23
10	zi	zi	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	12	nmod:tmod	_	ref=MATT17.23
11	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	aux	_	ref=MATT17.23
12	învie	învia	VERB	Vmn	VerbForm=Inf	4	conj	_	ref=MATT17.23|SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MATT17.23

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	(	(	PUNCT	LPAR	_	5	punct	_	ref=LUCA2.2|SpaceAfter=No
2	Această	acesta	DET	Dd3fsr---e	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Dem	3	det	_	ref=LUCA2.2
3	scrisoare	scrisoare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nsubj	_	ref=LUCA2.2
4	întîiu	întâi	NUM	Moms-l	Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	5	nummod	_	ref=LUCA2.2
5	fu	fi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=LUCA2.2|SpaceAfter=No
6	,	,	PUNCT	COMMA	_	7	punct	_	ref=LUCA2.2
7	domnind	domni	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	5	advcl:tcl	_	ref=LUCA2.2
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	ref=LUCA2.2
9	Siria	Siria	PROPN	Npfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	obl	_	ref=LUCA2.2
10	Chirineu	Chirineu	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	7	nsubj	_	ref=LUCA2.2|SpaceAfter=No
11	)	)	PUNCT	RPAR	_	5	punct	_	ref=LUCA2.2|SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	5	punct	_	ref=LUCA2.2

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Patru	patru	NUM	Mcfp-l	Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	2	nummod	_	ref=MATT15.32.content
2	mie	mie	NUM	Mcfsrln	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	4	nmod	_	ref=MATT15.32.content
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	ref=MATT15.32.content
4	oameni	om	NOUN	Ncmprn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Plur	6	nsubj	_	ref=MATT15.32.content
5	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	6	expl:pv	_	ref=MATT15.32.content
6	săturară	sătura	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT15.32.content|SpaceAfter=No
7	.	.	PUNCT	PERIOD	_	6	punct	_	ref=MATT15.32.content

~~~


