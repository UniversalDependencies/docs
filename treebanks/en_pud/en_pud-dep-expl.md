---
layout: base
title:  'Statistics of expl in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `expl`

This relation is universal.

62 nodes (0%) are attached to their parents as `expl`.

60 instances of `expl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75806451612903.

The following 6 pairs of parts of speech are connected with `expl`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (40; 65% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (10; 16% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (5; 8% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (5; 8% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	Still	still	ADV	RB	_	4	advmod	4:advmod	SpaceAfter=No
2	,	,	PUNCT	,	_	4	punct	4:punct	_
3	there	there	PRON	EX	_	4	expl	4:expl	_
4	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	questions	question	NOUN	NNS	Number=Plur	4	nsubj	4:nsubj	_
6	left	leave	VERB	VBN	Tense=Past|VerbForm=Part	5	acl	5:acl	_
7	unanswered	unanswered	ADJ	JJ	Degree=Pos	6	xcomp	6:xcomp	SpaceAfter=No
8	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	difficult	difficult	ADJ	JJ	Degree=Pos	0	root	0:root	_
4	to	to	PART	TO	_	5	mark	5:mark	_
5	think	think	VERB	VB	VerbForm=Inf	3	csubj	3:csubj	_
6	that	that	SCONJ	IN	_	8	mark	8:mark	_
7	Italy	Italy	PROPN	NNP	Number=Sing	8	nsubj	8:nsubj	_
8	has	have	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	5:ccomp	_
9	fewer	few	ADJ	JJR	Degree=Cmp	10	amod	10:amod	_
10	km	km	NOUN	NNS	Number=Plur	8	obj	8:obj	_
11	of	of	ADP	IN	_	13	case	13:case	_
12	underground	underground	ADJ	JJ	Degree=Pos	13	amod	13:amod	_
13	line	line	NOUN	NN	Number=Sing	10	nmod	10:nmod:of	_
14	than	than	ADP	IN	_	15	case	15:case	_
15	Madrid	Madrid	PROPN	NNP	Number=Sing	9	obl	9:obl:than	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl	color:blue
1	"	"	PUNCT	``	_	4	punct	4:punct	SpaceAfter=No
2	There	there	PRON	EX	_	4	expl	4:expl	_
3	will	will	AUX	MD	VerbForm=Fin	4	aux	4:aux	_
4	be	be	AUX	VB	VerbForm=Inf	0	root	0:root	_
5	protests	protest	NOUN	NNS	Number=Plur	4	nsubj	4:nsubj	_
6	and	and	CCONJ	CC	_	8	cc	8:cc	_
7	other	other	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	things	thing	NOUN	NNS	Number=Plur	5	conj	4:nsubj|5:conj:and	SpaceAfter=No
9	,	,	PUNCT	,	_	4	punct	4:punct	_
10	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	nsubj:pass	14:nsubj:pass	_
11	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:pass	14:aux:pass	_
12	all	all	ADV	RB	_	14	advmod	14:advmod	_
13	already	already	ADV	RB	_	14	advmod	14:advmod	_
14	planned	plan	VERB	VBN	Tense=Past|VerbForm=Part	4	parataxis	4:parataxis	SpaceAfter=No
15	,	,	PUNCT	,	_	4	punct	4:punct	SpaceAfter=No
16	"	"	PUNCT	''	_	4	punct	4:punct	_
17	the	the	DET	DT	Definite=Def|PronType=Art	18	det	18:det	_
18	opposition	opposition	NOUN	NN	Number=Sing	19	nsubj	19:nsubj	_
19	told	tell	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	4	parataxis	4:parataxis	_
20	El	El	PROPN	NNP	Number=Sing	21	compound	21:compound	_
21	Mundo	Mundo	PROPN	NNP	Number=Sing	19	obj	19:obj	SpaceAfter=No
22	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


