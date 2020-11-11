---
layout: base
title:  'Statistics of compound:prt in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-compound.html">compound</a></tt>.

511 nodes (0%) are attached to their parents as `compound:prt`.

509 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24853228962818.

The following 6 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (485; 95% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (17; 3% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Get	get	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	Discourse=preparation:30->36
2	in	in	ADP	IN	_	1	compound:prt	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	If	if	SCONJ	IN	_	3	mark	_	Discourse=condition:81->82
2	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	Entity=(person-12)
3	yacks	yack	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	advcl	_	_
4	on	on	ADV	RB	_	3	compound:prt	_	_
5	like	like	ADV	RB	_	6	case	_	_
6	that	that	PRON	DT	Number=Sing|PronType=Dem	3	obl	_	Entity=(event-47)
7	in	in	ADP	IN	_	9	case	_	_
8	an	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	Entity=(event-49
9	exam	exam	NOUN	NN	Number=Sing	3	obl	_	Entity=event-49)|SpaceAfter=No
10	,	,	PUNCT	,	_	3	punct	_	_
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj:pass	_	Discourse=justify:82->80|Entity=(person-6)|SpaceAfter=No
12	’ll	will	AUX	MD	VerbForm=Fin	14	aux	_	_
13	get	get	AUX	VB	VerbForm=Inf	14	aux:pass	_	_
14	thrown	throw	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
15	out	out	ADP	RP	_	14	compound:prt	_	SpaceAfter=No
16	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound:prt	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	Discourse=evaluation:36->35|Entity=(event-42(organization-9)
2	always	always	ADV	RB	_	3	advmod	_	_
3	seem	seem	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	to	to	PART	TO	_	5	mark	_	_
5	have	have	VERB	VB	VerbForm=Inf	3	xcomp	_	_
6	just	just	ADV	RB	_	9	advmod	_	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	Entity=(event-43
8	little	little	ADJ	JJ	Degree=Pos	9	amod	_	_
9	bit	bit	NOUN	NN	Number=Sing	5	obj	_	_
10	of	of	ADP	IN	_	12	case	_	_
11	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	_	_
12	chill	chill	NOUN	NN	Number=Sing	9	nmod	_	_
13	out	out	ADP	RP	_	12	compound:prt	_	Entity=event-43)
14	at	at	ADP	IN	_	17	case	_	_
15	the	the	DET	DT	Definite=Def|PronType=Art	17	det	_	Entity=(event-41
16	World	World	PROPN	NNP	Number=Sing	17	compound	_	_
17	Cup	Cup	PROPN	NNP	Number=Sing	12	nmod	_	Entity=event-41)|SpaceAfter=No
18	.	.	PUNCT	.	_	3	punct	_	Entity=event-42)

~~~


