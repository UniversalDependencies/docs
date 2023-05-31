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
1	A	a	DET	DT	Definite=Ind|PronType=Art	2	det	2:det	_
2	witness	witness	NOUN	NN	Number=Sing	3	nsubj	3:nsubj	_
3	told	tell	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	police	police	NOUN	NNS	Number=Plur	3	iobj	3:iobj	_
5	that	that	SCONJ	IN	_	9	mark	9:mark	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	_
7	victim	victim	NOUN	NN	Number=Sing	9	nsubj	9:nsubj	_
8	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	9	aux	9:aux	_
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
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	_
2	man	man	NOUN	NN	Number=Sing	3	nsubj	3:nsubj	_
3	told	tell	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	iobj	3:iobj	_
5	that	that	SCONJ	IN	_	13	mark	13:mark	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	_
7	war	war	NOUN	NN	Number=Sing	13	nsubj	13:nsubj	_
8	between	between	ADP	IN	_	11	case	11:case	_
9	the	the	DET	DT	Definite=Def|PronType=Art	11	det	11:det	_
10	two	two	NUM	CD	NumType=Card	11	nummod	11:nummod	_
11	universes	universe	NOUN	NNS	Number=Plur	7	nmod	7:nmod:between	_
12	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	13:aux	_
13	coming	come	VERB	VBG	Tense=Pres|VerbForm=Part	3	ccomp	3:ccomp	SpaceAfter=No
14	,	,	PUNCT	,	_	13	punct	13:punct	_
15	as	as	SCONJ	IN	_	20	mark	20:mark	_
16	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	nsubj	20:nsubj	_
17	and	and	CCONJ	CC	_	18	cc	18:cc	_
18	Walter	Walter	PROPN	NNP	Number=Sing	16	conj	16:conj:and|20:nsubj	_
19	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	20	aux	20:aux	_
20	predicted	predict	VERB	VBN	Tense=Past|VerbForm=Part	13	advcl	13:advcl:as	SpaceAfter=No
21	;	;	PUNCT	:	_	3	punct	3:punct	_
22	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	23:nsubj	_
23	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	3:parataxis	_
24	for	for	ADP	IN	_	26	case	26:case	_
25	this	this	DET	DT	Number=Sing|PronType=Dem	26	det	26:det	_
26	reason	reason	NOUN	NN	Number=Sing	23	obl	23:obl:for	_
27	that	that	SCONJ	IN	_	34	mark	34:mark	_
28	Olivia	Olivia	PROPN	NNP	Number=Sing	34	nsubj:pass	34:nsubj:pass	SpaceAfter=No
29	,	,	PUNCT	,	_	28	punct	28:punct	_
30	among	among	ADP	IN	_	31	case	31:case	_
31	others	other	NOUN	NNS	Number=Plur	28	nmod	28:nmod:among	SpaceAfter=No
32	,	,	PUNCT	,	_	28	punct	28:punct	_
33	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	34	aux:pass	34:aux:pass	_
34	trained	train	VERB	VBN	Tense=Past|VerbForm=Part	26	acl	26:acl:that	_
35	as	as	ADP	IN	_	37	case	37:case	_
36	a	a	DET	DT	Definite=Ind|PronType=Art	37	det	37:det	_
37	child	child	NOUN	NN	Number=Sing	34	obl	34:obl:as	SpaceAfter=No
38	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	_
2	company	company	NOUN	NN	Number=Sing	3	nsubj	3:nsubj	_
3	told	tell	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	_
5	BBC	BBC	PROPN	NNP	Number=Sing	3	iobj	3:iobj	_
6	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	10:nsubj	_
7	would	would	AUX	MD	VerbForm=Fin	10	aux	10:aux	_
8	be	be	AUX	VB	VerbForm=Inf	10	cop	10:cop	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	_
10	responsibility	responsibility	NOUN	NN	Number=Sing	3	ccomp	3:ccomp	_
11	of	of	ADP	IN	_	14	case	14:case	_
12	each	each	DET	DT	_	14	det	14:det	_
13	airline	airline	NOUN	NN	Number=Sing	14	compound	14:compound	_
14	brand	brand	NOUN	NN	Number=Sing	10	nmod	10:nmod:of	_
15	to	to	PART	TO	_	16	mark	16:mark	_
16	decide	decide	VERB	VB	VerbForm=Inf	10	acl	10:acl:to	_
17	whether	whether	SCONJ	IN	_	19	mark	19:mark	_
18	to	to	PART	TO	_	19	mark	19:mark	_
19	charge	charge	VERB	VB	VerbForm=Inf	16	xcomp	16:xcomp	_
20	passengers	passenger	NOUN	NNS	Number=Plur	19	iobj	19:iobj	_
21	an	a	DET	DT	Definite=Ind|PronType=Art	23	det	23:det	_
22	access	access	NOUN	NN	Number=Sing	23	compound	23:compound	_
23	fee	fee	NOUN	NN	Number=Sing	19	obj	19:obj	SpaceAfter=No
24	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


