---
layout: base
title:  'Statistics of aux in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="en_gum-dep-aux-pass.html">aux:pass</a></tt>.

2876 nodes (2%) are attached to their parents as `aux`.

2872 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71488178025035.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (2623; 91% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (127; 4% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (99; 3% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Norton	Norton	PROPN	NNP	Number=Sing	4	nsubj	4:nsubj	Discourse=sequence:62->52|Entity=(person-1-Emperor_Norton)
2	would	would	AUX	MD	VerbForm=Fin	4	aux	4:aux	_
3	later	late	ADV	RBR	Degree=Cmp	4	advmod	4:advmod	_
4	add	add	VERB	VB	VerbForm=Inf	0	root	0:root	_
5	"	''	PUNCT	``	_	6	punct	6:punct	SpaceAfter=No
6	Protector	Protector	PROPN	NNP	Number=Sing	4	obj	4:obj	Entity=(person-1-Emperor_Norton
7	of	of	ADP	IN	_	8	case	8:case	_
8	Mexico	Mexico	PROPN	NNP	Number=Sing	6	nmod	6:nmod:of	Entity=(place-10-Mexico)person-1-Emperor_Norton)|SpaceAfter=No
9	"	''	PUNCT	''	_	6	punct	6:punct	_
10	to	to	ADP	IN	_	12	case	12:case	_
11	this	this	DET	DT	Number=Sing|PronType=Dem	12	det	12:det	Entity=(abstract-102
12	title	title	NOUN	NN	Number=Sing	4	obl	4:obl:to	Entity=abstract-102)|SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux	color:blue
1	By	by	ADP	IN	_	3	case	3:case	Discourse=preparation:2->3
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Entity=(event-2
3	end	end	NOUN	NN	Number=Sing	11	obl	11:obl:by	_
4	of	of	ADP	IN	_	6	case	6:case	_
5	this	this	DET	DT	Number=Sing|PronType=Dem	6	det	6:det	Entity=(abstract-3
6	section	section	NOUN	NN	Number=Sing	3	nmod	3:nmod:of	Entity=event-2)abstract-3)|SpaceAfter=No
7	,	,	PUNCT	,	_	3	punct	3:punct	_
8	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	11	nsubj	11:nsubj|12:nsubj:xsubj	Entity=(person-4)
9	will	will	AUX	MD	VerbForm=Fin	11	aux	11:aux	_
10	be	be	AUX	VB	VerbForm=Inf	11	cop	11:cop	_
11	able	able	ADJ	JJ	Degree=Pos	0	root	0:root	_
12	to	to	PART	TO	_	11	xcomp	11:xcomp	SpaceAfter=No
13	:	:	PUNCT	:	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=justify:96->95|Entity=(event-121
2	rustling	rustling	NOUN	NN	Number=Sing	6	nsubj	6:nsubj	Entity=event-121)
3	might	might	AUX	MD	VerbForm=Fin	6	aux	6:aux	_
4	have	have	AUX	VB	VerbForm=Inf	6	aux	6:aux	_
5	been	be	AUX	VBN	Tense=Past|VerbForm=Part	6	cop	6:cop	_
6	mice	mouse	NOUN	NNS	Number=Plur	0	root	0:root	Entity=(animal-125)|SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


