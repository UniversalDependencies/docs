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

The following 7 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 27% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 18% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 18% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 9% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 9% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 9% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Both	both	CCONJ	CC	_	3	cc:preconj	_	_
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	_	_
3	time	time	NOUN	NN	Number=Sing	14	nsubj:pass	_	_
4	and	and	CCONJ	CC	_	6	cc	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	_
6	sequence	sequence	NOUN	NN	Number=Sing	3	conj	_	_
7	of	of	ADP	IN	_	8	case	_	_
8	events	event	NOUN	NNS	Number=Plur	6	nmod	_	_
9	of	of	ADP	IN	_	11	case	_	_
10	this	this	DET	DT	Number=Sing|PronType=Dem	11	det	_	_
11	incident	incident	NOUN	NN	Number=Sing	3	nmod	_	_
12	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	14	aux:pass	_	_
13	vigorously	vigorously	ADV	RB	_	14	advmod	_	_
14	discussed	discuss	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc:preconj	color:blue
1	Consonant	consonant	NOUN	NN	Number=Sing	2	compound	_	_
2	gradation	gradation	NOUN	NN	Number=Sing	5	nsubj	_	_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	_	_
5	feature	feature	NOUN	NN	Number=Sing	0	root	_	_
6	in	in	ADP	IN	_	12	case	_	_
7	both	both	CCONJ	CC	_	8	cc:preconj	_	_
8	Finnish	Finnish	PROPN	NNP	Number=Sing	12	compound	_	_
9	and	and	CCONJ	CC	_	11	cc	_	_
10	northern	northern	ADJ	JJ	Degree=Pos	11	amod	_	_
11	Sami	Sami	PROPN	NNP	Number=Sing	8	conj	_	_
12	dialects	dialect	NOUN	NNS	Number=Plur	5	nmod	_	SpaceAfter=No
13	,	,	PUNCT	,	_	18	punct	_	_
14	but	but	CCONJ	CC	_	18	cc	_	_
15	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	_
16	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	_
17	not	not	PART	RB	Polarity=Neg	18	advmod	_	_
18	present	present	ADJ	JJ	Degree=Pos	5	conj	_	_
19	in	in	ADP	IN	_	21	case	_	_
20	south	south	ADJ	JJ	Degree=Pos	21	amod	_	_
21	Sami	Sami	PROPN	NNP	Number=Sing	18	obl	_	SpaceAfter=No
22	,	,	PUNCT	,	_	21	punct	_	_
23	which	which	PRON	WDT	PronType=Rel	25	nsubj:pass	_	_
24	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux:pass	_	_
25	considered	consider	VERB	VBN	Tense=Past|VerbForm=Part	21	acl:relcl	_	_
26	to	to	PART	TO	_	27	mark	_	_
27	have	have	VERB	VB	VerbForm=Inf	25	xcomp	_	_
28	a	a	DET	DT	Definite=Ind|PronType=Art	31	det	_	_
29	different	different	ADJ	JJ	Degree=Pos	31	amod	_	_
30	language	language	NOUN	NN	Number=Sing	31	compound	_	_
31	history	history	NOUN	NN	Number=Sing	27	obj	_	SpaceAfter=No
32	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc:preconj	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	foretold	foretell	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
4	that	that	SCONJ	IN	_	8	mark	_	_
5	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
6	would	would	AUX	MD	VerbForm=Fin	8	aux	_	_
7	either	either	CCONJ	CC	_	8	cc:preconj	_	_
8	die	die	VERB	VB	VerbForm=Inf	3	ccomp	_	_
9	of	of	ADP	IN	_	11	case	_	_
10	old	old	ADJ	JJ	Degree=Pos	11	amod	_	_
11	age	age	NOUN	NN	Number=Sing	8	obl	_	_
12	after	after	ADP	IN	_	15	case	_	_
13	an	a	DET	DT	Definite=Ind|PronType=Art	15	det	_	_
14	uneventful	uneventful	ADJ	JJ	Degree=Pos	15	amod	_	_
15	life	life	NOUN	NN	Number=Sing	8	obl	_	SpaceAfter=No
16	,	,	PUNCT	,	_	18	punct	_	_
17	or	or	CCONJ	CC	_	18	cc	_	_
18	die	die	VERB	VB	VerbForm=Inf	8	conj	_	_
19	young	young	ADJ	JJ	Degree=Pos	5	acl	_	_
20	in	in	ADP	IN	_	22	case	_	_
21	a	a	DET	DT	Definite=Ind|PronType=Art	22	det	_	_
22	battlefield	battlefield	NOUN	NN	Number=Sing	18	obl	_	_
23	and	and	CCONJ	CC	_	24	cc	_	_
24	gain	gain	VERB	VB	VerbForm=Inf	18	conj	_	_
25	immortality	immortality	NOUN	NN	Number=Sing	24	obj	_	_
26	through	through	ADP	IN	_	27	case	_	_
27	poetry	poetry	NOUN	NN	Number=Sing	24	obl	_	SpaceAfter=No
28	.	.	PUNCT	.	_	3	punct	_	_

~~~


