---
layout: base
title:  'Statistics of nsubj:pass in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="hy_armtdp-dep-nsubj-caus.html">nsubj:caus</a></tt>.

97 nodes (0%) are attached to their parents as `nsubj:pass`.

52 instances of `nsubj:pass` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71134020618557.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (77; 79% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (14; 14% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (5; 5% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 nsubj:pass	color:blue
1	Հեռանկարում	հեռանկար	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	2	obl	_	_
2	նախատեսվում	նախատեսել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	_
3	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	_
4	այլ	այլ	DET	_	PronType=Ind	5	det	_	_
5	բեմադրությունների	բեմադրություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	6	nmod:poss	_	_
6	առաջնախաղեր	առաջնախաղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	2	nsubj:pass	_	SpaceAfter=No
7	:	:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Պառավաքարում	Պառավաքար	PROPN	_	Animacy=Nhum|Case=Loc|Definite=Ind|NameType=Geo|Number=Sing	3	obl	_	_
2	նրանք	նա	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj:pass	_	_
3	հյուրընկալվեցին	հյուրընկալել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
4	հաշմանդամություն	հաշմանդամություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	obj	_	_
5	ունեցող	ունենալ	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	6	acl	_	_
6	բնակչի	բնակիչ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	7	nmod:poss	_	_
7	տանը	տուն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	3	obl	_	SpaceAfter=No
8	։	։	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nsubj:pass	color:blue
1	—	—	PUNCT	_	_	3	punct	_	_
2	Հնարավոր	հնարավոր	ADJ	_	Degree=Pos	3	xcomp	_	_
3	համարում	համարել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
4	՞	՞	PUNCT	_	_	3	punct	_	_
5	եք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	_
7	որ	որ	SCONJ	_	_	11	mark	_	_
8	Սերժ	Սերժ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	11	nsubj:pass	_	_
9	Սարգսյանը	Սարգսյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	8	flat	_	_
10	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	առաջադրվի	առաջադրել	VERB	_	Aspect=Prosp|Connegative=Yes|Mood=Cnd|Subcat=Intr|VerbForm=Fin|Voice=Pass	3	ccomp	_	_
12	վարչապետի	վարչապետ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	13	nmod:poss	_	_
13	թեկնածու	թեկնածու	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	11	obl	_	SpaceAfter=No
14	։	։	PUNCT	_	_	3	punct	_	_

~~~


