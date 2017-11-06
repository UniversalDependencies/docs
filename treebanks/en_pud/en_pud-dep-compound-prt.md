---
layout: base
title:  'Statistics of compound:prt in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-compound.html">compound</a></tt>.

70 nodes (0%) are attached to their parents as `compound:prt`.

70 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14285714285714.

The following 3 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADP.html">ADP</a></tt> (62; 89% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (7; 10% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound:prt	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	contains	contain	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	_	_
4	tiny	tiny	ADJ	JJ	Degree=Pos	5	amod	_	_
5	lagoon	lagoon	NOUN	NN	Number=Sing	2	obj	_	SpaceAfter=No
6	,	,	PUNCT	,	_	11	punct	_	_
7	which	which	PRON	WDT	PronType=Rel	11	nsubj	_	_
8	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
9	all	all	ADV	RB	_	11	advmod	_	_
10	but	but	ADV	RB	_	9	fixed	_	_
11	dried	dry	VERB	VBN	Tense=Past|VerbForm=Part	5	acl:relcl	_	_
12	up	up	ADP	RP	_	11	compound:prt	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:prt	color:blue
1	However	however	ADV	RB	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	6	punct	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	friendship	friendship	NOUN	NN	Number=Sing	6	nsubj	_	_
5	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	fallen	fall	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
7	apart	apart	ADV	RP	_	6	compound:prt	_	_
8	due	due	ADP	IN	_	11	case	_	_
9	to	to	ADP	IN	_	8	fixed	_	_
10	unofficial	unofficial	ADJ	JJ	Degree=Pos	11	amod	_	_
11	collaborations	collaboration	NOUN	NNS	Number=Plur	6	obl	_	_
12	between	between	ADP	IN	_	14	case	_	_
13	the	the	DET	DT	Definite=Def|PronType=Art	14	det	_	_
14	two	two	NUM	CD	NumType=Card	11	nmod	_	SpaceAfter=No
15	,	,	PUNCT	,	_	18	punct	_	_
16	which	which	PRON	WDT	PronType=Rel	18	nsubj	_	_
17	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	aux	_	_
18	given	give	VERB	VBN	Tense=Past|VerbForm=Part	11	acl:relcl	_	_
19	rise	rise	NOUN	NN	Number=Sing	18	obj	_	_
20	to	to	ADP	IN	_	22	case	_	_
21	legal	legal	ADJ	JJ	Degree=Pos	22	amod	_	_
22	disputes	dispute	NOUN	NNS	Number=Plur	19	nmod	_	SpaceAfter=No
23	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	Mr	mr	PROPN	NN	Number=Sing	3	nsubj	_	_
2	Osborne	Osborne	PROPN	NNP	Number=Sing	1	flat	_	_
3	signed	sign	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	up	up	PART	RP	_	3	compound:prt	_	_
5	with	with	ADP	IN	_	9	case	_	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
7	US	US	PROPN	NNP	Number=Sing	9	compound	_	_
8	speakers	speaker	NOUN	NNS	Number=Plur	9	compound	_	_
9	agency	agency	NOUN	NN	Number=Sing	3	obl	_	_
10	after	after	SCONJ	IN	_	12	mark	_	_
11	being	be	AUX	VBG	VerbForm=Ger	12	aux:pass	_	_
12	sacked	sack	VERB	VBN	Tense=Past|VerbForm=Part	3	advcl	_	_
13	in	in	ADP	IN	_	14	case	_	_
14	July	July	PROPN	NNP	Number=Sing	12	obl	_	SpaceAfter=No
15	.	.	PUNCT	.	_	3	punct	_	_

~~~


