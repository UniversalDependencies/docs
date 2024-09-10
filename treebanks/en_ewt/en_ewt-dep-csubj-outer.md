---
layout: base
title:  'Statistics of csubj:outer in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="en_ewt-dep-csubj-pass.html">csubj:pass</a></tt>.

9 nodes (0%) are attached to their parents as `csubj:outer`.

9 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.55555555555556.

The following 2 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (8; 89% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 csubj:outer	color:blue
1	What	what	PRON	WP	PronType=Int	4	obj	4:obj	_
2	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	4	nsubj	4:nsubj	_
3	are	be	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	doing	do	VERB	VBG	Tense=Pres|VerbForm=Part	6	csubj:outer	6:csubj:outer	_
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
6	creating	create	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	_
8	service	service	NOUN	NN	Number=Sing	6	obj	6:obj	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 10 csubj:outer	color:blue
1	America	America	PROPN	NNP	Number=Sing	2	nsubj	2:nsubj	_
2	cried	cry	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	wolf	wolf	NOUN	NN	Number=Sing	2	obj	2:obj	_
4	in	in	ADP	IN	_	5	case	5:case	_
5	Iraq	Iraq	PROPN	NNP	Number=Sing	2	obl	2:obl:in	SpaceAfter=No
6	,	,	PUNCT	,	_	21	punct	21:punct	_
7	and	and	CCONJ	CC	_	21	cc	21:cc	_
8	what	what	PRON	WP	PronType=Int	10	nsubj	10:nsubj	_
9	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
10	scary	scary	ADJ	JJ	Degree=Pos	21	csubj:outer	21:csubj:outer	_
11	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	cop	21:cop	_
12	that	that	SCONJ	IN	_	21	mark	21:mark	_
13	sooner	soon	ADV	RBR	Degree=Cmp	21	advmod	21:advmod	_
14	or	or	CCONJ	CC	_	15	cc	15:cc	_
15	later	late	ADV	RBR	Degree=Cmp	13	conj	13:conj:or|21:advmod	SpaceAfter=No
16	,	,	PUNCT	,	_	13	punct	13:punct	_
17	that	that	DET	DT	Number=Sing|PronType=Dem	18	det	18:det	_
18	wolf	wolf	NOUN	NN	Number=Sing	21	nsubj	21:nsubj	_
19	will	will	AUX	MD	VerbForm=Fin	21	aux	21:aux	_
20	probably	probably	ADV	RB	_	21	advmod	21:advmod	_
21	get	get	VERB	VB	VerbForm=Inf	2	conj	2:conj:and	_
22	us	we	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	21	obj	21:obj	SpaceAfter=No
23	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


