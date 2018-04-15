---
layout: base
title:  'Statistics of nmod in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="hy_armtdp-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="hy_armtdp-dep-nmod-poss.html">nmod:poss</a></tt>.

156 nodes (1%) are attached to their parents as `nmod`.

156 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83333333333333.

The following 7 pairs of parts of speech are connected with `nmod`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (59; 38% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (52; 33% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (36; 23% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-X.html">X</a></tt> (6; 4% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod	color:blue
1	Ելք	ելք	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	2	nsubj	_	_
2	չկար	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
3	.	.	PUNCT	_	_	12	punct	_	_
4	դարբինը	դարբին	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	12	nsubj	_	_
5	նույնիսկ	նույնիսկ	PART	_	_	6	advmod	_	_
6	մի	մի	NUM	_	NumForm=Word|NumType=Card	7	nummod	_	_
7	պարկ	պարկ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	8	nmod	_	_
8	ալյուր	ալյուր	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Coll	12	obj	_	_
9	էլ	էլ	PART	_	_	8	advmod:emph	_	_
10	ավել	ավել	ADJ	_	_	8	acl	_	_
11	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	12	aux	_	_
12	խոստացել	խոստանալ	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	2	parataxis	_	SpaceAfter=No
13	։	։	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	ՀՀ	ՀՀ	PROPN	_	Abbr=Yes|Animacy=Inan|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	2	nmod	_	_
2	վարչապետի	վարչապետ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	3	nmod:poss	_	_
3	կարծիքով	կարծիք	NOUN	_	Animacy=Inan|Case=Ins|Definite=Ind|Number=Sing	7	parataxis	_	SpaceAfter=No
4	՝	՝	PUNCT	_	_	7	punct	_	_
5	«	«	PUNCT	_	_	7	punct	_	SpaceAfter=No
6	մենք	մենք	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
7	կկարողանանք	կարողանալ	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Plur|Person=1|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
8	այս	այս	DET	_	Distance=Prox|PronType=Dem	9	det	_	_
9	տարի	տարի	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	7	obl	_	_
10	հասնել	հասնել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	7	xcomp	_	_
11	3.2	3,2	NUM	_	NumForm=Digit|NumType=Frac|Typo=Yes	12	nummod	_	_
12	տոկոս	տոկոս	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	14	nmod	_	_
13	տնտեսական	տնտեսական	ADJ	_	_	14	amod	_	_
14	աճի	աճ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	10	obj	_	SpaceAfter=No
15	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
16	:	:	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	Մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	2	det:poss	_	_
2	զրուցակիցն	զրուցակից	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	0	root	_	_
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	քաղաքական	քաղաքական	ADJ	_	Degree=Pos	5	amod	_	_
5	մեկնաբան	մեկնաբան	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	6	nmod	_	_
6	Լևոն	Լևոն	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	nsubj	_	_
7	Մարգարյանը	Մարգարյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	6	flat	_	SpaceAfter=No
8	։	։	PUNCT	_	_	2	punct	_	_

~~~


