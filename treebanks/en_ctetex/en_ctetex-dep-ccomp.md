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
1	Note	_	VERB	_	_	0	root	_	_
2	that	_	SCONJ	_	_	6	mark	_	_
3	the	_	DET	_	_	4	det	_	_
4	NE	_	NOUN	_	_	6	nsubj:pass	_	_
5	is	_	AUX	_	_	6	aux:pass	_	_
6	allowed	_	VERB	_	_	1	ccomp	_	_
7	to	_	PART	_	_	8	mark	_	_
8	remain	_	VERB	_	_	6	xcomp	_	_
9	in	_	ADP	_	_	11	case	_	_
10	the	_	DET	_	_	11	det	_	_
11	configuration	_	NOUN	_	_	8	obl	_	_
12	and	_	CCONJ	_	_	16	cc	_	_
13	no	_	DET	_	_	14	det	_	_
14	recovery	_	NOUN	_	_	16	nsubj	_	_
15	will	_	AUX	_	_	16	aux	_	_
16	take	_	VERB	_	_	6	conj	_	_
17	place	_	NOUN	_	_	16	obj	_	SpaceAfter=No
18	.	_	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Have	_	VERB	_	_	0	root	_	_
2	map	_	NOUN	_	_	4	nsubj	_	_
3	be	_	AUX	_	_	4	cop	_	_
4	able	_	ADJ	_	_	1	ccomp	_	_
5	to	_	PART	_	_	6	mark	_	_
6	show	_	VERB	_	_	4	xcomp	_	_
7	quantity	_	NOUN	_	_	6	obj	_	_
8	of	_	ADP	_	_	9	case	_	_
9	pumpage	_	NOUN	_	_	7	nmod	_	SpaceAfter=No
10	.	_	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 33 ccomp	color:blue
1	When	_	SCONJ	_	_	4	mark	_	_
2	the	_	DET	_	_	3	det	_	_
3	user	_	NOUN	_	_	4	nsubj	_	_
4	selects	_	VERB	_	_	17	advcl	_	_
5	“	_	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	Delete	_	VERB	_	_	4	obj	_	SpaceAfter=No
7	”	_	PUNCT	_	_	6	punct	_	_
8	and	_	CCONJ	_	_	13	cc	_	_
9	a	_	DET	_	_	10	det	_	_
10	route	_	NOUN	_	_	13	nsubj:pass	_	_
11	has	_	AUX	_	_	13	aux	_	_
12	been	_	AUX	_	_	13	aux:pass	_	_
13	selected	_	VERB	_	_	4	conj	_	SpaceAfter=No
14	,	_	PUNCT	_	_	4	punct	_	_
15	FPMS	_	PROPN	_	_	17	nsubj	_	_
16	shall	_	AUX	_	_	17	aux	_	_
17	display	_	VERB	_	_	0	root	_	_
18	a	_	DET	_	_	24	det	_	_
19	standard	_	ADJ	_	_	24	amod	_	_
20	Yes	_	INTJ	_	_	23	compound	_	SpaceAfter=No
21	-	_	PUNCT	_	_	22	punct	_	SpaceAfter=No
22	No	_	INTJ	_	_	20	conj	_	_
23	message	_	NOUN	_	_	24	compound	_	_
24	box	_	NOUN	_	_	17	obj	_	_
25	that	_	PRON	_	_	26	nsubj	_	_
26	states	_	VERB	_	_	24	acl:relcl	_	_
27	“	_	PUNCT	_	_	30	punct	_	SpaceAfter=No
28	Are	_	AUX	_	_	30	cop	_	_
29	you	_	PRON	_	_	30	nsubj	_	_
30	sure	_	ADJ	_	_	26	parataxis	_	_
31	that	_	SCONJ	_	_	33	mark	_	_
32	you	_	PRON	_	_	33	nsubj	_	_
33	want	_	VERB	_	_	30	ccomp	_	_
34	to	_	PART	_	_	35	mark	_	_
35	delete	_	VERB	_	_	33	xcomp	_	_
36	this	_	DET	_	_	37	det	_	_
37	route	_	NOUN	_	_	35	obj	_	SpaceAfter=No
38	?	_	PUNCT	_	_	17	punct	_	SpaceAfter=No
39	”	_	PUNCT	_	_	38	punct	_	_

~~~


