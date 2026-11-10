---
layout: base
title:  'Statistics of acl in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

188 nodes (1%) are attached to their parents as `acl`.

185 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68617021276596.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (167; 89% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (10; 5% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	$	$	SYM	$	_	0	root	0:root	SpaceAfter=No
2	5,000	5000	NUM	CD	NumForm=Digit|NumType=Card	1	nummod	1:nummod	_
3	per	per	ADP	IN	_	4	case	4:case	_
4	person	person	NOUN	NN	Number=Sing	1	nmod	1:nmod:per	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	1:punct	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	_
7	maximum	maximum	NOUN	NN	Number=Sing	1	appos	1:appos	_
8	allowed	allow	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	7	acl	7:acl	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl	color:blue
1	In	in	ADP	IN	_	2	case	2:case	_
2	2007	2007	NUM	CD	NumForm=Digit|NumType=Card	8	nmod	8:nmod:in	_
3	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	_
4	most	most	ADV	RBS	Degree=Sup	5	advmod	5:advmod	_
5	successful	successful	ADJ	JJ	Degree=Pos	6	amod	6:amod	_
6	film	film	NOUN	NN	Number=Sing	8	nsubj	8:nsubj	_
7	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	cop	8:cop	_
8	El	El	PROPN	NNP	Number=Sing	0	root	0:root	_
9	Greco	Greco	PROPN	NNP	Number=Sing	8	flat	8:flat	SpaceAfter=No
10	,	,	PUNCT	,	_	8	punct	8:punct	_
11	directed	direct	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	8	acl	8:acl	_
12	by	by	ADP	IN	_	13	case	13:case	_
13	Yannis	Yannis	PROPN	NNP	Number=Sing	11	obl	11:obl:by	_
14	Smaragdis	Smaragdis	PROPN	NNP	Number=Sing	13	flat	13:flat	SpaceAfter=No
15	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 acl	color:blue
1	After	after	ADP	IN	_	2	case	2:case	_
2	all	all	DET	DT	PronType=Tot	9	obl	9:obl:after	SpaceAfter=No
3	,	,	PUNCT	,	_	9	punct	9:punct	_
4	our	our	PRON	PRP$	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	6	nmod:poss	6:nmod:poss	_
5	organizational	organizational	ADJ	JJ	Degree=Pos	6	amod	6:amod	_
6	performance	performance	NOUN	NN	Number=Sing	9	nsubj:pass	9:nsubj:pass	_
7	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	9:aux:pass	_
8	seldom	seldom	ADV	RB	_	9	advmod	9:advmod	_
9	measured	measure	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
10	in	in	ADP	IN	_	11	case	11:case	_
11	terms	term	NOUN	NNS	Number=Plur	9	obl	9:obl:in	_
12	of	of	SCONJ	IN	_	14	mark	14:mark	_
13	how	how	ADV	WRB	PronType=Int	14	advmod	14:advmod	_
14	safe	safe	ADJ	JJ	Degree=Pos	11	acl	11:acl:of	_
15	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	14	nsubj	14:nsubj	_
16	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	14	cop	14:cop	_
17	or	or	CCONJ	CC	_	22	cc	22:cc	_
18	how	how	ADV	WRB	PronType=Int	19	advmod	19:advmod	_
19	many	many	ADJ	JJ	Degree=Pos	20	amod	20:amod	_
20	rules	rule	NOUN	NNS	Number=Plur	22	obj	22:obj	_
21	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	22	nsubj	22:nsubj	_
22	follow	follow	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	14	conj	11:acl:of|14:conj:or	SpaceAfter=No
23	.	.	PUNCT	.	_	9	punct	9:punct	_

~~~


