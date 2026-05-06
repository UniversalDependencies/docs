---
layout: base
title:  'Statistics of nmod:poss in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="axm_armtdp-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="axm_armtdp-dep-nmod-npmod.html">nmod:npmod</a></tt>.

31 nodes (3%) are attached to their parents as `nmod:poss`.

23 instances of `nmod:poss` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.64516129032258.

The following 5 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (24; 77% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (4; 13% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nmod:poss	color:blue
1	Եւ	եւ	CCONJ	_	_	9	cc	_	_
2	թէ	թէ	SCONJ	_	_	6	mark	_	_
3	յ	ի	ADP	_	AdpType=Prep	5	case	_	_
4	ոչ	ոչ	PART	_	Polarity=Neg	5	advmod:emph	_	_
5	կամայ	կամ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing|Style=Rare	6	obl	_	_
6	լինայ	լինալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	9	advcl	_	SpaceAfter=No
7	՝	՝	PUNCT	_	_	9	punct	_	_
8	հնար	հնար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	nsubj	_	_
9	չկայ	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	14	punct	_	_
11	զ	զ	ADP	_	AdpType=Prep	12	case	_	_
12	կէս	կէս	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Sing	14	obj	_	_
13	գնոցն	գին	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	12	nmod:poss	_	_
14	տայ	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	9	parataxis	_	_
15	ազգին	ազգ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	14	iobj	_	SpaceAfter=No
16	՝	՝	PUNCT	_	_	18	punct	_	_
17	եւ	եւ	CCONJ	_	_	18	cc	_	_
18	տուգանք	տուգանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	14	conj	_	SpaceAfter=No
19	։	։	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	Եւ	եւ	CCONJ	_	_	7	cc	_	_
2	տաճկին	տաճիկ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	3	nmod:poss	_	_
3	գինն	գին	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	_
4	այսոր	այս	PRON	_	Case=Dat|Deixis=Prox|Number=Sing|PronType=Dem	6	nmod:poss	_	_
5	երեք	երեք	NUM	_	NumForm=Word|NumType=Card	6	nummod	_	_
6	բաժնէն	բաժին	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Sing	7	nmod:npmod	_	_
7	մէկն	մէկ	PRON	_	Case=Nom|Definite=Def|PronType=Ind	0	root	_	_
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	14	punct	_	_
10	զ	զ	ADP	_	AdpType=Prep	11	case	_	_
11	այս	այս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	14	obj	_	_
12	այն	այն	DET	_	Deixis=Remt|PronType=Dem	13	det	_	_
13	տաճկին	տաճկ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	14	obl	_	_
14	տան	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
15	գին	գին	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	14	compound:lvc	_	SpaceAfter=No
16	,	,	PUNCT	_	_	21	punct	_	_
17	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	21	nsubj	_	_
18	ի	ի	ADP	_	AdpType=Prep	20	case	_	_
19	թագաւորին	թագաւոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	20	nmod:poss	_	_
20	երկրին	երկիր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	21	obl	_	_
21	կենայ	կենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	13	acl:relcl	_	SpaceAfter=No
22	։	։	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Քրիստոսի	Քրիստոս	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Prs|Number=Sing	2	nmod:poss	_	_
2	դատաստանին	դատաստան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	3	nmod:poss	_	_
3	աւրինակովն	աւրինակ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Def|Number=Sing|Style=Var	4	obl	_	_
4	պարտի	պարտել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	թագաւորն	թագաւոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	_
6	զ	զ	ADP	_	AdpType=Prep	8	case	_	_
7	իր	իր	DET	_	Case=Acc|Number=Sing|Person=3|PronType=Poss|Reflex=Yes	8	det:poss	_	_
8	իրաւունքն	իրաւունք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	9	obj	_	_
9	տանել	տանել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	xcomp	_	_
10	ըղորդ	ըղորդ	ADV	_	_	9	advmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	անաչառութեամբ	անաչառութիւն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Coll	10	conj	_	_
13	եւ	եւ	CCONJ	_	_	15	cc	_	_
14	առանց	առանց	ADP	_	AdpType=Prep	15	case	_	_
15	կաշառոյ	կաշառ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	10	conj	_	_
16	եւ	եւ	CCONJ	_	_	18	cc	_	_
17	առանց	առանց	ADP	_	AdpType=Prep	18	case	_	_
18	ծուլութեան	ծուլութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	10	conj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	28	punct	_	_
20	եւ	եւ	CCONJ	_	_	28	cc	_	_
21	զ	զ	ADP	_	AdpType=Prep	23	case	_	_
22	ամենայն	ամենայն	DET	_	PronType=Tot	23	det	_	_
23	զրկելոցն	զրկել	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	28	obj	_	_
24	եւ	եւ	CCONJ	_	_	26	cc	_	_
25	զ	զ	ADP	_	AdpType=Prep	26	case	_	_
26	գանկտվորացն	գանկտվոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	23	conj	_	_
27	դարպաս	դարպաս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	28	compound:lvc	_	_
28	բռնէ	բռնել	VERB	_	Aspect=Prosp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
29	եւ	եւ	CCONJ	_	_	31	cc	_	_
30	իրաւունք	իրաւունք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	31	compound:lvc	_	_
31	այնէ	այնել	VERB	_	Aspect=Prosp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	SpaceAfter=No
32	։	։	PUNCT	_	_	4	punct	_	_

~~~


