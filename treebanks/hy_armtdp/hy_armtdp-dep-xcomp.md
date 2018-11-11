---
layout: base
title:  'Statistics of xcomp in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `xcomp`

This relation is universal.

313 nodes (1%) are attached to their parents as `xcomp`.

222 instances of `xcomp` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.69968051118211.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (138; 44% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (83; 27% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (40; 13% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (39; 12% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp	color:blue
1	Խոստացել	խոստանալ	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
2	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	1	aux	_	_
3	երեխային	երեխա	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	4	obj	_	_
4	սպանել	սպանել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	1	xcomp	_	_
5	հենց	հենց	ADV	_	_	6	advmod	_	_
6	ծնվի	ծնվել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	advcl	_	SpaceAfter=No
7	։	։	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Մամուլի	մամուլ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	2	nmod:poss	_	_
2	տեղեկություններով	տեղեկություն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	5	parataxis	_	SpaceAfter=No
3	՝	՝	PUNCT	_	_	5	punct	_	_
4	նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	կդառնա	դառնալ	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
6	պաշտպանության	պաշտպանություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	nmod:poss	_	_
7	նախարար	նախարար	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	5	xcomp	_	SpaceAfter=No
8	։	։	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp	color:blue
1	Բայց	բայց	CCONJ	_	_	6	cc	_	_
2	նրան	նա	PRON	_	Case=Dat|Definite=Def|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
3	մինչ	մինչ	ADP	_	AdpType=Prep	4	case	_	_
4	այդ	այդ	PRON	_	Distance=Med|Number=Sing|PronType=Dem	6	obl	_	_
5	չէինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Imp|VerbForm=Fin	6	aux	_	_
6	տեսել	տեսնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	ոչինչ	ոչինչ	PRON	_	PronType=Neg	10	obj	_	_
9	չէինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Imp|VerbForm=Fin	10	aux	_	_
10	կարող	կարող	ADJ	_	Degree=Pos	6	conj	_	_
11	ասել	ասել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	10	xcomp	_	SpaceAfter=No
12	։	։	PUNCT	_	_	6	punct	_	_

~~~


