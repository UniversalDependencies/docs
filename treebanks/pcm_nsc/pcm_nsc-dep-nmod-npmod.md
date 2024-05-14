---
layout: base
title:  'Statistics of nmod:npmod in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="pcm_nsc-dep-nmod-poss.html">nmod:poss</a></tt>.

7 nodes (0%) are attached to their parents as `nmod:npmod`.

6 instances of `nmod:npmod` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 5 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (3; 43% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 14% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:npmod	color:blue
1	di	di	DET	_	_	2	det	_	_
2	kind	kind	NOUN	_	_	15	dislocated	_	_
3	life	life	NOUN	_	_	2	nmod:npmod	_	_
4	wey	wey	SCONJ	_	_	8	mark	_	_
5	dat	dat	DET	_	_	6	det	_	_
6	woman	woman	NOUN	_	_	8	nsubj	_	_
7	dey	dey	AUX	_	_	8	aux	_	_
8	live	live	VERB	_	_	2	acl:relcl	_	_
9	for	for	ADP	_	_	10	case	_	_
10	dere	dere	ADV	_	_	8	obl	_	_
11	<	<	PUNCT	_	_	2	punct	_	_
12	na	na	AUX	PART	_	15	cop	_	_
13	{	{	PUNCT	_	_	15	punct	_	_
14	only	only	ADJ	_	_	15	amod	_	_
15	God	God	PROPN	_	_	0	root	_	_
16	||	||	PUNCT	_	_	15	punct	_	_
17	na	na	AUX	PART	_	19	cop	_	_
18	only	only	ADJ	_	_	19	amod	_	_
19	God	God	PROPN	_	_	15	conj:dicto	_	_
20	}	}	PUNCT	_	_	19	punct	_	_
21	>+	>+	PUNCT	_	_	23	punct	_	_
22	go	go	AUX	_	_	23	aux	_	_
23	save	save	VERB	_	_	19	acl:cleft	_	_
24	am	am	PRON	_	_	23	obj	_	_
25	//	//	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 nmod:npmod	color:blue
1	#	#	PUNCT	_	_	41	punct	_	_
2	but	but	CCONJ	_	_	7	cc	_	_
3	if	if	SCONJ	_	_	7	mark	_	_
4	{	{	PUNCT	_	_	7	punct	_	_
5	you	you	PRON	_	_	7	nsubj	_	_
6	come	come	AUX	_	_	7	aux	_	_
7	talk	talk	VERB	_	_	41	advcl	_	_
8	sey	sey	SCONJ	_	_	13	mark	_	_
9	[	[	PUNCT	_	_	13	punct	_	_
10	no	no	INTJ	_	_	13	parataxis:discourse	_	_
11	o	o	ADV	PART	_	10	advmod:emph	_	_
12	na	na	AUX	PART	_	13	cop	_	_
13	me	me	PRON	_	_	7	parataxis:obj	_	_
14	>+	>+	PUNCT	_	_	13	punct	_	_
15	get	get	VERB	_	_	13	acl:cleft	_	_
16	right	right	ADJ	_	_	15	obj	_	_
17	of	of	ADP	_	_	18	case	_	_
18	way	way	NOUN	_	_	16	nmod:npmod	_	_
19	]	]	PUNCT	_	_	13	punct	_	_
20	|c	|c	PUNCT	_	_	24	punct	_	_
21	#	#	PUNCT	_	_	24	punct	_	_
22	you	you	PRON	_	_	24	nsubj	_	_
23	dey	dey	AUX	_	_	24	aux	_	_
24	drive	drive	VERB	_	_	7	conj:coord	_	_
25	anyhow	anyhow	ADV	_	_	24	advmod	_	_
26	|c	|c	PUNCT	_	_	30	punct	_	_
27	you	you	PRON	_	_	30	nsubj	_	_
28	{	{	PUNCT	_	_	30	punct	_	_
29	dey	dey	AUX	_	_	30	aux	_	_
30	press	press	VERB	_	_	7	conj:coord	_	_
31	am	am	PRON	_	_	30	obj	_	_
32	|c	|c	PUNCT	_	_	30	punct	_	_
33	dey	dey	AUX	_	_	34	aux	_	_
34	match	match	NOUN	_	_	30	conj:coord	_	_
35	am	am	PRON	_	_	34	obj	_	_
36	}	}	PUNCT	_	_	30	punct	_	_
37	}	}	PUNCT	_	_	7	punct	_	_
38	<+	<+	PUNCT	_	_	7	punct	_	_
39	#	#	PUNCT	_	_	7	punct	_	_
40	na	na	AUX	PART	_	41	cop	_	_
41	accident	accident	NOUN	_	_	0	root	_	_
42	>+	>+	PUNCT	_	_	45	punct	_	_
43	im	im	PRON	_	_	45	nsubj:expl	_	_
44	dey	dey	AUX	_	_	45	amod	_	_
45	result	result	NOUN	_	_	41	acl:cleft	_	_
46	in	in	ADP	_	_	45	obl:arg	_	_
47	//	//	PUNCT	_	_	41	punct	_	_

~~~


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 37 nmod:npmod	color:blue
1	#	#	PUNCT	_	_	35	punct	_	_
2	as	as	SCONJ	_	_	5	case	_	_
3	e	e	SCONJ	PRON	_	5	mark	_	_
4	come	come	AUX	_	_	5	aux	_	_
5	be	be	VERB	_	_	35	advcl	_	_
6	sey	sey	SCONJ	_	_	10	mark	_	_
7	{	{	PUNCT	_	_	10	punct	_	_
8	government	government	NOUN	_	_	10	nsubj	_	_
9	don	don	AUX	_	_	10	aux	_	_
10	try	try	VERB	_	_	5	csubj:quasi	_	_
11	dem	dem	PRON	_	_	12	nmod:poss	_	_
12	own	own	ADJ	_	_	10	obj	_	_
13	o	o	ADV	PART	_	10	advmod:emph	_	_
14	|c	|c	PUNCT	_	_	19	punct	_	_
15	and	and	CCONJ	_	_	19	cc	_	_
16	we	we	PRON	_	_	19	nsubj	_	_
17	sef	sef	ADV	PART	_	16	advmod	_	_
18	don	don	AUX	_	_	19	aux	_	_
19	see	see	VERB	_	_	10	conj:coord	_	_
20	sey	sey	SCONJ	_	_	25	mark	_	_
21	di	di	DET	_	_	22	det	_	_
22	motor	motor	NOUN	_	_	25	nsubj	_	_
23	dem	dem	DET	PART	_	22	det	_	_
24	no	no	ADV	PART	_	25	advmod	_	_
25	plenty	plenty	ADJ	_	_	19	ccomp	_	_
26	reach	reach	VERB	_	_	25	compound:svc	_	_
27	to	to	ADP	_	_	28	mark	_	_
28	go	go	VERB	_	_	25	xcomp	_	_
29	round	round	ADP	_	_	28	compound:prt	_	_
30	}	}	PUNCT	_	_	10	punct	_	_
31	<+	<+	PUNCT	_	_	5	punct	_	_
32	#	#	PUNCT	_	_	5	punct	_	_
33	na	na	AUX	PART	_	35	cop	_	_
34	di	di	DET	_	_	35	det	_	_
35	hand	hand	NOUN	_	_	0	root	_	_
36	of	of	ADP	_	_	37	case	_	_
37	dose	dose	PRON	_	_	35	nmod:npmod	_	_
38	wey	wey	SCONJ	_	_	40	mark	_	_
39	dey	dey	AUX	_	_	40	aux	_	_
40	do	do	VERB	_	_	37	acl:relcl	_	_
41	private	private	ADJ	_	_	43	amod	_	_
42	motor	motor	NOUN	_	_	43	compound	_	_
43	business	business	NOUN	_	_	40	obj	_	_
44	>+	>+	PUNCT	_	_	48	punct	_	_
45	di	di	DET	_	_	46	det	_	_
46	thing	thing	NOUN	_	_	48	nsubj	_	_
47	come	come	AUX	VERB	_	48	aux	_	_
48	dey	dey	VERB	_	_	35	acl:cleft	_	_
49	now	now	ADV	_	_	48	advmod	_	_
50	o	o	ADV	PART	_	49	advmod:emph	_	_
51	//	//	PUNCT	_	_	35	punct	_	_

~~~


