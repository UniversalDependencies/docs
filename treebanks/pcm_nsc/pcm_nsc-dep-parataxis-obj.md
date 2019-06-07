---
layout: base
title:  'Statistics of parataxis:obj in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `parataxis:obj`

This relation is a language-specific subtype of .
There are also 4 other language-specific subtypes of `parataxis`: <tt><a href="pcm_nsc-dep-parataxis-conj.html">parataxis:conj</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-dislocated.html">parataxis:dislocated</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

37 nodes (0%) are attached to their parents as `parataxis:obj`.

37 instances of `parataxis:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.94594594594595.

The following 8 pairs of parts of speech are connected with `parataxis:obj`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (23; 62% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (5; 14% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (2; 5% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis:obj	color:blue
1	im	im	PRON	_	_	2	nsubj	_	_
2	say	say	VERB	_	_	0	root	_	_
3	[	[	PUNCT	_	_	6	punct	_	_
4	I	I	PRON	_	_	6	nsubj	_	_
5	fit	fit	AUX	_	_	6	aux	_	_
6	stay	stay	VERB	_	_	2	parataxis:obj	_	_
7	for	for	ADP	_	_	8	case	_	_
8	here	here	ADV	_	_	6	obl:mod	_	_
9	//	//	PUNCT	_	_	6	punct	_	_
10	]	]	PUNCT	_	_	6	punct	_	_
11	//	//	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis:obj	color:blue
1	dem	dem	PRON	_	_	4	nsubj	_	_
2	go	go	AUX	_	_	4	aux	_	_
3	just	just	ADV	_	_	4	advmod	_	_
4	say	say	VERB	_	_	0	root	_	_
5	[	[	PUNCT	_	_	7	punct	_	_
6	na	na	AUX	PART	_	7	cop	_	_
7	okada	okada	NOUN	_	_	4	parataxis:obj	_	_
8	|c	|c	PUNCT	_	_	10	punct	_	_
9	na	na	AUX	PART	_	10	cop	_	_
10	so	so	ADV	_	_	7	conj:coord	_	_
11	dem	dem	PRON	_	_	13	nsubj	_	_
12	dey	dey	AUX	_	_	13	aux	_	_
13	do	do	VERB	_	_	10	ccomp:cleft	_	_
14	//	//	PUNCT	_	_	7	punct	_	_
15	]	]	PUNCT	_	_	7	punct	_	_
16	//	//	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 19 parataxis:obj	color:blue
1	#	#	PUNCT	_	_	11	punct	_	_
2	after	after	ADP	_	_	5	mark	_	_
3	dey	dey	AUX	_	_	5	aux	_	_
4	don	don	AUX	_	_	5	aux	_	_
5	drink	drink	VERB	_	_	11	advcl	_	_
6	finish	finish	VERB	_	_	5	compound:svc	_	_
7	<	<	PUNCT	_	_	5	punct	_	_
8	dem	dem	PRON	_	_	11	nsubj	_	_
9	go	go	AUX	_	_	11	aux	_	_
10	come	come	AUX	VERB	_	11	aux	_	_
11	enter	enter	VERB	_	_	0	root	_	_
12	steer	steer	NOUN	_	_	11	obj	_	_
13	say	say	VERB	_	_	11	conj:coord	_	_
14	[	[	PUNCT	_	_	19	punct	_	_
15	yes	yes	INTJ	_	_	19	discourse	_	_
16	<	<	PUNCT	_	_	15	punct	_	_
17	I	I	PRON	_	_	19	nsubj	_	_
18	don	don	AUX	_	_	19	aux	_	_
19	gallant	gallant	ADJ	_	_	13	parataxis:obj	_	_
20	now	now	ADV	_	_	19	advmod	_	_
21	//	//	PUNCT	_	_	19	punct	_	_
22	]	]	PUNCT	_	_	19	punct	_	_
23	//	//	PUNCT	_	_	11	punct	_	_

~~~


