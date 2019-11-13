---
layout: base
title:  'Statistics of cop in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `cop`

This relation is universal.

640 nodes (2%) are attached to their parents as `cop`.

634 instances of `cop` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2734375.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (259; 40% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (234; 37% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (67; 10% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (46; 7% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (18; 3% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cop	color:blue
1	Duaisdhráma	Duaisdhráma	NOUN	Noun	Gender=Masc|Number=Sing	0	root	_	_
2	ó	ó	ADP	Simp	_	3	case	_	_
3	Oireachtas	oireachtas	PROPN	Noun	Form=Len|Gender=Masc|Number=Sing	1	nmod	_	_
4	1955	1955	NUM	Num	_	3	nummod	_	_
5	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	7	cop	_	_
6	ea	ea	PRON	Pers	Number=Sing|Person=3	7	nmod	_	_
7	Moloney	Moloney	NOUN	Noun	Gender=Masc|Number=Sing	1	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	_	_

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
5	Dhaid	Daid	NOUN	Noun	Case=Voc|Form=Len|Gender=Masc	2	vocative	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	8	punct	_	_
7	ba	is	AUX	Cop	Tense=Past|VerbForm=Cop	8	cop	_	_
8	shona	sona	ADJ	Adj	Degree=Pos|Form=Len	2	ccomp	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	10	punct	_	_
10	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	laethanta	lá	NOUN	Noun	Definite=Def|Gender=Masc|Number=Plur	12	nsubj	_	_
12	iad	iad	PRON	Pers	Number=Plur|Person=3	8	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Duradh	dur	VERB	VTI	Mood=Ind|Tense=Past|Voice=Auto	0	root	_	_
2	gur	is	AUX	Cop	Tense=Past|VerbForm=Cop	3	cop	_	_
3	seo	seo	PRON	Dem	PronType=Dem	1	ccomp	_	_
4	ceann	ceann	NOUN	Noun	Gender=Masc|Number=Sing	3	nmod	_	_
5	dena	de_na	ADP	Art	Number=Plur|PronType=Art	6	case	_	_
6	fadhbanna	fadhb	NOUN	Noun	Gender=Fem|Number=Plur	4	nmod	_	_
7	is	is	PART	Sup	_	8	mark:prt	_	_
8	mó	mór	ADJ	Adj	Degree=Cmp,Sup	6	amod	_	_
9	atá	bí	VERB	VI	Mood=Ind|PronType=Rel|Tense=Pres	3	csubj:cleft	_	_
10	sa	i	ADP	Art	Number=Sing|PronType=Art	11	case	_	_
11	cheantar	ceantar	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


