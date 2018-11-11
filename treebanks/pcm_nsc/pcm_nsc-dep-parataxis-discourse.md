---
layout: base
title:  'Statistics of parataxis:discourse in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `parataxis:discourse`

This relation is a language-specific subtype of .
There are also 4 other language-specific subtypes of `parataxis`: <tt><a href="pcm_nsc-dep-parataxis-conj.html">parataxis:conj</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-dislocated.html">parataxis:dislocated</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-obj.html">parataxis:obj</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

11 nodes (0%) are attached to their parents as `parataxis:discourse`.

6 instances of `parataxis:discourse` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.27272727272727.

The following 4 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (8; 73% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-INTJ.html">INTJ</a></tt> (1; 9% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 15 parataxis:discourse	color:blue
1	#	#	PUNCT	_	_	8	punct	_	_
2	even	even	ADV	_	_	8	advmod	_	_
3	sef	sef	PART	_	_	2	advmod:emph	_	_
4	<	<	PUNCT	_	_	5	punct	_	_
5	#	#	PUNCT	_	_	2	punct	_	_
6	life	life	NOUN	_	_	8	nsubj	_	_
7	fit	fit	AUX	_	_	8	aux	_	_
8	follow	follow	VERB	_	_	0	root	_	_
9	am	am	PRON	_	_	8	obj	_	_
10	>+	>+	PUNCT	_	_	12	punct	_	_
11	at	at	ADP	_	_	12	case	_	_
12	time	time	NOUN	_	_	8	obl:mod	_	_
13	>	>	PUNCT	_	_	15	punct	_	_
14	God	God	PROPN	_	_	15	nsubj	_	_
15	forbid	forbid	VERB	_	_	8	parataxis:discourse	_	_
16	//	//	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 17 parataxis:discourse	color:blue
1	#	#	PUNCT	_	_	6	punct	_	_
2	because	because	SCONJ	_	_	6	mark	_	_
3	no	no	PART	_	_	4	advmod	_	_
4	be	be	PART	_	_	6	cop	_	_
5	every	every	DET	_	_	6	det	_	_
6	time	time	NOUN	_	_	0	root	_	_
7	>+	>+	PUNCT	_	_	10	punct	_	_
8	people	people	NOUN	_	_	10	nsubj	_	_
9	dey	dey	AUX	_	_	10	aux	_	_
10	use	use	VERB	_	_	6	ccomp:cleft	_	_
11	dem	dem	PART	_	_	10	obj	_	_
12	//=	//=	PUNCT	_	_	17	punct	_	_
13	#	#	PUNCT	_	_	12	punct	_	_
14	because	because	SCONJ	_	_	17	mark	_	_
15	no	no	PART	_	_	16	advmod	_	_
16	be	be	PART	_	_	17	cop	_	_
17	everywhere	everywhere	ADV	_	_	6	parataxis:discourse	_	_
18	>+	>+	PUNCT	_	_	21	punct	_	_
19	dem	dem	PRON	_	_	21	nsubj	_	_
20	fit	fit	AUX	_	_	21	aux	_	_
21	reach	reach	VERB	_	_	17	ccomp:cleft	_	_
22	too	too	ADV	_	_	21	advmod	_	_
23	//	//	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 parataxis:discourse	color:blue
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
11	o	o	PART	_	_	10	advmod:emph	_	_
12	na	na	PART	_	_	13	cop	_	_
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
40	na	na	PART	_	_	41	cop	_	_
41	accident	accident	NOUN	_	_	0	root	_	_
42	>+	>+	PUNCT	_	_	45	punct	_	_
43	im	im	PRON	_	_	45	nsubj:expl	_	_
44	dey	dey	AUX	_	_	45	amod	_	_
45	result	result	NOUN	_	_	41	acl:cleft	_	_
46	in	in	ADP	_	_	45	obl:arg	_	_
47	//	//	PUNCT	_	_	41	punct	_	_

~~~


