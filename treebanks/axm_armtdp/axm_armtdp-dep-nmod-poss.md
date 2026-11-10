---
layout: base
title:  'Statistics of nmod:poss in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="axm_armtdp-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="axm_armtdp-dep-nmod-npmod.html">nmod:npmod</a></tt>.

129 nodes (2%) are attached to their parents as `nmod:poss`.

75 instances of `nmod:poss` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37984496124031.

The following 4 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (110; 85% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-PROPN.html">PROPN</a></tt> (11; 9% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (6; 5% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	Դեղ	դեղ	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=Deġ|LTranslit=deġ
2	գայլցաւու	գայլցաւ	NOUN	_	Case=Dat|Definite=Ind|Number=Sing	1	nmod:poss	_	SpaceAfter=No|Translit=gaylc’awow|LTranslit=gaylc’aw
3	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
4	եբ	եբ	ADV	_	PronType=Rel|Style=Var	6	mark	_	Translit=eb|LTranslit=eb
5	ուժով	ուժով	ADJ	_	Degree=Pos	6	xcomp	_	Translit=owžov|LTranslit=owžov
6	լինի	լինել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	2	acl:relcl	_	SpaceAfter=No|Translit=lini|LTranslit=linel
7	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	ԺԱՄԱՆԱԿԱԳՐՈՒԹԻՒՆ	ժամանակագրութիւն	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=ŽAMANAKAGROWT’IWN|LTranslit=žamanakagrowt’iwn
2	ՀԵԹՄՈՅ	Հեթում	PROPN	_	Case=Dat|Definite=Ind|NameType=Giv|Number=Sing	1	nmod:poss	_	Translit=HET’MOY|LTranslit=Het’owm

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	Եւ	եւ	CCONJ	_	_	7	cc	_	Translit=Ew|LTranslit=ew
2	տաճկին	տաճիկ	NOUN	_	Case=Dat|Definite=Def|Number=Sing	3	nmod:poss	_	Translit=tačkin|LTranslit=tačik
3	գինն	գին	NOUN	_	Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	Translit=ginn|LTranslit=gin
4	այսոր	այս	PRON	_	Case=Dat|Deixis=Prox|Number=Sing|PronType=Dem	6	nmod:poss	_	Translit=aysor|LTranslit=ays
5	երեք	երեք	NUM	_	NumForm=Word|NumType=Card	6	nummod	_	Translit=erek’|LTranslit=erek’
6	բաժնէն	բաժին	NOUN	_	Case=Abl|Definite=Def|Number=Sing	7	nmod:npmod	_	Translit=bažnēn|LTranslit=bažin
7	մէկն	մէկ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=mēkn|LTranslit=mēk
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No|Translit=ē|LTranslit=em
9	.	.	PUNCT	_	_	14	punct	_	Translit=.|LTranslit=.
10	զ	զ	ADP	_	AdpType=Prep	11	case	_	SpaceAfter=No|Translit=z|LTranslit=z
11	այս	այս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	14	obj	_	Translit=ays|LTranslit=ays
12	այն	այն	DET	_	Deixis=Remt|PronType=Dem	13	det	_	Translit=ayn|LTranslit=ayn
13	տաճկին	տաճիկ	NOUN	_	Case=Dat|Definite=Def|Number=Sing	14	obl	_	Translit=tačkin|LTranslit=tačik
14	տան	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	Translit=tan|LTranslit=tal
15	գին	գին	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	14	compound:lvc	_	SpaceAfter=No|Translit=gin|LTranslit=gin
16	,	,	PUNCT	_	_	21	punct	_	Translit=,|LTranslit=,
17	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	21	nsubj	_	Translit=or|LTranslit=or
18	ի	ի	ADP	_	AdpType=Prep	20	case	_	Translit=i|LTranslit=i
19	թագաւորին	թագաւոր	NOUN	_	Case=Dat|Definite=Def|Number=Sing	20	nmod:poss	_	Translit=t’agaworin|LTranslit=t’agawor
20	երկրին	երկիր	NOUN	_	Case=Dat|Definite=Def|Number=Sing	21	obl	_	Translit=erkrin|LTranslit=erkir
21	կենայ	կենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	13	acl:relcl	_	SpaceAfter=No|Translit=kenay|LTranslit=kenal
22	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


