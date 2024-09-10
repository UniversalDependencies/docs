---
layout: base
title:  'Statistics of nmod:tmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_gum-dep-nmod-poss.html">nmod:poss</a></tt>.

428 nodes (0%) are attached to their parents as `nmod:tmod`.

401 instances of `nmod:tmod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.74065420560748.

The following 13 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (192; 45% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (130; 30% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (31; 7% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (22; 5% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (20; 5% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (18; 4% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod:tmod	color:blue
1	January	January	PROPN	NNP	Number=Sing	7	compound	7:compound	Discourse=elaboration-additional:38->29:3:sem-synym-241,323|Entity=(71-abstract-new-cf3-3,7-sgl(72-time-new-cf5-1,3-sgl|SpaceAfter=No|XML=<date from:::"2016-01" to:::"2016-06"><w>
2	-	-	SYM	SYM	_	3	case	3:case	SpaceAfter=No
3	june	June	PROPN	NNP	Number=Sing|Typo=Yes	1	nmod	1:nmod:minus	CorrectForm=June|Entity=(73-time-new-cf4-2-sgl|XML=<sic ana:::"June"></sic></w>
4	2016	2016	NUM	CD	NumForm=Digit|NumType=Card	1	nmod:tmod	1:nmod:tmod	Entity=(63-time-giv:inact-cf1-1-coref)73)72)|XML=</date>
5	philippine	Philippine	ADJ	JJ	Degree=Pos|Typo=Yes	7	amod	7:amod	CorrectForm=Philippine|XML=<sic ana:::"Philippine"></sic>
6	power	power	NOUN	NN	Number=Sing	7	compound	7:compound	Entity=(56-abstract-giv:inact-cf2-1-coref)
7	demand	demand	NOUN	NN	Number=Sing	0	root	0:root	Entity=71)

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:tmod	color:blue
1	August	August	PROPN	NNP	Number=Sing	2	compound	2:compound	Discourse=context-circumstance:1->3:5:lex-indph-1-4|Entity=(1-time-new-cf1-2-sgl|XML=<date when:::"1975-08-19">
2	19	19	NUM	CD	NumForm=Digit|NumType=Card	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	,	_	4	punct	4:punct	_
4	1975	1975	NUM	CD	NumForm=Digit|NumType=Card	2	nmod:tmod	2:nmod:tmod	Entity=(2-time-new-cf2-1-coref)1)|XML=</date>

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:tmod	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	Discourse=context-circumstance:46->47:2:_|Entity=(44-time-new-cf1-1-cata)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	about	about	ADV	RB	_	4	advmod	4:advmod	Entity=(44-time-new-cf1-2-coref
4	4:00	4:00	NUM	CD	NumForm=Digit|NumType=Card	0	root	0:root	_
5	p.m.	p.m.	NOUN	NN	Abbr=Yes|Number=Sing	4	nmod:tmod	4:nmod:tmod	Entity=44)

~~~


