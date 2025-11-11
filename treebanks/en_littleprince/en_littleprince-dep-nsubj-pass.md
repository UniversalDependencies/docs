---
layout: base
title:  'Statistics of nsubj:pass in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_littleprince-dep-nsubj-outer.html">nsubj:outer</a></tt>.

27 nodes (0%) are attached to their parents as `nsubj:pass`.

27 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.07407407407407.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (14; 52% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (12; 44% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	soil	soil	NOUN	NN	Number=Sing	7	nsubj:pass	_	_
3	of	of	ADP	IN	_	5	case	_	_
4	that	that	DET	DT	Number=Sing|PronType=Dem	5	det	_	_
5	planet	planet	NOUN	NN	Number=Sing	2	nmod	_	_
6	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	infested	infest	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
8	with	with	ADP	IN	_	9	case	_	_
9	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	obl	_	_
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	knew	know	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	4	det	_	_
4	planet	planet	NOUN	NN	Number=Sing	2	obj	_	_
5	that	that	PRON	WDT	PronType=Rel	7	nsubj:pass	_	_
6	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	inhabited	inhabit	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	acl:relcl	_	_
8	by	by	ADP	IN	_	11	case	_	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	11	det	_	_
10	lazy	lazy	ADJ	JJ	Degree=Pos	11	amod	_	_
11	man	man	NOUN	NN	Number=Sing	7	obl:agent	_	_
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	first	first	ADJ	JJ	Degree=Pos|NumType=Ord	6	nsubj:pass	_	_
3	of	of	ADP	IN	_	4	case	_	_
4	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	2	nmod	_	_
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
6	inhabited	inhabit	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
7	by	by	ADP	IN	_	9	case	_	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
9	king	king	NOUN	NN	Number=Sing	6	obl	_	_
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


