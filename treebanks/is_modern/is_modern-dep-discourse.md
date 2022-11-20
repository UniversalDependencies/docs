---
layout: base
title:  'Statistics of discourse in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `discourse`

This relation is universal.

70 nodes (0%) are attached to their parents as `discourse`.

58 instances of `discourse` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.04285714285714.

The following 11 pairs of parts of speech are connected with `discourse`: <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (36; 51% instances), <tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (11; 16% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (9; 13% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (7; 10% instances), <tt><a href="is_modern-pos-ADV.html">ADV</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 discourse	color:blue
1	Af	af	ADP	P	_	2	case	_	IFD_tag=aþ
2	hverju	hver	DET	Q-D	Case=Dat|Gender=Neut|Number=Sing|PronType=Int	3	obl	_	IFD_tag=fsheþ
3	ættum	eiga	VERB	VBDS	Mood=Sub|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	IFD_tag=svg1fþ
4	við	ég	PRON	PRO-N	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	IFD_tag=fp1fn
5	að	að	PART	TO	_	6	mark	_	IFD_tag=cn
6	segja	segja	VERB	VB	VerbForm=Inf|Voice=Act	3	acl	_	IFD_tag=sng
7	nei	nei	INTJ	INTJ	_	6	discourse	_	IFD_tag=x|SpaceAfter=No
8	?	?	PUNCT	.	_	7	punct	_	IFD_tag=?

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Nei	nei	INTJ	INTJ	_	7	discourse	_	IFD_tag=x|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	IFD_tag=
3	auðvitað	auðvitað	ADV	ADV	_	7	advmod	_	IFD_tag=aa
4	var	vera	AUX	BEDI	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	IFD_tag=sfg3eþ
5	það	það	PRON	PRO-N	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	7	nsubj	_	IFD_tag=fphen
6	ekki	ekki	ADV	NEG	_	7	advmod	_	IFD_tag=aa
7	hægt	hægur	ADJ	ADJ-N	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	IFD_tag=lhensf|SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 discourse	color:blue
1	Virðulegi	virðulegur	ADJ	ADJ-N	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	IFD_tag=lkenvf
2	forseti	forseti	NOUN	N-N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	IFD_tag=nken|SpaceAfter=No
3	.	.	PUNCT	.	_	2	punct	_	IFD_tag=.
4	Ja	ja	INTJ	INTJ	_	2	discourse	_	IFD_tag=x|SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	IFD_tag
6	svartsýni	svartsýni	NOUN	N-N	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	2	xcomp	_	IFD_tag=nven
7	og	og	CCONJ	CONJ	_	2	conj	_	IFD_tag=c
8	ekki	ekki	ADV	NEG	_	9	advmod	_	IFD_tag=aa
9	svartsýni	svartsýni	NOUN	N-N	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	7	xcomp	_	IFD_tag=nven|SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	IFD_tag=.

~~~


