---
layout: base
title:  'Statistics of det in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="hy_armtdp-dep-det-poss.html">det:poss</a></tt>.

588 nodes (3%) are attached to their parents as `det`.

588 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32142857142857.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (557; 95% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (15; 3% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PART.html">PART</a></tt> (8; 1% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="hy_armtdp-pos-PART.html">PART</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-DET.html">DET</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Հեռանկարում	հեռանկար	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	2	obl	_	_
2	նախատեսվում	նախատեսել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	_
3	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	_
4	այլ	այլ	DET	_	PronType=Ind	5	det	_	_
5	բեմադրությունների	բեմադրություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	6	nmod:poss	_	_
6	առաջնախաղեր	առաջնախաղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	2	nsubj:pass	_	SpaceAfter=No
7	:	:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Զգաց	զգալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	որ	որ	SCONJ	_	_	4	mark	_	_
4	ուզում	ուզել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	1	ccomp	_	_
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	_
6	չլինել	լինել	VERB	_	Polarity=Neg|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	xcomp	_	_
7	այս	այս	DET	_	Distance=Prox|PronType=Dem	8	det	_	_
8	բոլորի	բոլորը	PRON	_	Case=Gen|PronType=Tot	6	obl	_	_
9	մեջ	մեջ	ADP	_	AdpType=Post|Case=Nom	8	case	_	SpaceAfter=No
10	։	։	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
1	Հայ	հայ	ADJ	_	Degree=Pos	2	amod	_	_
2	ոստիկանները	ոստիկան	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	7	nsubj	_	_
3	ոչ	ոչ	PART	_	_	5	det	_	_
4	մի	մի	DET	_	PronType=Art	3	fixed	_	_
5	անգամ	անգամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obl	_	_
6	բռնություն	բռնություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obj	_	_
7	չկիրառեցին	կիրառել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	:	:	PUNCT	_	_	7	punct	_	_

~~~


