---
layout: base
title:  'Statistics of csubj:pass in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-csubj.html">csubj</a></tt>.

10 nodes (0%) are attached to their parents as `csubj:pass`.

7 instances of `csubj:pass` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.6.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (8; 80% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj:pass	color:blue
1	It	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	Discourse=elaboration:10->9|Entity=(event-18)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	recommend	recommed	VERB	VBN	Tense=Past|Typo=Yes|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	that	that	SCONJ	IN	_	6	mark	6:mark	_
5	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	6:nsubj	Entity=(event-18(person-5)
6	use	use	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	csubj:pass	3:csubj:pass	_
7	short	short	ADJ	JJ	Degree=Pos	8	amod	8:amod	Entity=(abstract-19
8	words	word	NOUN	NNS	Number=Plur	6	obj	6:obj	Entity=event-18)abstract-19)
9	since	since	SCONJ	IN	_	13	mark	13:mark	Discourse=justify:11->10
10	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	13	nsubj:pass	13:nsubj:pass	Entity=(abstract-19)
11	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	aux:pass	13:aux:pass	_
12	commonly	commonly	ADV	RB	Degree=Pos	13	advmod	13:advmod	_
13	used	use	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	3	advcl	3:advcl:since	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 15 csubj:pass	color:blue
1	It	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	Discourse=elaboration:86->83|Entity=(abstract-111)
2	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
3	been	be	AUX	VBN	Tense=Past|VerbForm=Part	4	aux:pass	4:aux:pass	_
4	speculated	speculate	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	that	that	SCONJ	IN	_	15	mark	15:mark	_
6	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	15:nsubj	Entity=(abstract-111(person-103)
7	might	might	AUX	MD	VerbForm=Fin	15	aux	15:aux	_
8	have	have	AUX	VB	VerbForm=Inf	15	aux	15:aux	_
9	been	be	AUX	VBN	Tense=Past|VerbForm=Part	15	cop	15:cop	_
10	du	du	PROPN	NNP	Number=Sing	15	nmod:poss	15:nmod:poss	Entity=(person-86(person-66
11	Motel	Motel	PROPN	NNP	Number=Sing	10	flat	10:flat	_
12	's	's	PART	POS	_	10	case	10:case	Entity=person-66)
13	"	''	PUNCT	``	_	15	punct	15:punct	SpaceAfter=No
14	supposed	suppose	VERB	VBN	Tense=Past|VerbForm=Part	15	amod	15:amod	_
15	fiancé	fiancé	NOUN	NN	Number=Sing	4	csubj:pass	4:csubj:pass	SpaceAfter=No
16	"	''	PUNCT	''	_	15	punct	15:punct	Entity=person-86)
17	at	at	ADP	IN	_	19	case	19:case	_
18	the	the	DET	DT	Definite=Def|PronType=Art	19	det	19:det	Entity=(time-112
19	time	time	NOUN	NN	Number=Sing	15	nmod	15:nmod:at	Entity=abstract-111)time-112)
20	(	(	PUNCT	-LRB-	_	23	punct	23:punct	Discourse=background:87->86|SpaceAfter=No
21	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	23	nsubj	23:nsubj	Entity=(person-66)
22	ultimately	ultimately	ADV	RB	Degree=Pos	23	advmod	23:advmod	_
23	married	marry	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	15	parataxis	15:parataxis	_
24	someone	someone	NOUN	NN	Number=Sing	23	obj	23:obj	Entity=(person-113
25	else	else	ADV	RB	Degree=Pos	24	advmod	24:advmod	Entity=person-113)|SpaceAfter=No
26	)	)	PUNCT	-RRB-	_	23	punct	23:punct	SpaceAfter=No
27	,	,	PUNCT	,	_	34	punct	34:punct	_
28	but	but	CCONJ	CC	_	34	cc	34:cc	Discourse=contrast:88->86
29	no	no	DET	DT	Polarity=Neg	31	det	31:det	_
30	clear	clear	ADJ	JJ	Degree=Pos	31	amod	31:amod	Entity=(abstract-114
31	evidence	evidence	NOUN	NN	Number=Sing	34	nsubj:pass	34:nsubj:pass	Entity=abstract-114)
32	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	aux	34:aux	_
33	been	be	AUX	VBN	Tense=Past|VerbForm=Part	34	aux:pass	34:aux:pass	_
34	found	find	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	conj	4:conj:but	_
35	supporting	support	VERB	VBG	VerbForm=Ger	31	acl	31:acl	Discourse=elaboration:89->88
36	this	this	DET	DT	Number=Sing|PronType=Dem	37	det	37:det	Entity=(abstract-111
37	conjecture	conjecture	NOUN	NN	Number=Sing	35	obj	35:obj	Entity=abstract-111)|SpaceAfter=No
38	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


