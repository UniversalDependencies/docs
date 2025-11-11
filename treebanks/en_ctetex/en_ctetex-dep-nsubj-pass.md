---
layout: base
title:  'Statistics of nsubj:pass in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_ctetex-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_ctetex-dep-nsubj-outer.html">nsubj:outer</a></tt>.

105 nodes (1%) are attached to their parents as `nsubj:pass`.

105 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.31428571428571.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (88; 84% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt> (8; 8% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (3; 3% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 nsubj:pass	color:blue
1	Bridge	bridge	NOUN	_	Number=Sing	3	compound	_	SpaceAfter=No
2	-	-	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	level	level	NOUN	_	Number=Sing	4	compound	_	_
4	security	security	NOUN	_	Number=Sing	10	nsubj:pass	_	_
5	of	of	ADP	_	_	7	case	_	_
6	the	the	DET	_	_	7	det	_	_
7	user	user	NOUN	_	Number=Sing	4	nmod	_	_
8	shall	shall	AUX	_	_	10	aux	_	_
9	be	be	AUX	_	Number=Sing|Tense=Pres	10	aux:pass	_	_
10	applied	apply	VERB	_	Tense=Past	0	root	_	_
11	automatically	automatically	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	This	this	PRON	_	_	4	nsubj:pass	_	_
2	must	must	AUX	_	_	4	aux	_	_
3	be	be	AUX	_	Number=Sing|Tense=Pres	4	aux:pass	_	_
4	done	done	VERB	_	_	0	root	_	_
5	simultaneously	simultaneously	ADV	_	_	4	advmod	_	_
6	with	with	ADP	_	_	9	case	_	_
7	the	the	DET	_	_	9	det	_	_
8	output	output	NOUN	_	Number=Sing	9	compound	_	_
9	stream	stream	NOUN	_	Number=Sing	4	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	_
11	but	but	CCONJ	_	_	17	cc	_	_
12	not	not	PART	_	_	13	advmod	_	_
13	necessarily	necessarily	ADV	_	_	4	advmod	_	_
14	over	over	ADP	_	_	17	case	_	_
15	the	the	DET	_	_	17	det	_	_
16	same	same	ADJ	_	_	17	amod	_	_
17	interconnects	interconnect	NOUN	_	Number=Plur	9	conj	_	SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 18 nsubj:pass	color:blue
1	The	the	DET	_	_	2	det	_	_
2	train	train	NOUN	_	Number=Sing	4	nsubj	_	_
3	shall	shall	AUX	_	_	4	aux:pass	_	_
4	leave	leave	VERB	_	_	0	root	_	_
5	Partial	partial	ADJ	_	_	6	amod	_	_
6	Supervision	supervision	NOUN	_	Number=Sing	4	obj	_	_
7	when	when	SCONJ	_	_	13	mark	_	_
8	the	the	DET	_	_	10	det	_	_
9	trainborne	trainborne	ADJ	_	_	10	amod	_	_
10	equipment	equipment	NOUN	_	Number=Sing	13	nsubj	_	_
11	is	be	AUX	_	Number=Sing|Tense=Pres	13	cop	_	_
12	not	not	PART	_	_	13	advmod	_	_
13	operative	operative	ADJ	_	_	4	advcl	_	_
14	any	any	ADV	_	_	15	advmod	_	_
15	longer	longer	ADV	_	_	13	advmod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	20	punct	_	_
17	when	when	SCONJ	_	_	20	mark	_	_
18	Shunting	Shunting	PROPN	_	_	20	nsubj:pass	_	_
19	is	be	AUX	_	Number=Sing|Tense=Pres	20	aux:pass	_	_
20	selected	select	VERB	_	Tense=Past	13	conj	_	_
21	or	or	CCONJ	_	_	26	cc	_	_
22	when	when	SCONJ	_	_	26	mark	_	_
23	Full	full	ADJ	_	_	24	amod	_	_
24	Supervision	supervision	NOUN	_	Number=Sing	26	nsubj	_	_
25	is	be	AUX	_	Number=Sing|Tense=Pres	26	cop	_	_
26	available	available	ADJ	_	_	13	conj	_	SpaceAfter=No
27	.	.	PUNCT	_	_	4	punct	_	_
28	(	(	PUNCT	_	_	29	punct	_	SpaceAfter=No
29	M	m	ADJ	_	_	4	advmod	_	SpaceAfter=No
30	)	)	PUNCT	_	_	29	punct	_	_

~~~


