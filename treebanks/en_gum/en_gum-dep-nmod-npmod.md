---
layout: base
title:  'Statistics of nmod:npmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>.

68 nodes (0%) are attached to their parents as `nmod:npmod`.

38 instances of `nmod:npmod` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.91176470588235.

The following 13 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (34; 50% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (9; 13% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (6; 9% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (5; 7% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (4; 6% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 nmod:npmod	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	Discourse=joint-other_m:51->49:1|Entity=(55-place-giv:act-cf1*-1-ana)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(55-place-giv:act-cf1*-3-pred
4	limestone	limestone	NOUN	NN	Number=Sing	5	compound	5:compound	Entity=(92-substance-new-cf5-1-sgl)
5	island	island	NOUN	NN	Number=Sing	0	root	0:root	_
6	with	with	ADP	IN	_	7	case	7:case	_
7	heights	height	NOUN	NNS	Number=Plur	5	nmod	5:nmod:with	Entity=(93-abstract-new-cf3-1-sgl
8	up	up	ADV	IN	_	10	advmod	10:advmod	_
9	to	to	ADP	IN	_	8	fixed	8:fixed	_
10	213	213	NUM	CD	NumForm=Digit|NumType=Card	11	nummod	11:nummod	Entity=(94-abstract-new-cf4-2-sgl
11	m	meter	NOUN	NNS	Number=Plur	7	nmod:npmod	7:nmod:npmod	Entity=94)93)
12	in	in	ADP	IN	_	14	case	14:case	_
13	the	the	DET	DT	Definite=Def|PronType=Art	14	det	14:det	Entity=(95-place-new-cf2-2-sgl
14	west	west	NOUN	NN	Number=Sing	7	nmod	7:nmod:in	Entity=95)55)|SpaceAfter=No
15	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:npmod	color:blue
1	What	what	PRON	WP	PronType=Int	0	root	0:root	Discourse=joint-list_m:85->83:1
2	if	if	SCONJ	IN	_	6	mark	6:mark	Discourse=contingency-condition:86->85:0
3	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	6:nsubj	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	Entity=(61-organization-giv:inact-cf1-2-coref
6	state	state	NOUN	NN	Number=Sing	1	advcl	1:advcl:if|9:nsubj	_
7	itself	itself	PRON	PRP	Gender=Neut|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	6	nmod:npmod	6:nmod:npmod	Entity=61)
8	that	that	PRON	WDT	PronType=Rel	9	nsubj	6:ref	_
9	exhibits	exhibit	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	6:acl:relcl	_
10	predatory	predatory	ADJ	JJ	Degree=Pos	11	amod	11:amod	Entity=(127-abstract-new-cf2-2-sgl
11	behavior	behavior	NOUN	NN	Number=Sing	9	obj	9:obj	Entity=127)|SpaceAfter=No
12	?	?	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:npmod	color:blue
1	Pop	pop	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=organization-heading:1->6:5|Entity=(1-abstract-new-cf4-3-sgl
2	culture	culture	NOUN	NN	Number=Sing	3	nsubj:pass	3:nsubj:pass	_
3	celebrated	celebrate	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
4	at	at	ADP	IN	_	6	case	6:case	_
5	Fan	Fan	PROPN	NNP	Number=Sing	6	compound	6:compound	Entity=(2-event-new-cf1-1,2,3,6-coref(3-person-new-cf6-1-coref)
6	Expo	Expo	PROPN	NNP	Number=Sing	3	obl	3:obl:at	_
7	Canada	Canada	PROPN	NNP	Number=Sing	6	nmod:npmod	6:nmod:npmod	Entity=(4-place-new-cf2-1-coref-Canada)
8	2016	2016	NUM	CD	NumForm=Digit|NumType=Card	6	nmod:tmod	6:nmod:tmod	Entity=(5-time-new-cf5-1-coref)|XML=<date when:::"2016"></date>
9	in	in	ADP	IN	_	10	case	10:case	_
10	Toronto	Toronto	PROPN	NNP	Number=Sing	6	nmod	6:nmod:in	Entity=(6-place-new-cf3-1-coref-Toronto)2)1)

~~~


