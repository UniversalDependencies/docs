---
layout: base
title:  'Statistics of nmod:npmod in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="axm_armtdp-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="axm_armtdp-dep-nmod-poss.html">nmod:poss</a></tt>.

19 nodes (0%) are attached to their parents as `nmod:npmod`.

13 instances of `nmod:npmod` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.94736842105263.

The following 3 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (15; 79% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (3; 16% instances), <tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod:npmod	color:blue
1	ԾԱ	ԾԱ.	NUM	_	NumForm=Armenian|NumType=Card	4	discourse	_	SpaceAfter=No|Translit=ÇA|LTranslit=ÇA.
2	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
3	Յաղագս	յաղագս	ADP	_	AdpType=Prep	4	case	_	Translit=Yaġags|LTranslit=yaġags
4	ուռեցի	ուռեց	NOUN	_	Case=Dat|Definite=Ind|Number=Sing	0	root	_	Translit=owṙec’i|LTranslit=owṙec’
5	ի	ի	ADP	_	AdpType=Prep	6	case	_	Translit=i|LTranslit=i
6	քամոյ	քամի	NOUN	_	Case=Dat|Definite=Ind|Number=Sing	4	nmod:npmod	_	SpaceAfter=No|Translit=k’amoy|LTranslit=k’ami
7	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
8	և	և	CCONJ	_	_	11	cc	_	Translit=ew|LTranslit=ew
9	որ	որ	SCONJ	_	_	11	mark	_	Translit=or|LTranslit=or
10	չ	ոչ	PART	_	Polarity=Neg	11	advmod	_	SpaceAfter=No|Translit=č’|LTranslit=oč’
11	կարէ	կարել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	conj	_	Translit=karē|LTranslit=karel
12	թըրքել	թըրքել	VERB	_	Polarity=Pos|Style=Var|Subcat=Intr|VerbForm=Inf|Voice=Mid	11	xcomp	_	Translit=t’ërk’el|LTranslit=t’ërk’el
13	և	և	CCONJ	_	_	14	cc	_	Translit=ew|LTranslit=ew
14	գոզել	գոզել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	12	conj	_	Translit=gozel|LTranslit=gozel

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod:npmod	color:blue
1	Հայեցք	հայեցք	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=Hayec’k’|LTranslit=hayec’k’
2	աստեղաց	աստղ	NOUN	_	Case=Dat|Definite=Ind|Number=Plur	1	nmod:poss	_	Translit=asteġac’|LTranslit=astġ
3	ընդ	ընդ	ADP	_	AdpType=Prep	4	case	_	Translit=ënd|LTranslit=ënd
4	իրար	իրար	PRON	_	Case=Dat|Number=Plur|PronType=Rcp	1	nmod:npmod	_	SpaceAfter=No|Translit=irar|LTranslit=irar
5	.	.	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.
6	սայ	սա	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem|Typo=Yes	1	parataxis	_	Translit=say|LTranslit=sa
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	Translit=ē|LTranslit=em
8	գանձ	գանձ	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	6	nsubj	_	Translit=ganj|LTranslit=ganj
9	անչափ	անչափ	ADJ	_	_	8	amod	_	Translit=anč’ap’|LTranslit=anč’ap’

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 28 nmod:npmod	color:blue
1	Եւ	եւ	CCONJ	_	_	11	cc	_	Translit=Ew|LTranslit=ew
2	որ	որ	SCONJ	_	_	5	mark	_	Translit=or|LTranslit=or
3	այսոր	այս	PRON	_	Case=Dat|Deixis=Prox|Number=Sing|PronType=Dem	4	nmod:poss	_	Translit=aysor|LTranslit=ays
4	ուժ	ուժ	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	5	obj	_	Translit=owž|LTranslit=owž
5	չուննայ	ուննալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	11	advcl	_	SpaceAfter=No|Translit=č’ownnay|LTranslit=ownnal
6	՝	՝	PUNCT	_	_	8	punct	_	Translit=:|LTranslit=:
7	որ	որ	SCONJ	_	_	8	mark	_	Translit=or|LTranslit=or
8	վճարէ	վճարել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	SpaceAfter=No|Translit=včarē|LTranslit=včarel
9	՝	՝	PUNCT	_	_	11	punct	_	Translit=:|LTranslit=:
10	նա	նա	SCONJ	_	_	11	mark	_	Translit=na|LTranslit=na
11	ծախեն	ծախել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=çaxen|LTranslit=çaxel
12	զ	զ	ADP	_	AdpType=Prep	13	case	_	SpaceAfter=No|Translit=z|LTranslit=z
13	ինքն	ինք	PRON	_	Case=Nom|Deixis[psor]=Remt|Number=Sing|Person=3|PronType=Prs	11	obj	_	Translit=ink’n|LTranslit=ink’
14	ու	ու	CCONJ	_	_	17	cc	_	Translit=ow|LTranslit=ow
15	զ	զ	ADP	_	AdpType=Prep	17	case	_	SpaceAfter=No|Translit=z|LTranslit=z
16	իր	իր	DET	_	Number=Sing|Person=3|PronType=Poss	17	det	_	Translit=ir|LTranslit=ir
17	տունն	տուն	NOUN	_	Case=Nom|Definite=Def|Number=Sing	13	conj	_	Translit=townn|LTranslit=town
18	ու	ու	CCONJ	_	_	20	cc	_	Translit=ow|LTranslit=ow
19	զինչ	զինչ	PRON	_	PronType=Rel	20	obj	_	SpaceAfter=No|Translit=zinč’|LTranslit=zinč’
20	ուննայ	ուննալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	13	conj	_	Translit=ownnay|LTranslit=ownnal
21	ու	ու	CCONJ	_	_	24	cc	_	Translit=ow|LTranslit=ow
22	ի	ի	ADP	_	AdpType=Prep	23	case	_	Translit=i|LTranslit=i
23	գինն	գին	NOUN	_	Case=Nom|Definite=Def|Number=Sing	24	obl	_	Translit=ginn|LTranslit=gin
24	տան	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	SpaceAfter=No|Translit=tan|LTranslit=tal
25	,	,	PUNCT	_	_	28	punct	_	Translit=,|LTranslit=,
26	զարդ	զարդ	ADP	_	AdpType=Prep	28	case	_	Translit=zard|LTranslit=zard
27	ի	ի	ADP	_	AdpType=Prep	28	case	_	Translit=i|LTranslit=i
28	կնկնէն	կնիկ	NOUN	_	Case=Abl|Definite=Def|Number=Sing	19	nmod:npmod	_	Translit=knknēn|LTranslit=knik
29	ու	ու	CCONJ	_	_	32	cc	_	Translit=ow|LTranslit=ow
30	ի	ի	ADP	_	AdpType=Prep	32	case	_	Translit=i|LTranslit=i
31	յ	ի	ADP	_	AdpType=Prep	32	case	_	SpaceAfter=No|Translit=y|LTranslit=i
32	որդեցն	որդի	NOUN	_	Case=Abl|Definite=Def|Number=Plur	28	conj	_	SpaceAfter=No|Translit=ordec’n|LTranslit=ordi
33	։	։	PUNCT	_	_	11	punct	_	Translit=.|LTranslit=.

~~~


