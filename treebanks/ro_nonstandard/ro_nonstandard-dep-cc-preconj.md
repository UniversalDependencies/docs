---
layout: base
title:  'Statistics of cc:preconj in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-cc.html">cc</a></tt>.

172 nodes (0%) are attached to their parents as `cc:preconj`.

172 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77325581395349.

The following 11 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt> (77; 45% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt> (52; 30% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt> (12; 7% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt> (8; 5% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt> (7; 4% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt> (5; 3% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt>-<tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Nici	nici	CCONJ	Cccsz	Compound=Yes|Polarity=Neg	2	cc:preconj	_	_
2	pădurea	pădure	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	5	punct	_	_
4	nici	nici	CCONJ	Ccssz	Polarity=Neg	5	cc	_	_
5	izvorul	izvor	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	conj	_	Rhyme=ID13|SpaceAfter=No|Type=Paired
6	,	,	PUNCT	COMMA	_	2	punct	_	_
7	n-	nu	ADV	Qz	Polarity=Neg	9	advmod	_	SpaceAfter=No
8	a	avea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	aux	_	_
9	putut	putea	VERB	Vmp	VerbForm=Part	0	root	_	_
10	să	să	PART	Qs	PartType=Sub	12	mark	_	SpaceAfter=No
11	-mi	eu	PRON	Pp1-sd--------w	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak	12	iobj	_	_
12	stingă	stinge	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	9	ccomp	_	_
13	dorul	dor	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	12	obj	_	Rhyme=ID5|SpaceAfter=No|Type=Paired
14	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc:preconj	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 cc:preconj	color:blue
1	Că	că	SCONJ	Csssp	Polarity=Pos	4	mark	_	ref=PSALM.88.8
2	de-	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	mark	_	ref=PSALM.88.8|SpaceAfter=No
3	a	a	ADP	Spsa	AdpType=Prep|Case=Acc	4	mark	_	ref=PSALM.88.8
4	tocma	tocma	ADV	Rg	_	0	root	_	ref=PSALM.88.8
5	nu	nu	ADV	Qz	Polarity=Neg	4	advmod	_	ref=PSALM.88.8
6	ți	tu	PRON	Pp2-sd--------w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	4	iobj	_	ref=PSALM.88.8|SpaceAfter=No
7	-i	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	ref=PSALM.88.8
8	nime	nimeni	PRON	Pz3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Neg	4	nsubj	_	ref=PSALM.88.8|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	11	punct	_	ref=PSALM.88.8
10	Nice	nici	CCONJ	Cccsz	Compound=Yes|Polarity=Neg	11	cc:preconj	_	ref=PSALM.88.8
11	gios	jos	ADV	Rg	_	4	advmod	_	ref=PSALM.88.8|SpaceAfter=No
12	,	,	PUNCT	COMMA	_	15	punct	_	ref=PSALM.88.8
13	nice	nici	CCONJ	Cccsp	Compound=Yes|Polarity=Pos	15	cc	_	ref=PSALM.88.8|SpaceAfter=No
14	-n	în	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	ref=PSALM.88.8
15	nălțîme	înălțime	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	11	conj	_	ref=PSALM.88.8|SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	4	punct	_	ref=PSALM.88.8

~~~


