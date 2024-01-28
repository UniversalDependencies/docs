---
layout: base
title:  'Statistics of aux in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="en_pud-dep-aux-pass.html">aux:pass</a></tt>.

410 nodes (2%) are attached to their parents as `aux`.

409 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66585365853659.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (371; 90% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (19; 5% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (13; 3% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	"	"	PUNCT	``	_	4	punct	4:punct	SpaceAfter=No
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	_
3	'm	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	going	go	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	_
5	to	to	ADP	IN	_	6	case	6:case	_
6	jail	jail	NOUN	NN	Number=Sing	4	obl	4:obl:to	_
7	either	either	DET	DT	PronType=Ind	8	det	8:det	_
8	way	way	NOUN	NN	Number=Sing	4	obl:npmod	4:obl:npmod	SpaceAfter=No
9	,	,	PUNCT	,	_	4	punct	4:punct	_
10	hope	hope	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	4:parataxis	_
11	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	nsubj	13:nsubj	_
12	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	cop	13:cop	_
13	worth	worth	ADJ	JJ	Degree=Pos	10	ccomp	10:ccomp	_
14	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	4:punct	SpaceAfter=No
16	"	"	PUNCT	''	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux	color:blue
1	Not	not	ADV	RB	Polarity=Neg	2	advmod	2:advmod	_
2	all	all	DET	DT	PronType=Tot	3	det	3:det	_
3	transformations	transformation	NOUN	NNS	Number=Plur	9	nsubj	9:nsubj	_
4	in	in	ADP	IN	_	6	case	6:case	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	_
6	region	region	NOUN	NN	Number=Sing	3	nmod	3:nmod:in	_
7	have	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	9:aux	_
8	been	be	AUX	VBN	Tense=Past|VerbForm=Part	9	cop	9:cop	_
9	successful	successful	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux	color:blue
1	Today	today	NOUN	NN	Number=Sing	8	obl:tmod	8:obl:tmod	SpaceAfter=No
2	,	,	PUNCT	,	_	8	punct	8:punct	_
3	Khanzir	Khanzir	PROPN	NNP	Number=Sing	8	nsubj	8:nsubj	_
4	may	may	AUX	MD	VerbForm=Fin	8	aux	8:aux	_
5	be	be	AUX	VB	VerbForm=Inf	8	cop	8:cop	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	_
7	lonely	lonely	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	pig	pig	NOUN	NN	Number=Sing	0	root	0:root	SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	8:punct	_
10	but	but	CCONJ	CC	_	15	cc	15:cc	_
11	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	15:nsubj	_
12	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	15:cop	SpaceAfter=No
13	n’t	not	ADV	RB	Polarity=Neg	15	advmod	15:advmod	_
14	always	always	ADV	RB	_	15	advmod	15:advmod	_
15	alone	alone	ADJ	JJ	Degree=Pos	8	conj	8:conj:but	SpaceAfter=No
16	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


