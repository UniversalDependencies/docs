---
layout: base
title:  'Statistics of obl in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="pcm_nsc-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pcm_nsc-dep-obl-mod.html">obl:mod</a></tt>, <tt><a href="pcm_nsc-dep-obl-periph.html">obl:periph</a></tt>.

16 nodes (0%) are attached to their parents as `obl`.

16 instances of `obl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.3125.

The following 5 pairs of parts of speech are connected with `obl`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (11; 69% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (2; 13% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-DET.html">DET</a></tt> (1; 6% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 obl	color:blue
1	some	some	PRON	_	_	4	nsubj	_	_
2	go	go	AUX	_	_	4	aux	_	_
3	dey	dey	AUX	_	_	4	aux	_	_
4	go	go	VERB	_	_	0	root	_	_
5	mosque	mosque	NOUN	_	_	4	obj	_	_
6	//=	//=	PUNCT	_	_	10	punct	_	_
7	some	some	PRON	_	_	10	nsubj	_	_
8	go	go	AUX	_	_	10	aux	_	_
9	dey	dey	AUX	_	_	10	aux	_	_
10	go	go	VERB	_	_	4	parataxis:conj	_	_
11	church	church	NOUN	_	_	10	obl	_	_
12	//	//	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl	color:blue
1	{	{	PUNCT	_	_	2	punct	_	_
2	if	if	SCONJ	_	_	0	root	_	_
3	||	||	PUNCT	_	_	8	punct	_	_
4	wheder	wheder	CCONJ	_	_	8	mark	_	_
5	if	if	SCONJ	_	_	4	fixed	_	_
6	}	}	PUNCT	_	_	8	punct	_	_
7	I	I	PRON	_	_	8	nsubj	_	_
8	comot	comot	VERB	_	_	2	conj:dicto	_	_
9	for	for	ADP	_	_	10	case	_	_
10	here	here	ADV	_	_	8	obl	_	_
11	now	now	ADV	_	_	8	advmod	_	_
12	||	||	PUNCT	_	_	13	punct	_	_
13	ehn	ehn	INTJ	_	_	8	discourse	_	_
14	if	if	SCONJ	_	_	16	mark	_	_
15	I	I	PRON	_	_	16	nsubj	_	_
16	come	come	VERB	_	_	17	advcl	_	_
17	&	&	X	_	_	2	conj:dicto	_	_
18	//	//	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 obl	color:blue
1	#	#	PUNCT	_	_	28	punct	_	_
2	to	to	PART	_	_	3	mark	_	_
3	see	see	VERB	_	_	28	advcl	_	_
4	sey	sey	SCONJ	_	_	10	mark	_	_
5	di	di	DET	_	_	6	det	_	_
6	money	money	NOUN	_	_	10	nsubj	_	_
7	sef	sef	ADV	PART	_	6	advmod	_	_
8	no	no	ADV	PART	_	10	advmod	_	_
9	too	too	ADV	_	_	10	advmod	_	_
10	plenty	plenty	ADJ	_	_	3	ccomp	_	_
11	for	for	ADP	_	_	13	case	_	_
12	our	our	PRON	_	_	13	nmod:poss	_	_
13	people	people	NOUN	_	_	10	obl	_	_
14	to	to	PART	_	_	15	mark	_	_
15	pay	pay	VERB	_	_	10	xcomp	_	_
16	<	<	PUNCT	_	_	3	punct	_	_
17	#	#	PUNCT	_	_	3	punct	_	_
18	{	{	PUNCT	_	_	19	punct	_	_
19	government	government	NOUN	_	_	28	nsubj	_	_
20	|c	|c	PUNCT	_	_	25	punct	_	_
21	and	and	CCONJ	_	_	25	cc	_	_
22	dese	dese	DET	_	_	25	det	_	_
23	motor	motor	NOUN	_	_	24	compound	_	_
24	business	business	NOUN	_	_	25	compound	_	_
25	people	people	NOUN	_	_	19	conj:coord	_	_
26	}	}	PUNCT	_	_	19	punct	_	_
27	fit	fit	AUX	_	_	28	aux	_	_
28	do	do	VERB	_	_	0	root	_	_
29	one	one	DET	_	_	30	det	_	_
30	kind	kind	NOUN	_	_	28	obj	_	_
31	arrangement	arrangement	NOUN	_	_	30	nmod	_	_
32	#	#	PUNCT	_	_	37	punct	_	_
33	wey	wey	SCONJ	_	_	37	mark	_	_
34	government	government	NOUN	_	_	37	nsubj	_	_
35	go	go	AUX	_	_	37	aux	_	_
36	dey	dey	AUX	_	_	37	aux	_	_
37	take	take	VERB	_	_	31	acl:relcl	_	_
38	helep	helep	VERB	_	_	37	compound:svc	_	_
39	dem	dem	PRON	_	_	38	obj	_	_
40	#	#	PUNCT	_	_	48	punct	_	_
41	so	so	SCONJ	_	_	48	mark	_	_
42	dat	dat	SCONJ	_	_	41	fixed	_	_
43	di	di	DET	_	_	44	det	_	_
44	load	load	NOUN	_	_	48	nsubj	_	_
45	no	no	ADV	PART	_	48	advmod	_	_
46	go	go	AUX	_	_	48	aux	_	_
47	too	too	ADV	_	_	48	advmod	_	_
48	much	much	ADV	_	_	28	advcl	_	_
49	for	for	ADP	_	_	51	case	_	_
50	dem	dem	PRON	_	_	51	nmod:poss	_	_
51	head	head	NOUN	_	_	48	obl	_	_
52	//	//	PUNCT	_	_	28	punct	_	_

~~~


