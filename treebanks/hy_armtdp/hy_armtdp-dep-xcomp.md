---
layout: base
title:  'Statistics of xcomp in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `xcomp`

This relation is universal.

135 nodes (1%) are attached to their parents as `xcomp`.

90 instances of `xcomp` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.51851851851852.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (61; 45% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (33; 24% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (20; 15% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (15; 11% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
1	Նախագծողի	նախագծող	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	6	iobj	_	_
2	խելքին	խելք	NOUN	_	Animacy=Inan|Case=Dat|Definite=Def|Number=Sing	6	compound:lvc	_	_
3	ինչ	ինչ	PRON	_	Case=Nom|Number=Sing|PronType=Int	6	obj	_	_
4	՞	՞	PUNCT	_	_	3	punct	_	_
5	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	6	aux	_	_
6	փչել	փչել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
7	այստեղ	այստեղ	ADV	_	PronType=Dem	9	advmod	_	_
8	վանդակապատ	վանդակապատ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	9	obj	_	_
9	դնել	դնել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	6	xcomp	_	SpaceAfter=No
10	...	...	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	Այս	այս	DET	_	Distance=Prox|PronType=Dem	2	det	_	_
2	իրավիճակն	իրավիճակ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	4	obj	_	_
3	իրանցիները	իրանցի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	_
4	համարում	համարել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
5	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	_
6	իրական	իրական	ADJ	_	Degree=Pos	7	amod	_	_
7	հեռանկար	հեռանկար	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	4	xcomp	_	SpaceAfter=No
8	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 xcomp	color:blue
1	Մկաց	Մկաց	ADJ	_	Poss=Yes	2	amod	_	_
2	Աղբյուրը	աղբյուր	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	5	nsubj:pass	_	_
3	սուրբ	սուրբ	ADJ	_	_	5	xcomp	_	_
4	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	5	aux	_	_
5	համարվում	համարել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	ջուրը	ջուր	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	5	conj	_	SpaceAfter=No
8	՝	՝	PUNCT	_	_	9	punct	_	_
9	բուժիչ	բուժիչ	ADJ	_	_	7	orphan	_	SpaceAfter=No
10	։	։	PUNCT	_	_	5	punct	_	_

~~~


