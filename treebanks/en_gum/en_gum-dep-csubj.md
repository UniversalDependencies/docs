---
layout: base
title:  'Statistics of csubj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_gum-dep-csubj-pass.html">csubj:pass</a></tt>.

201 nodes (0%) are attached to their parents as `csubj`.

102 instances of `csubj` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.7363184079602.

The following 15 pairs of parts of speech are connected with `csubj`: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (76; 38% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (62; 31% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (35; 17% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	Practicing	practice	VERB	VBG	VerbForm=Ger	5	csubj	5:csubj	Discourse=joint:108->24
2	your	your	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	Entity=(abstract-66(person-9)
3	joke	joke	NOUN	NN	Number=Sing	1	obj	1:obj	Entity=abstract-66)
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
5	crucial	crucial	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 csubj	color:blue
1	Moving	move	VERB	VBG	VerbForm=Ger	3	csubj	3:csubj	Discourse=cause:61->55|Entity=(event-70
2	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	1	obj	1:obj	Entity=(object-65)
3	distributes	distribute	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	Entity=(event-71
5	wear	wear	NOUN	NN	Number=Sing	3	obj	3:obj	_
6	and	and	CCONJ	CC	_	7	cc	7:cc	_
7	tear	tear	NOUN	NN	Number=Sing	5	conj	3:obj|5:conj:and	_
8	of	of	SCONJ	IN	_	9	mark	9:mark	_
9	washing	wash	VERB	VBG	VerbForm=Ger	5	acl	5:acl:of	Entity=event-71)|SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	3:punct	Entity=event-70)

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj	color:blue
1	All	all	PRON	DT	_	3	obl:npmod	3:obl:npmod	Discourse=motivation:41->33
2	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
3	takes	take	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	csubj	7:csubj|11:csubj	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
5	two	two	NUM	CD	NumForm=Word|NumType=Card	7	nummod	7:nummod	Entity=(object-40
6	twist	twist	NOUN	NN	Number=Sing	7	compound	7:compound	_
7	ties	tie	NOUN	NNS	Number=Plur	0	root	0:root	Entity=object-40)
8	and	and	CCONJ	CC	_	11	cc	11:cc	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(time-43
10	few	few	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
11	seconds	second	NOUN	NNS	Number=Plur	7	conj	7:conj:and	_
12	of	of	ADP	IN	_	13	case	13:case	_
13	patience	patience	NOUN	NN	Number=Sing	11	nmod	11:nmod:of	Entity=(abstract-49)time-43)|SpaceAfter=No
14	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


