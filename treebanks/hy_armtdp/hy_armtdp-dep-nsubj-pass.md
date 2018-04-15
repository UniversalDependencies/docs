---
layout: base
title:  'Statistics of nsubj:pass in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="hy_armtdp-dep-nsubj-caus.html">nsubj:caus</a></tt>.

57 nodes (0%) are attached to their parents as `nsubj:pass`.

29 instances of `nsubj:pass` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.31578947368421.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (47; 82% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (8; 14% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 nsubj:pass	color:blue
1	Փարիզում	Փարիզ	PROPN	_	Animacy=Inan|Case=Loc|Definite=Ind|NameType=Geo|Number=Sing	2	obl	_	_
2	բացվել	բացել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	_
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	_
4	Զաբել	Զաբել	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	6	nmod:poss	_	_
5	Եսայանի	Եսայան	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Sur|Number=Sing	4	flat	_	_
6	անվան	անուն	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	7	nmod:poss	_	_
7	ճեմուղին	ճեմուղի	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	2	nsubj:pass	_	SpaceAfter=No
8	։	։	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj:pass	color:blue
1	Այս	այս	DET	_	Distance=Prox|PronType=Dem	2	det	_	_
2	նամակը	նամակ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	_
3	Պետրոսից	Պետրոս	PROPN	_	Animacy=Hum|Case=Abl|Definite=Ind|NameType=Giv|Number=Sing	0	root	_	_
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	և	և	CCONJ	_	_	9	cc	_	_
6	այն	այն	PRON	_	Distance=Dist|Number=Sing|PronType=Dem	9	nsubj:pass	_	_
7	երեկ	երեկ	ADV	_	_	9	advmod	_	_
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	բերվել	բերել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Pass	3	conj	_	SpaceAfter=No
10	։	։	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 nsubj:pass	color:blue
1	Հիմա	հիմա	ADV	_	_	6	discourse	_	_
2	այս	այս	DET	_	Distance=Prox|PronType=Dem	3	det	_	_
3	տեսակը	տեսակ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	_
4	ոնց	ոնց	ADV	_	PronType=Int|Style=Coll	6	advmod	_	_
5	՞	՞	PUNCT	_	_	4	punct	_	_
6	հանդուրժի	հանդուրժել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	Արթուր	Արթուր	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	10	nsubj:pass	_	_
8	Սարգսյանի	Սարգսյան	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Sur|Number=Sing	7	flat	_	_
9	մարդկային	մարդկային	ADJ	_	Degree=Pos	10	amod	_	_
10	հմայքը	հմայք	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	6	obj	_	SpaceAfter=No
11	:	:	PUNCT	_	_	6	punct	_	_

~~~


