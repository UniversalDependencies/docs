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
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 20 obl	color:blue
1	The	the	DET	_	_	4	det	_	_
2	HATS	HATS	PROPN	_	_	4	nmod	_	SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	GUI	gui	NOUN	_	Number=Sing	6	nsubj	_	_
5	shall	shall	AUX	_	_	6	aux	_	_
6	provide	provide	VERB	_	_	0	root	_	_
7	any	any	DET	_	_	9	det	_	_
8	other	other	ADJ	_	_	9	amod	_	_
9	details	detail	NOUN	_	Number=Plur	6	obj	_	_
10	related	relate	VERB	_	Tense=Past	9	acl	_	_
11	to	to	ADP	_	_	13	case	_	_
12	the	the	DET	_	_	13	det	_	_
13	failure	failure	NOUN	_	Number=Sing	10	obl	_	_
14	that	that	PRON	_	_	16	nsubj	_	_
15	are	be	AUX	_	Number=Plur|Tense=Pres	16	cop	_	_
16	available	available	ADJ	_	_	9	acl:relcl	_	_
17	from	from	ADP	_	_	20	case	_	_
18	the	the	DET	_	_	20	det	_	_
19	Host	host	NOUN	_	Number=Sing	20	compound	_	_
20	OS	os	NOUN	_	Number=Sing	16	obl	_	SpaceAfter=No
21	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 3 obl	color:blue
1	As	as	ADP	_	_	3	case	_	_
2	a	a	DET	_	_	3	det	_	_
3	goal	goal	NOUN	_	Number=Sing	14	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	the	the	DET	_	_	7	det	_	_
6	spare	spare	ADJ	_	_	7	amod	_	_
7	memory	memory	NOUN	_	Number=Sing	14	nsubj	_	_
8	and	and	CCONJ	_	_	9	cc	_	_
9	throughput	throughput	NOUN	_	Number=Sing	7	conj	_	_
10	should	should	AUX	_	_	14	aux	_	_
11	both	both	DET	_	_	7	det	_	_
12	be	be	AUX	_	Number=Sing|Tense=Pres	14	cop	_	_
13	75	75	NUM	_	_	14	nummod	_	_
14	percent	percent	NOUN	_	Number=Sing	0	root	_	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


