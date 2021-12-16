---
layout: base
title:  'Statistics of obl:agent in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ru_syntagrus-dep-obl-tmod.html">obl:tmod</a></tt>.

613 nodes (0%) are attached to their parents as `obl:agent`.

563 instances of `obl:agent` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76835236541599.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (465; 76% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (89; 15% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (58; 9% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:agent	color:blue
1	Как	как	ADV	_	Degree=Pos	2	advmod	2:advmod	_
2	много	много	ADV	_	Degree=Pos	4	advmod	4:advmod	_
3	может	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	значить	значить	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
5	образ	образ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj|4:nsubj	_
6	города	город	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod:gen	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	8:punct	_
8	созданный	создать	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	acl	5:acl	_
9	кинематографом	кинематограф	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	8	obl:agent	8:obl:agent	SpaceAfter=No
10	!	!	PUNCT	_	_	3	punct	3:punct	_~

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:agent	color:blue
1	Нами	мы	PRON	_	Case=Ins|Number=Plur|Person=1	2	obl:agent	2:obl:agent	_
2	оплачиваемое	оплачивать	VERB	_	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	естественно	естественно	ADV	_	Degree=Pos	2	parataxis	2:parataxis	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	2:punct	_~

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:agent	color:blue
1	Иногда	иногда	ADV	_	Degree=Pos	2	advmod	2:advmod	_
2	собирали	собирать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	картофель	картофель	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	2:obj	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	6:punct	_
5	насильно	насильно	ADV	_	Degree=Pos	6	advmod	6:advmod	_
6	введенный	ввести	VERB	_	Animacy=Inan|Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	3	acl	3:acl	_
7	Екатериной	Екатерина	PROPN	_	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	6	obl:agent	6:obl:agent	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	_~

~~~


