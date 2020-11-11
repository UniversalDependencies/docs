---
layout: base
title:  'Statistics of nummod in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="cs_cac-dep-nummod-gov.html">nummod:gov</a></tt>.

4442 nodes (1%) are attached to their parents as `nummod`.

2802 instances of `nummod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32305267897344.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (4136; 93% instances), <tt><a href="cs_cac-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (211; 5% instances), <tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (30; 1% instances), <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (27; 1% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (23; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="cs_cac-pos-DET.html">DET</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="cs_cac-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="cs_cac-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	Praze	Praha	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
4	Zbraslavi	Zbraslav	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	2	nmod	2:nmod:loc	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
6	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	2	dep	2:dep	LGloss=(jednotka_času)
7	#	&cdate;	NUM	C=-------------	NumForm=Digit|NumType=Card	8	nummod	8:nummod	_
8	dubna	duben	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	6	nmod	6:nmod:gen	_
9	#	&cyear;	NUM	C=-------------	NumForm=Digit|NumType=Card	8	nummod	8:nummod	_
10	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LGloss=(mít_možnost_[něco_dělat])
2	asi	asi	PART	TT-------------	_	4	advmod:emph	4:advmod:emph	_
3	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	5	case	5:case	LId=v-1
4	#	&camount;	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod	5:nummod	_
5	*	&cwildcard;	SYM	Xx-------------	Abbr=Yes	7	advmod	7:advmod	_
6	případů	případ	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	5:nmod:gen	_
7	přejít	přejít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	_
8	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	10:case	LId=v-1
9	nádorové	nádorový	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	10	amod	10:amod	_
10	bujení	bujení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	7	obl:arg	7:obl:arg:v:acc	SpaceAfter=No|LDeriv=bujet
11	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Praha	Praha	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	0	root	0:root	_
2	#	&clabel;	NUM	C=-------------	NumForm=Digit|NumType=Card	1	nummod	1:nummod	_
3	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


