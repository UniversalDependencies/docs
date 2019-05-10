---
layout: base
title:  'Statistics of compound:prt in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-compound.html">compound</a></tt>.

451 nodes (0%) are attached to their parents as `compound:prt`.

448 instances of `compound:prt` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27272727272727.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (427; 95% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (14; 3% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Get	get	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	in	in	ADP	IN	_	1	compound:prt	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	If	if	SCONJ	IN	_	3	mark	_	_
2	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	yacks	yack	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	advcl	_	_
4	on	on	ADV	RB	_	3	compound:prt	_	_
5	like	like	ADV	RB	_	6	case	_	_
6	that	that	PRON	DT	Number=Sing|PronType=Dem	3	obl	_	_
7	in	in	ADP	IN	_	9	case	_	_
8	an	an	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
9	exam	exam	NOUN	NN	Number=Sing	3	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	3	punct	_	_
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj:pass	_	SpaceAfter=No
12	’ll	will	AUX	MD	VerbForm=Fin	14	aux	_	_
13	get	get	AUX	VB	VerbForm=Inf	14	aux:pass	_	_
14	thrown	throw	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
15	out	out	ADP	RP	_	14	compound:prt	_	SpaceAfter=No
16	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Filter	VV	NOUN	NN	Number=Sing	0	root	_	_
2	out	out	ADP	RP	_	1	compound:prt	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	7	det	_	_
4	remaining	remain	VERB	VBG	VerbForm=Ger	7	amod	_	_
5	Skittle	skittle	PROPN	NNP	Number=Sing	7	compound	_	_
6	"	"	PUNCT	``	_	7	punct	_	SpaceAfter=No
7	insides	inside	NOUN	NNS	Number=Plur	1	obj	_	SpaceAfter=No
8	"	"	PUNCT	''	_	7	punct	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


