---
layout: base
title:  'Statistics of aux:pass in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-aux.html">aux</a></tt>.

274 nodes (1%) are attached to their parents as `aux:pass`.

274 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22262773722628.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (273; 100% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
2	new	new	ADJ	JJ	Degree=Pos	3	amod	3:amod	_
3	spending	spending	NOUN	NN	Number=Sing	5	nsubj:pass	5:nsubj:pass	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	5:aux:pass	_
5	fueled	fuel	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
6	by	by	ADP	IN	_	11	case	11:case	_
7	Clinton	Clinton	PROPN	NNP	Number=Sing	11	nmod:poss	11:nmod:poss	SpaceAfter=No
8	’s	’s	PART	POS	_	7	case	7:case	_
9	large	large	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
10	bank	bank	NOUN	NN	Number=Sing	11	compound	11:compound	_
11	account	account	NOUN	NN	Number=Sing	5	obl	5:obl:by	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 27 aux:pass	color:blue
1	News	news	NOUN	NN	Number=Sing	5	nsubj	5:nsubj	_
2	of	of	ADP	IN	_	4	case	4:case	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
4	retreat	retreat	NOUN	NN	Number=Sing	1	nmod	1:nmod:of	_
5	came	come	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
6	as	as	ADP	IN	_	9	case	9:case	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	_
8	great	great	ADJ	JJ	Degree=Pos	9	amod	9:amod	_
9	shock	shock	NOUN	NN	Number=Sing	5	obl	5:obl:as	_
10	to	to	ADP	IN	_	13	case	13:case	_
11	Danish	Danish	ADJ	JJ	Degree=Pos	13	amod	13:amod	Proper=True
12	public	public	ADJ	JJ	Degree=Pos	13	amod	13:amod	_
13	opinion	opinion	NOUN	NN	Number=Sing	5	obl	5:obl:to|16:nsubj	_
14	which	which	PRON	WDT	PronType=Rel	16	nsubj	13:ref	_
15	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	16	aux	16:aux	_
16	considered	consider	VERB	VBN	Tense=Past|VerbForm=Part	13	acl:relcl	13:acl:relcl	_
17	the	the	DET	DT	Definite=Def|PronType=Art	18	det	18:det	_
18	Danevirke	Danevirke	PROPN	NNP	Number=Sing	16	obj	16:obj|21:nsubj:xsubj	_
19	to	to	PART	TO	_	21	mark	21:mark	_
20	be	be	AUX	VB	VerbForm=Inf	21	cop	21:cop	_
21	impregnable	impregnable	ADJ	JJ	Degree=Pos	16	xcomp	16:xcomp	SpaceAfter=No
22	,	,	PUNCT	,	_	29	punct	29:punct	_
23	and	and	CCONJ	CC	_	29	cc	29:cc	_
24	General	general	NOUN	NN	Number=Sing	29	nsubj:pass	29:nsubj:pass	_
25	de	de	PROPN	NNP	Number=Sing	24	flat	24:flat	_
26	Meza	Meza	PROPN	NNP	Number=Sing	24	flat	24:flat	_
27	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	29	aux:pass	29:aux:pass	_
28	promptly	promptly	ADV	RB	_	29	advmod	29:advmod	_
29	relieved	relieved	ADJ	JJ	Degree=Pos	5	conj	5:conj:and	_
30	of	of	ADP	IN	_	32	case	32:case	_
31	his	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	32	nmod:poss	32:nmod:poss	_
32	command	command	NOUN	NN	Number=Sing	29	obl	29:obl:of	SpaceAfter=No
33	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


