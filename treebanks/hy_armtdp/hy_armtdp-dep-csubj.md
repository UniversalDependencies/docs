---
layout: base
title:  'Statistics of csubj in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="hy_armtdp-dep-csubj-pass.html">csubj:pass</a></tt>.

43 nodes (0%) are attached to their parents as `csubj`.

36 instances of `csubj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3953488372093.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (29; 67% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (9; 21% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	Դա	դա	PRON	_	Case=Nom|Distance=Med|Number=Sing|PronType=Dem	2	nsubj	_	_
2	հստակ	հստակ	ADJ	_	Degree=Pos	0	root	_	_
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	և	և	CCONJ	_	_	5	cc	_	_
5	պետք	պետք	ADJ	_	_	2	conj	_	_
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	_
7	ընդունել	ընդունել	VERB	_	Polarity=Pos|VerbForm=Inf|Voice=Act	5	csubj	_	SpaceAfter=No
8	:	:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 csubj	color:blue
1	Կդառնա	դառնալ	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	9	csubj	_	_
2	այդ	այդ	DET	_	Distance=Med|PronType=Dem	3	det	_	_
3	դիսկուրսն	դիսկուրս	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	1	nsubj	_	_
4	իրականություն	իրականություն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	1	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	թե	թե	CCONJ	_	_	7	cc	_	_
7	ոչ	ոչ	PART	_	_	1	conj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	կախված	կախվել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	_
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	aux	_	_
11	արդեն	արդեն	ADV	_	_	9	advmod	_	_
12	մարտավարական	մարտավարական	ADJ	_	_	13	amod	_	_
13	քայլերից	քայլ	NOUN	_	Animacy=Inan|Case=Abl|Definite=Ind|Number=Plur	9	obl	_	SpaceAfter=No
14	:	:	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 csubj	color:blue
1	Ճիշտ	ճիշտ	ADJ	_	Degree=Pos	0	root	_	_
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	,	,	PUNCT	_	_	11	punct	_	_
4	հերոսություն	հերոսություն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	5	obj	_	_
5	անելը	անել	VERB	_	Case=Nom|Definite=Def|Number=Coll|Polarity=Pos|Subcat=Tran|VerbForm=Gdv|Voice=Act	11	nsubj	_	_
6	նրանց	նա	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	11	obj	_	SpaceAfter=No
7	`	`	PUNCT	_	_	8	punct	_	_
8	զինվորների	զինվոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	6	appos	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	նաև	նաև	CCONJ	_	ConjType=Comp	11	advmod:emph	_	_
11	առաքելությունն	առաքելություն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	1	csubj	_	_
12	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	cop	_	SpaceAfter=No
13	:	:	PUNCT	_	_	1	punct	_	_

~~~


