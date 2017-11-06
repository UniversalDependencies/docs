---
layout: base
title:  'Statistics of xcomp in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `xcomp`

This relation is universal.

8741 nodes (1%) are attached to their parents as `xcomp`.

8289 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78080311177211.

The following 15 pairs of parts of speech are connected with `xcomp`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (8680; 99% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (13; 0% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="ru_syntagrus-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-dep-_.html">_</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Алгоритм	алгоритм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	может	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	быть	быть	AUX	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	aux:pass	4:aux:pass	_
4	записан	записывать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	xcomp	2:xcomp	_
5	словами	слово	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Plur	4	obl	4:obl	_
6	и	и	CCONJ	_	_	7	cc	7:cc	_
7	изображён	изображать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	4	conj	4:conj	_
8	схематически	схематически	ADV	_	Degree=Pos	7	advmod	7:advmod	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp	color:blue
1	Некому	некого	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	0	root	0:root	_
2	было	быть	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	cop	1:cop	_
3	бы	бы	PART	_	Mood=Cnd	1	aux	1:aux	_
4	уничтожать	уничтожать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	_
5	гниющие	гнить	VERB	_	Animacy=Inan|Aspect=Imp|Case=Acc|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	6:amod	_
6	остатки	остатки	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	4	obj	4:obj	_
7	растений	растение	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	6	nmod	6:nmod	_
8	и	и	CCONJ	_	_	9	cc	9:cc	_
9	животных	животное	NOUN	_	Animacy=Anim|Case=Gen|Gender=Neut|Number=Plur	7	conj	7:conj	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	9:punct	_
11	и	и	CCONJ	_	_	14	cc	14:cc	_
12	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1	14	nsubj	14:nsubj	_
13	бы	бы	PART	_	Mood=Cnd	14	aux	14:aux	_
14	утопали	утопать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	1:conj	_
15	в	в	ADP	_	_	16	case	16:case	_
16	них	они	PRON	_	Case=Loc|Number=Plur|Person=3	14	obl	14:obl	SpaceAfter=No
17	.	.	PUNCT	_	_	16	punct	16:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 xcomp	color:blue
1	Однако	однако	ADV	_	Degree=Pos	4	advmod	4:advmod	_
2	в	в	ADP	_	_	3	case	3:case	_
3	геологии	геология	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	4	nmod	4:nmod	_
4	известно	известный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	0:root	_
5	более	более	ADV	_	Degree=Cmp	6	advmod	6:advmod	_
6	точно	точно	ADV	_	Degree=Pos	4	advmod	4:advmod	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	6:punct	_
8	что	что	PRON	_	Case=Nom	4	orphan	8.1:nsubj	_
8.1	_	_	_	_	_	_	_	4:nsubj	_
9	и	и	CCONJ	_	_	11	cc	11:cc	_
10	как	как	ADV	_	Degree=Pos	11	advmod	11:advmod	_
11	эволюционировало	эволюционировать	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	orphan	8.1:conj	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	11:punct	_
13	и	и	CCONJ	_	_	15	cc	15:cc	_
14	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1	15	nsubj	15:nsubj	_
15	умеем	уметь	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	4:conj	_
16	датировать	датировать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	15	xcomp	15:xcomp	_
17	события	событие	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	16	obj	16:obj	SpaceAfter=No
18	.	.	PUNCT	_	_	17	punct	17:punct	_

~~~


