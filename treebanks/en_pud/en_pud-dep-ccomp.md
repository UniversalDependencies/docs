---
layout: base
title:  'Statistics of ccomp in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `ccomp`

This relation is universal.

134 nodes (1%) are attached to their parents as `ccomp`.

128 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.73134328358209.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (92; 69% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (14; 10% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (13; 10% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (8; 6% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	2:nsubj	_
2	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	not	not	PART	RB	Polarity=Neg	2	advmod	2:advmod	_
4	what	what	PRON	WP	PronType=Int	6	obj	6:obj	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	6:nsubj	_
6	need	need	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	2:ccomp	_
7	in	in	ADP	IN	_	9	case	9:case	_
8	our	our	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	_
9	country	country	NOUN	NN	Number=Sing	6	obl	6:obl:in	SpaceAfter=No
10	,	,	PUNCT	,	_	2	punct	2:punct	_
11	folks	folk	NOUN	NNS	Number=Plur	2	vocative	2:vocative	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 15 ccomp	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
2	CGI	CGI	PROPN	NNP	Abbr=Yes|Number=Sing	3	compound	3:compound	_
3	Mestre	Mestre	PROPN	NNP	Number=Sing	5	nsubj	5:nsubj	_
4	have	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
5	stated	state	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
6	in	in	ADP	IN	_	8	case	8:case	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	_
8	note	note	NOUN	NN	Number=Sing	5	obl	5:obl:in	SpaceAfter=No
9	,	,	PUNCT	,	_	5	punct	5:punct	_
10	that	that	SCONJ	IN	_	15	mark	15:mark	_
11	there	there	PRON	EX	_	15	expl	15:expl	_
12	will	will	AUX	MD	VerbForm=Fin	15	aux	15:aux	_
13	be	be	AUX	VB	VerbForm=Inf	15	cop	15:cop	_
14	no	no	DET	DT	PronType=Neg	15	det	15:det	_
15	rise	rise	NOUN	NN	Number=Sing	5	ccomp	5:ccomp	_
16	in	in	ADP	IN	_	17	case	17:case	_
17	VAT	vat	NOUN	NN	Number=Sing	15	nmod	15:nmod:in	SpaceAfter=No
18	,	,	PUNCT	,	_	15	punct	15:punct	_
19	for	for	ADP	IN	_	20	case	20:case	_
20	2017	2017	NUM	CD	NumForm=Digit|NumType=Card	15	nmod	15:nmod:for	_
21	at	at	ADV	RB	_	22	case	22:case	_
22	least	least	ADV	RBS	Degree=Sup	20	nmod	20:nmod:at	SpaceAfter=No
23	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 ccomp	color:blue
1	"	"	PUNCT	``	_	4	punct	4:punct	SpaceAfter=No
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	_
3	'm	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	going	go	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	_
5	to	to	ADP	IN	_	6	case	6:case	_
6	jail	jail	NOUN	NN	Number=Sing	4	obl	4:obl:to	_
7	either	either	DET	DT	PronType=Ind	8	det	8:det	_
8	way	way	NOUN	NN	Number=Sing	4	obl:unmarked	4:obl:unmarked	SpaceAfter=No
9	,	,	PUNCT	,	_	4	punct	4:punct	_
10	hope	hope	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	4:parataxis	_
11	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	nsubj	13:nsubj	_
12	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	cop	13:cop	_
13	worth	worth	ADJ	JJ	Degree=Pos	10	ccomp	10:ccomp	_
14	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	4:punct	SpaceAfter=No
16	"	"	PUNCT	''	_	4	punct	4:punct	_

~~~


