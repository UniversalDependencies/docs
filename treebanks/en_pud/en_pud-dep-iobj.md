---
layout: base
title:  'Statistics of iobj in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `iobj`

This relation is universal.

10 nodes (0%) are attached to their parents as `iobj`.

10 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (4; 40% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (3; 30% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (3; 30% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	A	a	DET	DT	Definite=Ind|PronType=Art	2	det	_	_
2	witness	witness	NOUN	NN	Number=Sing	3	nsubj	_	_
3	told	tell	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	police	police	NOUN	NNS	Number=Plur	3	iobj	_	_
5	that	that	SCONJ	IN	_	9	mark	_	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	_	_
7	victim	victim	NOUN	NN	Number=Sing	9	nsubj	_	_
8	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	9	aux	_	_
9	attacked	attack	VERB	VBN	Tense=Past|VerbForm=Part	3	ccomp	_	_
10	the	the	DET	DT	Definite=Def|PronType=Art	11	det	_	_
11	suspect	suspect	NOUN	NN	Number=Sing	9	obj	_	_
12	in	in	ADP	IN	_	13	case	_	_
13	April	April	PROPN	NNP	Number=Sing	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	man	man	NOUN	NN	Number=Sing	3	nsubj	_	_
3	told	tell	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
5	that	that	SCONJ	IN	_	13	mark	_	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	_	_
7	war	war	NOUN	NN	Number=Sing	13	nsubj	_	_
8	between	between	ADP	IN	_	11	case	_	_
9	the	the	DET	DT	Definite=Def|PronType=Art	11	det	_	_
10	two	two	NUM	CD	NumType=Card	11	nummod	_	_
11	universes	universe	NOUN	NNS	Number=Plur	7	nmod	_	_
12	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	coming	come	VERB	VBG	Tense=Pres|VerbForm=Part	3	ccomp	_	SpaceAfter=No
14	,	,	PUNCT	,	_	13	punct	_	_
15	as	as	SCONJ	IN	_	20	mark	_	_
16	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	nsubj	_	_
17	and	and	CCONJ	CC	_	18	cc	_	_
18	Walter	Walter	PROPN	NNP	Number=Sing	16	conj	_	_
19	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	20	aux	_	_
20	predicted	predict	VERB	VBN	Tense=Past|VerbForm=Part	13	advcl	_	SpaceAfter=No
21	;	;	PUNCT	:	_	3	punct	_	_
22	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	_	_
23	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
24	for	for	ADP	IN	_	26	case	_	_
25	this	this	DET	DT	Number=Sing|PronType=Dem	26	det	_	_
26	reason	reason	NOUN	NN	Number=Sing	23	obl	_	_
27	that	that	SCONJ	IN	_	34	mark	_	_
28	Olivia	Olivia	PROPN	NNP	Number=Sing	34	nsubj:pass	_	SpaceAfter=No
29	,	,	PUNCT	,	_	28	punct	_	_
30	among	among	ADP	IN	_	31	case	_	_
31	others	other	NOUN	NNS	Number=Plur	28	nmod	_	SpaceAfter=No
32	,	,	PUNCT	,	_	28	punct	_	_
33	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	34	aux:pass	_	_
34	trained	train	VERB	VBN	Tense=Past|VerbForm=Part	26	acl	_	_
35	as	as	ADP	IN	_	37	case	_	_
36	a	a	DET	DT	Definite=Ind|PronType=Art	37	det	_	_
37	child	child	NOUN	NN	Number=Sing	34	obl	_	SpaceAfter=No
38	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	company	company	NOUN	NN	Number=Sing	3	nsubj	_	_
3	told	tell	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
5	BBC	BBC	PROPN	NNP	Number=Sing	3	iobj	_	_
6	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
7	would	would	AUX	MD	VerbForm=Fin	10	aux	_	_
8	be	be	AUX	VB	VerbForm=Inf	10	cop	_	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	_
10	responsibility	responsibility	NOUN	NN	Number=Sing	3	ccomp	_	_
11	of	of	ADP	IN	_	14	case	_	_
12	each	each	DET	DT	_	14	det	_	_
13	airline	airline	NOUN	NN	Number=Sing	14	compound	_	_
14	brand	brand	NOUN	NN	Number=Sing	10	nmod	_	_
15	to	to	PART	TO	_	16	mark	_	_
16	decide	decide	VERB	VB	VerbForm=Inf	10	acl	_	_
17	whether	whether	SCONJ	IN	_	19	mark	_	_
18	to	to	PART	TO	_	19	mark	_	_
19	charge	charge	VERB	VB	VerbForm=Inf	16	xcomp	_	_
20	passengers	passenger	NOUN	NNS	Number=Plur	19	iobj	_	_
21	an	a	DET	DT	Definite=Ind|PronType=Art	23	det	_	_
22	access	access	NOUN	NN	Number=Sing	23	compound	_	_
23	fee	fee	NOUN	NN	Number=Sing	19	obj	_	SpaceAfter=No
24	.	.	PUNCT	.	_	3	punct	_	_

~~~


