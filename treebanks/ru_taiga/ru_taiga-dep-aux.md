---
layout: base
title:  'Statistics of aux in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ru_taiga-dep-aux-pass.html">aux:pass</a></tt>.

433 nodes (0%) are attached to their parents as `aux`.

287 instances of `aux` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.65357967667436.

The following 10 pairs of parts of speech are connected with `aux`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (368; 85% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (25; 6% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (16; 4% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (13; 3% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	@screened-200	@screened-200	PROPN	_	NameType=Prs	2	vocative	_	_
2	спасибо	спасибо	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	большое	большой	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	amod	_	_
4	❤️🙌	❤️🙌	SYM	_	_	2	discourse	_	SpaceAfter=No
5	будем	быть	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	_	_
6	иметь	иметь	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	2	parataxis	_	_
7	ввиду	ввиду	ADV	_	Degree=Pos	6	advmod	_	SpaceAfter=No
8	😍	😍	SYM	_	_	6	discourse	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Было	быть	AUX	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
2	бы	бы	AUX	_	Mood=Cnd	3	aux	_	_
3	круто	крутой	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
4	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 aux	color:blue
1	Если	если	SCONJ	_	_	7	mark	_	_
2	бы	бы	AUX	_	Mood=Cnd	7	aux	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	конечно	конечно	ADV	_	Degree=Pos	7	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	оно	оно	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	так	так	ADV	_	Degree=Pos|PronType=Dem	0	root	_	_
8	и	и	PART	_	_	7	advmod	_	_
9	было	быть	AUX	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


