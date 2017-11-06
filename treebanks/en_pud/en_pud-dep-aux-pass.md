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

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (264; 96% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	_	_
2	new	new	ADJ	JJ	Degree=Pos	3	amod	_	_
3	spending	spending	NOUN	NN	Number=Sing	5	nsubj:pass	_	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	fueled	fuel	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
6	by	by	ADP	IN	_	11	case	_	_
7	Clinton	Clinton	PROPN	NNP	Number=Sing	11	nmod:poss	_	SpaceAfter=No
8	’s	’s	PART	POS	_	7	case	_	_
9	large	large	ADJ	JJ	Degree=Pos	11	amod	_	_
10	bank	bank	NOUN	NN	Number=Sing	11	compound	_	_
11	account	account	NOUN	NN	Number=Sing	5	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	George	George	PROPN	NNP	Number=Sing	3	nsubj:pass	_	_
2	was	be	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	appalled	appal	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
4	by	by	ADP	IN	_	5	case	_	_
5	what	what	PRON	WP	PronType=Int	3	obl	_	_
6	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	saw	see	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	acl:relcl	_	_
8	as	as	ADP	IN	_	11	case	_	_
9	their	they	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
10	loose	loose	ADJ	JJ	Degree=Pos	11	amod	_	_
11	morals	moral	NOUN	NNS	Number=Plur	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 27 aux:pass	color:blue
1	News	news	NOUN	NN	Number=Sing	5	nsubj	_	_
2	of	of	ADP	IN	_	4	case	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	retreat	retreat	NOUN	NN	Number=Sing	1	nmod	_	_
5	came	come	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
6	as	as	ADP	IN	_	9	case	_	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
8	great	great	ADJ	JJ	Degree=Pos	9	amod	_	_
9	shock	shock	NOUN	NN	Number=Sing	5	obl	_	_
10	to	to	ADP	IN	_	13	case	_	_
11	Danish	danish	ADJ	JJ	Degree=Pos	13	amod	_	Proper=True
12	public	public	ADJ	JJ	Degree=Pos	13	amod	_	_
13	opinion	opinion	NOUN	NN	Number=Sing	5	obl	_	_
14	which	which	PRON	WDT	PronType=Rel	16	nsubj	_	_
15	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	16	aux	_	_
16	considered	consider	VERB	VBN	Tense=Past|VerbForm=Part	13	acl:relcl	_	_
17	the	the	DET	DT	Definite=Def|PronType=Art	18	det	_	_
18	Danevirke	Danevirke	PROPN	NNP	Number=Sing	16	obj	_	_
19	to	to	PART	TO	_	21	mark	_	_
20	be	be	AUX	VB	VerbForm=Inf	21	cop	_	_
21	impregnable	impregnable	ADJ	JJ	Degree=Pos	16	xcomp	_	SpaceAfter=No
22	,	,	PUNCT	,	_	29	punct	_	_
23	and	and	CCONJ	CC	_	29	cc	_	_
24	General	general	NOUN	NN	Number=Sing	29	nsubj:pass	_	_
25	de	de	PROPN	NNP	Number=Sing	24	flat	_	_
26	Meza	Meza	PROPN	NNP	Number=Sing	24	flat	_	_
27	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	29	aux:pass	_	_
28	promptly	promptly	ADV	RB	_	29	advmod	_	_
29	relieved	relieved	ADJ	JJ	Degree=Pos	5	conj	_	_
30	of	of	ADP	IN	_	32	case	_	_
31	his	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	32	nmod:poss	_	_
32	command	command	NOUN	NN	Number=Sing	29	obl	_	SpaceAfter=No
33	.	.	PUNCT	.	_	5	punct	_	_

~~~


