---
layout: base
title:  'Statistics of det in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="pl_mpdt-dep-det-poss.html">det:poss</a></tt>.

1003 nodes (2%) are attached to their parents as `det`.

889 instances of `det` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47357926221336.

The following 7 pairs of parts of speech are connected with `det`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (945; 94% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (18; 2% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (17; 2% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (11; 1% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det	color:blue
1	Tego	ten	DET	adj:sg:gen:m:pos	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	3	det	3:det	Translit=Tego
2	ż	ż	PART	part:nwok	_	1	advmod	1:advmod	Translit=ż
3	dnia	dzień	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	4	obl	4:obl	Translit=dnia
4	chodził	chodzić	VERB	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=chodził
5	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Number=Sing|Person=1|Variant=Long	4	aux:clitic	4:aux:clitic	Translit=em
6	na	na	ADP	prep:acc	AdpType=Prep	7	case	7:case	Case=Acc|Translit=na
7	galery	galera	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	4	obl	4:obl	SpaceAfter=No|Translit=galery
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
9	które	który	DET	adj:pl:nom:f:pos	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	10	nsubj	10:nsubj	Translit=które
10	miały	mieć	VERB	praet:pl:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	7	acl:relcl	7:acl:relcl	Translit=miały
11	wychodzić	wychodzić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	10	xcomp	10:xcomp	Translit=wychodzić
12	na	na	ADP	prep:acc	AdpType=Prep	13	case	13:case	Case=Acc|Translit=na
13	pasy	pas	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	11	obl:arg	11:obl:arg	SpaceAfter=No|Translit=pasy
14	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det	color:blue
1	Ten	ten	DET	adj:sg:nom:m:pos	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	3:det	Translit=Ten
2	że	ż	PART	part:wok	_	1	advmod:emph	1:advmod:emph	Translit=że
3	Niedźwiadek	Niedźwiadek	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	Translit=Niedzwiadek
4	zaszed	zajść	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=zászed
5	i	i	PART	part	_	7	advmod:emph	7:advmod:emph	Translit=y
6	do	do	ADP	prep:gen	AdpType=Prep	7	case	7:case	Case=Gen|Translit=do
7	Domu	dom	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	4	obl	4:obl	Translit=Domu
8	Dwanastego	dwanasty	ADJ	adjnum:sg:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	7	amod	7:amod	Translit=Dwánastego
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc|SpaceAfter=No|Translit=w
10	stóp	stopień	NOUN	brev:pun	Abbr=Yes	4	obl	4:obl	SpaceAfter=No|Translit=stop
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	Translit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 det	color:blue
1	Był	być	VERB	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Był
2	przy	przy	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc|Translit=przy
3	niej	on	PRON	ppron3:sg:loc:f:ter:neut:praep	Case=Loc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	1	obl	1:obl	Translit=niéj
4	królewic	królewic	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	1:nsubj	Translit=królewic
5	imć	imć	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	4	appos	4:appos	SpaceAfter=No|Translit=jmć
6	:	:	PUNCT	interp	PunctType=Colo	7	punct	7:punct	Translit=:
7	dano	dać	VERB	imps:perf	Aspect=Perf|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	1:conj	Translit=dano
8	mu	on	PRON	ppron3:sg:dat:m:ter:nakc:npraep	Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	7	iobj	7:iobj	Translit=mu
9	też	też	PART	part	_	7	advmod:emph	7:advmod:emph	Translit=téż
10	świecę	świeca	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	7	obj	7:obj	Translit=świecę
11	i	i	CCONJ	conj	_	12	cc	12:cc	Translit=i
12	nam	my	PRON	ppron12:pl:dat:pri	Case=Dat|Number=Plur|Person=1|PronType=Prs	8	conj	7:iobj|8:conj	Translit=nam
13	niektórym	niektóry	DET	adj:pl:dat:m:pos	Case=Dat|Gender=Masc|Number=Plur|PronType=Ind	12	det	12:det	SpaceAfter=No|Translit=niektórym
14	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


