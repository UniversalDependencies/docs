---
layout: base
title:  'Statistics of case in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `case`

This relation is universal.

758 nodes (8%) are attached to their parents as `case`.

747 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.65039577836412.

The following 16 pairs of parts of speech are connected with `case`: <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (661; 87% instances), <tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (24; 3% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-PART.html">PART</a></tt> (11; 1% instances), <tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (11; 1% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (9; 1% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (9; 1% instances), <tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (8; 1% instances), <tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ctetex-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 case	color:blue
1	The	the	DET	_	_	2	det	_	_
2	NE	ne	NOUN	_	Number=Sing	4	nsubj	_	_
3	will	will	AUX	_	_	4	aux	_	_
4	remain	remain	VERB	_	_	0	root	_	_
5	in	in	ADP	_	_	7	case	_	_
6	the	the	DET	_	_	7	det	_	_
7	CT	ct	NOUN	_	Number=Sing	4	obl	_	_
8	and	and	CCONJ	_	_	12	cc	_	_
9	no	no	DET	_	_	10	det	_	_
10	recovery	recovery	NOUN	_	Number=Sing	12	nsubj	_	_
11	will	will	AUX	_	_	12	aux	_	_
12	take	take	VERB	_	_	4	conj	_	_
13	place	place	NOUN	_	Number=Sing	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	The	the	DET	_	_	2	det	_	_
2	GUI	gui	NOUN	_	Number=Sing	4	nsubj	_	_
3	shall	shall	AUX	_	_	4	aux	_	_
4	run	run	VERB	_	_	0	root	_	_
5	on	on	ADP	_	_	6	case	_	_
6	Windows	Windows	PROPN	_	_	4	obl	_	_
7	2000	2000	NUM	_	_	6	flat	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	Sun	Sun	PROPN	_	_	6	conj	_	_
10	Solaris	Solaris	PROPN	_	_	9	flat	_	_
11	8	8	NUM	_	_	9	flat	_	SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	_
13	and	and	CCONJ	_	_	14	cc	_	_
14	Linux	Linux	PROPN	_	_	6	conj	_	_
15	operating	operating	NOUN	_	Number=Sing	16	compound	_	_
16	systems	system	NOUN	_	Number=Plur	6	appos	_	_
17	without	without	ADP	_	_	18	case	_	_
18	modification	modification	NOUN	_	Number=Sing	16	nmod	_	_
19	of	of	ADP	_	_	22	case	_	_
20	the	the	DET	_	_	22	det	_	_
21	Java	Java	PROPN	_	_	22	compound	_	_
22	code	code	NOUN	_	Number=Sing	18	nmod	_	SpaceAfter=No
23	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Transfer	transfer	NOUN	_	Number=Sing	11	nsubj	_	_
2	to	to	ADP	_	_	3	case	_	_
3	Shunting	shunting	NOUN	_	Number=Sing	1	nmod	_	_
4	on	on	ADP	_	_	7	case	_	_
5	driver	driver	NOUN	_	Number=Sing	7	nmod	_	SpaceAfter=No
6	’s	’s	PART	_	_	5	case	_	_
7	selection	selection	NOUN	_	Number=Sing	1	nmod	_	_
8	shall	shall	AUX	_	_	11	aux	_	_
9	only	only	ADV	_	_	11	advmod	_	_
10	be	be	AUX	_	Number=Sing|Tense=Pres	11	cop	_	_
11	possible	possible	ADJ	_	_	0	root	_	_
12	when	when	SCONJ	_	_	13	mark	_	_
13	stationary	stationary	ADJ	_	_	11	advcl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	11	punct	_	_
15	(	(	PUNCT	_	_	16	punct	_	SpaceAfter=No
16	M	m	ADJ	_	_	11	advmod	_	SpaceAfter=No
17	)	)	PUNCT	_	_	16	punct	_	_

~~~


