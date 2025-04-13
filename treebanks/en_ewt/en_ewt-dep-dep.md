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

The following 5 pairs of parts of speech are connected with `dep`: <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (1; 20% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 20% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 dep	color:blue
1	Please	please	INTJ	UH	_	2	discourse	2:discourse	_
2	make	make	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	0:root	_
3	this	this	PRON	DT	Number=Sing|PronType=Dem	2	obj	2:obj|5:nsubj:xsubj	_
4	as	as	ADV	RB	_	5	advmod	5:advmod	_
5	simple	simple	ADJ	JJ	Degree=Pos	2	xcomp	2:xcomp	_
6	as	as	SCONJ	IN	_	8	mark	8:mark	_
7	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	8	nsubj	8:nsubj	_
8	can	can	AUX	MD	VerbForm=Fin	5	advcl	5:advcl:as	_
9	for	for	SCONJ	IN	_	12	mark	12:mark	_
10	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	11	nmod:poss	11:nmod:poss	_
11	dad	dad	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	_
12	does	do	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl	2:advcl:for	_
13	nt	not	PART	RB	Polarity=Neg|Typo=Yes	12	advmod	12:advmod	CorrectForm=n't
14	really	really	ADV	RB	_	12	advmod	12:advmod	_
15	not	not	PART	RB	Polarity=Neg	17	advmod	17:advmod	_
16	that	that	ADV	RB	_	17	advmod	17:advmod	_
17	good	good	ADV	RB	_	12	dep	12:dep	SpaceAfter=No
18	.	.	PUNCT	.	_	2	punct	2:punct	_

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
5	s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	6	cop	6:cop	CorrectForm='s
6	rare	rare	ADJ	JJ	Degree=Pos	0	root	0:root	_
7	to	to	PART	TO	_	8	mark	8:mark	_
8	find	find	VERB	VB	VerbForm=Inf	6	csubj	6:csubj	_
9	such	such	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
10	wonderful	wonderful	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
11	people	people	NOUN	NNS	Number=Plur	8	obj	8:obj|13:nsubj	_
12	who	who	PRON	WP	PronType=Rel	13	nsubj	11:ref	_
13	CARE	care	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	11:acl:relcl	Cxn=rc-wh-nsubj
14	,	,	PUNCT	,	_	17	punct	17:punct	_
15	Not	not	PART	RB	Polarity=Neg	17	advmod	17:advmod	_
16	the	the	DET	DT	Definite=Def|PronType=Art	17	det	17:det	_
17	kind	kind	NOUN	NN	Number=Sing	11	conj	11:conj|19:obl	_
18	of	of	ADP	IN	_	17	dep	17:dep	_
19	want	want	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	acl:relcl	17:acl:relcl	Cxn=rc-red-obl
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
4	:	:	PUNCT	:	_	5	punct	5:punct	_
5	CHURCH	church	NOUN	NN	Number=Sing	3	parataxis	3:parataxis	_
6	=	=	PUNCT	,	_	5	punct	5:punct	_
7	TECHNOLOGY	technology	NOUN	NN	Number=Sing	3	dep	3:dep	_
8	&	&	CCONJ	CC	_	9	cc	9:cc	_
9	GOVERNMENT	government	NOUN	NN	Number=Sing	7	conj	6:dep|7:conj	_
10	-	-	PUNCT	,	_	12	punct	12:punct	_
11	Shuttle	shuttle	NOUN	NN	Number=Sing	12	nsubj:pass	12:nsubj:pass	_
12	Carried	carry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	3	parataxis	3:parataxis	_
13	on	on	ADP	IN	_	15	case	15:case	_
14	Aircraft	aircraft	NOUN	NN	Number=Sing	15	compound	15:compound	_
15	model	model	NOUN	NN	Number=Sing	12	obl	12:obl:on	_

~~~


