---
layout: base
title:  'Statistics of nmod:tmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_gum-dep-nmod-poss.html">nmod:poss</a></tt>.

388 nodes (0%) are attached to their parents as `nmod:tmod`.

364 instances of `nmod:tmod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.83247422680412.

The following 15 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (184; 47% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (118; 30% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (21; 5% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (18; 5% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (14; 4% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (13; 3% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod:tmod	color:blue
1	January	January	PROPN	NNP	Number=Sing	7	compound	7:compound	Discourse=elaboration:37->28:3|Entity=(abstract-71-new-3,7-sgl(time-72-new-1,3-sgl|SpaceAfter=No|XML=<date from:::"2016-01" to:::"2016-06"><w>
2	-	-	SYM	SYM	_	3	case	3:case	SpaceAfter=No
3	june	June	PROPN	NNP	Number=Sing	1	nmod	1:nmod:minus	Entity=(time-73-new-2-sgl|XML=<sic></sic></w>
4	2016	2016	NUM	CD	NumForm=Digit|NumType=Card	1	nmod:tmod	1:nmod:tmod	Entity=(time-63-giv:inact-1-coref)73)72)|XML=</date>
5	philippine	Philippine	ADJ	JJ	Degree=Pos|Typo=Yes	7	amod	7:amod	XML=<sic></sic>
6	power	power	NOUN	NN	Number=Sing	7	compound	7:compound	Entity=(abstract-56-giv:inact-1-coref)
7	demand	demand	NOUN	NN	Number=Sing	0	root	0:root	Entity=71)

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod:tmod	color:blue
1	Friday	Friday	PROPN	NNP	Number=Sing	0	root	0:root	Discourse=circumstance:3->4:2|Entity=(time-5-acc:com-1-coref)|SpaceAfter=No|XML=<date when:::"2009-05-08" rend:::"bold">
2	,	,	PUNCT	,	_	4	punct	4:punct	_
3	May	May	PROPN	NNP	Number=Sing	4	compound	4:compound	Entity=(time-5-giv:act-2-appos
4	8	8	NUM	CD	NumForm=Digit|NumType=Card	1	appos	1:appos	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	2009	2009	NUM	CD	NumForm=Digit|NumType=Card	4	nmod:tmod	4:nmod:tmod	Entity=(time-6-new-1-sgl)5)|XML=</date>

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:tmod	color:blue
1	Wednesday	Wednesday	PROPN	NNP	Number=Sing	0	root	0:root	Discourse=circumstance:3->1:1|Entity=(time-7-acc:com-1-sgl)|SpaceAfter=No|XML=<date when:::"2011-04-13" rend:::"bold">
2	,	,	PUNCT	,	_	4	punct	4:punct	_
3	April	April	PROPN	NNP	Number=Sing	4	nmod:tmod	4:nmod:tmod	Entity=(time-8-new-2-sgl
4	13	13	NUM	CD	NumForm=Digit|NumType=Card	1	appos	1:appos	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	2011	2011	NUM	CD	NumForm=Digit|NumType=Card	4	nmod:tmod	4:nmod:tmod	Entity=(time-9-new-1-sgl)8)|XML=</date>

~~~


