---
layout: base
title:  'Statistics of nmod:tmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_gum-dep-nmod-poss.html">nmod:poss</a></tt>.

415 nodes (0%) are attached to their parents as `nmod:tmod`.

388 instances of `nmod:tmod` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.74939759036145.

The following 12 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (191; 46% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (126; 30% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (28; 7% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (22; 5% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (18; 4% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (16; 4% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod:tmod	color:blue
1	January	January	PROPN	NNP	Number=Sing	7	compound	7:compound	Discourse=elaboration-additional:38->29:3|Entity=(71-abstract-new-cf3-3,7-sgl(72-time-new-cf5-1,3-sgl|SpaceAfter=No|XML=<date from:::"2016-01" to:::"2016-06"><w>
2	-	-	SYM	SYM	_	3	case	3:case	SpaceAfter=No
3	june	June	PROPN	NNP	Number=Sing|Typo=Yes	1	nmod	1:nmod:minus	CorrectForm=June|Entity=(73-time-new-cf4-2-sgl|XML=<sic ana:::"June"></sic></w>
4	2016	2016	NUM	CD	NumForm=Digit|NumType=Card	1	nmod:tmod	1:nmod:tmod	Entity=(63-time-giv:inact-cf1-1-coref)73)72)|XML=</date>
5	philippine	Philippine	ADJ	JJ	Degree=Pos|Typo=Yes	7	amod	7:amod	CorrectForm=Philippine|XML=<sic ana:::"Philippine"></sic>
6	power	power	NOUN	NN	Number=Sing	7	compound	7:compound	Entity=(56-abstract-giv:inact-cf2-1-coref)
7	demand	demand	NOUN	NN	Number=Sing	0	root	0:root	Entity=71)

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod:tmod	color:blue
1	Friday	Friday	PROPN	NNP	Number=Sing	0	root	0:root	Discourse=context-circumstance:3->4:2|Entity=(5-time-acc:com-cf1-1-coref)|SpaceAfter=No|XML=<date when:::"2009-05-08" rend:::"bold">
2	,	,	PUNCT	,	_	4	punct	4:punct	_
3	May	May	PROPN	NNP	Number=Sing	4	compound	4:compound	Entity=(5-time-giv:act-cf1-2-appos
4	8	8	NUM	CD	NumForm=Digit|NumType=Card	1	appos	1:appos	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	2009	2009	NUM	CD	NumForm=Digit|NumType=Card	4	nmod:tmod	4:nmod:tmod	Entity=(6-time-new-cf2-1-sgl)5)|XML=</date>

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:tmod	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	Discourse=context-circumstance:46->47:2|Entity=(44-time-new-cf1-1-cata)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	about	about	ADV	RB	_	4	advmod	4:advmod	Entity=(44-time-new-cf1-2-coref
4	4:00	4:00	NUM	CD	NumForm=Word|NumType=Card	0	root	0:root	_
5	p.m.	p.m.	NOUN	NN	Abbr=Yes|Number=Sing	4	nmod:tmod	4:nmod:tmod	Entity=44)

~~~


