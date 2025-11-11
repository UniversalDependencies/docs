---
layout: base
title:  'Statistics of csubj in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `csubj`

This relation is universal.

7 nodes (0%) are attached to their parents as `csubj`.

7 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.14285714285714.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (5; 71% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	much	much	ADV	RB	_	4	advmod	_	_
4	more	more	ADV	RBR	_	5	advmod	_	_
5	difficult	difficult	ADJ	JJ	Degree=Pos	0	root	_	_
6	to	to	PART	TO	_	7	mark	_	_
7	judge	judge	VERB	VB	VerbForm=Inf	5	csubj	_	_
8	oneself	oneself	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	7	obj	_	_
9	than	than	SCONJ	IN	_	11	mark	_	_
10	to	to	PART	TO	_	11	mark	_	_
11	judge	judge	VERB	VB	VerbForm=Inf	7	advcl	_	_
12	others	other	NOUN	NNS	Number=Plur	11	obj	_	_
13	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 csubj	color:blue
1	"	"	PUNCT	``	_	5	punct	_	_
2	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	fault	fault	NOUN	NN	Number=Sing	0	root	_	_
6	that	that	SCONJ	IN	_	10	mark	_	_
7	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	nsubj	_	_
8	have	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux	_	_
9	not	not	PART	RB	_	10	advmod	_	_
10	known	know	VERB	VBN	Tense=Past|VerbForm=Part	5	csubj	_	_
11	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	obj	_	_
12	all	all	DET	PDT	_	14	det:predet	_	_
13	the	the	DET	DT	Definite=Def|PronType=Art	14	det	_	_
14	while	while	NOUN	NN	Number=Sing	10	obl:tmod	_	_
15	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 csubj	color:blue
1	But	but	CCONJ	CC	_	5	cc	_	_
2	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
3	little	little	ADJ	JJ	Degree=Pos	4	amod	_	_
4	prince	prince	NOUN	NN	Number=Sing	5	nsubj	_	_
5	added	add	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	:	:	PUNCT	:	_	5	punct	_	_
7	"	"	PUNCT	``	_	10	punct	_	_
8	Then	then	ADV	RB	PronType=Dem	10	advmod	_	_
9	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	expl	_	_
10	follows	follow	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
11	that	that	SCONJ	IN	_	14	mark	_	_
12	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	_
13	also	also	ADV	RB	_	14	advmod	_	_
14	eat	eat	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	csubj	_	_
15	baobabs	baobab	NOUN	NNS	Number=Plur	14	obj	_	_
16	?	?	PUNCT	.	_	10	punct	_	_
17	"	"	PUNCT	''	_	10	punct	_	_

~~~


