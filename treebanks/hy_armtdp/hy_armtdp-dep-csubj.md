---
layout: base
title:  'Statistics of csubj in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="hy_armtdp-dep-csubj-pass.html">csubj:pass</a></tt>.

91 nodes (0%) are attached to their parents as `csubj`.

76 instances of `csubj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.27472527472527.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (53; 58% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (18; 20% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (11; 12% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 csubj	color:blue
1	Ուրեմն	ուրեմն	SCONJ	_	_	3	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	զարմանալի	զարմանալի	ADJ	_	Degree=Pos	0	root	_	_
4	չէր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	,	,	PUNCT	_	_	12	mark	_	_
6	որ	որ	SCONJ	_	_	12	mark	_	_
7	հենց	հենց	ADV	_	_	8	advmod	_	_
8	առաջին	առաջին	ADJ	_	Degree=Pos|NumForm=Word|NumType=Ord	9	amod	_	_
9	հայացքից	հայացք	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	12	obl	_	_
10	մեզ	մենք	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	12	obj	_	_
11	ծանոթ	ծանոթ	ADJ	_	Degree=Pos	12	xcomp	_	_
12	թվաց	թվալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	3	csubj	_	SpaceAfter=No
13	։	։	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	Շփոթի	շփոթ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	obl	_	_
2	մեջ	մեջ	ADP	_	AdpType=Post|Case=Nom	1	case	_	_
3	Սիմեոնին	Սիմեոն	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	4	obj	_	_
4	հաջողվեց	հաջողվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
5	գերել	գերել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	csubj	_	_
6	նրանց	նա	DET	_	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	7	det:poss	_	_
7	առաջնորդին	առաջնորդ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	5	obj	_	SpaceAfter=No
8	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj	color:blue
1	Ու	ու	CCONJ	_	_	3	cc	_	_
2	այդ	այդ	DET	_	Distance=Med|PronType=Dem	3	det	_	_
3	պահին	պահ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	0	root	_	_
4	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	_
6	որ	որ	SCONJ	_	_	9	mark	_	_
7	Հաչա	Հաչա	ADJ	_	NameType=Geo|Poss=Yes	8	amod	_	_
8	Քարից	քար	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	9	obl	_	_
9	լսեց	լսել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


