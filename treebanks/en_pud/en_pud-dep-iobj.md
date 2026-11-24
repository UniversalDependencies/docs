---
layout: base
title:  'Statistics of iobj in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `iobj`

This relation is universal.

23 nodes (0%) are attached to their parents as `iobj`.

23 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78260869565217.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (10; 43% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (8; 35% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (5; 22% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	A	a	DET	DT	Definite=Ind|PronType=Art	2	det	2:det	_
2	witness	witness	NOUN	NN	Number=Sing	3	nsubj	3:nsubj	_
3	told	tell	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	police	police	NOUN	NNS	Number=Plur	3	iobj	3:iobj	_
5	that	that	SCONJ	IN	_	9	mark	9:mark	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	_
7	victim	victim	NOUN	NN	Number=Sing	9	nsubj	9:nsubj	_
8	had	have	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux	9:aux	_
9	attacked	attack	VERB	VBN	Tense=Past|VerbForm=Part	3	ccomp	3:ccomp	_
10	the	the	DET	DT	Definite=Def|PronType=Art	11	det	11:det	_
11	suspect	suspect	NOUN	NN	Number=Sing	9	obj	9:obj	_
12	in	in	ADP	IN	_	13	case	13:case	_
13	April	April	PROPN	NNP	Number=Sing	9	obl	9:obl:in	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	But	but	CCONJ	CC	_	3	cc	3:cc	_
2	having	have	AUX	VBG	VerbForm=Ger	3	aux	3:aux	_
3	allowed	allow	VERB	VBN	Tense=Past|VerbForm=Part	13	advcl	13:advcl	_
4	Glenda	Glenda	PROPN	NNP	Number=Sing	3	iobj	3:iobj|6:nsubj:xsubj	_
5	to	to	PART	TO	_	6	mark	6:mark	_
6	score	score	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	_
7	such	such	DET	PDT	PronType=Ind	9	det:predet	9:det:predet	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	_
9	blinder	blinder	NOUN	NN	Number=Sing	6	obj	6:obj	SpaceAfter=No
10	,	,	PUNCT	,	_	13	punct	13:punct	_
11	who	who	PRON	WP	Case=Nom|PronType=Int	13	nsubj	13:nsubj	_
12	can	can	AUX	MD	VerbForm=Fin	13	aux	13:aux	_
13	blame	blame	VERB	VB	VerbForm=Inf	0	root	0:root	_
14	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	SpaceAfter=No
15	?	?	PUNCT	.	_	13	punct	13:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	_
2	Minister	minister	NOUN	NN	Number=Sing	6	nsubj	6:nsubj	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	Defense	defense	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	_
5	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
6	allowed	allow	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
7	her	she	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	iobj	6:iobj|9:nsubj:xsubj	_
8	to	to	PART	TO	_	9	mark	9:mark	_
9	remain	remain	VERB	VB	VerbForm=Inf	6	xcomp	6:xcomp	_
10	General	general	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
11	Secretary	secretary	NOUN	NN	Number=Sing	9	xcomp	9:xcomp	_
12	of	of	ADP	IN	_	14	case	14:case	_
13	the	the	DET	DT	Definite=Def|PronType=Art	14	det	14:det	_
14	party	party	NOUN	NN	Number=Sing	11	nmod	11:nmod:of	_
15	for	for	ADP	IN	_	16	case	16:case	_
16	now	now	ADV	RB	PronType=Dem	9	obl	9:obl:for	SpaceAfter=No
17	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


