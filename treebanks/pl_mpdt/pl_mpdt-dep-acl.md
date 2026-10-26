---
layout: base
title:  'Statistics of acl in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pl_mpdt-dep-acl-relcl.html">acl:relcl</a></tt>.

476 nodes (1%) are attached to their parents as `acl`.

336 instances of `acl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.22058823529412.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (421; 88% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (29; 6% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
1	Poszycia	poszycie	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	5	iobj	5:iobj	Translit=Poszycia
2	na	na	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc|Translit=na
3	niej	on	PRON	ppron3:sg:loc:f:ter:neut:praep	Case=Loc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	5	obl	5:obl	Translit=niej
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	Translit=nie
5	masz	mieć	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=masz
6	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
7	posowa	posowa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	conj	5:conj	Translit=posowa
8	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Gen|Translit=z
9	tarcic	tarcica	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	7	nmod	7:nmod	Translit=tarcic
10	rżniętych	rżnąć	ADJ	ppas:pl:gen:f:imperf:aff:pos	Aspect=Imp|Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	9	acl	9:acl	SpaceAfter=No|Translit=rżniętych
11	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	1	1	NUM	dig	NumForm=Digit	3	list	3:list	SpaceAfter=No|Translit=1
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.
3	Salem	Salem	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=Salem
4	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
5	potym	potym	ADV	adv:pos	Degree=Pos	7	advmod	7:advmod	Translit=potym
6	Akra	Akra	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	7	iobj	7:iobj	Translit=Akra
7	zwaną	zwać	ADJ	ppas:sg:acc:f:imperf:aff:pos	Aspect=Imp|Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	3	acl	3:acl	SpaceAfter=No|Translit=zwaną
8	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
9	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Gen|Translit=od
10	Melchisedecha	Melchisedech	PROPN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	11	obl:agent	11:obl:agent	Translit=Melchisedecha
11	założoną	założyć	ADJ	ppas:sg:acc:f:perf:aff:pos	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	7	conj	3:acl|7:conj	SpaceAfter=No|Translit=założoną
12	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 14 acl	color:blue
1	powiedział	powiedzieć	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=powiedźiał
2	jej	on	PRON	ppron3:sg:dat:f:ter:neut:npraep	Case=Dat|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	1	iobj	1:iobj	Translit=iey
3	on	on	PRON	ppron3:sg:nom:m:ter:neut:npraep	Case=Nom|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	1	nsubj	1:nsubj	SpaceAfter=No|Translit=on
4	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
5	że	że	SCONJ	comp	_	7	mark	7:mark	Translit=że
6	ją	on	PRON	ppron3:sg:acc:f:ter:neut:npraep	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	7	obj	7:obj	Translit=ią
7	przywiózł	przywieźć	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp:obj	1:ccomp:obj	Translit=przywiozł
8	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Gen|Translit=z
9	Węgier	Węgry	PROPN	subst:pl:gen:n:pt	Case=Gen|Gender=Neut|Number=Ptan	7	obl	7:obl	Translit=Węgier
10	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Ins|Translit=z
11	podwodą	podwoda	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	7	obl	7:obl	Translit=podwodą
12	Grafa	graf	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	11	nmod	11:nmod	SpaceAfter=No|Translit=Graffa
13	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	Translit=,
14	przebraną	przebrać	ADJ	ppas:sg:acc:f:perf:aff:pos	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	6	acl	6:acl	Translit=przebráną
15	po	po	ADP	prep:dat	AdpType=Prep	16	case	16:case	Case=Dat|Translit=po
16	Kawalersku	kawalerski	ADJ	adjb:sg:dat:n:pos	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	14	obl	14:obl	SpaceAfter=No|Translit=Káwálersku
17	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


