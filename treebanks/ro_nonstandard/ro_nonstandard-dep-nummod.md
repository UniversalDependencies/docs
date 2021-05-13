---
layout: base
title:  'Statistics of nummod in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `nummod`

This relation is universal.

3863 nodes (1%) are attached to their parents as `nummod`.

3032 instances of `nummod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51333160755889.

The following 12 pairs of parts of speech are connected with `nummod`: <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (3423; 89% instances), <tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (136; 4% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (110; 3% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (100; 3% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (57; 1% instances), <tt><a href="ro_nonstandard-pos-X.html">X</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (13; 0% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


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
6	El	el	PRON	Pp3msa--------s	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	4	obl:pmod	_	ref=MATT17.23
7	și	și	CCONJ	Ccssp	Polarity=Pos	12	cc	_	ref=MATT17.23
8	a	al	DET	Tsfsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Poss=Yes|PronType=Art	9	det	_	ref=MATT17.23
9	treia	trei	NUM	Mofs-ly	Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	10	nummod	_	ref=MATT17.23
10	zi	zi	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	12	nmod:tmod	_	ref=MATT17.23
11	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	aux	_	ref=MATT17.23
12	învie	învia	VERB	Vmn	VerbForm=Inf	4	conj	_	ref=MATT17.23|SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MATT17.23

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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Așa	așa	ADV	Rg	_	0	root	_	ref=pred.27
2	și	și	ADV	Rg	_	3	advmod	_	ref=pred.27
3	Ioasafat	Ioasafat	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	1	nsubj	_	ref=pred.27|SpaceAfter=No
4	,	,	PUNCT	COMMA	_	6	punct	_	ref=pred.27
5	2	2	NUM	M	NumForm=Digit	6	nummod	_	ref=pred.27
6	Paralipomen	Paralipomen	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	1	parataxis	_	ref=pred.27|SpaceAfter=No
7	,	,	PUNCT	COMMA	_	8	punct	_	ref=pred.27
8	19	19	NUM	M	NumForm=Digit	6	nummod	_	ref=pred.27|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	10	punct	_	ref=pred.27
10	stih	stih	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	6	nmod	_	ref=pred.27
11	4	4	NUM	M	NumForm=Digit	10	nummod	_	ref=pred.27|SpaceAfter=No
12	,	,	PUNCT	COMMA	_	13	punct	_	ref=pred.27
13	11	11	NUM	M	NumForm=Digit	11	conj	_	ref=pred.27|SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	1	punct	_	ref=pred.27

~~~


