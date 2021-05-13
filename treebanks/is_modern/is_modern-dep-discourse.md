---
layout: base
title:  'Statistics of discourse in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `discourse`

This relation is universal.

142 nodes (0%) are attached to their parents as `discourse`.

118 instances of `discourse` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 11 pairs of parts of speech are connected with `discourse`: <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (72; 51% instances), <tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (22; 15% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (20; 14% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (14; 10% instances), <tt><a href="is_modern-pos-ADV.html">ADV</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 discourse	color:blue
1	Af	af	ADP	P	_	2	case	_	_
2	hverju	hver	DET	Q-D	Case=Dat|Degree=Pos	3	obl	_	_
3	ættum	eiga	VERB	VBDS	Mood=Sub|Tense=Past	0	root	_	_
4	við	ég	PRON	PRO-N	Case=Nom	3	nsubj	_	_
5	að	að	PART	TO	_	6	mark	_	_
6	segja	segja	VERB	VB	VerbForm=Inf	3	acl	_	_
7	nei	nei	INTJ	INTJ	_	6	discourse	_	SpaceAfter=No
8	?	?	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Nei	nei	INTJ	INTJ	_	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	auðvitað	auðvitað	ADV	ADV	Degree=Pos	7	advmod	_	_
4	var	vera	AUX	BEDI	Mood=Ind|Tense=Past	7	cop	_	_
5	það	það	PRON	PRO-N	Case=Nom	7	nsubj	_	_
6	ekki	ekki	ADV	NEG	_	7	advmod	_	_
7	hægt	hægur	ADJ	ADJ-N	Case=Nom|Degree=Pos	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 discourse	color:blue
1	Virðulegi	virðulegur	ADJ	ADJ-N	Case=Nom|Degree=Pos	2	amod	_	_
2	forseti	forseti	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	SpaceAfter=No
3	.	.	PUNCT	.	_	2	punct	_	_
4	Ja	ja	INTJ	INTJ	_	2	discourse	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	svartsýni	svartsýni	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	2	xcomp	_	_
7	og	og	CCONJ	CONJ	_	2	conj	_	_
8	ekki	ekki	ADV	NEG	_	9	advmod	_	_
9	svartsýni	svartsýni	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


