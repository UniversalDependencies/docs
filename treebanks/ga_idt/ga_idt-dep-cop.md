---
layout: base
title:  'Statistics of cop in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `cop`

This relation is universal.

1535 nodes (1%) are attached to their parents as `cop`.

1527 instances of `cop` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5485342019544.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (826; 54% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (462; 30% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (119; 8% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (62; 4% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (23; 1% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (19; 1% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (9; 1% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (9; 1% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-SYM.html">SYM</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Dúirt	abair	VERB	VTI	Mood=Ind|Tense=Past	0	root	_	_
2	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	nach	is	AUX	Cop	Polarity=Neg|Tense=Pres|VerbForm=Cop	4	cop	_	_
4	múinteoir	múinteoir	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	1	ccomp	_	_
5	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Sea	is	AUX	Cop	Tense=Pres|VerbForm=Cop	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	5	punct	_	_
4	a	a	PART	Voc	PartType=Voc	5	case:voc	_	_
5	Dhaid	Daid	NOUN	Noun	Case=Voc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	8	punct	_	_
7	ba	is	AUX	Cop	Tense=Past|VerbForm=Cop	8	cop	_	_
8	shona	sona	ADJ	Adj	Degree=Pos|Form=Len	2	csubj:cleft	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	10	punct	_	_
10	na	an	DET	Art	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	laethanta	lá	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	12	nsubj	_	_
12	iad	iad	PRON	Pers	Number=Plur|Person=3	8	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Duradh	abair	VERB	VTI	Mood=Ind|Person=0|Tense=Past|Typo=Yes	0	root	_	_
2	gur	is	AUX	Cop	Tense=Past|VerbForm=Cop	3	cop	_	_
3	seo	seo	PRON	Dem	PronType=Dem	1	ccomp	_	_
4	ceann	ceann	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	3	nmod	_	_
5	dena	de	ADP	Art	Number=Plur|PronType=Art	6	case	_	_
6	fadhbanna	fadhb	NOUN	Noun	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	4	nmod	_	_
7	is	is	PART	Sup	PartType=Sup	8	mark:prt	_	_
8	mó	mór	ADJ	Adj	Degree=Cmp,Sup	6	amod	_	_
9	atá	bí	VERB	VI	Form=Direct|Mood=Ind|PronType=Rel|Tense=Pres	6	acl:relcl	_	_
10	sa	i	ADP	Art	Number=Sing|PronType=Art	11	case	_	_
11	cheantar	ceantar	NOUN	Noun	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


