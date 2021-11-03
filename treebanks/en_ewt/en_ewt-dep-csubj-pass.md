---
layout: base
title:  'Statistics of csubj:pass in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-csubj.html">csubj</a></tt>.

6 nodes (0%) are attached to their parents as `csubj:pass`.

4 instances of `csubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.33333333333333.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (5; 83% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj:pass	color:blue
1	What	what	PRON	WP	PronType=Int	2	nsubj	2:nsubj	_
2	followed	follow	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	csubj:pass	7:csubj:pass	_
3	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	_
4	next	next	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
5	day	day	NOUN	NN	Number=Sing	2	obl:tmod	2:obl:tmod	_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	7:aux:pass	_
7	considered	consider	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
8	by	by	ADP	IN	_	10	case	10:case	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	_
10	governor	governor	NOUN	NN	Number=Sing	7	obl	7:obl:by	_
11	and	and	CCONJ	CC	_	12	cc	12:cc	_
12	Dunn	Dunn	PROPN	NNP	Number=Sing	10	conj	7:obl:by|10:conj:and	_
13	to	to	PART	TO	_	17	mark	17:mark	_
14	be	be	AUX	VB	VerbForm=Inf	17	cop	17:cop	_
15	the	the	DET	DT	Definite=Def|PronType=Art	17	det	17:det	_
16	pivotal	pivotal	ADJ	JJ	Degree=Pos	17	amod	17:amod	_
17	moment	moment	NOUN	NN	Number=Sing	7	xcomp	7:xcomp	_
18	of	of	ADP	IN	_	21	case	21:case	_
19	the	the	DET	DT	Definite=Def|PronType=Art	21	det	21:det	_
20	energy	energy	NOUN	NN	Number=Sing	21	compound	21:compound	_
21	crisis	crisis	NOUN	NN	Number=Sing	17	nmod	17:nmod:of	SpaceAfter=No
22	.	.	PUNCT	.	_	7	punct	7:punct	_

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
19	his	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	21	nmod:poss	21:nmod:poss	_
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


