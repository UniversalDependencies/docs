---
layout: base
title:  'Statistics of obl:agent in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="sk_snk-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="sk_snk-dep-obl-arg.html">obl:arg</a></tt>.

7 nodes (0%) are attached to their parents as `obl:agent`.

7 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.28571428571429.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (3; 43% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (3; 43% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obl:agent	color:blue
1	Bola	byť	AUX	VLescf+	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	2	aux:pass	2:aux:pass	_
2	presadzovaná	presadzovaný	ADJ	Gtfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
3	hlavne	hlavne	PART	T	_	6	advmod:emph	6:advmod:emph	_
4	sovietskou	sovietsky	ADJ	AAfs7x	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	_
5	marxistickou	marxistický	ADJ	AAfs7x	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	_
6	historiografiou	historiografia	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	2	obl:agent	2:obl:agent	SpaceAfter=No
7	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	Roku	rok	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	obl	4:obl	_
2	1095	1095	NUM	0	NumForm=Digit	1	nummod	1:nummod	_
3	bol	byť	AUX	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	4	aux:pass	4:aux:pass	_
4	obliehaný	obliehaný	ADJ	Gtis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	svojim	svoj	DET	PFms7:q	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes|Typo=Yes	6	det	6:det	_
6	bratom	brat	NOUN	SSms7	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	nmod	7:nmod	_
7	Olegom	oleg	PROPN	SSms7:r	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	4	obl:agent	4:obl:agent	SpaceAfter=No
8	,	,	PUNCT	Z	_	11	punct	11:punct	_
9	V	v	PROPN	W	Abbr=Yes	11	nmod	11:nmod	SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	9:punct	_
11	Monomachom	monomach	PROPN	SSms7:r	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	conj	4:obl:agent|7:conj	_
12	a	a	CCONJ	O	_	14	cc	14:cc	_
13	Svjatopolkom	svjatopolek	PROPN	SSms7:r	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	14	nmod	14:nmod	_
14	Izjaslavičom	izjaslavič	PROPN	SSms7:r	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	conj	4:obl:agent|7:conj	SpaceAfter=No
15	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 obl:agent	color:blue
1	Mohlo	môcť	VERB	VLescn+	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
2	byť	byť	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	_
3	len	len	PART	T	_	5	advmod:emph	5:advmod:emph	_
4	zo	z	ADP	Ev2	AdpType=Voc|Case=Gen	5	case	5:case	_
5	stromu	strom	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	obl	2:obl	SpaceAfter=No
6	,	,	PUNCT	Z	_	10	punct	10:punct	_
7	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	8	case	8:case	_
8	ktorého	ktorý	DET	PAis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|PronType=Int,Rel	10	obl:arg	10:obl:arg	_
9	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	10	expl:pass	10:expl:pass	_
10	zaťalo	zaťať	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	5	acl	5:acl	_
11	sekerou	sekera	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	10	obl:agent	10:obl:agent	_
12	so	s	ADP	Ev7	AdpType=Voc|Case=Ins	14	case	14:case	_
13	zatvorenými	zatvorený	ADJ	Gtnp7x	Case=Ins|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	14	amod	14:amod	_
14	očami	oko	NOUN	SSnp7	Case=Ins|Gender=Neut|Number=Plur	10	obl	10:obl	SpaceAfter=No
15	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


