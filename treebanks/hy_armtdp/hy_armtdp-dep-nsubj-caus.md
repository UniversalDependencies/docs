---
layout: base
title:  'Statistics of nsubj:caus in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="hy_armtdp-dep-nsubj-pass.html">nsubj:pass</a></tt>.

6 nodes (0%) are attached to their parents as `nsubj:caus`.

5 instances of `nsubj:caus` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 33% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (2; 33% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj:caus	color:blue
1	Այդպես	այդպես	ADV	_	Distance=Med|PronType=Dem	3	advmod	_	_
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	սովորեցրել	սովորել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Cau	0	root	_	_
4	պապս	պապ	NOUN	_	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj:caus	_	SpaceAfter=No
5	։	։	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:caus	color:blue
1	Վերադառնալով	վերադառնալ	VERB	_	Case=Ins|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Mid	5	advcl	_	_
2	վրան	վրան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	obl	_	SpaceAfter=No
3	՝	՝	PUNCT	_	_	5	punct	_	_
4	նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj:caus	_	_
5	կանչել	կանչել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	0	root	_	_
6	տվեց	տալ	AUX	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	5	aux:caus	_	_
7	վաշտապետներին	վաշտապետ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	5	obj	_	_
8	և	և	CCONJ	_	_	10	cc	_	_
9	նրանց	նա	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	10	obj	_	_
10	կարգադրեց	կարգադրել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	_
11	նախաճաշից	նախաճաշ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	16	obl	_	_
12	հետո	հետո	ADP	_	AdpType=Post	11	case	_	_
13	իր	ինքը	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	14	det:poss	_	_
14	վրանի	վրան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	16	obl	_	_
15	առջև	առջև	ADP	_	AdpType=Post|Case=Nom	14	case	_	_
16	շարել	շարել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	10	xcomp	_	_
17	բանակը	բանակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	16	obj	_	SpaceAfter=No
18	:	:	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:caus	color:blue
1	Երկրորդը	երկրորդ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	parataxis	_	SpaceAfter=No
2	՝	՝	PUNCT	_	_	3	punct	_	_
3	պետք	պետք	ADJ	_	_	0	root	_	_
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	կիրառական	կիրառական	ADJ	_	Degree=Pos	6	amod	_	_
6	զարգացում	զարգացում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obj	_	_
7	տալ	տալ	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	3	csubj	_	_
8	Նիկոլի	Նիկոլ	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Giv|Number=Sing	9	nsubj:caus	_	_
9	հնչեցրած	հնչել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Cau	14	acl	_	_
10	կարևորագույն	կարևորագույն	ADJ	_	_	14	amod	_	_
11	«	«	PUNCT	_	_	12	punct	_	SpaceAfter=No
12	ապակենտրոնացում	ապակենտրոնացում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	14	nmod	_	SpaceAfter=No
13	»	»	PUNCT	_	_	12	punct	_	_
14	եզրին	եզր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	7	obl	_	SpaceAfter=No
15	:	:	PUNCT	_	_	3	punct	_	_

~~~


