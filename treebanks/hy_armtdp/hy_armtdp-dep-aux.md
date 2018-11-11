---
layout: base
title:  'Statistics of aux in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="hy_armtdp-dep-aux-caus.html">aux:caus</a></tt>.

1098 nodes (5%) are attached to their parents as `aux`.

658 instances of `aux` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1183970856102.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (1029; 94% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PART.html">PART</a></tt> (33; 3% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (27; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Հեռանկարում	հեռանկար	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	2	obl	_	_
2	նախատեսվում	նախատեսել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	_
3	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	_
4	այլ	այլ	DET	_	PronType=Ind	5	det	_	_
5	բեմադրությունների	բեմադրություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	6	nmod:poss	_	_
6	առաջնախաղեր	առաջնախաղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	2	nsubj:pass	_	SpaceAfter=No
7	:	:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux	color:blue
1	—	—	PUNCT	_	_	11	punct	_	_
2	Ինչ	ինչ	DET	_	PronType=Exc	3	det	_	_
3	գնով	գին	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	5	obl	_	_
4	էլ	էլ	ADV	_	_	3	advmod:emph	_	_
5	լինի	լինել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	11	advcl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	_
7	վաղը	վաղը	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	11	obl	_	_
8	երեկոյան	երեկոյան	ADV	_	_	7	appos	_	_
9	պետք	պետք	PART	_	Mood=Nec|Polarity=Pos	11	aux	_	_
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	_
11	լինենք	լինել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=1|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
12	Կողոնիայում	Կողոնիա	PROPN	_	Animacy=Nhum|Case=Loc|Definite=Ind|NameType=Geo|Number=Sing	11	obl	_	SpaceAfter=No
13	:	:	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 aux	color:blue
1	Բարեբախտաբար	բարեբախտաբար	PART	_	_	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	7	punct	_	_
3	իմ	ես	DET	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	աշխատանքի	աշխատանք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	obl	_	_
5	հանդեպ	հանդեպ	ADP	_	AdpType=Post	4	case	_	_
6	երբեք	երբեք	ADV	_	_	7	advmod	_	_
7	անտարբեր	անտարբեր	ADJ	_	Degree=Pos	0	root	_	_
8	չեն	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	cop	_	_
9	եղել	լինել	AUX	_	Aspect=Perf|VerbForm=Part	7	aux	_	SpaceAfter=No
10	:	:	PUNCT	_	_	7	punct	_	_

~~~


