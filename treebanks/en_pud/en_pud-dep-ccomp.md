---
layout: base
title:  'Statistics of ccomp in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `ccomp`

This relation is universal.

135 nodes (1%) are attached to their parents as `ccomp`.

129 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.71111111111111.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (91; 67% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (14; 10% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (13; 10% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (8; 6% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (5; 4% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	_	SpaceAfter=No
2	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	not	not	PART	RB	Polarity=Neg	2	advmod	_	_
4	what	what	PRON	WP	PronType=Int	6	obj	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
6	need	need	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
7	in	in	ADP	IN	_	9	case	_	_
8	our	we	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	country	country	NOUN	NN	Number=Sing	6	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	2	punct	_	_
11	folks	folk	NOUN	NNS	Number=Plur	2	vocative	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 15 ccomp	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	_	_
2	CGI	CGI	PROPN	NNP	Number=Sing	3	compound	_	_
3	Mestre	Mestre	PROPN	NNP	Number=Sing	5	nsubj	_	_
4	have	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	stated	state	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
6	in	in	ADP	IN	_	8	case	_	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	_	_
8	note	note	NOUN	NN	Number=Sing	5	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	5	punct	_	_
10	that	that	SCONJ	IN	_	15	mark	_	_
11	there	there	PRON	EX	_	15	expl	_	_
12	will	will	AUX	MD	VerbForm=Fin	15	aux	_	_
13	be	be	AUX	VB	VerbForm=Inf	15	cop	_	_
14	no	no	DET	DT	Polarity=Neg	15	det	_	_
15	rise	rise	NOUN	NN	Number=Sing	5	ccomp	_	_
16	in	in	ADP	IN	_	17	case	_	_
17	VAT	vat	NOUN	NN	Number=Sing	15	nmod	_	SpaceAfter=No
18	,	,	PUNCT	,	_	15	punct	_	_
19	for	for	ADP	IN	_	20	case	_	_
20	2017	2017	NUM	CD	NumType=Card	15	nmod	_	_
21	at	at	ADV	RB	_	22	case	_	_
22	least	least	ADV	RBS	Degree=Sup	20	nmod	_	SpaceAfter=No
23	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 ccomp	color:blue
1	"	"	PUNCT	``	_	4	punct	_	SpaceAfter=No
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	SpaceAfter=No
3	'm	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	going	go	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	_	_
5	to	to	ADP	IN	_	6	case	_	_
6	jail	jail	NOUN	NN	Number=Sing	4	obl	_	_
7	either	either	DET	DT	_	8	det	_	_
8	way	way	NOUN	NN	Number=Sing	4	obl:npmod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	4	punct	_	_
10	hope	hope	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
11	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
12	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	cop	_	_
13	worth	worth	ADJ	JJ	Degree=Pos	10	ccomp	_	_
14	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	obj	_	SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	_	SpaceAfter=No
16	"	"	PUNCT	''	_	4	punct	_	_

~~~


