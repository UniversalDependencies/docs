---
layout: base
title:  'Statistics of obl:prep in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `obl:prep`

This relation is a language-specific subtype of <tt><a href="ga_cadhan-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ga_cadhan-dep-obl-tmod.html">obl:tmod</a></tt>.

132 nodes (3%) are attached to their parents as `obl:prep`.

130 instances of `obl:prep` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.08333333333333.

The following 7 pairs of parts of speech are connected with `obl:prep`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (71; 54% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (37; 28% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (17; 13% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (4; 3% instances), <tt><a href="ga_cadhan-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:prep	color:blue
1	Inneosad	inis	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Fut	0	root	_	_
2	féin	féin	PRON	_	Reflex=Yes	1	nmod	_	_
3	sin	sin	PRON	_	PronType=Dem	1	obj	_	_
4	duit	do	ADP	_	Number=Sing|Person=2	1	obl:prep	_	SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obl:prep	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:prep	color:blue
1	Is	is	AUX	_	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	aoibhin	aoibhinn	ADJ	_	Degree=Pos	0	root	_	_
3	saoghal	saol	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	doibh	do	ADP	_	Number=Plur|Person=3	2	obl:prep	_	_
5	muna	is	AUX	_	Polarity=Neg|Tense=Pres|VerbForm=Cop	6	cop	_	_
6	déirc	déirc	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	advcl	_	_
7	é	é	PRON	_	Gender=Masc|Number=Sing|Person=3	6	nmod	_	_
8	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	9	nmod:poss	_	_
9	dheire	deireadh	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	6	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


