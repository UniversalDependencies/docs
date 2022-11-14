---
layout: base
title:  'Statistics of expl in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `expl`

This relation is universal.

429 nodes (0%) are attached to their parents as `expl`.

417 instances of `expl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53379953379953.

The following 6 pairs of parts of speech are connected with `expl`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (327; 76% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (80; 19% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (18; 4% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	There	there	PRON	EX	PronType=Dem	3	expl	3:expl	Discourse=adversative-antithesis:27->26:1
2	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj|4:nsubj:xsubj	Entity=(5-person-giv:inact-cf1-1-ana)
3	go	go	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	thinking	think	VERB	VBG	VerbForm=Ger	3	xcomp	3:xcomp	_
5	again	again	ADV	RB	Degree=Pos	3	advmod	3:advmod	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	Discourse=elaboration-additional:18->17:0|Entity=(21-abstract-new-cf3-1-cata)
2	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	best	good	ADJ	JJS	Degree=Sup	0	root	0:root	_
4	to	to	PART	TO	_	5	mark	5:mark	Entity=(21-abstract-acc:com-cf3-2-coref
5	wash	wash	VERB	VB	VerbForm=Inf	3	csubj	3:csubj	_
6	adults	adult	NOUN	NNS	Number=Plur	8	nmod:poss	8:nmod:poss	Entity=(8-object-giv:inact-cf1-3-coref(9-person-giv:inact-cf2-1-coref
7	’	's	PART	POS	_	6	case	6:case	Entity=9)
8	overalls	overall	NOUN	NNS	Number=Plur	5	obj	5:obj	Entity=8)
9	alone	alone	ADV	RB	Degree=Pos	5	advmod	5:advmod	Entity=21)|SpaceAfter=No
10	,	,	PUNCT	,	_	9	punct	9:punct	_
11	especially	especially	ADV	RB	Degree=Pos	12	advmod	12:advmod	_
12	men	man	NOUN	NNS	Number=Plur	8	appos	8:appos	Entity=(22-person-new-cf4-1-sgl
13	’s	's	PART	POS	_	12	case	12:case	Entity=22)
14	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 expl	color:blue
1	There	there	PRON	EX	PronType=Dem	5	expl	5:expl	Discourse=joint-list_m:40->39:0
2	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
3	been	be	AUX	VBN	Tense=Past|VerbForm=Part	5	cop	5:cop	_
4	much	much	ADJ	JJ	Degree=Pos	5	amod	5:amod	Entity=(57-abstract-new-cf3-2-sgl
5	speculation	speculation	NOUN	NN	Number=Sing	0	root	0:root	_
6	as	as	ADP	IN	_	9	case	9:case	_
7	to	to	ADP	IN	_	6	fixed	6:fixed	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Entity=(58-abstract-new-cf2-2-coref
9	reasons	reason	NOUN	NNS	Number=Plur	5	nmod	5:nmod:as_to	_
10	behind	behind	ADP	IN	_	11	case	11:case	_
11	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	nmod	9:nmod:behind	Entity=(51-event-giv:act-cf1*-1-ana)58)57)|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


