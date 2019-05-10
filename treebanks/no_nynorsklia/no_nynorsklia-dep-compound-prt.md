---
layout: base
title:  'Statistics of compound:prt in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="no_nynorsklia-dep-compound.html">compound</a></tt>.

741 nodes (1%) are attached to their parents as `compound:prt`.

679 instances of `compound:prt` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.02699055330634.

The following 2 pairs of parts of speech are connected with `compound:prt`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (740; 100% instances), <tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	som	som	PRON	_	PronType=Rel	3	nmod	_	_
2	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	leste	lesse	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	opp	opp	ADP	_	_	3	compound:prt	_	_
5	det	det	DET	_	Gender=Neut|Number=Sing|PronType=Dem	3	obj	_	_
6	mjølka	mjølk	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	5	appos	_	_
7	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 compound:prt	color:blue
1	av	av	ADP	_	_	7	compound:prt	_	_
2	og	og	CCONJ	_	_	3	cc	_	_
3	til	til	ADP	_	_	1	obl	_	_
4	#	#	PUNCT	_	_	1	punct	_	_
5	kunne	kunne	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	8	aux	_	_
6	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
7	få	få	AUX	_	VerbForm=Inf	8	aux	_	_
8	komme	komme	VERB	_	VerbForm=Inf	0	root	_	_
9	#	#	PUNCT	_	_	11	punct	_	_
10	frampå	frampå	ADP	_	_	11	case	_	_
11	lasset	lass	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	8	obl	_	_
12	#	#	PUNCT	_	_	13	punct	_	_
13	eit	ein	DET	_	Gender=Neut|Number=Sing|PronType=Art	14	det	_	_
14	stykke	stykke	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	8	xcomp	_	_
15	for	for	SCONJ	_	_	18	mark	_	_
16	å	å	PART	_	_	18	mark	_	_
17	få	få	AUX	_	VerbForm=Inf	18	aux	_	_
18	ake	ake	VERB	_	VerbForm=Inf	8	advcl	_	_
19	litt	litt	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	18	advmod	_	_
20	iblant	iblant	ADP	_	_	18	compound:prt	_	_
21	.	$.	PUNCT	_	_	8	punct	_	_

~~~


