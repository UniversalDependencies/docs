---
layout: base
title:  'Statistics of csubj in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="axm_armtdp-dep-csubj-outer.html">csubj:outer</a></tt>.

6 nodes (0%) are attached to their parents as `csubj`.

5 instances of `csubj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.83333333333333.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (4; 67% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 csubj	color:blue
1	Գիտացիր	գիտանալ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Translit=Gitac’ir|LTranslit=gitanal
2	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
3	որ	որ	SCONJ	_	_	8	mark	_	Translit=or|LTranslit=or
4	այս	այս	DET	_	Deixis=Prox|PronType=Dem	5	det	_	Translit=ays|LTranslit=ays
5	ցաւս	ցաւ	NOUN	_	Case=Nom|Deixis[psor]=Prox|Number=Sing	8	nsubj	_	Translit=c’aws|LTranslit=c’aw
6	խիստ	խիստ	ADV	_	_	7	advmod	_	Translit=xist|LTranslit=xist
7	պեղծ	պեղծ	ADJ	_	Degree=Pos	8	amod	_	Translit=peġç|LTranslit=peġç
8	ցաւ	ցաւ	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	1	ccomp	_	Translit=c’aw|LTranslit=c’aw
9	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	SpaceAfter=No|Translit=ē|LTranslit=em
10	,	,	PUNCT	_	_	12	punct	_	Translit=,|LTranslit=,
11	և	և	CCONJ	_	_	12	cc	_	Translit=ew|LTranslit=ew
12	պարտ	պարտ	ADJ	_	_	1	parataxis	_	Translit=part|LTranslit=part
13	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	cop	_	Translit=ē|LTranslit=em
14	աղէկ	աղէկ	ADV	_	_	15	advmod	_	Translit=aġēk|LTranslit=aġēk
15	ծառայել	ծառայել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	12	csubj	_	SpaceAfter=No|Translit=çaṙayel|LTranslit=çaṙayel
16	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	Զընդանելն	զընդանել	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Style=Var|Subcat=Tran|VerbForm=Inf|Voice=Act	5	csubj	_	Translit=Zëndaneln|LTranslit=zëndanel
2	ըստ	ըստ	ADP	_	AdpType=Prep	4	case	_	Translit=ëst|LTranslit=ëst
3	թագաւորին	թագաւոր	NOUN	_	Case=Dat|Definite=Def|Number=Sing	4	nmod:poss	_	Translit=t’agaworin|LTranslit=t’agawor
4	կամացն	կամք	NOUN	_	Case=Dat|Definite=Def|Number=Ptan	5	obl	_	Translit=kamac’n|LTranslit=kamk’
5	լինի	լինել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No|Translit=lini|LTranslit=linel
6	.	.	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.
7	զի	զի	SCONJ	_	_	9	mark	_	Translit=zi|LTranslit=zi
8	այս	այս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	9	nsubj	_	Translit=ays|LTranslit=ays
9	թագաւորին	թագաւոր	NOUN	_	Case=Dat|Definite=Def|Number=Sing	5	advcl	_	Translit=t’agaworin|LTranslit=t’agawor
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	SpaceAfter=No|Translit=ē|LTranslit=em
11	՝	՝	PUNCT	_	_	14	punct	_	Translit=:|LTranslit=:
12	որ	որ	SCONJ	_	_	14	mark	_	Translit=or|LTranslit=or
13	ինքն	ինք	PRON	_	Case=Nom|Deixis[psor]=Remt|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	Translit=ink’n|LTranslit=ink’
14	դատէ	դատել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	9	csubj:outer	_	SpaceAfter=No|Translit=datē|LTranslit=datel
15	.	.	PUNCT	_	_	23	punct	_	Translit=.|LTranslit=.
16	եւ	եւ	CCONJ	_	_	23	cc	_	Translit=ew|LTranslit=ew
17	զ	զ	ADP	_	AdpType=Prep	18	case	_	SpaceAfter=No|Translit=z|LTranslit=z
18	այլն	այլն	PRON	_	Case=Nom|Number=Sing|PronType=Ind	23	obj	_	Translit=ayln|LTranslit=ayln
19	ի	ի	ADP	_	AdpType=Prep	22	case	_	Translit=i|LTranslit=i
20	յ	ի	ADP	_	AdpType=Prep	22	case	_	SpaceAfter=No|Translit=y|LTranslit=i
21	այլ	այլ	DET	_	PronType=Ind	22	det	_	Translit=ayl|LTranslit=ayl
22	դատաւորքն	դատաւոր	NOUN	_	Case=Nom|Definite=Def|Number=Plur	23	iobj	_	Translit=datawork’n|LTranslit=datawor
23	թողու	թողուլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No|Translit=t’oġow|LTranslit=t’oġowl
24	՝	՝	PUNCT	_	_	27	punct	_	Translit=:|LTranslit=:
25	որ	որ	SCONJ	_	_	27	mark	_	Translit=or|LTranslit=or
26	նոքա	նա	PRON	_	Case=Nom|Deixis=Remt|Number=Plur|PronType=Dem	27	nsubj	_	Translit=nok’a|LTranslit=na
27	հոգան	հոգալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl	_	SpaceAfter=No|Translit=hogan|LTranslit=hogal
28	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


