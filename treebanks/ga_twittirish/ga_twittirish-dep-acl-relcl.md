---
layout: base
title:  'Statistics of acl:relcl in UD_Irish-TwittIrish'
udver: '2'
---

## Treebank Statistics: UD_Irish-TwittIrish: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ga_twittirish-dep-acl.html">acl</a></tt>.

89 nodes (1%) are attached to their parents as `acl:relcl`.

89 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.06741573033708.

The following 11 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (67; 75% instances), <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (8; 9% instances), <tt><a href="ga_twittirish-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="ga_twittirish-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-DET.html">DET</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Alt	alt	NOUN	_	_	0	root	_	Lang=ga
2	a	a	PART	_	_	3	nsubj	_	Lang=ga
3	phléann	pléigh	VERB	_	_	1	acl:relcl	_	Lang=ga
4	ceisteanna	ceist	NOUN	_	_	3	obj	_	Lang=ga
5	tábhachtacha	tábhachtach	ADJ	_	_	4	amod	_	Lang=ga
6	deartha	deartha	ADJ	_	_	4	amod	_	Lang=ga|SpaceAfter=No
7	:	:	PUNCT	_	_	8	punct	_	_
8	http://t.co/343Urwjt60	http://t.co/343Urwjt60	SYM	_	_	1	parataxis:url	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 22 acl:relcl	color:blue
1	Ní	is	AUX	_	_	2	cop	_	Lang=ga
2	hí	í	PRON	_	_	4	nmod	_	Lang=ga
3	an	an	DET	_	_	4	det	_	Lang=ga
4	fhearg	fearg	NOUN	_	_	0	root	_	Lang=ga
5	atá	bí	VERB	_	_	4	csubj:cleft	_	Lang=ga
6	ceaptha	ceaptha	ADJ	_	_	5	xcomp:pred	_	Lang=ga
7	dúinn	do	ADP	_	_	6	obl:prep	_	Lang=ga
8	ag	ag	ADP	_	_	9	case	_	Lang=ga
9	Dia	Dia	PROPN	_	_	6	obl	_	Lang=ga
10	ach	ach	SCONJ	_	_	12	mark	_	Lang=ga
11	go	go	PART	_	_	12	mark:prt	_	Lang=ga
12	mbainfimis	bain	VERB	_	_	2	advcl	_	Lang=ga
13	ár	ár	DET	_	_	14	nmod:poss	_	Lang=ga
14	slánú	slánú	NOUN	_	_	12	obj	_	Lang=ga
15	amach	amach	ADV	_	_	12	advmod	_	Lang=ga
16	trínár	trí	ADP	_	_	17	case	_	Lang=ga
17	dTiarna	Tiarna	PROPN	_	_	12	obl	_	Lang=ga
18	Íosa	Íosa	PROPN	_	_	17	appos	_	Lang=ga
19	Críost	Críost	PROPN	_	_	17	flat:name	_	Lang=ga|SpaceAfter=No
20	,	,	PUNCT	_	_	22	punct	_	_
21	a	a	PART	_	_	22	nsubj	_	Lang=ga
22	fuair	faigh	VERB	_	_	17	acl:relcl	_	Lang=ga
23	bás	bás	NOUN	_	_	22	obj	_	Lang=ga
24	ar	ar	ADP	_	_	26	case	_	Lang=ga
25	ár	ár	DET	_	_	26	nmod:poss	_	Lang=ga
26	son	son	NOUN	_	_	22	obl	_	Lang=ga
27	1	1	NUM	_	_	4	parataxis	_	_
28	Teas	Teas	PROPN	_	_	27	nmod	_	_
29	5:1-11	5:1-11	NUM	_	_	28	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:relcl	color:blue
1	Fan	fan	VERB	_	_	0	root	_	SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	_
3	Céard	céard	PRON	_	_	1	parataxis:sentence	_	Lang=ga
4	atá	bí	VERB	_	_	3	acl:relcl	_	Lang=ga
5	sa	i	ADP	_	_	6	case	_	Lang=ga
6	chrann	crann	NOUN	_	_	4	xcomp:pred	_	SpaceAfter=No
7	?	?	PUNCT	_	_	3	punct	_	_
8	Iora	iora	NOUN	_	_	1	parataxis:sentence	_	Lang=ga
9	ag	ag	ADP	_	_	10	case	_	Lang=ga
10	fáil	fáil	NOUN	_	_	8	xcomp	_	Lang=ga
11	a	a	DET	_	_	12	nsubj	_	Lang=ga
12	bhricfeasta	bricfeasta	NOUN	_	_	10	obl	_	Lang=ga
13	ann	i	ADP	_	_	10	obl:prep	_	SpaceAfter=No
14	!	!	PUNCT	_	_	8	punct	_	_
15	http://t.co/s2G3GnJB0T	http://t.co/s2G3GnJB0T	SYM	_	_	1	parataxis:url	_	_

~~~


