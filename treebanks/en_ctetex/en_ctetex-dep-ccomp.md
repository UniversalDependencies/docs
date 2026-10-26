---
layout: base
title:  'Statistics of ccomp in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `ccomp`

This relation is universal.

21 nodes (0%) are attached to their parents as `ccomp`.

21 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.66666666666667.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (14; 67% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (3; 14% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	Note	note	VERB	_	_	0	root	_	_
2	that	that	SCONJ	_	_	6	mark	_	_
3	the	the	DET	_	_	4	det	_	_
4	NE	ne	NOUN	_	Number=Sing	6	nsubj:pass	_	_
5	is	be	AUX	_	Number=Sing|Tense=Pres	6	aux:pass	_	_
6	allowed	allow	VERB	_	Tense=Past	1	ccomp	_	_
7	to	to	PART	_	_	8	mark	_	_
8	remain	remain	VERB	_	_	6	xcomp	_	_
9	in	in	ADP	_	_	11	case	_	_
10	the	the	DET	_	_	11	det	_	_
11	configuration	configuration	NOUN	_	Number=Sing	8	obl	_	_
12	and	and	CCONJ	_	_	16	cc	_	_
13	no	no	DET	_	_	14	det	_	_
14	recovery	recovery	NOUN	_	Number=Sing	16	nsubj	_	_
15	will	will	AUX	_	_	16	aux	_	_
16	take	take	VERB	_	_	6	conj	_	_
17	place	place	NOUN	_	Number=Sing	16	obj	_	SpaceAfter=No
18	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Have	have	VERB	_	_	0	root	_	_
2	map	map	NOUN	_	Number=Sing	4	nsubj	_	_
3	be	be	AUX	_	Number=Sing|Tense=Pres	4	cop	_	_
4	able	able	ADJ	_	_	1	ccomp	_	_
5	to	to	PART	_	_	6	mark	_	_
6	show	show	VERB	_	_	4	xcomp	_	_
7	quantity	quantity	NOUN	_	Number=Sing	6	obj	_	_
8	of	of	ADP	_	_	9	case	_	_
9	pumpage	pumpage	NOUN	_	Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 33 ccomp	color:blue
1	When	when	SCONJ	_	_	4	mark	_	_
2	the	the	DET	_	_	3	det	_	_
3	user	user	NOUN	_	Number=Sing	4	nsubj	_	_
4	selects	select	VERB	_	Number=Sing	17	advcl	_	_
5	“	“	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	Delete	delete	VERB	_	_	4	obj	_	SpaceAfter=No
7	”	”	PUNCT	_	_	6	punct	_	_
8	and	and	CCONJ	_	_	13	cc	_	_
9	a	a	DET	_	_	10	det	_	_
10	route	route	NOUN	_	Number=Sing	13	nsubj:pass	_	_
11	has	have	AUX	_	_	13	aux	_	_
12	been	be	AUX	_	Number=Sing|Tense=Past	13	aux:pass	_	_
13	selected	select	VERB	_	Tense=Past	4	conj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	4	punct	_	_
15	FPMS	FPMS	PROPN	_	_	17	nsubj	_	_
16	shall	shall	AUX	_	_	17	aux	_	_
17	display	display	VERB	_	_	0	root	_	_
18	a	a	DET	_	_	24	det	_	_
19	standard	standard	ADJ	_	_	24	amod	_	_
20	Yes	yes	INTJ	_	_	23	compound	_	SpaceAfter=No
21	-	-	PUNCT	_	_	22	punct	_	SpaceAfter=No
22	No	no	INTJ	_	_	20	conj	_	_
23	message	message	NOUN	_	Number=Sing	24	compound	_	_
24	box	box	NOUN	_	Number=Sing	17	obj	_	_
25	that	that	PRON	_	_	26	nsubj	_	_
26	states	state	VERB	_	Number=Sing	24	acl:relcl	_	_
27	“	“	PUNCT	_	_	30	punct	_	SpaceAfter=No
28	Are	be	AUX	_	Number=Plur|Tense=Pres	30	cop	_	_
29	you	you	PRON	_	_	30	nsubj	_	_
30	sure	sure	ADJ	_	_	26	parataxis	_	_
31	that	that	SCONJ	_	_	33	mark	_	_
32	you	you	PRON	_	_	33	nsubj	_	_
33	want	want	VERB	_	_	30	ccomp	_	_
34	to	to	PART	_	_	35	mark	_	_
35	delete	delete	VERB	_	_	33	xcomp	_	_
36	this	this	DET	_	_	37	det	_	_
37	route	route	NOUN	_	Number=Sing	35	obj	_	SpaceAfter=No
38	?	?	PUNCT	_	_	17	punct	_	SpaceAfter=No
39	”	”	PUNCT	_	_	38	punct	_	_

~~~


