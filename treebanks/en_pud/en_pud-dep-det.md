---
layout: base
title:  'Statistics of det in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="en_pud-dep-det-predet.html">det:predet</a></tt>.

2047 nodes (10%) are attached to their parents as `det`.

2044 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.63165608207132.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1779; 87% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (229; 11% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (24; 1% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="en_pud-pos-X.html">X</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	_
2	worked	work	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	for	for	ADP	IN	_	5	case	5:case	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	_
5	BBC	BBC	PROPN	NNP	Number=Sing	2	obl	2:obl:for	_
6	for	for	ADP	IN	_	8	case	8:case	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	_
8	decade	decade	NOUN	NN	Number=Sing	2	obl	2:obl:for	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	spotted	spot	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	4	det	4:det	_
4	few	few	ADJ	JJ	Degree=Pos	2	obj	2:obj	SpaceAfter=No
5	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


