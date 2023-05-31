---
layout: base
title:  'Statistics of cc:preconj in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-cc.html">cc</a></tt>.

14 nodes (0%) are attached to their parents as `cc:preconj`.

14 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.64285714285714.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (9; 64% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 14% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 7% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 7% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 cc:preconj	color:blue
1	Internet	Internet	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj|10:nsubj	_
2	nie	nie	CCONJ	conj	_	6	cc:preconj	6:cc:preconj	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop|10:cop	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	parataxis:insert	6:parataxis:insert|10:parataxis:insert	Case=Loc
5	końcu	koniec	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	fixed	4:fixed	_
6	luksusem	luksus	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
8	tylko	tylko	CCONJ	conj	_	10	cc	10:cc	_
9	niezbędnym	niezbędny	ADJ	adj:sg:inst:n:pos	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	10	amod	10:amod	_
10	narzędziem	narzędzie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	6	conj	0:root|6:conj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 cc:preconj	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	2	case	2:case	Case=Loc
2	przemówieniu	przemówienie	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	12	obl	12:obl	_
3	do	do	ADP	prep:gen	AdpType=Prep	4	case	4:case	Case=Gen
4	rządu	rząd	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod:arg	2:nmod:arg	_
5	wkrótce	wkrótce	ADV	adv	_	7	advmod	7:advmod	_
6	po	po	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	przekroczeniu	przekroczyć	NOUN	ger:sg:loc:n:perf:aff	Aspect=Perf|Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	12	obl	12:obl	_
8	granicy	granica	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	obj	7:obj	_
9	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Acc
10	Niemców	Niemiec	PROPN	subst:pl:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur	7	obl:agent	7:obl:agent	_
11	Chamberlain	Chamberlain	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	12:nsubj	_
12	obarczył	obarczyć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
13	winą	wina	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	12	iobj	12:iobj	_
14	zarówno	zarówno	CCONJ	conj	_	15	cc:preconj	15:cc:preconj	_
15	Niemcy	Niemcy	PROPN	subst:pl:acc:n:pt	Case=Acc|Gender=Neut|Number=Ptan	12	iobj	12:iobj	SpaceAfter=No
16	,	,	PUNCT	interp	PunctType=Comm	18	punct	18:punct	_
17	jak	jak	CCONJ	conj	_	18	cc	18:cc	_
18	Austrię	Austria	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	15	conj	12:iobj|15:conj	SpaceAfter=No
19	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	nmod	2:nmod	_
2	styl	styl	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj|10:nsubj	_
3	gry	gra	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	nmod:arg	2:nmod:arg	_
4	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop|10:cop	_
5	zarówno	zarówno	CCONJ	conj	_	6	cc:preconj	6:cc:preconj	_
6	twardy	twardy	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
8	jak	jak	CCONJ	conj	_	10	cc	10:cc	_
9	i	i	CCONJ	conj	_	8	fixed	8:fixed	_
10	subtelny	subtelny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	conj	0:root|6:conj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


