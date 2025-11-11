---
layout: base
title:  'Statistics of nummod in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `nummod`

This relation is universal.

263 nodes (0%) are attached to their parents as `nummod`.

246 instances of `nummod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27756653992395.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (248; 94% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Noi	noi	PRON	pp1plso	Number=Plur|Person=1|PronType=Prs	2	nsubj	2:nsubj	Canto=22|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-779_1
2	andavam	andare	VERB	vi1iip1	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	Canto=22|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-779_2
3	con	con	ADP	epskc	_	6	case	6:case	Canto=22|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-779_3
4	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	6:det	Canto=22|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-779_4
5	diece	dieci	NUM	an	NumType=Card	6	nummod	6:nummod	Canto=22|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-779_5
6	demoni	demonio	NOUN	sm2mp	Gender=Masc|Number=Plur	2	obl	2:obl	Canto=22|SpaceAfter=No|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-779_6
7	.	.	PUNCT	_	_	2	punct	2:punct	UniqueTokenId=OldItalian_Dante_Inferno-779_7

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	Li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	2:det	Canto=25|Verso=67|UniqueTokenId=OldItalian_Dante_Inferno-909_1
2	altri	altro	DET	ai	Gender=Masc|Number=Plur|PronType=Ind	5	nsubj	5:nsubj	Canto=25|Verso=67|UniqueTokenId=OldItalian_Dante_Inferno-909_2
3	due	due	NUM	an	NumType=Card	2	nummod	2:nummod	Canto=25|Verso=67|UniqueTokenId=OldItalian_Dante_Inferno-909_3
4	'l	il	PRON	pp3msyac	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	5:obj	Canto=25|Verso=67|UniqueTokenId=OldItalian_Dante_Inferno-909_4
5	riguardavano	riguardare	VERB	vta1iip3	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=25|SpaceAfter=No|Verso=67|UniqueTokenId=OldItalian_Dante_Inferno-909_5
6	,	,	PUNCT	_	_	9	punct	9:punct	UniqueTokenId=OldItalian_Dante_Inferno-909_6
7	e	e	CCONJ	cscc	_	9	cc	9:cc	Canto=25|Verso=67|UniqueTokenId=OldItalian_Dante_Inferno-909_7
8	ciascuno	ciascuno	PRON	pi	Gender=Masc|Number=Sing|PronType=Ind	9	nsubj	9:nsubj	Canto=25|Verso=67|UniqueTokenId=OldItalian_Dante_Inferno-909_8
9	gridava	gridare	VERB	vta1iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	5:conj	Canto=25|SpaceAfter=No|Verso=68|UniqueTokenId=OldItalian_Dante_Inferno-909_9
10	:	:	PUNCT	_	_	18	punct	18:punct	UniqueTokenId=OldItalian_Dante_Inferno-909_10
11	«	«	PUNCT	_	_	18	punct	18:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Inferno-909_11
12	Omè	omè	INTJ	i	_	18	discourse	18:discourse	Canto=25|SpaceAfter=No|Verso=68|UniqueTokenId=OldItalian_Dante_Inferno-909_12
13	,	,	PUNCT	_	_	12	punct	12:punct	UniqueTokenId=OldItalian_Dante_Inferno-909_13
14	Agnel	agnello	NOUN	sm1ms	Gender=Masc|Number=Sing	18	vocative	18:vocative	Canto=25|SpaceAfter=No|Verso=68|UniqueTokenId=OldItalian_Dante_Inferno-909_14
15	,	,	PUNCT	_	_	14	punct	14:punct	UniqueTokenId=OldItalian_Dante_Inferno-909_15
16	come	come	ADV	b	_	18	advmod	18:advmod	Canto=25|Verso=68|UniqueTokenId=OldItalian_Dante_Inferno-909_16
17	ti	ti	PRON	pf2msypr	Clitic=Yes|Gender=Masc|Number=Sing|Person=2|PronType=Prs|Reflex=Yes	18	obj	18:obj	Canto=25|Verso=68|UniqueTokenId=OldItalian_Dante_Inferno-909_17
18	muti	mutare	VERB	vta+1ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	ccomp:reported	9:ccomp:reported	Canto=25|SpaceAfter=No|Verso=68|UniqueTokenId=OldItalian_Dante_Inferno-909_18
19	!	!	PUNCT	_	_	18	punct	18:punct	UniqueTokenId=OldItalian_Dante_Inferno-909_19

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nummod	color:blue
1	Più	più	ADV	b	_	0	root	0:root	Canto=28|Verso=52|UniqueTokenId=OldItalian_Dante_Inferno-997_1
2	fuor	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	1	cop	1:cop	Canto=28|Verso=52|UniqueTokenId=OldItalian_Dante_Inferno-997_2
3	di	di	ADP	epsky	_	4	case	4:case	Canto=28|Verso=52|UniqueTokenId=OldItalian_Dante_Inferno-997_3
4	cento	cento	NUM	an	NumType=Card	1	nummod	1:nummod	Canto=28|Verso=52|UniqueTokenId=OldItalian_Dante_Inferno-997_4
5	che	che	PRON	pr	PronType=Rel	12	nsubj	12:nsubj	Canto=28|SpaceAfter=No|Verso=52|UniqueTokenId=OldItalian_Dante_Inferno-997_5
6	,	,	PUNCT	_	_	5	punct	5:punct	UniqueTokenId=OldItalian_Dante_Inferno-997_6
7	quando	quando	SCONJ	csst	_	9	mark	9:mark	Canto=28|Verso=52|UniqueTokenId=OldItalian_Dante_Inferno-997_7
8	l'	il	PRON	pp3msyac	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obj	9:obj	Canto=28|SpaceAfter=No|Verso=52|UniqueTokenId=OldItalian_Dante_Inferno-997_8
9	udiro	udire	VERB	vta3irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	advcl	12:advcl	Canto=28|SpaceAfter=No|Verso=52|UniqueTokenId=OldItalian_Dante_Inferno-997_9
10	,	,	PUNCT	_	_	9	punct	9:punct	UniqueTokenId=OldItalian_Dante_Inferno-997_10
11	s'	si	PRON	pf3ypr	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	12	expl:pv	12:expl:pv	Canto=28|SpaceAfter=No|Verso=53|UniqueTokenId=OldItalian_Dante_Inferno-997_11
12	arrestaron	arrestare	VERB	vta+1irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl:relcl	1:advcl:relcl	Canto=28|Verso=53|UniqueTokenId=OldItalian_Dante_Inferno-997_12
13	in	in	ADP	_	_	15	case	15:case	Canto=28|Comment=ne-l|Verso=53|UniqueTokenId=OldItalian_Dante_Inferno-997_13
14	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	15:det	Canto=28|Comment=ne-l|Verso=53|UniqueTokenId=OldItalian_Dante_Inferno-997_14
15	fosso	fosso	NOUN	sm2ms	Gender=Masc|Number=Sing	12	obl:lmod	12:obl:lmod	Canto=28|Verso=53|UniqueTokenId=OldItalian_Dante_Inferno-997_15
16	a	a	ADP	epsf	_	17	mark	17:mark	Canto=28|Verso=53|UniqueTokenId=OldItalian_Dante_Inferno-997_16
17	riguardare	riguardare	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	12	advcl	12:advcl	Canto=28|Verso=53|UniqueTokenId=OldItalian_Dante_Inferno-997_17
18	mi	mi	PRON	pp1sxac	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	17	obj	17:obj	Canto=28|Verso=53|UniqueTokenId=OldItalian_Dante_Inferno-997_18
19	per	per	ADP	epskr	_	20	case	20:case	Canto=28|Verso=54|UniqueTokenId=OldItalian_Dante_Inferno-997_19
20	maraviglia	meraviglia	NOUN	sf1fs	Gender=Fem|Number=Sing	17	obl	17:obl	Canto=28|SpaceAfter=No|Verso=54|UniqueTokenId=OldItalian_Dante_Inferno-997_20
21	,	,	PUNCT	_	_	22	punct	22:punct	UniqueTokenId=OldItalian_Dante_Inferno-997_21
22	obliando	obliare	VERB	vta1gp	VerbForm=Conv|Voice=Act	17	advcl	17:advcl	Canto=28|Verso=54|UniqueTokenId=OldItalian_Dante_Inferno-997_22
23	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	24:det	Canto=28|Verso=54|UniqueTokenId=OldItalian_Dante_Inferno-997_23
24	martiro	martiro	NOUN	sm2ms	Gender=Masc|Number=Sing	22	obj	22:obj	Canto=28|SpaceAfter=No|Verso=54|UniqueTokenId=OldItalian_Dante_Inferno-997_24
25	.	.	PUNCT	_	_	1	punct	1:punct	UniqueTokenId=OldItalian_Dante_Inferno-997_25

~~~


