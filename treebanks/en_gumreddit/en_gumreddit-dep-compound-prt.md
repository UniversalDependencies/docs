---
layout: base
title:  'Statistics of compound:prt in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-compound.html">compound</a></tt>.

92 nodes (1%) are attached to their parents as `compound:prt`.

92 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20652173913043.

The following 2 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (90; 98% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:prt	color:blue
1	_	_	INTJ	UH	_	6	discourse	6:discourse	Discourse=question:90->92|Lem=*LOWER*|Len=4
2	_	_	PRON	WP	PronType=Int	6	obj	6:obj	Lem=_|Len=4
3	_	_	AUX	MD	VerbForm=Fin	6	aux	6:aux	Lem=_|Len=5
4	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	6:nsubj	Entity=(organization-23)|Lem=_|Len=4
5	_	_	AUX	VB	VerbForm=Inf	6	aux	6:aux	Lem=_|Len=2
6	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=pay|Len=6
7	_	_	ADP	RP	_	6	compound:prt	6:compound:prt	Lem=_|Len=4|SpaceAfter=No
8	_	_	PUNCT	.	_	6	punct	6:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	_	_	VERB	VBG	VerbForm=Ger	16	csubj	16:csubj	Discourse=evaluation:20->18|Entity=(abstract-25|Lem=have|Len=6
2	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(abstract-26|Lem=_|Len=1
3	_	_	NUM	CD	NumForm=Digit|NumType=Card	4	nummod	4:nummod	Entity=(time-27|Lem=_|Len=1
4	_	_	NOUN	NN	Number=Sing	5	compound	5:compound	Entity=time-27)|Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	1	obj	1:obj	Lem=_|Len=3
6	_	_	ADP	RP	_	5	compound:prt	5:compound:prt	Lem=_|Len=2
7	_	_	ADP	IN	_	9	case	9:case	Lem=_|Len=2
8	_	_	NOUN	NN	Number=Sing	9	compound	9:compound	Entity=(event-28(abstract-29)|Lem=_|Len=9
9	_	_	NOUN	NN	Number=Sing	5	nmod	5:nmod:of	Entity=event-28)|Lem=_|Len=8
10	_	_	CCONJ	CC	_	11	cc	11:cc	Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	9	conj	5:nmod:of|9:conj:and	Entity=(event-30)abstract-26)|Lem=_|Len=8
12	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	16:cop	Lem=be|Len=2
13	_	_	PART	RB	Polarity=Neg	16	advmod	16:advmod	Lem=not|Len=3
14	_	_	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Lem=_|Len=3
15	_	_	ADJ	JJS	Degree=Sup	16	amod	16:amod	Lem=good|Len=4
16	_	_	NOUN	NN	Number=Sing	0	root	0:root	Lem=_|Len=8
17	_	_	SCONJ	WRB	PronType=Int	18	mark	18:mark	Discourse=circumstance:21->20|Lem=_|Len=4
18	_	_	VERB	VBG	VerbForm=Ger	16	acl	16:acl:when	Lem=market|Len=9
19	_	_	ADP	IN	_	20	case	20:case	Lem=_|Len=2
20	_	_	NOUN	NN	Number=Sing	18	obl	18:obl:to	Entity=(person-31)|Lem=_|Len=2|SpaceAfter=No
21	_	_	PUNCT	.	_	16	punct	16:punct	Entity=abstract-25)|Lem=_|Len=1

~~~


