---
layout: base
title:  'Statistics of obl in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="en_ctetex-dep-obl-agent.html">obl:agent</a></tt>.

319 nodes (3%) are attached to their parents as `obl`.

289 instances of `obl` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.25078369905956.

The following 9 pairs of parts of speech are connected with `obl`: <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (266; 83% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (23; 7% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (9; 3% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (6; 2% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (3; 1% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl	color:blue
1	The	_	DET	_	_	2	det	_	_
2	NE	_	NOUN	_	_	4	nsubj	_	_
3	will	_	AUX	_	_	4	aux	_	_
4	remain	_	VERB	_	_	0	root	_	_
5	in	_	ADP	_	_	7	case	_	_
6	the	_	DET	_	_	7	det	_	_
7	CT	_	NOUN	_	_	4	obl	_	_
8	and	_	CCONJ	_	_	12	cc	_	_
9	no	_	DET	_	_	10	det	_	_
10	recovery	_	NOUN	_	_	12	nsubj	_	_
11	will	_	AUX	_	_	12	aux	_	_
12	take	_	VERB	_	_	4	conj	_	_
13	place	_	NOUN	_	_	12	obj	_	SpaceAfter=No
14	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 20 obl	color:blue
1	The	_	DET	_	_	4	det	_	_
2	HATS	_	PROPN	_	_	4	nmod	_	SpaceAfter=No
3	-	_	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	GUI	_	NOUN	_	_	6	nsubj	_	_
5	shall	_	AUX	_	_	6	aux	_	_
6	provide	_	VERB	_	_	0	root	_	_
7	any	_	DET	_	_	9	det	_	_
8	other	_	ADJ	_	_	9	amod	_	_
9	details	_	NOUN	_	_	6	obj	_	_
10	related	_	VERB	_	_	9	acl	_	_
11	to	_	ADP	_	_	13	case	_	_
12	the	_	DET	_	_	13	det	_	_
13	failure	_	NOUN	_	_	10	obl	_	_
14	that	_	PRON	_	_	16	nsubj	_	_
15	are	_	AUX	_	_	16	cop	_	_
16	available	_	ADJ	_	_	9	acl:relcl	_	_
17	from	_	ADP	_	_	20	case	_	_
18	the	_	DET	_	_	20	det	_	_
19	Host	_	NOUN	_	_	20	compound	_	_
20	OS	_	NOUN	_	_	16	obl	_	SpaceAfter=No
21	.	_	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 3 obl	color:blue
1	As	_	ADP	_	_	3	case	_	_
2	a	_	DET	_	_	3	det	_	_
3	goal	_	NOUN	_	_	14	obl	_	SpaceAfter=No
4	,	_	PUNCT	_	_	3	punct	_	_
5	the	_	DET	_	_	7	det	_	_
6	spare	_	ADJ	_	_	7	amod	_	_
7	memory	_	NOUN	_	_	14	nsubj	_	_
8	and	_	CCONJ	_	_	9	cc	_	_
9	throughput	_	NOUN	_	_	7	conj	_	_
10	should	_	AUX	_	_	14	aux	_	_
11	both	_	DET	_	_	7	det	_	_
12	be	_	AUX	_	_	14	cop	_	_
13	75	_	NUM	_	_	14	nummod	_	_
14	percent	_	NOUN	_	_	0	root	_	SpaceAfter=No
15	.	_	PUNCT	_	_	14	punct	_	_

~~~


