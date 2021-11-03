---
layout: base
title:  'Statistics of dep in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `dep`

This relation is universal.

5 nodes (0%) are attached to their parents as `dep`.

5 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.4.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (2; 40% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (1; 20% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 dep	color:blue
1	Price	price	NOUN	NN	Number=Sing	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	:	_	1	punct	1:punct	SpaceAfter=No
3	3,40	3.40	NUM	CD	NumType=Card	4	nummod	4:nummod	_
4	Euros	euro	NOUN	NNS	Number=Plur	1	appos	1:appos	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	7:punct	_
6	5	5	NUM	CD	NumType=Card	7	nummod	7:nummod	_
7	Euros	euro	NOUN	NNS	Number=Plur	4	conj	1:appos|4:conj:or	_
8	or	or	CCONJ	CC	_	10	cc	10:cc	_
9	7,5	7.5	NUM	CD	NumType=Card	10	nummod	10:nummod	_
10	Euros	euro	NOUN	NNS	Number=Plur	4	conj	1:appos|4:conj:or	_
11	(	(	PUNCT	-LRB-	_	12	punct	12:punct	SpaceAfter=No
12	1	1	X	LS	_	4	dep	4:dep	SpaceAfter=No
13	)	)	PUNCT	-RRB-	_	12	punct	12:punct	_
14	for	for	ADP	IN	_	18	case	18:case	_
15	a	a	DET	DT	Definite=Ind|PronType=Art	18	det	18:det	_
16	72	72	NUM	CD	NumType=Card	17	nummod	17:nummod	_
17	heures	heure	NOUN	NNS	Number=Plur	18	compound	18:compound	_
18	lenght	lenght	NOUN	NN	Number=Sing	4	nmod	4:nmod:for	SpaceAfter=No
19	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 dep	color:blue
1	In	in	ADP	IN	_	3	case	3:case	_
2	this	this	DET	DT	Number=Sing|PronType=Dem	3	det	3:det	_
3	day	day	NOUN	NN	Number=Sing	6	obl	6:obl:in	_
4	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	6:expl	_
5	s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
6	rare	rare	ADJ	JJ	Degree=Pos	0	root	0:root	_
7	to	to	PART	TO	_	8	mark	8:mark	_
8	find	find	VERB	VB	VerbForm=Inf	6	csubj	6:csubj	_
9	such	such	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
10	wonderful	wonderful	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
11	people	people	NOUN	NNS	Number=Plur	8	obj	8:obj|13:nsubj	_
12	who	who	PRON	WP	PronType=Rel	13	nsubj	11:ref	_
13	CARE	care	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	11:acl:relcl	_
14	,	,	PUNCT	,	_	17	punct	17:punct	_
15	Not	not	ADV	RB	_	17	advmod	17:advmod	_
16	the	the	DET	DT	Definite=Def|PronType=Art	17	det	17:det	_
17	kind	kind	NOUN	NN	Number=Sing	11	conj	11:conj	_
18	of	of	ADP	IN	_	17	dep	17:dep	_
19	want	want	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	acl:relcl	17:acl:relcl	_
20	to	to	PART	TO	_	21	mark	21:mark	_
21	make	make	VERB	VB	VerbForm=Inf	19	xcomp	19:xcomp	_
22	cash	cash	NOUN	NN	Number=Sing	21	obj	21:obj	SpaceAfter=No
23	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 dep	color:blue
1	MOON	moon	NOUN	NN	Number=Sing	2	compound	2:compound	_
2	LANDING	landing	NOUN	NN	Number=Sing	3	compound	3:compound	_
3	HOAX	hoax	NOUN	NN	Number=Sing	0	root	0:root	SpaceAfter=No
4	:	:	PUNCT	:	_	3	punct	3:punct	_
5	CHURCH	church	NOUN	NN	Number=Sing	3	parataxis	3:parataxis	_
6	=	=	PUNCT	,	_	5	punct	5:punct	_
7	TECHNOLOGY	technology	NOUN	NN	Number=Sing	3	dep	3:dep	_
8	&	&	CCONJ	CC	_	9	cc	9:cc	_
9	GOVERNMENT	government	NOUN	NN	Number=Sing	7	conj	6:dep|7:conj	_
10	-	-	PUNCT	,	_	3	punct	3:punct	_
11	Shuttle	shuttle	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	_
12	Carried	carry	VERB	VBN	Tense=Past|VerbForm=Part	3	parataxis	3:parataxis	_
13	on	on	ADP	IN	_	15	case	15:case	_
14	Aircraft	aircraft	NOUN	NN	Number=Sing	15	compound	15:compound	_
15	model	model	NOUN	NN	Number=Sing	12	obl	12:obl:on	_

~~~


