---
layout: base
title:  'Statistics of nummod in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `nummod`

This relation is universal.

226 nodes (2%) are attached to their parents as `nummod`.

225 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06637168141593.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (186; 82% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (23; 10% instances), <tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (14; 6% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	The	the	DET	_	_	2	det	_	_
2	CO	co	NOUN	_	Number=Sing	4	nsubj	_	_
3	must	must	AUX	_	_	4	aux	_	_
4	respond	respond	VERB	_	_	0	root	_	_
5	within	within	ADP	_	_	7	case	_	_
6	1	1	NUM	_	_	7	nummod	_	_
7	minute	minute	NOUN	_	Number=Sing	4	obl	_	_
8	in	in	ADP	_	_	10	case	_	_
9	both	both	CCONJ	_	_	10	cc	_	_
10	single	single	ADJ	_	_	14	amod	_	_
11	and	and	CCONJ	_	_	12	cc	_	_
12	multi	multiplayer	ADJ	_	Typo=Yes	10	conj	_	_
13	player	_	X	_	_	12	goeswith	_	_
14	modes	mode	NOUN	_	Number=Plur	4	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 26 nummod	color:blue
1	There	there	PRON	_	_	2	expl	_	_
2	are	be	VERB	_	Number=Plur	0	root	_	_
3	two	two	NUM	_	_	4	nummod	_	_
4	events	event	NOUN	_	Number=Plur	2	nsubj	_	_
5	that	that	PRON	_	_	7	nsubj	_	_
6	shall	shall	AUX	_	_	7	aux	_	_
7	result	result	VERB	_	_	4	acl:relcl	_	_
8	in	in	ADP	_	_	11	case	_	_
9	an	an	DET	_	_	11	det	_	_
10	alarm	alarm	NOUN	_	Number=Sing	11	compound	_	_
11	condition	condition	NOUN	_	Number=Sing	7	obl	_	SpaceAfter=No
12	:	:	PUNCT	_	_	20	punct	_	_
13	1	1	NUM	_	_	20	nummod	_	SpaceAfter=No
14	)	)	PUNCT	_	_	13	punct	_	_
15	an	an	DET	_	_	18	det	_	_
16	invalid	invalid	ADJ	_	_	18	amod	_	_
17	temperature	temperature	NOUN	_	Number=Sing	18	nmod	_	_
18	value	value	NOUN	_	Number=Sing	20	nsubj:pass	_	_
19	is	be	AUX	_	Number=Sing|Tense=Pres	20	aux:pass	_	_
20	reported	report	VERB	_	Tense=Past	2	parataxis	_	_
21	from	from	ADP	_	_	23	case	_	_
22	a	a	DET	_	_	23	det	_	_
23	thermostat	thermostat	NOUN	_	Number=Sing	20	obl	_	SpaceAfter=No
24	,	,	PUNCT	_	_	32	punct	_	_
25	or	or	CCONJ	_	_	32	cc	_	_
26	2	2	NUM	_	_	32	nummod	_	SpaceAfter=No
27	)	)	PUNCT	_	_	26	punct	_	_
28	the	the	DET	_	_	30	det	_	_
29	reported	reported	ADJ	_	_	30	amod	_	_
30	temperature	temperature	NOUN	_	Number=Sing	32	nsubj	_	_
31	has	have	AUX	_	_	32	aux	_	_
32	exceeded	exceed	VERB	_	Tense=Past	20	conj	_	_
33	the	the	DET	_	_	35	det	_	_
34	defined	defined	ADJ	_	_	35	amod	_	_
35	limits	limit	NOUN	_	Number=Plur	32	obj	_	SpaceAfter=No
36	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nummod	color:blue
1	The	the	DET	_	_	2	det	_	_
2	equipment	equipment	NOUN	_	Number=Sing	5	nsubj	_	_
3	shall	shall	AUX	_	_	5	aux	_	_
4	be	be	AUX	_	Number=Sing|Tense=Pres	5	cop	_	_
5	capable	capable	ADJ	_	_	0	root	_	_
6	of	of	SCONJ	_	_	7	mark	_	_
7	coping	cope	VERB	_	Tense=Past	5	xcomp	_	_
8	with	with	ADP	_	_	10	case	_	_
9	temperature	temperature	NOUN	_	Number=Sing	10	nmod	_	_
10	variations	variation	NOUN	_	Number=Plur	7	obl	_	_
11	of	of	ADP	_	_	18	case	_	_
12	up	up	ADV	_	_	17	advmod	_	_
13	to	to	ADP	_	_	12	fixed	_	_
14	+	+	SYM	_	_	17	advmod	_	SpaceAfter=No
15	/	/	SYM	_	_	16	cc	_	SpaceAfter=No
16	-	-	SYM	_	_	14	conj	_	_
17	1	1	NUM	_	_	18	nummod	_	SpaceAfter=No
18	°	°	SYM	_	_	10	nmod	_	SpaceAfter=No
19	C	C	PROPN	_	_	18	compound	_	SpaceAfter=No
20	/	/	SYM	_	_	21	case	_	SpaceAfter=No
21	minute	minute	NOUN	_	Number=Sing	18	nmod	_	SpaceAfter=No
22	.	.	PUNCT	_	_	5	punct	_	_
23	(	(	PUNCT	_	_	24	punct	_	SpaceAfter=No
24	M	m	ADJ	_	_	5	advmod	_	SpaceAfter=No
25	)	)	PUNCT	_	_	24	punct	_	_

~~~


