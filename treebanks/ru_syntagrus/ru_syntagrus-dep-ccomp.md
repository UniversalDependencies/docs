---
layout: base
title:  'Statistics of ccomp in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `ccomp`

This relation is universal.

914 nodes (0%) are attached to their parents as `ccomp`.

810 instances of `ccomp` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.10393873085339.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (880; 96% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (14; 2% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (11; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 ccomp	color:blue
1	Ложась	ложиться	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Mid	6	advcl	6:advcl	_
2	спать	спать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	6:nsubj	_
5	не	не	PART	_	_	6	advmod	6:advmod	_
6	понимал	понимать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	6:punct	_
8	куда	куда	ADV	_	Degree=Pos	9	advmod	9:advmod	_
9	девалось	деваться	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	6	ccomp	6:ccomp	_
10	время	время	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	nsubj	9:nsubj	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Как-то	как-то	ADV	_	Degree=Pos	3	advmod	3:advmod	_
2	мне	я	PRON	_	Case=Dat|Number=Sing|Person=1	3	obl	3:obl	_
3	сказали	сказать	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	:	:	PUNCT	_	_	3	punct	3:punct	_
5	ничего	ничего	PART	_	_	7	parataxis	7:parataxis	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	5:punct	_
7	скоро	скоро	ADV	_	Degree=Pos	3	ccomp	3:ccomp	_
8	будут	быть	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
9	специальные	специальный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	10	amod	10:amod	_
10	чипы	чип	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	7	nsubj	7:nsubj	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	Помните	помнить	VERB	_	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	-	-	PUNCT	_	_	1	punct	1:punct	_
3	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1	1	ccomp	1:ccomp	_
4	еще	еще	ADV	_	Degree=Pos	3	advmod	3:advmod	_
5	есть	быть	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	5:punct	_
7	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1	9	nsubj	9:nsubj	_
8	пока	пока	ADV	_	Degree=Pos	9	advmod	9:advmod	_
9	остаемся	оставаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	3	conj	3:conj	_
10	действующим	действовать	VERB	_	Aspect=Imp|Case=Ins|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	11	amod	11:amod	_
11	лицом	лицо	NOUN	_	Animacy=Anim|Case=Ins|Gender=Neut|Number=Sing	9	obl	9:obl	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	11:punct	_

~~~


