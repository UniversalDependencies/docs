---
layout: base
title:  'Statistics of compound:prt in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-compound.html">compound</a></tt>.

93 nodes (1%) are attached to their parents as `compound:prt`.

93 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20430107526882.

The following 2 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (91; 98% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:prt	color:blue
1	_	_	INTJ	UH	_	6	discourse	6:discourse	Discourse=topic-question:90->92:0:lex-indwd-561+syn-sbinv-562+grf-qst-567|Lem=*LOWER*|Len=4
2	_	_	PRON	WP	PronType=Int	6	obj	6:obj	Lem=_|Len=4
3	_	_	AUX	MD	VerbForm=Fin	6	aux	6:aux	Lem=_|Len=5
4	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	6:nsubj	Entity=(23-organization-giv:act-cf1*-1-ana)|Lem=_|Len=4
5	_	_	AUX	VB	VerbForm=Inf	6	aux	6:aux	Lem=_|Len=2
6	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Cxn=Interrogative-Wh|Lem=pay|Len=6|MSeg=pay-ing
7	_	_	ADP	RP	_	6	compound:prt	6:compound:prt	Lem=_|Len=4|SpaceAfter=No
8	_	_	PUNCT	.	_	6	punct	6:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	_	_	VERB	VBG	VerbForm=Ger	16	csubj	16:csubj	Discourse=evaluation-comment:22->20:1:lex-indwd-157|Entity=(25-abstract-new-cf4-16-disc|Lem=have|Len=6|MSeg=Hav-ing
2	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(26-abstract-new-cf1-4-sgl|Lem=_|Len=1
3	_	_	NUM	CD	NumForm=Digit|NumType=Card	4	nummod	4:nummod	Entity=(27-time-new-cf7-2-sgl|Lem=_|Len=1
4	_	_	NOUN	NN	Number=Sing	5	compound	5:compound	Entity=27)|Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	1	obj	1:obj	Lem=_|Len=3
6	_	_	ADP	RP	_	5	compound:prt	5:compound:prt	Lem=_|Len=2
7	_	_	ADP	IN	_	9	case	9:case	Lem=_|Len=2
8	_	_	NOUN	NN	Number=Sing	9	compound	9:compound	Entity=(28-event-new-cf5-2-sgl(29-abstract-new-cf8-1-sgl)|Lem=_|Len=9
9	_	_	NOUN	NN	Number=Sing	5	nmod	5:nmod:of	Entity=28)|Lem=_|Len=8|MSeg=build-ing
10	_	_	CCONJ	CC	_	11	cc	11:cc	Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	9	conj	5:nmod:of|9:conj:and	Entity=(30-event-new-cf6-1-sgl)26)|Lem=_|Len=8
12	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	16:cop	Lem=be|Len=2
13	_	_	PART	RB	Polarity=Neg	16	advmod	16:advmod	Lem=not|Len=3
14	_	_	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Entity=(31-abstract-new-cf2-3-sgl|Lem=_|Len=3
15	_	_	ADJ	JJS	Degree=Sup	16	amod	16:amod	Lem=good|Len=4|MSeg=be-st
16	_	_	NOUN	NN	Number=Sing	0	root	0:root	Entity=31)|Lem=_|Len=8
17	_	_	ADV	WRB	PronType=Int	18	advmod	18:advmod	Discourse=context-circumstance:23->22:0:dm-when-159+syn-pres-160|Lem=_|Len=4
18	_	_	VERB	VBG	VerbForm=Ger	16	advcl	16:advcl:when	Lem=market|Len=9|MSeg=market-ing
19	_	_	ADP	IN	_	20	case	20:case	Lem=_|Len=2
20	_	_	NOUN	NN	Number=Sing	18	obl	18:obl:to	Entity=(32-person-new-cf3-1-coref)|Lem=_|Len=2|SpaceAfter=No
21	_	_	PUNCT	.	_	16	punct	16:punct	Entity=25)|Lem=_|Len=1

~~~


