---
layout: base
title:  'Statistics of flat in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `flat`

This relation is universal.
There are 3 language-specific subtypes of `flat`: <tt><a href="axm_armtdp-dep-flat-name.html">flat:name</a></tt>, <tt><a href="axm_armtdp-dep-flat-range.html">flat:range</a></tt>, <tt><a href="axm_armtdp-dep-flat-redup.html">flat:redup</a></tt>.

9 nodes (0%) are attached to their parents as `flat`.

9 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33333333333333.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="axm_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="axm_armtdp-pos-PROPN.html">PROPN</a></tt> (3; 33% instances), <tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt> (2; 22% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="axm_armtdp-pos-NUM.html">NUM</a></tt>-<tt><a href="axm_armtdp-pos-NUM.html">NUM</a></tt> (2; 22% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	ՄԵԿՆՈՒԹԻՒՆ	մեկնութիւն	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=MEKNOWT’IWN|LTranslit=meknowt’iwn
2	ԱՌԱԿԱՑ	առակ	NOUN	_	Case=Dat|Definite=Ind|Number=Plur	1	nmod:poss	_	Translit=AṘAKAC’|LTranslit=aṙak
3	ՆԵՐՍԻՍԻ	Ներսէս	PROPN	_	Case=Gen|Number=Sing	1	nmod:poss	_	Translit=NERSISI|Lang=xcl|LTranslit=Nersēs
4	ԼԱՄԲՐՈՆԱՑՒՈՅ	Լամբրոնացի	PROPN	_	Case=Gen|Number=Sing	3	flat	_	Translit=LAMBRONAC’WOY|Lang=xcl|LTranslit=Lambronac’i
5	ԵՒ	եւ	CCONJ	_	_	6	cc	_	Translit=EW|LTranslit=ew
6	ՄԵԿՆՈՒԹԻՒՆ	մեկնութիւն	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	1	conj	_	Translit=MEKNOWT’IWN|LTranslit=meknowt’iwn
7	ԵՐԳՈՑ	երգ	NOUN	_	Case=Gen|Number=Plur	8	nmod:poss	_	Translit=ERGOC’|Lang=xcl|LTranslit=erg
8	ԵՐԳՈՅ	երգ	NOUN	_	Case=Gen|Number=Sing	6	nmod:poss	_	SpaceAfter=No|Translit=ERGOY|Lang=xcl|LTranslit=erg
9	Ն	ն	DET	_	Definite=Def|Deixis=Remt|PronType=Art	8	det	_	Translit=N|Lang=xcl|LTranslit=n
10	ՎԱՐԴԱՆԱՅ	Վարդան	PROPN	_	Case=Gen|Number=Sing	6	nmod:poss	_	Translit=VARDANAY|Lang=xcl|LTranslit=Vardan
11	ԱՐԵՒԵԼՑՒՈՅ	Արեւելցի	PROPN	_	Case=Gen|Number=Sing	10	flat	_	Translit=AREWELC’WOY|Lang=xcl|LTranslit=Arewelc’i

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 flat	color:blue
1	Ի	ի	ADP	_	AdpType=Prep	9	case	_	Translit=I|LTranslit=i
2	յ	ի	ADP	_	AdpType=Prep	9	case	_	SpaceAfter=No|Translit=y|LTranslit=i
3	եւթնհարիւրերորդի	եւթնհարիւրերորդ	ADJ	_	Case=Dat|NumType=Ord	9	amod	_	Translit=ewt’nhariwrerordi|Lang=xcl|LTranslit=ewt’nhariwrerord
4	քսաներորդի	քսաներորդ	ADJ	_	Case=Dat|NumType=Ord	3	flat	_	Translit=k’sanerordi|Lang=xcl|LTranslit=k’sanerord
5	ութերորդի	ութերորդ	ADJ	_	Case=Dat|NumType=Ord	3	flat	_	SpaceAfter=No|Translit=owt’erordi|Lang=xcl|LTranslit=owt’erord
6	(	(	PUNCT	_	_	7	punct	_	SpaceAfter=No|Translit=(|LTranslit=(
7	1279	1279	NUM	_	NumForm=Digit|NumType=Card	3	appos	_	SpaceAfter=No|Translit=1279|LTranslit=1279
8	)	)	PUNCT	_	_	7	punct	_	Translit=)|LTranslit=)
9	թուականի	թուական	NOUN	_	Case=Dat|Definite=Ind|Number=Sing	11	obl	_	Translit=t’owakani|LTranslit=t’owakan
10	Հայոց	հայ	NOUN	_	Case=Dat|Definite=Ind|Number=Plur	9	nmod:poss	_	Translit=Hayoc’|LTranslit=hay
11	գրեցաւ	գրել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=grec’aw|Lang=xcl|LTranslit=grel
12	գիրքս	գիրք	NOUN	_	Case=Nom|Deixis[psor]=Prox|Number=Sing	11	nsubj:pass	_	Translit=girk’s|LTranslit=girk’
13	այս	այս	DET	_	Deixis=Prox|PronType=Dem	12	det	_	SpaceAfter=No|Translit=ays|LTranslit=ays
14	,	,	PUNCT	_	_	18	punct	_	Translit=,|LTranslit=,
15	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	18	nsubj	_	Translit=or|LTranslit=or
16	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	18	cop	_	Translit=ē|LTranslit=em
17	Ջերմանց	ջերմն	NOUN	_	Case=Dat|Definite=Ind|Number=Plur	18	nmod:poss	_	Translit=J̌ermanc’|LTranslit=ǰermn
18	բժկարան	բժշկարան	NOUN	_	Case=Nom|Definite=Ind|Number=Sing|Typo=Yes	11	acl:relcl	_	SpaceAfter=No|Translit=bžkaran|LTranslit=bžškaran
19	,	,	PUNCT	_	_	20	punct	_	Translit=,|LTranslit=,
20	հրամանաւ	հրաման	NOUN	_	Case=Ins|Definite=Ind|Number=Sing	11	obl	_	Translit=hramanaw|LTranslit=hraman
21	աստուածազարդեալ	աստուածազարդեալ	ADJ	_	_	22	amod	_	Translit=astowaçazardeal|LTranslit=astowaçazardeal
22	եպիսկոպոսի	եպիսկոպոս	NOUN	_	Case=Gen|Number=Sing	20	nmod:poss	_	SpaceAfter=No|Translit=episkoposi|Lang=xcl|LTranslit=episkopos
23	ն	ն	DET	_	Definite=Def|Deixis=Remt|PronType=Art	22	det	_	Translit=n|Lang=xcl|LTranslit=n
24	Սիմէոնի	Սիմէոն	PROPN	_	Case=Gen|Number=Sing	22	nmod	_	SpaceAfter=No|Translit=Simēoni|Lang=xcl|LTranslit=Simēon
25	,	,	PUNCT	_	_	27	punct	_	Translit=,|LTranslit=,
26	ի	ի	ADP	_	AdpType=Prep	27	case	_	Translit=i|LTranslit=i
27	վայելումն	վայելումն	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	11	obl	_	Translit=vayelowmn|LTranslit=vayelowmn
28	անձին	անձ	NOUN	_	Case=Dat|Definite=Def|Number=Sing	27	nmod:npmod	_	Translit=anjin|LTranslit=anj
29	իւր	իւր	DET	_	Number=Sing|Person=3|PronType=Poss|Style=Arch	28	det	_	SpaceAfter=No|Translit=iwr|LTranslit=iwr
30	,	,	PUNCT	_	_	33	punct	_	Translit=,|LTranslit=,
31	եւ	եւ	CCONJ	_	_	33	cc	_	Translit=ew|LTranslit=ew
32	ի	ի	ADP	_	AdpType=Prep	33	case	_	Translit=i|LTranslit=i
33	պետս	պետ	NOUN	_	Case=Acc|Definite=Ind|Number=Plur	27	conj	_	Translit=pets|LTranslit=pet
34	եղբայրական	եղբայրական	ADJ	_	_	36	amod	_	Translit=eġbayrakan|LTranslit=eġbayrakan
35	միաբանեալ	միաբանիլ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	36	acl	_	Translit=miabaneal|LTranslit=miabanil
36	անձանց	անձ	NOUN	_	Case=Dat|Definite=Ind|Number=Plur	33	nmod:npmod	_	SpaceAfter=No|Translit=anjanc’|LTranslit=anj
37	,	,	PUNCT	_	_	42	punct	_	Translit=,|LTranslit=,
38	եւ	եւ	CCONJ	_	_	42	cc	_	Translit=ew|LTranslit=ew
39	յետ	յետ	ADP	_	AdpType=Prep	40	case	_	Translit=yet|LTranslit=yet
40	ելից	ելք	NOUN	_	Case=Dat|Definite=Ind|Number=Ptan	42	nmod:npmod	_	Translit=elic’|LTranslit=elk’
41	իւր	իւր	DET	_	Number=Sing|Person=3|PronType=Poss|Style=Arch	40	det	_	Translit=iwr|LTranslit=iwr
42	յիշատակ	յիշատակ	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	11	parataxis	_	Translit=yišatak|LTranslit=yišatak
43	հոգւոյ	հոգի	NOUN	_	Case=Gen|Number=Sing	42	nmod:poss	_	SpaceAfter=No|Translit=hogwoy|Lang=xcl|LTranslit=hogi
44	:	:	PUNCT	_	Foreign=Yes	11	punct	_	Translit=:|LTranslit=:

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 26 flat	color:blue
1	Եւ	եւ	CCONJ	_	_	2	cc	_	Translit=Ew|LTranslit=ew
2	գրեցաւ	գրել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=grec’aw|Lang=xcl|LTranslit=grel
3	սա	սա	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	2	nsubj:pass	_	Translit=sa|LTranslit=sa
4	ձեռամբ	ձեռն	NOUN	_	Case=Ins|Number=Sing	2	obl	_	Translit=jeṙamb|Lang=xcl|LTranslit=jeṙn
5	մեղապարտ	մեղապարտ	ADJ	_	_	6	amod	_	Translit=meġapart|LTranslit=meġapart
6	ծառայի	ծառայ	NOUN	_	Case=Gen|Number=Sing	4	nmod:poss	_	Translit=çaṙayi|Lang=xcl|LTranslit=çaṙay
7	Աստուծոյ	աստուած	NOUN	_	Case=Dat|Definite=Ind|Number=Sing	6	nmod:poss	_	Translit=Astowçoy|LTranslit=astowaç
8	Կոստանդեայ	Կոստանդին	PROPN	_	Case=Gen|Number=Sing	6	nmod	_	SpaceAfter=No|Translit=Kostandeay|Lang=xcl|LTranslit=Kostandin
9	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
10	եւ	եւ	CCONJ	_	_	11	cc	_	Translit=ew|LTranslit=ew
11	կատարեցաւ	կատարել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	2	conj	_	Translit=katarec’aw|Lang=xcl|LTranslit=katarel
12	սա	սա	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	11	nsubj:pass	_	Translit=sa|LTranslit=sa
13	ի	ի	ADP	_	AdpType=Prep	14	case	_	Translit=i|LTranslit=i
14	թու	թու.	NOUN	_	Abbr=Yes|Case=Nom|Definite=Ind|Number=Sing	11	obl	_	SpaceAfter=No|Translit=t’ow|LTranslit=t’ow.
15	.	.	PUNCT	_	_	14	punct	_	Translit=.|LTranslit=.
16	ՉԻԸ	ՉԻԸ	NUM	_	NumForm=Armenian|NumType=Card	14	nummod	_	Translit=Č’IË|LTranslit=Č’IË
17	(	(	PUNCT	_	_	18	punct	_	SpaceAfter=No|Translit=(|LTranslit=(
18	1279	1279	NUM	_	NumForm=Digit|NumType=Card	16	appos	_	SpaceAfter=No|Translit=1279|LTranslit=1279
19	)	)	PUNCT	_	_	18	punct	_	SpaceAfter=No|Translit=)|LTranslit=)
20	,	,	PUNCT	_	_	22	punct	_	Translit=,|LTranslit=,
21	յ	ի	ADP	_	AdpType=Prep	22	case	_	SpaceAfter=No|Translit=y|LTranslit=i
22	ամսեան	ամիս	NOUN	_	Case=Dat|Number=Sing	14	flat	_	Translit=amsean|Lang=xcl|LTranslit=amis
23	աւգաւստոս	աւգաւստոս	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	22	nmod	_	SpaceAfter=No|Translit=awgawstos|LTranslit=awgawstos
24	,	,	PUNCT	_	_	26	punct	_	Translit=,|LTranslit=,
25	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	26	nsubj	_	Translit=or|LTranslit=or
26	աւր	աւր	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	14	flat	_	Translit=awr|LTranslit=awr
27	Թ	Թ	NUM	_	NumForm=Armenian|NumType=Card	26	nummod	_	Translit=T’|LTranslit=T’
28	(	(	PUNCT	_	_	29	punct	_	SpaceAfter=No|Translit=(|LTranslit=(
29	9	9	NUM	_	NumForm=Digit|NumType=Card	27	appos	_	SpaceAfter=No|Translit=9|LTranslit=9
30	)	)	PUNCT	_	_	29	punct	_	Translit=)|LTranslit=)
31	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	26	cop	_	SpaceAfter=No|Translit=ē|LTranslit=em
32	:	:	PUNCT	_	Foreign=Yes	2	punct	_	Translit=:|LTranslit=:

~~~


