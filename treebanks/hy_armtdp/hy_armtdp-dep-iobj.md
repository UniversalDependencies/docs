---
layout: base
title:  'Statistics of iobj in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="hy_armtdp-dep-iobj-agent.html">iobj:agent</a></tt>.

55 nodes (0%) are attached to their parents as `iobj`.

30 instances of `iobj` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32727272727273.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (31; 56% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (14; 25% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (8; 15% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (2; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Շտաբն	շտաբ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	_
2	ու	ու	CCONJ	_	_	3	cc	_	_
3	գեներալներն	գեներալ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	1	conj	_	_
4	արգելեցին	արգելել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	ժուռնալիստներին	ժուռնալիստ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	4	iobj	_	_
6	մեր	մենք	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	8	obl	_	_
7	ետևից	ետև	ADP	_	AdpType=Post|Case=Abl	6	case:loc	_	_
8	խորանալ	խորանալ	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	xcomp	_	SpaceAfter=No
9	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 iobj	color:blue
1	Անհայտությունն	անհայտություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	_
2	առաջին	առաջին	ADJ	_	Degree=Pos|NumForm=Word|NumType=Ord	3	amod	_	_
3	անգամ	անգամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obl	_	_
4	նրան	նա	PRON	_	Case=Dat|Definite=Def|Number=Sing|Person=3|PronType=Prs	7	iobj	_	_
5	վախ	վախ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obj	_	_
6	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	7	aux	_	_
7	ներշնչում	ներշնչել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
8	:	:	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 iobj	color:blue
1	Էլ	էլ	ADV	_	_	2	advmod:emph	_	_
2	ով	ով	PRON	_	Case=Nom|Number=Sing|PronType=Int	4	nsubj	_	_
3	՞	՞	PUNCT	_	_	2	punct	_	_
4	կհամարձակվեր	համարձակվել	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	_
5	Հարութին	Հարութ	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	8	iobj	_	_
6	երկրորդ	երկրորդ	ADJ	_	NumForm=Word|NumType=Ord	7	amod	_	_
7	հարցը	հարց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	8	obj	_	_
8	տար	տալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	4	xcomp	_	_
9	կամ	կամ	CCONJ	_	ConjType=Comp	11	cc	_	_
10	հաշիվ	հաշիվ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	11	compound:lvc	_	_
11	պահանջեր	պահանջել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	8	conj	_	SpaceAfter=No
12	։	։	PUNCT	_	_	4	punct	_	_

~~~


