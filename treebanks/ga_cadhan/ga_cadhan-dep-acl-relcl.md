---
layout: base
title:  'Statistics of acl:relcl in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ga_cadhan-dep-acl.html">acl</a></tt>.

81 nodes (2%) are attached to their parents as `acl:relcl`.

81 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.06172839506173.

The following 7 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (63; 78% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	Chuala	clois	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	na	an	DET	_	Definite=Def|Number=Plur|PronType=Art	3	det	_	_
3	daoine	duine	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	1	nsubj	_	_
4	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	5	nsubj	_	_
5	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	3	acl:relcl	_	_
6	amuigh	amuigh	ADV	_	_	5	xcomp:pred	_	_
7	'san	i	ADP	_	Number=Sing|PronType=Art	8	case	_	_
8	bpáirc	páirc	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	5	obl	_	_
9	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	gleó	gleo	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	obj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	Do	do	PART	_	PartType=Vb	2	mark:prt	_	_
2	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
3	gála	gála	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	aniar	aniar	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	3	amod	_	_
5	agus	agus	CCONJ	_	_	6	cc	_	_
6	andeas	aneas	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	4	conj	_	_
7	ann	i	ADP	_	Gender=Masc|Number=Sing|Person=3	2	xcomp:pred	_	_
8	ba	is	AUX	_	Tense=Past|VerbForm=Cop	9	cop	_	_
9	dhóigh	dóigh	NOUN	_	Case=Nom|Form=Len|Gender=Fem|Number=Sing	3	acl:relcl	_	_
10	leat	le	ADP	_	Number=Sing|Person=2	9	obl:prep	_	_
11	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	12	nsubj	_	_
12	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	9	csubj:cleft	_	_
13	maith	maith	ADJ	_	Degree=Pos	12	xcomp:pred	_	_
14	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	15	nmod:poss	_	_
15	dhóthain	dóthain	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Fem|Number=Sing	13	obl	_	_
16	do	de	ADP	_	_	17	case	_	_
17	loing	long	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	13	obl	_	SpaceAfter=No
18	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 acl:relcl	color:blue
1	A	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	2	nmod:poss	_	_
2	thigh	teach	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	0	root	_	_
3	dochuimseach	dochuimseach	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	2	amod	_	_
4	fein	féin	PRON	_	Reflex=Yes	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	agus	agus	CCONJ	_	_	8	cc	_	_
7	gach	gach	DET	_	Definite=Def	8	det	_	_
8	spiorad	spiorad	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	conj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	maith	maith	ADJ	_	Degree=Pos	8	amod	_	_
11	is	agus	CCONJ	_	_	12	cc	_	_
12	olc	olc	ADJ	_	Degree=Pos	10	conj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	10	punct	_	_
14	dá	de	ADP	_	PronType=Rel	8	nmod	_	_
15	bhfuil	bí	VERB	_	Form=Ecl|Mood=Ind|Tense=Pres	14	acl:relcl	_	_
16	ann	i	ADP	_	Gender=Masc|Number=Sing|Person=3	15	xcomp:pred	_	SpaceAfter=No
17	!	!	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


