---
layout: base
title:  'Statistics of obl:tmod in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_pud-dep-obl-npmod.html">obl:npmod</a></tt>.

18 nodes (0%) are attached to their parents as `obl:tmod`.

11 instances of `obl:tmod` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44444444444444.

The following 3 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (16; 89% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 obl:tmod	color:blue
1	A	a	DET	DT	Definite=Ind|PronType=Art	3	det	3:det	_
2	keen	keen	ADJ	JJ	Degree=Pos	3	amod	3:amod	_
3	guitarist	guitarist	NOUN	NN	Number=Sing	6	dislocated	6:dislocated	SpaceAfter=No
4	,	,	PUNCT	,	_	6	punct	6:punct	_
5	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	6:nsubj	_
6	played	play	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	_
8	concert	concert	NOUN	NN	Number=Sing	6	obj	6:obj	_
9	there	there	ADV	RB	PronType=Dem	6	advmod	6:advmod	_
10	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	_
11	same	same	ADJ	JJ	Degree=Pos	12	amod	12:amod	_
12	year	year	NOUN	NN	Number=Sing	6	obl:tmod	6:obl:tmod	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 obl:tmod	color:blue
1	Our	our	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	_
2	cellphones	cellphone	NOUN	NNS	Number=Plur	6	nsubj	6:nsubj	_
3	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
4	so	so	ADV	RB	_	5	advmod	5:advmod	_
5	much	much	ADV	RB	_	6	advmod	6:advmod	_
6	more	more	ADJ	JJR	Degree=Cmp	0	root	0:root	_
7	than	than	ADP	IN	_	8	case	8:case	_
8	phones	phone	NOUN	NNS	Number=Plur	6	obl	6:obl:than	_
9	these	this	DET	DT	Number=Plur|PronType=Dem	10	det	10:det	_
10	days	day	NOUN	NNS	Number=Plur	6	obl:tmod	6:obl:tmod	SpaceAfter=No
11	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 obl:tmod	color:blue
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


