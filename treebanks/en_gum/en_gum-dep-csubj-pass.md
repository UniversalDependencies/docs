---
layout: base
title:  'Statistics of csubj:pass in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-csubj.html">csubj</a></tt>.

9 nodes (0%) are attached to their parents as `csubj:pass`.

7 instances of `csubj:pass` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.77777777777778.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (7; 78% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 22% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj:pass	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	Discourse=elaboration:10->9|Entity=(event-18)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	recommend	recommend	VERB	VBN	Tense=Past|Typo=Yes|VerbForm=Part	0	root	_	_
4	that	that	SCONJ	IN	_	6	mark	_	_
5	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	6	nsubj	_	Entity=(event-18(person-5)
6	use	use	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	csubj:pass	_	_
7	short	short	ADJ	JJ	Degree=Pos	8	amod	_	Entity=(abstract-19
8	words	word	NOUN	NNS	Number=Plur	6	obj	_	Entity=event-18)abstract-19)
9	since	since	SCONJ	IN	_	13	mark	_	Discourse=justify:11->10
10	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	13	nsubj:pass	_	Entity=(abstract-19)
11	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	13	aux:pass	_	_
12	commonly	commonly	ADV	RB	_	13	advmod	_	_
13	used	use	VERB	VBN	Tense=Past|VerbForm=Part	3	advcl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 15 csubj:pass	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	Discourse=elaboration:86->83|Entity=(abstract-111)
2	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	been	be	AUX	VBN	Tense=Past|VerbForm=Part	4	aux:pass	_	_
4	speculated	speculate	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
5	that	that	SCONJ	IN	_	15	mark	_	_
6	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	Entity=(abstract-111(person-103)
7	might	might	AUX	MD	VerbForm=Fin	15	aux	_	_
8	have	have	AUX	VB	VerbForm=Inf	15	aux	_	_
9	been	be	AUX	VBN	Tense=Past|VerbForm=Part	15	aux:pass	_	_
10	du	du	PROPN	NNP	Number=Sing	15	nmod:poss	_	Entity=(person-86(person-66
11	Motel	Motel	PROPN	NNP	Number=Sing	10	flat	_	SpaceAfter=No
12	's	's	PART	POS	_	10	case	_	Entity=person-66)
13	"	''	PUNCT	``	_	15	punct	_	SpaceAfter=No
14	supposed	supposed	VERB	VBN	Tense=Past|VerbForm=Part	15	amod	_	_
15	fiancé	fiancé	NOUN	NN	Number=Sing	4	csubj:pass	_	SpaceAfter=No
16	"	''	PUNCT	''	_	15	punct	_	Entity=person-86)
17	at	at	ADP	IN	_	19	case	_	_
18	the	the	DET	DT	Definite=Def|PronType=Art	19	det	_	Entity=(time-112
19	time	time	NOUN	NN	Number=Sing	15	nmod	_	Entity=abstract-111)time-112)
20	(	(	PUNCT	-LRB-	_	23	punct	_	Discourse=background:87->86|SpaceAfter=No
21	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	23	nsubj	_	Entity=(person-66)
22	ultimately	ultimately	ADV	RB	_	23	advmod	_	_
23	married	marry	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	15	parataxis	_	_
24	someone	someone	NOUN	NN	Number=Sing	23	obj	_	Entity=(person-113
25	else	else	ADJ	JJ	Degree=Pos	24	amod	_	Entity=person-113)|SpaceAfter=No
26	)	)	PUNCT	-RRB-	_	23	punct	_	SpaceAfter=No
27	,	,	PUNCT	,	_	34	punct	_	_
28	but	but	CCONJ	CC	_	34	cc	_	Discourse=contrast:88->86
29	no	no	DET	DT	Polarity=Neg	31	det	_	_
30	clear	clear	ADJ	JJ	Degree=Pos	31	amod	_	Entity=(abstract-114
31	evidence	evidence	NOUN	NN	Number=Sing	34	nsubj:pass	_	Entity=abstract-114)
32	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	aux	_	_
33	been	be	AUX	VBN	Tense=Past|VerbForm=Part	34	aux:pass	_	_
34	found	find	VERB	VBN	Tense=Past|VerbForm=Part	4	conj	_	_
35	supporting	support	VERB	VBG	VerbForm=Ger	31	acl	_	Discourse=elaboration:89->88
36	this	this	DET	DT	Number=Sing|PronType=Dem	37	det	_	Entity=(abstract-111
37	conjecture	conjecture	NOUN	NN	Number=Sing	35	obj	_	Entity=abstract-111)|SpaceAfter=No
38	.	.	PUNCT	.	_	4	punct	_	_

~~~


