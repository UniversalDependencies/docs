---
layout: base
title:  'Statistics of csubj in UD_Irish-TwittIrish'
udver: '2'
---

## Treebank Statistics: UD_Irish-TwittIrish: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="ga_twittirish-dep-csubj-cleft.html">csubj:cleft</a></tt>, <tt><a href="ga_twittirish-dep-csubj-cop.html">csubj:cop</a></tt>.

5 nodes (0%) are attached to their parents as `csubj`.

3 instances of `csubj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.2.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	@user48	@user48	PROPN	_	_	2	vocative:mention	_	_
2	Missing	miss	VERB	_	_	6	csubj	_	Lang=en
3	you	you	PRON	_	_	2	obj	_	Lang=en
4	is	be	AUX	_	_	6	cop	_	Lang=en
5	my	my	PRON	_	_	6	nmod:poss	_	Lang=en
6	craic	craic	NOUN	_	_	0	root	_	Lang=ga|SpaceAfter=No
7	!	!	PUNCT	_	_	6	punct	_	_
8	Bhfuil	bí	VERB	_	_	6	parataxis:sentence	_	Lang=ga
9	fóin	fón	NOUN	_	_	8	nsubj	_	Lang=ga
10	agat	ag	ADP	_	_	8	obl:prep	_	Lang=ga
11	go	go	ADP	_	_	12	case	_	Lang=ga
12	foill	fóill	ADJ	_	_	8	advmod	_	SpaceAfter=No
13	?	?	PUNCT	_	_	8	punct	_	_
14	Ag	ag	ADP	_	_	15	case	_	Lang=ga
15	dúil	dúil	NOUN	_	_	22	xcomp	_	Lang=ga
16	go	go	PART	_	_	17	mark:prt	_	Lang=ga
17	mór	mór	ADJ	_	_	15	advmod	_	Lang=ga
18	le	le	ADP	_	_	19	case	_	Lang=ga
19	fleadh	fleadh	PROPN	_	_	22	nmod	_	Lang=ga
20	feirste	Fearsaid	PROPN	_	_	19	flat:name	_	Lang=ga|SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	_
22	cuma	cuma	NOUN	_	_	8	obj	_	Lang=ga
23	maith	maith	ADJ	_	_	22	amod	_	CorrectForm=mhaith|Lang=ga
24	air	ar	ADP	_	_	8	obl:prep	_	SpaceAfter=No
25	!	!	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	@user963	@user963	PROPN	_	_	2	vocative:mention	_	_
2	Teastaíonn	teastaigh	VERB	_	_	0	root	_	Lang=ga
3	uaim	ó	ADP	_	_	2	obl:prep	_	Lang=ga
4	RT	RT	NOUN	_	_	6	obj	_	Lang=ga
5	a	a	PART	_	_	6	mark	_	Lang=ga
6	thabhairt	tabhairt	NOUN	_	_	2	csubj	_	Lang=ga
7	duit	do	ADP	_	_	6	obl:prep	_	Lang=ga
8	ó	ó	ADP	_	_	9	case	_	Lang=ga
9	chuntas	cuntas	NOUN	_	_	6	obl	_	Lang=ga
10	bl.	bl	NOUN	_	_	9	nmod	_	FullForm=bliain|Lang=ga
11	na	an	DET	_	_	13	det	_	Lang=ga
12	G.	G	PROPN	_	_	10	nmod	_	FullForm=Gaeilge|Lang=ga
13	Deacair	Deacair	ADJ	_	_	2	parataxis:sentence	_	Lang=ga
14	smacht	smacht	NOUN	_	_	16	obj	_	Lang=ga
15	a	a	PART	_	_	16	mark	_	Lang=ga
16	choinneáil	coinneáil	NOUN	_	_	13	xcomp	_	Lang=ga
17	orm	ar	ADP	_	_	16	obl:prep	_	Lang=ga
18	féin	féin	PRON	_	_	17	nmod	_	Lang=ga|SpaceAfter=No
19	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	@user1439	@user1439	PROPN	_	_	3	vocative:mention	_	_
2	@user1168	@user1168	PROPN	_	_	3	vocative:mention	_	_
3	ta	bí	VERB	_	_	0	root	_	CorrectForm=tá|Lang=ga
4	'	'	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	dia	Dia	PROPN	_	_	3	csubj	_	Lang=ga
6	dhuit	do	ADP	_	_	5	obl:prep	_	Lang=ga|SpaceAfter=No
7	'	'	PUNCT	_	_	5	punct	_	_
8	iomlán	iomlán	ADJ	_	_	9	advmod	_	Lang=ga
9	ceart	ceart	ADJ	_	_	3	xcomp:pred	_	Lang=ga|SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_
11	Tá	bí	VERB	_	_	3	parataxis:sentence	_	Lang=ga
12	sé	sé	PRON	_	_	11	nsubj	_	Lang=ga
13	níos	níos	PART	_	_	14	mark:prt	_	Lang=ga
14	foirmiúla	foirmiúil	ADJ	_	_	11	xcomp:pred	_	Lang=ga
15	s	agus	CCONJ	_	_	16	cc	_	Lang=ga
16	Cloisfidh	clois	VERB	_	_	11	conj	_	Lang=ga
17	tu	tú	PRON	_	_	16	nsubj	_	CorrectForm=tú|Lang=ga
18	'	'	PUNCT	_	_	20	punct	_	SpaceAfter=No
19	conas	conas	ADV	_	_	20	advmod	_	Lang=ga
20	ta	bí	VERB	_	_	16	ccomp	_	CorrectForm=atá|Lang=ga|SpaceAfter=No
21	'	'	PUNCT	_	_	20	punct	_	_
22	'	'	PUNCT	_	_	23	punct	_	SpaceAfter=No
23	haigh	haigh	VERB	_	_	20	conj	_	Lang=ga|SpaceAfter=No
24	'	'	PUNCT	_	_	23	punct	_	_
25	nios	níos	PART	_	_	26	mark:prt	_	CorrectForm=níos|Lang=Ga
26	minice	minic	ADJ	_	_	16	advmod	_	Lang=ga|SpaceAfter=No
27	.	.	PUNCT	_	_	11	punct	_	_

~~~


