---
layout: base
title:  'Statistics of ccomp in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `ccomp`

This relation is universal.

184 nodes (1%) are attached to their parents as `ccomp`.

181 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.15760869565217.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (138; 75% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (19; 10% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (14; 8% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="hy_armtdp-pos-PART.html">PART</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	Երկու	երկու	NUM	_	NumForm=Word|NumType=Card	2	nummod	_	_
2	դեպքում	դեպք	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	4	obl	_	_
3	էլ	էլ	ADV	_	_	2	advmod:emph	_	_
4	տեսանք	տեսնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	mark	_	_
6	թե	թե	SCONJ	_	_	8	mark	_	_
7	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	8	obj	_	_
8	եղավ	լինել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	4	ccomp	_	_
9	հետո	հետո	ADV	_	_	8	advmod	_	SpaceAfter=No
10	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	–	–	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Կարծում	կարծել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
3	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	SpaceAfter=No
4	՝	՝	PUNCT	_	_	5	punct	_	_
5	սերնդափոխություն	սերնդափոխություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	ccomp	_	_
6	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	5	cop	_	SpaceAfter=No
7	:	:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	Միաժամանակ	միաժամանակ	ADV	_	_	2	advmod	_	_
2	համարում	համարել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
3	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	SpaceAfter=No
4	,	,	PUNCT	_	_	9	punct	_	_
5	որ	որ	SCONJ	_	_	9	mark	_	_
6	այսօրվա	այսօր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	8	nmod:poss	_	_
7	հայ	հայ	ADJ	_	Degree=Pos	8	amod	_	_
8	դիվանագիտությունը	դիվանագիտություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	9	nsubj	_	_
9	պատրաստ	պատրաստ	ADJ	_	Degree=Pos	2	ccomp	_	_
10	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	9	cop	_	_
11	նույնիսկ	նույնիսկ	PART	_	_	12	advmod:emph	_	_
12	դրան	դա	PRON	_	Animacy=Nhum|Case=Dat|Distance=Dist|Number=Sing|PronType=Dem	9	obl	_	SpaceAfter=No
13	:	:	PUNCT	_	_	2	punct	_	_

~~~


