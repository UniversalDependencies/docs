---
layout: base
title:  'Statistics of xcomp:subj in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `xcomp:subj`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-xcomp.html">xcomp</a></tt>.
There are also 1 other language-specific subtypes of `xcomp`: <tt><a href="pl_pud-dep-xcomp-pred.html">xcomp:pred</a></tt>.

1 nodes (0%) are attached to their parents as `xcomp:subj`.

1 instances of `xcomp:subj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `xcomp:subj`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp:subj	color:blue
1	Od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	2	case	2:case	Case=Gen
2	czasów	czas	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	6:nmod	_
3	cesarza	cesarz	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	2	nmod	2:nmod	_
4	Meiji	Meiji	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	3	appos	3:appos	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Loc
6	zwyczaju	zwyczaj	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	0	root	0:root	_
7	było	być	AUX	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
8	przypisywać	przypisywać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	xcomp:subj	6:xcomp:subj	_
9	jedną	jeden	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	amod	10:amod	_
10	erę	era	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	8	obj	8:obj	_
11	do	do	ADP	prep:gen	AdpType=Prep	13	case	13:case	Case=Gen
12	każdego	każdy	DET	adj:sg:gen:m1:pos	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|PronType=Tot	13	det	13:det	_
13	władcy	władca	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	8	obl	8:obl	_
14	i	i	CCONJ	conj	_	16	cc	16:cc	_
15	pośmiertnie	pośmiertnie	ADV	adv:pos	Degree=Pos	16	advmod	16:advmod	_
16	zmieniać	zmieniać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	8	conj	6:xcomp:subj|8:conj	_
17	imię	imię	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	16	obj	16:obj	_
18	cesarza	cesarz	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	17	nmod	17:nmod	_
19	na	na	ADP	prep:acc	AdpType=Prep	20	case	20:case	Case=Acc
20	zgodne	zgodny	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	16	obl:arg	16:obl:arg	_
21	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	22	case	22:case	Case=Ins
22	nazwą	nazwa	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	20	obl:arg	20:obl:arg	_
23	ery	era	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	22	nmod	22:nmod	SpaceAfter=No
24	,	,	PUNCT	interp	PunctType=Comm	27	punct	27:punct	_
25	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	26	case	26:case	Case=Loc
26	której	który	DET	adj:sg:loc:f:pos	Case=Loc|Gender=Fem|Number=Sing|PronType=Rel	27	obl	27:obl	_
27	rządził	rządzić	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	23	acl:relcl	23:acl:relcl	SpaceAfter=No
28	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


