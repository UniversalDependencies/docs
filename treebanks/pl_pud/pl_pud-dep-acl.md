---
layout: base
title:  'Statistics of acl in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `acl`

This relation is universal.
There are 2 language-specific subtypes of `acl`: <tt><a href="pl_pud-dep-acl-cmp.html">acl:cmp</a></tt>, <tt><a href="pl_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

6 nodes (0%) are attached to their parents as `acl`.

6 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.83333333333333.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (4; 67% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 17% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Mają	mieć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	jedną	jeden	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	3	amod	3:amod	_
3	szansę	szansa	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	iobj	1:iobj	_
4	na	na	ADP	prep:acc	AdpType=Prep	5	case	5:case	Case=Acc
5	odkupienie	odkupienie	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	3	nmod:arg	3:nmod:arg	SpaceAfter=No
6	:	:	PUNCT	interp	PunctType=Colo	3	punct	3:punct	_
7	pokonać	pokonać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	3	acl	3:acl	_
8	Anglię	Anglia	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 acl	color:blue
1	Album	album	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	_
2	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	3	punct	3:punct	SpaceAfter=No
3	Wild	Wild	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	nmod	1:nmod	_
4	West	West	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	flat	3:flat	SpaceAfter=No
5	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	3	punct	3:punct	_
6	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Gen
7	1981	1981	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	8	amod:flat	8:amod:flat	_
8	r	rok	NOUN	brev:pun	Abbr=Yes	1	nmod	1:nmod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_
10	był	być	AUX	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
11	jednym	jeden	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	_
12	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	16	case	16:case	Case=Gen
13	jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	16	nmod:poss	16:nmod:poss	_
14	najlepiej	dobrze	ADV	adv:sup	Degree=Sup	16	advmod	16:advmod	_
15	się	się	PRON	part	PronType=Prs|Reflex=Yes	16	expl:pv	16:expl:pv	_
16	sprzedających	sprzedawać	ADJ	pact:pl:gen:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	11	acl	11:acl	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl	color:blue
1	Ich	on	PRON	ppron3:pl:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	3	nmod	3:nmod	_
2	pierwszym	pierwszy	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	amod	3:amod	_
3	królem	król	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	_
4	był	być	AUX	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
5	Mojmir	Mojmir	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
6	I	I	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Roman|NumType=Ord	5	amod:flat	5:amod:flat	_
7	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	8	punct	8:punct	SpaceAfter=No
8	rządził	rządzić	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	acl	5:acl	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
10	latach	rok	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	8	obl	8:obl	_
11	830	830	ADJ	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Ord	10	amod	10:amod	SpaceAfter=No
12	–	–	PUNCT	interp	PunctType=Dash	13	punct	13:punct	SpaceAfter=No
13	846	846	ADJ	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Ord	11	conj	10:amod|11:conj	SpaceAfter=No
14	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	8	punct	8:punct	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


