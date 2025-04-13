---
layout: base
title:  'Statistics of acl:relcl in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ga_cadhan-dep-acl.html">acl</a></tt>.

108 nodes (2%) are attached to their parents as `acl:relcl`.

108 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.13888888888889.

The following 9 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (79; 73% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (11; 10% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	a	a	PART	_	PartType=Voc	5	case:voc	_	_
5	dhaltha	dalta	NOUN	_	Case=Voc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	ach	ach	CCONJ	_	_	8	cc	_	_
8	cad	cad	PRON	_	PronType=Int	2	conj	_	_
9	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	10	mark:prt	_	_
10	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	8	acl:relcl	_	_
11	aici	ag	ADP	_	Gender=Fem|Number=Sing|Person=3	10	xcomp:pred	_	_
12	le	le	ADP	_	_	13	case	_	_
13	déanamh	déanamh	NOUN	_	VerbForm=Inf	10	xcomp	_	SpaceAfter=No
14	?	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
15	"	"	PUNCT	_	_	2	punct	_	_

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


