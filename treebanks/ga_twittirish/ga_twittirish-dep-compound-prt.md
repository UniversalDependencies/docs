---
layout: base
title:  'Statistics of compound:prt in UD_Irish-TwittIrish'
udver: '2'
---

## Treebank Statistics: UD_Irish-TwittIrish: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="ga_twittirish-dep-compound.html">compound</a></tt>.

14 nodes (0%) are attached to their parents as `compound:prt`.

13 instances of `compound:prt` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57142857142857.

The following 7 pairs of parts of speech are connected with `compound:prt`: <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-ADV.html">ADV</a></tt> (4; 29% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-ADP.html">ADP</a></tt> (3; 21% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-ADP.html">ADP</a></tt> (3; 21% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-ADP.html">ADP</a></tt> (1; 7% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 compound:prt	color:blue
1	RT	RT	SYM	_	_	4	parataxis:rt	_	_
2	@user1053	@user1053	PROPN	_	_	4	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	_	_	4	punct	_	_
4	Oíche	oíche	NOUN	_	_	0	root	_	Lang=ga
5	eolais	eolas	NOUN	_	_	4	nmod	_	Lang=ga
6	CAO	CAO	PROPN	_	_	5	nmod	_	Lang=ga
7	ar	ar	ADP	_	_	8	case	_	Lang=ga
8	siúl	siúl	NOUN	_	_	4	xcomp	_	Lang=ga
9	i	i	ADP	_	_	10	case	_	Lang=ga
10	DCU	DCU	PROPN	_	_	8	nmod	_	Lang=ga
11	ar	ar	ADP	_	_	13	case	_	Lang=ga
12	an	an	DET	_	_	13	det	_	Lang=ga
13	Déardaoin	Déardaoin	NOUN	_	_	8	nmod	_	Lang=ga
14	seo	seo	DET	_	_	13	det	_	Lang=ga
15	,	,	PUNCT	_	_	16	punct	_	_
16	17ú	17ú	NUM	_	_	13	appos	_	Lang=ga
17	Eanáir	Eanáir	NOUN	_	_	16	flat	_	Lang=ga|SpaceAfter=No
18	.	.	PUNCT	_	_	19	punct	_	_
19	Buail	buail	VERB	_	_	1	parataxis:sentence	_	Lang=ga
20	isteach	isteach	ADV	_	_	19	compound:prt	_	Lang=ga
21	againn	ag	ADP	_	_	19	obl:prep	_	Lang=ga
22	chun	chun	ADP	_	_	23	case	_	Lang=ga
23	labhairt	labhairt	NOUN	_	_	19	xcomp	_	Lang=ga
24	faoi	faoi	ADP	_	_	25	case	_	Lang=ga
25	bunchéimeanna	bunchéim	NOUN	_	_	23	obl	_	CorrectForm=bhunchéimeanna|Lang=ga
26	Fiontar	Fiontar	PROPN	_	_	25	nmod	_	Lang=ga|SpaceAfter=No
27	.	.	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 compound:prt	color:blue
1	RT	RT	SYM	_	_	4	parataxis:rt	_	_
2	@user651	@user651	PROPN	_	_	4	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	_	_	4	punct	_	_
4	Tagann	tar	VERB	_	_	0	root	_	Lang=ga
5	caint	caint	NOUN	_	_	4	nsubj	_	Lang=ga
6	uaidh	ó	ADP	_	_	4	obl:prep	_	Lang=ga
7	chomh	chomh	ADV	_	_	8	advmod	_	Lang=ga
8	tiugh	tiubh	ADJ	_	_	4	advmod	_	Lang=ga
9	is	agus	SCONJ	_	_	11	mark	_	Lang=ga
10	a	a	PART	_	_	11	mark:prt	_	Lang=ga
11	phiocfadh	pioc	VERB	_	_	4	advcl	_	Lang=ga
12	cearc	cearc	NOUN	_	_	11	nsubj	_	Lang=ga
13	coirce	coirce	NOUN	_	_	12	obj	_	Lang=ga|SpaceAfter=No
14	:	:	PUNCT	_	_	15	punct	_	_
15	He	He	PRON	_	_	16	nsubj	_	Lang=en
16	speaks	speak	VERB	_	_	4	parataxis	_	Lang=en
17	as	as	ADV	_	_	16	advmod	_	Lang=en
18	rapidly	rapidly	ADV	_	_	16	advmod	_	Lang=en
19	as	as	SCONJ	_	_	22	mark	_	Lang=en
20	a	a	DET	_	_	22	det	_	Lang=en
21	hen	hen	NOUN	_	_	22	nsubj	_	Lang=en
22	picks	pick	VERB	_	_	16	advcl	_	Lang=en
23	up	up	ADP	_	_	21	compound:prt	_	Lang=en
24	oats	oat	NOUN	_	_	22	obj	_	Lang=en|SpaceAfter=No
25	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 compound:prt	color:blue
1	@user1235	@user1235	PROPN	_	_	3	vocative:mention	_	_
2	just	just	ADV	_	_	1	advmod	_	Lang=en
3	raging	rage	VERB	_	_	0	root	_	Lang=en
4	I	I	PRON	_	_	3	nsubj	_	Lang=en
5	never	never	ADV	_	_	3	advmod	_	Lang=en
6	got	got	VERB	_	_	3	ccomp	_	Lang=en
7	my	my	DET	_	_	8	det	_	Lang=en
8	tash	tash	NOUN	_	_	6	obj	_	Lang=en
9	on	on	ADP	_	_	6	compound:prt	_	Lang=en
10	nuair	nuair	SCONJ	_	_	12	mark	_	Lang=ga
11	a	a	PART	_	_	12	mark:prt	_	Lang=ga
12	v	bí	VERB	_	_	6	advcl	_	CorrectForm=bhí|Lang=ga
13	me	mé	PRON	_	_	12	nsubj	_	Lang=ga
14	ansin	ansin	ADV	_	_	12	advmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	3	punct	_	_
16	V	bí	VERB	_	_	3	parataxis:sentence	_	CorrectForm=Bhí|Lang=ga
17	an-time	time	NOUN	_	_	16	nsubj	_	Lang=ga
18	againn	ag	ADP	_	_	16	obl:prep	_	Lang=ga|SpaceAfter=No
19	!	!	PUNCT	_	_	16	punct	_	_
20	Paisti	páiste	NOUN	_	_	16	parataxis:sentence	_	CorrectForm=Páistí|Lang=ga
21	iontach	iontach	ADJ	_	_	20	amod	_	CorrectForm=iontacha|SpaceAfter=No
22	...	...	PUNCT	_	_	23	punct	_	_
23	Wrecked	wreck	ADJ	_	_	20	xcomp:pred	_	Lang=en|SpaceAfter=No
24	!	!	PUNCT	_	_	20	punct	_	_

~~~


