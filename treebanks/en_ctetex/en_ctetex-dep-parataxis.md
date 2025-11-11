---
layout: base
title:  'Statistics of parataxis in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `parataxis`

This relation is universal.

127 nodes (1%) are attached to their parents as `parataxis`.

111 instances of `parataxis` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.03937007874016.

The following 16 pairs of parts of speech are connected with `parataxis`: <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (33; 26% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (29; 23% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (13; 10% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt> (11; 9% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (11; 9% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (2; 2% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 16 parataxis	color:blue
1	The	the	DET	_	_	2	det	_	_
2	map	map	NOUN	_	Number=Sing	5	nsubj	_	_
3	shall	shall	AUX	_	_	5	aux	_	_
4	be	be	AUX	_	Number=Sing|Tense=Pres	5	aux	_	_
5	capable	capable	ADJ	_	_	0	root	_	_
6	of	of	SCONJ	_	_	7	mark	_	_
7	displaying	display	VERB	_	Tense=Past	5	xcomp	_	_
8	the	the	DET	_	_	9	det	_	_
9	following	following	NOUN	_	Number=Sing	7	obj	_	_
10	for	for	ADP	_	_	12	case	_	_
11	a	a	DET	_	_	12	det	_	_
12	DMS	dms	NOUN	_	Number=Sing	7	obl	_	SpaceAfter=No
13	:	:	PUNCT	_	_	16	punct	_	LineAfter=Yes
14	1	1	NUM	_	_	16	nummod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	_
16	Location	location	NOUN	_	Number=Sing	7	parataxis	_	LineAfter=Yes
17	2	2	NUM	_	_	20	nummod	_	SpaceAfter=No
18	.	.	PUNCT	_	_	17	punct	_	_
19	Current	current	ADJ	_	_	20	amod	_	_
20	Message	message	NOUN	_	Number=Sing	16	list	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 28 parataxis	color:blue
1	The	the	DET	_	_	3	det	_	_
2	color	color	NOUN	_	Number=Sing	3	compound	_	_
3	coding	coding	NOUN	_	Number=Sing	5	nsubj	_	_
4	shall	shall	AUX	_	_	5	aux	_	_
5	be	be	VERB	_	_	0	root	_	_
6	as	as	SCONJ	_	_	7	mark	_	_
7	follows	follow	VERB	_	Number=Sing	5	advcl	_	SpaceAfter=No
8	:	:	PUNCT	_	_	10	punct	_	_
9	·	·	PUNCT	_	_	10	punct	_	_
10	Green	green	NOUN	_	Number=Sing	5	parataxis	_	_
11	-	-	PUNCT	_	_	10	punct	_	_
12	speeds	speed	NOUN	_	Number=Plur	10	parataxis	_	_
13	>	>	SYM	_	_	14	advmod	_	_
14	TBD	TBD	NUM	_	_	15	nummod	_	_
15	MPH	mph	NOUN	_	Number=Sing	12	nmod	_	_
16	·	·	PUNCT	_	_	17	punct	_	_
17	Yellow	yellow	NOUN	_	Number=Sing	10	list	_	_
18	-	-	PUNCT	_	_	17	punct	_	_
19	speeds	speed	NOUN	_	Number=Plur	17	parataxis	_	_
20	between	between	ADP	_	_	24	case	_	_
21	TBD	TBD	NUM	_	_	24	nummod	_	_
22	and	and	CCONJ	_	_	23	cc	_	_
23	TBD	TBD	NUM	_	_	21	conj	_	_
24	MPH	mph	NOUN	_	Number=Sing	19	nmod	_	_
25	·	·	PUNCT	_	_	26	punct	_	_
26	Red	red	NOUN	_	Number=Sing	10	list	_	_
27	–	–	PUNCT	_	_	26	punct	_	_
28	speeds	speed	NOUN	_	Number=Plur	26	parataxis	_	_
29	below	below	ADP	_	_	31	case	_	_
30	TBD	TBD	NUM	_	_	31	nummod	_	_
31	MPH	mph	NOUN	_	Number=Sing	28	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	Data	data	NOUN	_	Number=Sing	0	root	_	_
2	Invalid	invalid	ADJ	_	_	1	amod	_	_
3	–	–	PUNCT	_	_	1	punct	_	_
4	The	the	DET	_	_	5	det	_	_
5	BE	be	NOUN	_	Number=Sing	7	nsubj	_	_
6	shall	shall	AUX	_	_	7	aux	_	_
7	replace	replace	VERB	_	_	1	parataxis	_	_
8	all	all	DET	_	_	10	det	_	_
9	invalid	invalid	ADJ	_	_	10	amod	_	_
10	data	data	NOUN	_	Number=Sing	7	obj	_	_
11	with	with	ADP	_	_	13	case	_	_
12	zero	zero	NUM	_	_	13	compound	_	_
13	values	value	NOUN	_	Number=Plur	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


