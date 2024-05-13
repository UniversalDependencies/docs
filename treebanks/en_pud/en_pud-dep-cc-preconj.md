---
layout: base
title:  'Statistics of cc:preconj in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-cc.html">cc</a></tt>.

11 nodes (0%) are attached to their parents as `cc:preconj`.

11 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27272727272727.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 36% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 27% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 18% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 9% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Both	both	CCONJ	CC	_	3	cc:preconj	3:cc:preconj	_
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
3	time	time	NOUN	NN	Number=Sing	14	nsubj:pass	14:nsubj:pass	_
4	and	and	CCONJ	CC	_	6	cc	6:cc	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	_
6	sequence	sequence	NOUN	NN	Number=Sing	3	conj	3:conj:and|14:nsubj:pass	_
7	of	of	ADP	IN	_	8	case	8:case	_
8	events	event	NOUN	NNS	Number=Plur	6	nmod	6:nmod:of	_
9	of	of	ADP	IN	_	11	case	11:case	_
10	this	this	DET	DT	Number=Sing|PronType=Dem	11	det	11:det	_
11	incident	incident	NOUN	NN	Number=Sing	3	nmod	3:nmod:of	_
12	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	14	aux:pass	14:aux:pass	_
13	vigorously	vigorously	ADV	RB	_	14	advmod	14:advmod	_
14	discussed	discuss	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	14:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 cc:preconj	color:blue
1	In	in	SCONJ	IN	_	2	mark	2:mark	_
2	addressing	address	VERB	VBG	VerbForm=Ger	14	advcl	14:advcl:in	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
4	Cabinet	cabinet	NOUN	NN	Number=Sing	2	obj	2:obj	_
5	shortly	shortly	ADV	RB	_	9	advmod	9:advmod	_
6	after	after	SCONJ	IN	_	9	mark	9:mark	_
7	German	German	ADJ	JJ	Degree=Pos	8	amod	8:amod	Proper=True
8	forces	force	NOUN	NNS	Number=Plur	9	nsubj	9:nsubj	_
9	crossed	cross	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	2	advcl	2:advcl:after	_
10	the	the	DET	DT	Definite=Def|PronType=Art	11	det	11:det	_
11	border	border	NOUN	NN	Number=Sing	9	obj	9:obj	SpaceAfter=No
12	,	,	PUNCT	,	_	14	punct	14:punct	_
13	Chamberlain	Chamberlain	PROPN	NNP	Number=Sing	14	nsubj	14:nsubj	_
14	placed	place	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
15	blame	blame	NOUN	NN	Number=Sing	14	obj	14:obj	_
16	on	on	ADP	IN	_	18	case	18:case	_
17	both	both	CCONJ	CC	_	18	cc:preconj	18:cc:preconj	_
18	Germany	Germany	PROPN	NNP	Number=Sing	14	obl	14:obl:on	_
19	and	and	CCONJ	CC	_	20	cc	20:cc	_
20	Austria	Austria	PROPN	NNP	Number=Sing	18	conj	14:obl:on|18:conj:and	SpaceAfter=No
21	.	.	PUNCT	.	_	14	punct	14:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc:preconj	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	3:nsubj:pass	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	foretold	foretell	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
4	that	that	SCONJ	IN	_	8	mark	8:mark	_
5	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	8:nsubj|18:nsubj	_
6	would	would	AUX	MD	VerbForm=Fin	8	aux	8:aux	_
7	either	either	CCONJ	CC	_	8	cc:preconj	8:cc:preconj	_
8	die	die	VERB	VB	VerbForm=Inf	3	ccomp	3:ccomp	_
9	of	of	ADP	IN	_	11	case	11:case	_
10	old	old	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
11	age	age	NOUN	NN	Number=Sing	8	obl	8:obl:of	_
12	after	after	ADP	IN	_	15	case	15:case	_
13	an	a	DET	DT	Definite=Ind|PronType=Art	15	det	15:det	_
14	uneventful	uneventful	ADJ	JJ	Degree=Pos	15	amod	15:amod	_
15	life	life	NOUN	NN	Number=Sing	8	obl	8:obl:after	SpaceAfter=No
16	,	,	PUNCT	,	_	18	punct	18:punct	_
17	or	or	CCONJ	CC	_	18	cc	18:cc	_
18	die	die	VERB	VB	VerbForm=Inf	8	conj	3:ccomp|8:conj:or	_
19	young	young	ADJ	JJ	Degree=Pos	5	acl	5:acl	_
20	in	in	ADP	IN	_	22	case	22:case	_
21	a	a	DET	DT	Definite=Ind|PronType=Art	22	det	22:det	_
22	battlefield	battlefield	NOUN	NN	Number=Sing	18	obl	18:obl:in	_
23	and	and	CCONJ	CC	_	24	cc	24:cc	_
24	gain	gain	VERB	VB	VerbForm=Inf	18	conj	18:conj:and	_
25	immortality	immortality	NOUN	NN	Number=Sing	24	obj	24:obj	_
26	through	through	ADP	IN	_	27	case	27:case	_
27	poetry	poetry	NOUN	NN	Number=Sing	24	obl	24:obl:through	SpaceAfter=No
28	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


