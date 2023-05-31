---
layout: base
title:  'Statistics of csubj:pass in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="en_ewt-dep-csubj-outer.html">csubj:outer</a></tt>.

8 nodes (0%) are attached to their parents as `csubj:pass`.

5 instances of `csubj:pass` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.75.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (7; 88% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 18 csubj:pass	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
3	often	often	ADV	RB	_	4	advmod	4:advmod	_
4	said	say	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	that	that	SCONJ	IN	_	18	mark	18:mark	_
6	politicians	politician	NOUN	NNS	Number=Plur	18	nsubj	18:nsubj	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	8:punct	_
8	diplomats	diplomat	NOUN	NNS	Number=Plur	6	conj	6:conj:and|18:nsubj	_
9	and	and	CCONJ	CC	_	12	cc	12:cc	_
10	perhaps	perhaps	ADV	RB	_	12	advmod	12:advmod	_
11	also	also	ADV	RB	_	12	advmod	12:advmod	_
12	lawyers	lawyer	NOUN	NNS	Number=Plur	6	conj	6:conj:and|18:nsubj	_
13	and	and	CCONJ	CC	_	15	cc	15:cc	_
14	business	business	NOUN	NN	Number=Sing	15	compound	15:compound	_
15	people	people	NOUN	NNS	Number=Plur	12	conj	12:conj:and	_
16	must	must	AUX	MD	VerbForm=Fin	18	aux	18:aux	_
17	sometimes	sometimes	ADV	RB	_	18	advmod	18:advmod	_
18	lie	lie	VERB	VB	VerbForm=Inf	4	csubj:pass	4:csubj:pass	SpaceAfter=No
19	,	,	PUNCT	,	_	18	punct	18:punct	_
20	as	as	ADP	IN	_	21	case	21:case	_
21	part	part	NOUN	NN	Number=Sing	18	obl	18:obl:as	_
22	of	of	ADP	IN	_	25	case	25:case	_
23	their	their	PRON	PRP$	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	25	nmod:poss	25:nmod:poss	_
24	professional	professional	ADJ	JJ	Degree=Pos	25	amod	25:amod	_
25	life	life	NOUN	NN	Number=Sing	21	nmod	21:nmod:of	SpaceAfter=No
26	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 csubj:pass	color:blue
1	Finally	finally	ADV	RB	_	6	advmod	6:advmod	SpaceAfter=No
2	,	,	PUNCT	,	_	6	punct	6:punct	_
3	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	6:expl	_
4	must	must	AUX	MD	VerbForm=Fin	6	aux	6:aux	_
5	be	be	AUX	VB	VerbForm=Inf	6	aux:pass	6:aux:pass	_
6	said	say	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
7	that	that	SCONJ	IN	_	12	mark	12:mark	_
8	Stuart	Stuart	PROPN	NNP	Number=Sing	12	nsubj	12:nsubj	_
9	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
10	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	_
11	fantastic	fantastic	ADJ	JJ	Degree=Pos	12	amod	12:amod	_
12	person	person	NOUN	NN	Number=Sing	6	csubj:pass	6:csubj:pass	_
13	to	to	PART	TO	_	14	mark	14:mark	_
14	work	work	VERB	VB	VerbForm=Inf	12	acl	12:acl:to	_
15	with	with	ADP	IN	_	14	obl	14:obl	SpaceAfter=No
16	,	,	PUNCT	,	_	14	punct	14:punct	_
17	because	because	ADP	IN	_	21	case	21:case	_
18	of	of	ADP	IN	_	17	fixed	17:fixed	_
19	his	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	21	nmod:poss	21:nmod:poss	_
20	solid	solid	ADJ	JJ	Degree=Pos	21	amod	21:amod	_
21	strategies	strategy	NOUN	NNS	Number=Plur	14	obl	14:obl:because_of	_
22	and	and	CCONJ	CC	_	32	cc	32:cc	_
23	equally	equally	ADV	RB	_	32	advmod	32:advmod	_
24	as	as	ADP	IN	_	25	case	25:case	_
25	importantly	importantly	ADV	RB	_	23	obl	23:obl:as	_
26	because	because	SCONJ	IN	_	32	mark	32:mark	_
27	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	32	nsubj	32:nsubj|36:nsubj	_
28	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	32:cop	_
29	a	a	DET	DT	Definite=Ind|PronType=Art	32	det	32:det	_
30	genuinely	genuinely	ADV	RB	_	31	advmod	31:advmod	_
31	good	good	ADJ	JJ	Degree=Pos	32	amod	32:amod	_
32	person	person	NOUN	NN	Number=Sing	21	conj	14:obl:because_of|21:conj:and	_
33	and	and	CCONJ	CC	_	36	cc	36:cc	_
34	a	a	DET	DT	Definite=Ind|PronType=Art	36	det	36:det	_
35	great	great	ADJ	JJ	Degree=Pos	36	amod	36:amod	_
36	communicator	communicator	NOUN	NN	Number=Sing	32	conj	32:conj:and	SpaceAfter=No
37	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


