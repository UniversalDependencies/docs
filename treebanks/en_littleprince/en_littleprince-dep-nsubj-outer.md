---
layout: base
title:  'Statistics of nsubj:outer in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_littleprince-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

2 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.5.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 9 nsubj:outer	color:blue
1	And	and	CCONJ	CC	_	3	cc	_	_
2	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	continued	continue	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	his	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	confidences	confidence	NOUN	NNS	Number=Plur	3	obj	_	_
6	:	:	PUNCT	:	_	3	punct	_	_
7	"	"	PUNCT	``	_	15	punct	_	_
8	The	the	DET	DT	Definite=Def|PronType=Art	9	det	_	_
9	fact	fact	NOUN	NN	Number=Sing	15	nsubj:outer	_	_
10	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
11	that	that	SCONJ	IN	_	15	mark	_	_
12	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	_
13	did	do	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	15	aux	_	_
14	not	not	PART	RB	_	15	advmod	_	_
15	know	know	VERB	VB	VerbForm=Inf	3	ccomp	_	_
16	how	how	ADV	WRB	PronType=Int	18	advmod	_	_
17	to	to	PART	TO	_	18	mark	_	_
18	understand	understand	VERB	VB	VerbForm=Inf	15	xcomp	_	_
19	anything	anything	PRON	NN	Number=Sing	18	obj	_	_
20	!	!	PUNCT	.	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:outer	color:blue
1	But	but	CCONJ	CC	_	7	cc	_	_
2	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj:outer	_	_
3	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
4	not	not	PART	RB	_	7	advmod	_	_
5	because	because	SCONJ	IN	_	7	mark	_	_
6	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	had	have	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
9	cold	cold	ADJ	JJ	Degree=Pos	7	obj	_	_
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


