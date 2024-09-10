---
layout: base
title:  'Statistics of nmod:poss in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>.

3598 nodes (2%) are attached to their parents as `nmod:poss`.

3597 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.67065036131184.

The following 18 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2797; 78% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (313; 9% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (271; 8% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (84; 2% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (77; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (26; 1% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (10; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	His	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=organization-preparation:20->21:4:sem-synym-146,157|Entity=(34-abstract-new-cf2-2-sgl(3-person-giv:act-cf1*-1-ana-Lord_Byron)
2	lack	lack	NOUN	NN	Number=Sing	7	nsubj:pass	7:nsubj:pass	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	moderation	moderation	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	Entity=(35-abstract-new-cf3-1-sgl)34)|MSeg=moderat-ion
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	_
7	restricted	restrict	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=restrict-ed
8	to	to	ADP	IN	_	10	case	10:case	_
9	physical	physical	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(36-event-new-cf4-2-sgl|MSeg=physic-al
10	exercise	exercise	NOUN	NN	Number=Sing	7	obl	7:obl:to	Entity=36)|SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nmod:poss	color:blue
1	One	one	NUM	CD	NumForm=Word|NumType=Card	0	root	0:root	Bridge=41<108|Discourse=explanation-evidence:64->65:1:_|Entity=(108-object-acc:inf-cf2-1-sgl
2	of	of	ADP	IN	_	6	case	6:case	_
3	Norton	Norton	PROPN	NNP	Number=Sing	6	nmod:poss	6:nmod:poss	Entity=(1-person-giv:act-cf1*-1-coref-Emperor_Norton
4	's	's	PART	POS	_	3	case	3:case	Entity=1)
5	undated	undated	ADJ	JJ	Degree=Pos|Polarity=Neg	6	amod	6:amod	MSeg=un-dated
6	proclamations	proclamation	NOUN	NNS	Number=Plur	1	nmod	1:nmod:of	Entity=108)|MSeg=proclamation-s

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	Discourse=elaboration-additional:18->17:0:sem-lxchn-124,130,133+lex-indwd-136|Entity=(21-abstract-new-cf3-1-cata)
2	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	best	good	ADJ	JJS	Degree=Sup	0	root	0:root	MSeg=be-st
4	to	to	PART	TO	_	5	mark	5:mark	Entity=(21-abstract-acc:com-cf3-2-coref
5	wash	wash	VERB	VB	VerbForm=Inf	3	csubj	3:csubj	_
6	adults	adult	NOUN	NNS	Number=Plur	8	nmod:poss	8:nmod:poss	Entity=(8-object-giv:inact-cf1-3-coref(9-person-giv:inact-cf2-1-coref|MSeg=adult-s
7	’	's	PART	POS	_	6	case	6:case	Entity=9)
8	overalls	overall	NOUN	NNS	Number=Plur	5	obj	5:obj	Entity=8)|MSeg=over-all-s
9	alone	alone	ADV	RB	Degree=Pos	5	advmod	5:advmod	Entity=21)|MSeg=a-lone|SpaceAfter=No
10	,	,	PUNCT	,	_	9	punct	9:punct	_
11	especially	especially	ADV	RB	Degree=Pos	12	advmod	12:advmod	MSeg=especial-ly
12	men	man	NOUN	NNS	Number=Plur	8	appos	8:appos	Entity=(22-person-new-cf4-1-sgl
13	’s	's	PART	POS	_	12	case	12:case	Entity=22)
14	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


