---
layout: base
title:  'Statistics of iobj in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="hy_armtdp-dep-iobj-agent.html">iobj:agent</a></tt>.

38 nodes (0%) are attached to their parents as `iobj`.

25 instances of `iobj` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21052631578947.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (27; 71% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (6; 16% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (3; 8% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 iobj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 iobj	color:blue
1	Մի	մի	DET	_	PronType=Art	2	det	_	_
2	անգամ	անգամ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	8	obl	_	_
3	«	«	PUNCT	_	_	5	punct	_	SpaceAfter=No
4	Միոբիուսի	Միոբիուս	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Sur|Number=Sing	5	nmod:poss	_	_
5	ժապավենը	ժապավեն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	8	nsubj	_	SpaceAfter=No
6	»	»	PUNCT	_	_	5	punct	_	_
7	նրան	նա	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	8	iobj	_	_
8	տարավ	տանել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	ինչ	ինչ	DET	_	Case=Nom|PronType=Int	12	det	_	SpaceAfter=No
10	-	-	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	որ	որ	PART	_	_	9	fixed	_	_
12	դասախոսության	դասախոսություն	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	8	obj	_	SpaceAfter=No
13	։	։	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 iobj	color:blue
1	Էլ	էլ	PART	_	_	2	advmod:emph	_	_
2	ով	ով	PRON	_	Case=Nom|Number=Sing|PronType=Int	4	nsubj	_	_
3	՞	՞	PUNCT	_	_	2	punct	_	_
4	կհամարձակվեր	համարձակվել	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	_
5	Հարութին	Հարութ	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	8	iobj	_	_
6	երկրորդ	երկրորդ	ADJ	_	NumForm=Word|NumType=Ord	7	amod	_	_
7	հարցը	հարց	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	8	obj	_	_
8	տար	տալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	4	ccomp	_	_
9	կամ	կամ	CCONJ	_	ConjType=Comp	11	cc	_	_
10	հաշիվ	հաշիվ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	11	obj	_	_
11	պահանջեր	պահանջել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	8	conj	_	SpaceAfter=No
12	։	։	PUNCT	_	_	4	punct	_	_

~~~


