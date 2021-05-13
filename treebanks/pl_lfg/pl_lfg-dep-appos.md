---
layout: base
title:  'Statistics of appos in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `appos`

This relation is universal.

170 nodes (0%) are attached to their parents as `appos`.

170 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96470588235294.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (92; 54% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (37; 22% instances), <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (14; 8% instances), <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (12; 7% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Fiat	fiat	NOUN	subst:sg:nom:m2	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc2	3	nsubj	3:nsubj	_
2	seicento	seicento	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	1	appos	1:appos	_
3	stał	stać	VERB	praet:sg:m2:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	na	na	ADP	prep:loc	AdpType=Prep	5	case	5:case	Case=Loc
5	ulicy	ulica	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl:na	_
6	Sokolniczej	Sokolniczy	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	5	amod	5:amod	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	I	i	CCONJ	conj	_	7	cc	7:cc	_
2	Stefkę	Stefka	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	7	obj	7:obj	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
4	dwuletnią	dwuletni	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	5	amod	5:amod	_
5	sierotę	sierota	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	2	appos	2:appos	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
7	widział	widzieć	VERB	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
8	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Number=Sing|Person=1|Variant=Long	7	aux:clitic	7:aux:clitic	_
9	także	także	PART	qub	_	7	advmod	7:advmod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Stu	sto	NUM	num:pl:acc:m1:rec	Case=Acc|Gender=Masc|Number=Plur|NumType=Card|SubGender=Masc1	5	nsubj	5:nsubj	DepType=Rec
2	dwudziestu	dwadzieścia	NUM	num:pl:acc:m1:rec	Case=Acc|Gender=Masc|Number=Plur|NumType=Card|SubGender=Masc1	1	appos	1:appos	DepType=Rec
3	ośmiu	osiem	NUM	num:pl:acc:m1:rec	Case=Acc|Gender=Masc|Number=Plur|NumType=Card|SubGender=Masc1	4	nummod	4:nummod	DepType=Rec
4	powstańców	powstaniec	NOUN	subst:pl:gen:m1	Case=Gen|Gender=Masc|Number=Plur|SubGender=Masc1	1	appos	1:appos	_
5	legło	lec	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	na	na	ADP	prep:loc	AdpType=Prep	8	case	8:case	Case=Loc
7	przebytej	przebyć	ADJ	ppas:sg:loc:f:perf:aff	Aspect=Perf|Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	8	acl	8:acl	_
8	drodze	droga	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	5	obl	5:obl:na	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


