---
layout: base
title:  'Statistics of vocative in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `vocative`

This relation is universal.

15 nodes (0%) are attached to their parents as `vocative`.

13 instances of `vocative` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.6.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (6; 40% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (4; 27% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (3; 20% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 vocative	color:blue
1	Вот	вот	PART	_	_	2	advmod	2:advmod	_
2	вы	вы	PRON	_	Case=Nom|Number=Plur|Person=2	6	nsubj	6:nsubj	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	дедуль	дедуля	NOUN	_	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	6	vocative	6:vocative	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	перевесьте	перевешивать	VERB	_	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	свою	свой	DET	_	Case=Acc|Gender=Fem|Number=Sing	8	amod	8:amod	_
8	грудинку	грудинка	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	6	obj	6:obj	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 vocative	color:blue
1	Ну	ну	PART	_	_	2	advmod	2:advmod	_
2	так	так	ADV	_	Degree=Pos	9	advmod	9:advmod	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	Господи	господь	PROPN	_	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	9	vocative	9:vocative	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	с	с	ADP	_	_	7	case	7:case	_
7	кем	кто	PRON	_	Case=Ins	9	obl	9:obl	_
8	не	не	PART	_	_	9	advmod	9:advmod	_
9	бывает	бывать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
10	?	?	PUNCT	_	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Господи	господь	NOUN	_	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	3	vocative	3:vocative	SpaceAfter=No
2	!	!	PUNCT	_	_	1	punct	1:punct	_
3	недопустимо	недопустимый	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	0:root	_
4	так	так	ADV	_	Degree=Pos	5	advmod	5:advmod	_
5	унижать	унижать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	3	nsubj	3:nsubj	_
6	людей	человек	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	5	obj	5:obj	SpaceAfter=No
7	!	!	PUNCT	_	_	6	punct	6:punct	_

~~~


