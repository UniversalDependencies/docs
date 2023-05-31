---
layout: base
title:  'Statistics of csubj in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

27 nodes (0%) are attached to their parents as `csubj`.

19 instances of `csubj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.66666666666667.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (11; 41% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (11; 41% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (5; 19% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	difficult	difficult	ADJ	JJ	Degree=Pos	0	root	0:root	_
4	to	to	PART	TO	_	5	mark	5:mark	_
5	think	think	VERB	VB	VerbForm=Inf	3	csubj	3:csubj	_
6	that	that	SCONJ	IN	_	8	mark	8:mark	_
7	Italy	Italy	PROPN	NNP	Number=Sing	8	nsubj	8:nsubj	_
8	has	have	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	5:ccomp	_
9	fewer	fewer	ADJ	JJR	Degree=Cmp	10	amod	10:amod	_
10	km	km	NOUN	NNS	Number=Plur	8	obj	8:obj	_
11	of	of	ADP	IN	_	13	case	13:case	_
12	underground	underground	ADJ	JJ	Degree=Pos	13	amod	13:amod	_
13	line	line	NOUN	NN	Number=Sing	10	nmod	10:nmod:of	_
14	than	than	ADP	IN	_	15	case	15:case	_
15	Madrid	Madrid	PROPN	NNP	Number=Sing	9	obl	9:obl:than	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 csubj	color:blue
1	In	in	ADP	IN	_	3	case	3:case	_
2	this	this	DET	DT	Number=Sing|PronType=Dem	3	det	3:det	_
3	context	context	NOUN	NN	Number=Sing	8	obl	8:obl:in	SpaceAfter=No
4	,	,	PUNCT	,	_	8	punct	8:punct	_
5	railing	rail	VERB	VBG	VerbForm=Ger	8	csubj	8:csubj	_
6	against	against	ADP	IN	_	7	case	7:case	_
7	trade	trade	NOUN	NN	Number=Sing	5	obl	5:obl:against	_
8	makes	make	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
9	sense	sense	NOUN	NN	Number=Sing	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	his	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	_
4	dream	dream	NOUN	NN	Number=Sing	0	root	0:root	_
5	to	to	PART	TO	_	6	mark	6:mark	_
6	end	end	VERB	VB	VerbForm=Inf	4	csubj	4:csubj	_
7	his	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	8:nmod:poss	_
8	career	career	NOUN	NN	Number=Sing	6	obj	6:obj	_
9	here	here	ADV	RB	PronType=Dem	6	advmod	6:advmod	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


