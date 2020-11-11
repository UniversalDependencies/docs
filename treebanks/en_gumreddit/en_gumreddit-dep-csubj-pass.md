---
layout: base
title:  'Statistics of csubj:pass in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 10 csubj:pass	color:blue
1	_	_	ADV	RB	_	5	advmod	_	Discourse=joint:14->4|Lem=*LOWER*|Len=4|SpaceAfter=No
2	_	_	PUNCT	,	_	1	punct	_	Lem=_|Len=1
3	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	Entity=(abstract-16)|Lem=_|Len=2
4	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	Lem=be|Len=2
5	_	_	ADJ	JJ	Degree=Pos	0	root	_	Lem=_|Len=11
6	_	_	PART	TO	_	7	mark	_	Entity=(abstract-16|Lem=_|Len=2
7	_	_	VERB	VB	VerbForm=Inf	5	csubj	_	Lem=_|Len=4
8	_	_	SCONJ	IN	_	19	mark	_	Lem=_|Len=4
9	_	_	PROPN	NNP	Number=Sing	10	obl:npmod	_	Entity=(event-17(person-18)|Lem=_|Len=3
10	_	_	VERB	VBG	VerbForm=Ger	19	csubj:pass	_	Lem=go|Len=5
11	_	_	ADP	IN	_	13	case	_	Lem=_|Len=7
12	_	_	DET	DT	Definite=Def|PronType=Art	13	det	_	Entity=(object-19|Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	10	obl	_	Entity=object-19)|Lem=_|Len=4
14	_	_	ADP	IN	_	17	case	_	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	17	det	_	Entity=(place-4|Lem=_|Len=3
16	_	_	PROPN	NNP	Number=Sing	17	compound	_	Lem=_|Len=7
17	_	_	PROPN	NNP	Number=Sing	10	obl	_	Entity=event-17)place-4)|Lem=_|Len=5
18	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	19	aux:pass	_	Lem=be|Len=3
19	_	_	VERB	VBN	Tense=Past|VerbForm=Part	7	ccomp	_	Lem=say|Len=4
20	_	_	PART	TO	_	25	mark	_	Lem=_|Len=2
21	_	_	AUX	VB	VerbForm=Inf	25	cop	_	Lem=_|Len=2
22	_	_	PUNCT	``	_	25	punct	_	Lem=''|Len=1|SpaceAfter=No
23	_	_	DET	DT	Definite=Def|PronType=Art	25	det	_	Entity=(time-20|Lem=_|Len=3
24	_	_	ADJ	JJ	Degree=Pos|NumType=Ord	25	amod	_	Lem=_|Len=5
25	_	_	NOUN	NN	Number=Sing	19	xcomp	_	Lem=_|Len=4
26	_	_	ADP	IN	_	28	case	_	Lem=_|Len=2
27	_	_	NOUN	NN	Number=Sing	28	compound	_	Entity=(abstract-21(person-22)|Lem=*LOWER*|Len=7
28	_	_	NOUN	NN	Number=Sing	25	nmod	_	Entity=time-20)abstract-21)|Lem=*LOWER*|Len=7|SpaceAfter=No
29	_	_	PUNCT	''	_	25	punct	_	Entity=abstract-16)|Lem=''|Len=1|SpaceAfter=No
30	_	_	PUNCT	,	_	43	punct	_	Lem=_|Len=1
31	_	_	CCONJ	CC	_	43	cc	_	Discourse=antithesis:15->14|Lem=_|Len=3
32	_	_	SCONJ	IN	_	34	mark	_	Discourse=condition:16->19|Lem=_|Len=2
33	_	_	PRON	EX	_	34	expl	_	Lem=_|Len=5
34	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	43	advcl	_	Lem=be|Len=4
35	_	_	ADJ	JJ	Degree=Pos	36	amod	_	Entity=(organization-10|Lem=_|Len=5
36	_	_	NOUN	NNS	Number=Plur	34	nsubj	_	Entity=organization-10)|Lem=company|Len=9
37	_	_	VERB	VBG	VerbForm=Ger	36	acl	_	Discourse=elaboration:17->16|Lem=use|Len=5
38	_	_	PROPN	NNP	Number=Sing	37	obj	_	Entity=(object-23|Lem=_|Len=4
39	_	_	PROPN	NNP	Number=Sing	38	flat	_	Entity=object-23)|Lem=_|Len=4|SpaceAfter=No
40	_	_	PUNCT	,	_	34	punct	_	Lem=_|Len=1
41	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	43	nsubj	_	Discourse=attribution:18->19|Entity=(person-24)|Lem=_|Len=3
42	_	_	AUX	MD	VerbForm=Fin	43	aux	_	Lem=_|Len=5
43	_	_	VERB	VB	VerbForm=Inf	19	conj	_	Lem=_|Len=5
44	_	_	PRON	DT	Number=Sing|PronType=Dem	47	nsubj	_	Discourse=same-unit:19->15|Entity=(event-17)|Lem=_|Len=4
45	_	_	AUX	MD	VerbForm=Fin	47	aux	_	Lem=_|Len=5
46	_	_	AUX	VB	VerbForm=Inf	47	aux	_	Lem=_|Len=4
47	_	_	VERB	VBN	Tense=Past|VerbForm=Part	43	ccomp	_	Lem=happen|Len=8
48	_	_	ADP	IN	_	47	obl	_	Lem=_|Len=6
49	_	_	CCONJ	CC	_	52	cc	_	Discourse=result:20->15|Lem=_|Len=3
50	_	_	PRON	EX	_	52	expl	_	Lem=_|Len=5
51	_	_	AUX	MD	VerbForm=Fin	52	aux	_	Lem=_|Len=5
52	_	_	VERB	VB	VerbForm=Inf	47	conj	_	Lem=_|Len=2
53	_	_	NOUN	NNS	Number=Plur	52	nsubj	_	Entity=(abstract-25|Lem=protocol|Len=9
54	_	_	ADP	IN	_	55	case	_	Lem=_|Len=3
55	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	53	nmod	_	Entity=(event-17)abstract-25)|Lem=_|Len=2|SpaceAfter=No
56	_	_	PUNCT	.	_	5	punct	_	Lem=_|Len=1

~~~


