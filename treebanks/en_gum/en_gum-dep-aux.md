---
layout: base
title:  'Statistics of aux in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="en_gum-dep-aux-pass.html">aux:pass</a></tt>.

2223 nodes (2%) are attached to their parents as `aux`.

2217 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.73009446693657.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (2018; 91% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (103; 5% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (88; 4% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Norton	Norton	PROPN	NNP	Number=Sing	4	nsubj	_	Discourse=sequence:62->52|Entity=(person-1)
2	would	would	AUX	MD	VerbForm=Fin	4	aux	_	_
3	later	late	ADV	RBR	Degree=Cmp	4	advmod	_	_
4	add	add	VERB	VB	VerbForm=Inf	0	root	_	_
5	"	''	PUNCT	``	_	6	punct	_	SpaceAfter=No
6	Protector	Protector	PROPN	NNP	Number=Sing	4	obj	_	Entity=(person-1
7	of	of	ADP	IN	_	8	case	_	_
8	Mexico	Mexico	PROPN	NNP	Number=Sing	6	nmod	_	Entity=(place-10)person-1)|SpaceAfter=No
9	"	''	PUNCT	''	_	6	punct	_	_
10	to	to	ADP	IN	_	12	case	_	_
11	this	this	DET	DT	Number=Sing|PronType=Dem	12	det	_	Entity=(abstract-102
12	title	title	NOUN	NN	Number=Sing	4	obl	_	Entity=abstract-102)|SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	Discourse=attribution:137->138|Entity=(person-144)
2	say	say	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	6	nsubj	_	Discourse=joint:138->136|Entity=(person-145)
4	can	can	AUX	MD	VerbForm=Fin	6	aux	_	_
5	be	be	AUX	VB	VerbForm=Inf	6	cop	_	_
6	Muslim	Muslim	ADJ	JJ	Degree=Pos	2	ccomp	_	_
7	and	and	CCONJ	CC	_	8	cc	_	_
8	modern	modern	ADJ	JJ	Degree=Pos	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	Discourse=justify:96->95|Entity=(event-121
2	rustling	rustling	NOUN	NN	Number=Sing	6	nsubj	_	Entity=event-121)
3	might	might	AUX	MD	VerbForm=Fin	6	aux	_	_
4	have	have	AUX	VB	VerbForm=Inf	6	aux	_	_
5	been	be	AUX	VBN	Tense=Past|VerbForm=Part	6	cop	_	_
6	mice	mouse	NOUN	NNS	Number=Plur	0	root	_	Entity=(animal-125)|SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


