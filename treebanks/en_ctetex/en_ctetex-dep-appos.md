---
layout: base
title:  'Statistics of appos in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `appos`

This relation is universal.

121 nodes (1%) are attached to their parents as `appos`.

121 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.33884297520661.

The following 12 pairs of parts of speech are connected with `appos`: <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (48; 40% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (45; 37% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (12; 10% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (5; 4% instances), <tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Continuous	continuous	ADJ	_	_	2	amod	_	_
2	BIT	bit	NOUN	_	Number=Sing	7	nsubj	_	_
3	shall	shall	AUX	_	_	7	aux	_	_
4	[	[	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	SRS093	SRS093	PROPN	_	_	2	appos	_	SpaceAfter=No
6	]	]	PUNCT	_	_	5	punct	_	_
7	execute	execute	VERB	_	_	0	root	_	_
8	on	on	ADP	_	_	12	case	_	_
9	the	the	DET	_	_	12	det	_	_
10	FCP	fcp	NOUN	_	Number=Sing	12	nmod	_	_
11	virtual	virtual	ADJ	_	_	12	amod	_	_
12	group	group	NOUN	_	Number=Sing	7	obl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	Report	report	VERB	_	_	0	root	_	_
2	compliance	compliance	NOUN	_	Number=Sing	1	obj	_	_
3	on	on	ADP	_	_	5	case	_	_
4	a	a	DET	_	_	5	det	_	_
5	permit	permit	NOUN	_	Number=Sing	2	nmod	_	_
6	(	(	PUNCT	_	_	8	punct	_	SpaceAfter=No
7	not	not	PART	_	_	8	advmod	_	_
8	wells	well	NOUN	_	Number=Plur	5	appos	_	SpaceAfter=No
9	)	)	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 21 appos	color:blue
1	The	the	DET	_	_	2	det	_	_
2	TCS	TCS	PROPN	_	_	4	nsubj	_	_
3	shall	shall	AUX	_	_	4	aux	_	_
4	allow	allow	VERB	_	_	0	root	_	_
5	the	the	DET	_	_	6	det	_	_
6	operator	operator	NOUN	_	Number=Sing	4	obj	_	_
7	to	to	PART	_	_	8	mark	_	_
8	set	set	VERB	_	_	4	xcomp	_	_
9	the	the	DET	_	_	12	det	_	_
10	LOL	lol	NOUN	_	Number=Sing	11	compound	_	_
11	delay	delay	NOUN	_	Number=Sing	12	nmod	_	_
12	timer	timer	NOUN	_	Number=Sing	8	obj	_	SpaceAfter=No
13	(	(	PUNCT	_	_	14	punct	_	SpaceAfter=No
14	s	s	X	_	_	12	dep	_	SpaceAfter=No
15	)	)	PUNCT	_	_	14	punct	_	_
16	during	during	ADP	_	_	18	case	_	_
17	mission	mission	NOUN	_	Number=Sing	18	compound	_	_
18	planning	planning	NOUN	_	Number=Sing	8	obl	_	SpaceAfter=No
19	.	.	PUNCT	_	_	4	punct	_	_
20	[	[	PUNCT	_	_	21	punct	_	SpaceAfter=No
21	SSS075	SSS075	PROPN	_	_	4	appos	_	SpaceAfter=No
22	]	]	PUNCT	_	_	21	punct	_	_

~~~


