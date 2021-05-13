---
layout: base
title:  'Statistics of dislocated in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `dislocated`

This relation is universal.

30 nodes (0%) are attached to their parents as `dislocated`.

21 instances of `dislocated` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.66666666666667.

The following 12 pairs of parts of speech are connected with `dislocated`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (8; 27% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (5; 17% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (4; 13% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (3; 10% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 7% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 dislocated	color:blue
1	Or	or	CCONJ	CC	_	12	cc	12:cc	Discourse=joint:72->70
2	a	a	DET	DT	Definite=Ind|PronType=Art	3	det	3:det	Entity=(substance-40
3	cloud	cloud	NOUN	NN	Number=Sing	12	dislocated	12:dislocated	Entity=substance-40)|SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	7:punct	_
5	or	or	CCONJ	CC	_	7	cc	7:cc	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Entity=(substance-41
7	air	air	NOUN	NN	Number=Sing	3	conj	3:conj:or|12:dislocated	_
8	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	9:nsubj	Discourse=elaboration:73->72|Entity=(person-13)
9	breathe	breathe	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	acl:relcl	7:acl:relcl	Entity=substance-41)|SpaceAfter=No
10	,	,	PUNCT	,	_	3	punct	3:punct	_
11	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	12:nsubj	Discourse=restatement:74->69|Entity=(person-13)
12	call	call	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
13	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	obj	12:obj|14:nsubj:xsubj	Entity=(substance-39)
14	a	a	PRON	DT	Definite=Ind|PronType=Art	12	xcomp	12:xcomp	SpaceAfter=No
15	?	?	PUNCT	.	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 dislocated	color:blue
1	Or	or	CCONJ	CC	_	2	cc	2:cc	Discourse=contrast:240->239
2	ponies	pony	NOUN	NNS	Number=Plur	9	dislocated	9:dislocated	Entity=(animal-117)|SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	2:punct	_
4	that	that	PRON	DT	Number=Sing|PronType=Dem	9	nsubj	9:nsubj	Entity=(animal-117)
5	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	Entity=(animal-117
7	whole	whole	ADJ	JJ	Degree=Pos	9	amod	9:amod	_
8	different	different	ADJ	JJ	Degree=Pos	9	amod	9:amod	_
9	thing	thing	NOUN	NN	Number=Sing	0	root	0:root	Entity=animal-117)|SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dislocated	color:blue
1	Method	method	NOUN	NN	Number=Sing	0	root	0:root	Discourse=preparation:13->14|Entity=(abstract-15
2	One	one	NUM	CD	NumForm=Word|NumType=Card	1	dislocated	1:dislocated	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	Two	two	NUM	CD	NumForm=Word|NumType=Card	1	nmod	1:nmod:of	Entity=(abstract-16)abstract-15)|SpaceAfter=No
5	:	:	PUNCT	:	_	6	punct	6:punct	_
6	Hypnotizing	hypnotize	VERB	VBG	VerbForm=Ger	1	appos	1:appos	Discourse=preparation:14->15
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	Entity=(animal-17
8	Chicken	chicken	NOUN	NN	Number=Sing	6	obj	6:obj	Entity=animal-17)

~~~


