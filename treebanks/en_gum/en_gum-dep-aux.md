---
layout: base
title:  'Statistics of aux in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="en_gum-dep-aux-pass.html">aux:pass</a></tt>.

5045 nodes (2%) are attached to their parents as `aux`.

5036 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.72824578790882.

The following 12 pairs of parts of speech are connected with `aux`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (4577; 91% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (201; 4% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (158; 3% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (45; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (28; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (16; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Norton	Norton	PROPN	NNP	Number=Sing	4	nsubj	4:nsubj	Discourse=joint-sequence_m:62->52:5:dm-later-658|Entity=(1-person-giv:inact-cf1-1-coref-Emperor_Norton)
2	would	would	AUX	MD	VerbForm=Fin	4	aux	4:aux	_
3	later	late	ADV	RBR	Degree=Cmp	4	advmod	4:advmod	MSeg=lat-er|PDTB=Explicit:Temporal.Asynchronous.Precedence:later:658:447-480:656-657,659-668
4	add	add	VERB	VB	VerbForm=Inf	0	root	0:root	_
5	"	''	PUNCT	``	_	6	punct	6:punct	SpaceAfter=No|XML=<q>
6	Protector	Protector	PROPN	NNP	Number=Sing	4	obj	4:obj	Entity=(1-person-giv:act-cf1-1,3-coref-Emperor_Norton|MSeg=Protect-or
7	of	of	ADP	IN	_	8	case	8:case	_
8	Mexico	Mexico	PROPN	NNP	Number=Sing	6	nmod	6:nmod:of	Entity=(10-place-giv:inact-cf3-1-coref-Mexico)1)|SpaceAfter=No
9	"	''	PUNCT	''	_	6	punct	6:punct	XML=</q>
10	to	to	ADP	IN	_	12	case	12:case	_
11	this	this	DET	DT	Number=Sing|PronType=Dem	12	det	12:det	Entity=(102-abstract-giv:inact-cf2-2-coref
12	title	title	NOUN	NN	Number=Sing	4	obl	4:obl:to	Entity=102)|SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	Discourse=organization-preparation:120->137:8:_|Entity=(10-time-giv:act-cf1*-1-ana)|PDTB=Hypophora:Hypophora:_:_:684-690:691-697
2	’s	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
3	been	be	AUX	VBN	Tense=Past|VerbForm=Part	4	cop	4:cop	_
4	good	good	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	yeah	yeah	INTJ	UH	Polarity=Pos	4	discourse	4:discourse	SpaceAfter=No
7	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=explanation-justify:96->95:0:_|Entity=(121-event-giv:inact-cf2-2-coref|PDTB=Implicit:Contingency.Cause.Reason:because:_:748-766:767-773
2	rustling	rustling	NOUN	NN	Number=Sing	6	nsubj	6:nsubj	Entity=121)|MSeg=rustl-ing
3	might	might	AUX	MD	VerbForm=Fin	6	aux	6:aux	_
4	have	have	AUX	VB	VerbForm=Inf	6	aux	6:aux	_
5	been	be	AUX	VBN	Tense=Past|VerbForm=Part	6	cop	6:cop	_
6	mice	mouse	NOUN	NNS	Number=Plur	0	root	0:root	Entity=(125-animal-giv:act-cf1*-1-pred)|SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


