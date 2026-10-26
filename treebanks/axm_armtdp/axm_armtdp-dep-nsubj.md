---
layout: base
title:  'Statistics of nsubj in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="axm_armtdp-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="axm_armtdp-dep-nsubj-pass.html">nsubj:pass</a></tt>.

81 nodes (7%) are attached to their parents as `nsubj`.

67 instances of `nsubj` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11111111111111.

The following 10 pairs of parts of speech are connected with `nsubj`: <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (51; 63% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (10; 12% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="axm_armtdp-pos-ADP.html">ADP</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="axm_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nsubj	color:blue
1	Եւ	եւ	CCONJ	_	_	12	cc	_	_
2	որ	որ	SCONJ	_	_	5	mark	_	_
3	գաղտուկ	գաղտուկ	ADJ	_	Degree=Pos	4	amod	_	_
4	մեղանք	մեղանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Ptan|Style=Arch	5	xcomp	_	_
5	լինի	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	12	advcl	_	_
6	յ	ի	ADP	_	AdpType=Prep	7	case	_	_
7	երկիրն	յերկիր	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	5	obl	_	_
8	՝	՝	PUNCT	_	_	12	punct	_	_
9	զ	զ	ADP	_	AdpType=Prep	10	case	_	_
10	այն	այն	PRON	_	Case=Acc|Deixis=Remt|Number=Sing|PronType=Dem	12	obj	_	_
11	խոստովանհայրքն	խոստովանհայր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur|Style=Var	12	nsubj	_	_
12	ուղղեն	ուղղել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
13	։	։	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 17 nsubj	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nsubj	color:blue
1	Եթէ	եթէ	SCONJ	_	_	6	mark	_	_
2	քրիստոնէ	քրիստոնէ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	6	nsubj	_	_
3	զ	զ	ADP	_	AdpType=Prep	4	case	_	_
4	քրիստոնէ	քրիստոնէ	NOUN	_	Animacy=Hum|Case=Acc|Definite=Ind|Number=Sing	6	obj	_	_
5	կամաւք	կամ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	6	obl	_	_
6	սպաննէ	սպաննել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	SpaceAfter=No
7	՝	՝	PUNCT	_	_	12	punct	_	_
8	նա	նա	SCONJ	_	_	12	mark	_	_
9	նորա	նա	PRON	_	Case=Gen|Deixis=Remt|Number=Sing|PronType=Dem	10	nmod:poss	_	_
10	արեան	արիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	11	nmod:poss	_	_
11	վրէժխնդիրն	վրէժխնդիր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	12	nsubj	_	_
12	թագավորին	թագավոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	0	root	_	_
13	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	cop	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	16	nsubj	_	_
16	խրատէ	խրատել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl:relcl	_	_
17	եւ	եւ	CCONJ	_	_	21	cc	_	_
18	ի	ի	ADP	_	AdpType=Prep	20	case	_	_
19	յ	ի	ADP	_	AdpType=Prep	20	case	_	_
20	ապաշխարութիւն	ապաշխարութիւն	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Coll	21	obl	_	_
21	հասցնէ	հասցնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Cau	16	conj	_	SpaceAfter=No
22	։	։	PUNCT	_	_	12	punct	_	_

~~~


