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
1	The	_	DET	_	_	2	det	_	_
2	map	_	NOUN	_	_	5	nsubj	_	_
3	shall	_	AUX	_	_	5	aux	_	_
4	be	_	AUX	_	_	5	aux	_	_
5	capable	_	ADJ	_	_	0	root	_	_
6	of	_	SCONJ	_	_	7	mark	_	_
7	displaying	_	VERB	_	_	5	xcomp	_	_
8	the	_	DET	_	_	9	det	_	_
9	following	_	NOUN	_	_	7	obj	_	_
10	for	_	ADP	_	_	12	case	_	_
11	a	_	DET	_	_	12	det	_	_
12	DMS	_	NOUN	_	_	7	obl	_	SpaceAfter=No
13	:	_	PUNCT	_	_	16	punct	_	LineAfter=Yes
14	1	_	NUM	_	_	16	nummod	_	SpaceAfter=No
15	.	_	PUNCT	_	_	14	punct	_	_
16	Location	_	NOUN	_	_	7	parataxis	_	LineAfter=Yes
17	2	_	NUM	_	_	20	nummod	_	SpaceAfter=No
18	.	_	PUNCT	_	_	17	punct	_	_
19	Current	_	ADJ	_	_	20	amod	_	_
20	Message	_	NOUN	_	_	16	list	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 28 parataxis	color:blue
1	The	_	DET	_	_	3	det	_	_
2	color	_	NOUN	_	_	3	compound	_	_
3	coding	_	NOUN	_	_	5	nsubj	_	_
4	shall	_	AUX	_	_	5	aux	_	_
5	be	_	VERB	_	_	0	root	_	_
6	as	_	SCONJ	_	_	7	mark	_	_
7	follows	_	VERB	_	_	5	advcl	_	SpaceAfter=No
8	:	_	PUNCT	_	_	10	punct	_	_
9	·	_	PUNCT	_	_	10	punct	_	_
10	Green	_	NOUN	_	_	5	parataxis	_	_
11	-	_	PUNCT	_	_	10	punct	_	_
12	speeds	_	NOUN	_	_	10	parataxis	_	_
13	>	_	SYM	_	_	14	advmod	_	_
14	TBD	_	NUM	_	_	15	nummod	_	_
15	MPH	_	NOUN	_	_	12	nmod	_	_
16	·	_	PUNCT	_	_	17	punct	_	_
17	Yellow	_	NOUN	_	_	10	list	_	_
18	-	_	PUNCT	_	_	17	punct	_	_
19	speeds	_	NOUN	_	_	17	parataxis	_	_
20	between	_	ADP	_	_	24	case	_	_
21	TBD	_	NUM	_	_	24	nummod	_	_
22	and	_	CCONJ	_	_	23	cc	_	_
23	TBD	_	NUM	_	_	21	conj	_	_
24	MPH	_	NOUN	_	_	19	nmod	_	_
25	·	_	PUNCT	_	_	26	punct	_	_
26	Red	_	NOUN	_	_	10	list	_	_
27	–	_	PUNCT	_	_	26	punct	_	_
28	speeds	_	NOUN	_	_	26	parataxis	_	_
29	below	_	ADP	_	_	31	case	_	_
30	TBD	_	NUM	_	_	31	nummod	_	_
31	MPH	_	NOUN	_	_	28	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	Data	_	NOUN	_	_	0	root	_	_
2	Invalid	_	ADJ	_	_	1	amod	_	_
3	–	_	PUNCT	_	_	1	punct	_	_
4	The	_	DET	_	_	5	det	_	_
5	BE	_	NOUN	_	_	7	nsubj	_	_
6	shall	_	AUX	_	_	7	aux	_	_
7	replace	_	VERB	_	_	1	parataxis	_	_
8	all	_	DET	_	_	10	det	_	_
9	invalid	_	ADJ	_	_	10	amod	_	_
10	data	_	NOUN	_	_	7	obj	_	_
11	with	_	ADP	_	_	13	case	_	_
12	zero	_	NUM	_	_	13	compound	_	_
13	values	_	NOUN	_	_	10	nmod	_	SpaceAfter=No
14	.	_	PUNCT	_	_	1	punct	_	_

~~~


