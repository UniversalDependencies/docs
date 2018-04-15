---
layout: base
title:  'Statistics of advcl in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `advcl`

This relation is universal.

181 nodes (1%) are attached to their parents as `advcl`.

101 instances of `advcl` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.61878453038674.

The following 14 pairs of parts of speech are connected with `advcl`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (141; 78% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (11; 6% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-DET.html">DET</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-DET.html">DET</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 advcl	color:blue
1	Եվ	և	CCONJ	_	_	9	cc	_	_
2	եթե	եթե	SCONJ	_	_	5	mark	_	_
3	օրը	օր	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	_
4	հաջող	հաջող	ADJ	_	Degree=Pos	3	acl	_	_
5	չստացվեց	ստացվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	9	advcl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	9	aux	_	_
8	էլ	էլ	PART	_	_	7	advmod	_	_
9	զոռի	զոռել	VERB	_	Aspect=Prosp|Connegative=Yes|Mood=Cnd|Style=Coll|Subcat=Intr|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
10	։	։	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 advcl	color:blue
1	Հաշվի	հաշիվ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	2	compound:lvc	_	_
2	առնելով	առնել	VERB	_	Case=Ins|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Tran|VerbForm=Gdv|Voice=Act	11	advcl	_	_
3	նրա	նա	PRON	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:npmod	_	_
4	հանդեպ	հանդեպ	ADP	_	AdpType=Post	3	case	_	_
5	հանրային	հանրային	ADJ	_	Degree=Pos	6	amod	_	_
6	աջակցությունը	աջակցություն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	2	obj	_	SpaceAfter=No
7	՝	՝	PUNCT	_	_	11	punct	_	_
8	ինչու	ինչու	ADV	_	PronType=Int	11	advmod	_	_
9	՞	՞	PUNCT	_	_	8	punct	_	_
10	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	11	cop	_	_
11	պետք	պետք	ADJ	_	_	0	root	_	_
12	նախընտրական	նախընտրական	ADJ	_	_	13	amod	_	_
13	շրջանում	շրջան	NOUN	_	Animacy=Inan|Case=Loc|Definite=Ind|Number=Sing	15	obl	_	_
14	նրան	նա	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	15	obj	_	_
15	կալանավորել	կալանավորել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	11	csubj	_	SpaceAfter=No
16	:	:	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 advcl	color:blue
1	Ընդ	ընդ	ADP	_	AdpType=Prep|Style=Arch	8	parataxis	_	_
2	որում	որ	PRON	_	Case=Loc|Number=Sing|PronType=Rel	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	_	_	8	punct	_	_
4	Կարեն	Կարեն	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	8	nsubj	_	_
5	Կարապետյանը	Կարապետյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	4	flat	_	_
6	խորհուրդ	խորհուրդ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	8	compound:lvc	_	_
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	տվել	տալ	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
9	չընտրել	ընտրել	VERB	_	Polarity=Neg|Subcat=Tran|VerbForm=Inf|Voice=Act	8	ccomp	_	_
10	ՀՀԿ	ՀՀԿ	PROPN	_	Abbr=Yes|Animacy=Inan|Case=Nom|Definite=Ind|NameType=Com|Number=Sing	11	nmod	_	_
11	թեկնածուներին	թեկնածու	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	9	obj	_	SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	_
13	եթե	եթե	SCONJ	_	_	15	mark	_	_
14	ժողովուրդը	ժողովուրդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	15	nsubj	_	_
15	դժգոհ	դժգոհ	ADJ	_	Degree=Pos	9	advcl	_	_
16	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	cop	_	_
17	կուսակցությունից	կուսակցություն	NOUN	_	Animacy=Inan|Case=Abl|Definite=Ind|Number=Sing	15	obl	_	SpaceAfter=No
18	:	:	PUNCT	_	_	8	punct	_	_

~~~


