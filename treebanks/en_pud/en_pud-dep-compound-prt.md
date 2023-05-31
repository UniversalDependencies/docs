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
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	_
2	contains	contain	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	_
4	tiny	tiny	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
5	lagoon	lagoon	NOUN	NN	Number=Sing	2	obj	2:obj|11:nsubj	SpaceAfter=No
6	,	,	PUNCT	,	_	11	punct	11:punct	_
7	which	which	PRON	WDT	PronType=Rel	11	nsubj	5:ref	_
8	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	11:aux	_
9	all	all	ADV	RB	_	11	advmod	11:advmod	_
10	but	but	ADV	RB	_	9	fixed	9:fixed	_
11	dried	dry	VERB	VBN	Tense=Past|VerbForm=Part	5	acl:relcl	5:acl:relcl	_
12	up	up	ADP	RP	_	11	compound:prt	11:compound:prt	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:prt	color:blue
1	However	however	ADV	RB	_	6	advmod	6:advmod	SpaceAfter=No
2	,	,	PUNCT	,	_	6	punct	6:punct	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
4	friendship	friendship	NOUN	NN	Number=Sing	6	nsubj	6:nsubj	_
5	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
6	fallen	fall	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
7	apart	apart	ADV	RP	_	6	compound:prt	6:compound:prt	_
8	due	due	ADP	IN	_	11	case	11:case	_
9	to	to	ADP	IN	_	8	fixed	8:fixed	_
10	unofficial	unofficial	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
11	collaborations	collaboration	NOUN	NNS	Number=Plur	6	obl	6:obl:due_to|18:nsubj	_
12	between	between	ADP	IN	_	14	case	14:case	_
13	the	the	DET	DT	Definite=Def|PronType=Art	14	det	14:det	_
14	two	two	NUM	CD	NumType=Card	11	nmod	11:nmod:between	SpaceAfter=No
15	,	,	PUNCT	,	_	18	punct	18:punct	_
16	which	which	PRON	WDT	PronType=Rel	18	nsubj	11:ref	_
17	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	aux	18:aux	_
18	given	give	VERB	VBN	Tense=Past|VerbForm=Part	11	acl:relcl	11:acl:relcl	_
19	rise	rise	NOUN	NN	Number=Sing	18	obj	18:obj	_
20	to	to	ADP	IN	_	22	case	22:case	_
21	legal	legal	ADJ	JJ	Degree=Pos	22	amod	22:amod	_
22	disputes	dispute	NOUN	NNS	Number=Plur	19	nmod	19:nmod:to	SpaceAfter=No
23	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	Mr	Mr	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj	_
2	Osborne	Osborne	PROPN	NNP	Number=Sing	1	flat	1:flat	_
3	signed	sign	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	up	up	PART	RP	_	3	compound:prt	3:compound:prt	_
5	with	with	ADP	IN	_	9	case	9:case	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	_
7	US	US	PROPN	NNP	Number=Sing	9	compound	9:compound	_
8	speakers	speaker	NOUN	NNS	Number=Plur	9	compound	9:compound	_
9	agency	agency	NOUN	NN	Number=Sing	3	obl	3:obl:with	_
10	after	after	SCONJ	IN	_	12	mark	12:mark	_
11	being	be	AUX	VBG	VerbForm=Ger	12	aux:pass	12:aux:pass	_
12	sacked	sack	VERB	VBN	Tense=Past|VerbForm=Part	3	advcl	3:advcl:after	_
13	in	in	ADP	IN	_	14	case	14:case	_
14	July	July	PROPN	NNP	Number=Sing	12	obl	12:obl:in	SpaceAfter=No
15	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


