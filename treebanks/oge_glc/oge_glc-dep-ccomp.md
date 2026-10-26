---
layout: base
title:  'Statistics of ccomp in UD_Old_Georgian-GLC'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-GLC: Relations: `ccomp`

This relation is universal.

66 nodes (1%) are attached to their parents as `ccomp`.

65 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.9848484848485.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-VERB.html">VERB</a></tt> (41; 62% instances), <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-NOUN.html">NOUN</a></tt> (7; 11% instances), <tt><a href="oge_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_glc-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-AUX.html">AUX</a></tt> (3; 5% instances), <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-PRON.html">PRON</a></tt> (3; 5% instances), <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="oge_glc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="oge_glc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="oge_glc-pos-ADV.html">ADV</a></tt>-<tt><a href="oge_glc-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 ccomp	color:blue
1	ჱ(8)	ჱ(8)	NUM	Num	NumForm=Georgian|NumType=Card	7	dep	_	Translit=h(8)
2	ყოველსა	ყოველი	PRON	Pron	Case=Dat|Number=Sing|PronType=Tot	3	det	_	Translit=qovelsa
3	შინა	შინა	ADP	Post	AdpType=Post|Case=Dat	7	obl	_	Translit=šina
4	მამათა	მამა	NOUN	Noun	Case=Gen|Number=Plur	6	obl	_	Translit=mamatʻa
5	ჩუენთა	ჩუენი	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	4	nmod	_	Translit=čʻuentʻa
6	მიერ	მიერ	ADP	Post	AdpType=Post|Case=Gen	7	case	_	Translit=mier
7	განწესებულთაჲ	განწესებული	VERB	Verb	Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	10	obj	_	Translit=gancesebultʻay
8	ჩუენცა	ჩუენ	PRON	Pron	Case=Nom|Number=Plur|PartType=Emp|Person=1|PronType=Prs	10	nsubj	_	Translit=čʻuencʻa
9	გუნებავს	ნებავს	VERB	Verb	Aspect=Imp|Mood=Ind|Number[io]=Plur|Number[subj]=Sing|Person[io]=1|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=gunebavs
10	დამტკიცებაჲ	დამტკიცება	VERB	Verb	Case=Nom|Number=Sing|VerbForm=Vnoun	9	ccomp	_	SpaceAfter=No|Translit=damtkicʻebay
11	.	.	PUNCT	F	PunctType=Peri	9	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	და	და	CCONJ	Conj	_	3	cc	_	Translit=da
2	მოქიცული	მოქიცული	NOUN	Noun	Case=Nom|Number=Sing	3	nsubj	_	Translit=mokʻicʻuli
3	ასწავებს	სწავლა	VERB	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Translit=ascavebs
4	,	,	PUNCT	F	PunctType=Comm	3	punct	_	Translit=,
5	ვითარმედ	ვითარმედ	SCONJ	SCONJ	_	8	mark	_	SpaceAfter=No|Translit=vitʻarmed
6	:	:	PUNCT	F	PunctType=Colo	8	punct	_	Translit=:
7	„	„	PUNCT	F	PunctSide=Ini|PunctType=Quot	8	punct	_	SpaceAfter=No|Translit=„
8	ქორწილი	ქორწილი	NOUN	Noun	Case=Nom|Number=Sing	3	ccomp	_	Translit=kʻorcili
9	წმიდა	წმიდა	ADJ	Adj	Case=Nom|Degree=Pos|Number=Sing	8	amod	_	Translit=cmida
10	არს	ყოფა	AUX	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	Translit=ars
11	და	და	CCONJ	Conj	_	12	cc	_	Translit=da
12	საწოლი	საწოლი	NOUN	Noun	Case=Nom|Number=Sing	8	conj	_	Translit=sacoli
13	შეუგინებელ	შეუგინებელი	ADJ	Adj	Case=Nom|Number=Sing	12	amod	_	SpaceAfter=No|Translit=šeuginebel
14	“	“	PUNCT	F	PunctSide=Fin|PunctType=Quot	12	punct	_	SpaceAfter=No|Translit=“
15	.	.	PUNCT	F	PunctType=Peri	3	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 15 ccomp	color:blue
1	აწ	აწ	ADV	Adv	AdvType=Tim	31	advmod	_	Translit=ac
2	უკუე	უკუე	ADV	Adv	_	31	advmod	_	Translit=ukue
3	ღირსებამან	ღირსება	NOUN	Noun	Case=Erg|Number=Sing	31	nsubj	_	Translit=ġirsebaman
4	შენმან	შენი	PRON	Pron	Case=Erg|Number=Sing|Person=2|PronType=Prs	3	det:poss	_	SpaceAfter=No|Translit=šenman
5	,	,	PUNCT	F	PunctType=Comm	3	punct	_	Translit=,
6	ვითარცა	ვითარცა	SCONJ	Conj	_	8	mark	_	Translit=vitʻarcʻa
7	ზედამიწევნით	ზედამიწევნით	ADV	Adv	AdvType=Man	8	advmod	_	Translit=zedamicevnitʻ
8	მეცნიერმან	მეცნიერი	NOUN	Noun	Case=Erg|Number=Sing	3	acl	_	Translit=mecʻnierman
9	საღმრთოთა	საღმრთოჲ	ADJ	Adj	Case=Gen|Number=Plur	10	amod	_	Translit=saġmrtʻotʻa
10	კანონთა	კანონი	NOUN	Noun	Case=Gen|Number=Plur	11	nmod	_	Translit=kanontʻa
11	განჩინებისამან	განჩინება	NOUN	Noun	Case=Erg|Case[stack]=Gen|Number=Sing	8	obl	_	Translit=gančʻinebisaman
12	და	და	CCONJ	Conj	_	15	cc	_	Translit=da
13	თუ	თუ	PART	Part	_	14	advmod	_	Translit=tʻu
14	რაჲ	რაჲ	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	15	nsubj	_	Translit=ray
15	ჰშუენის	შუენა	VERB	Verb	Aspect=Perf|Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp	_	Translit=hšuenis
16	ეკლესიასა	ეკლესია	NOUN	Noun	Case=Dat|Number=Sing	15	iobj	_	Translit=eklesiasa
17	და	და	CCONJ	Conj	_	23	cc	_	Translit=da
18	მას	იგი	PRON	Pron	Case=Dat|Number=Sing|PronType=Prs	22	obl	_	Translit=mas
19	შინა	შინა	ADP	Post	AdpType=Post|Case=Dat	18	case	_	Translit=šina
20	წმიდისა	წმიდაჲ	ADJ	Adj	Case=Gen|Degree=Pos|Number=Sing	21	amod	_	Translit=cmidisa
21	მსახურებისა	მსახურება	NOUN	Noun	Case=Gen|Number=Sing	22	obl	_	Translit=msaxurebisa
22	რწმუნებულთა	რწმუნებული	VERB	Verb	Case=Gen|Number=Plur|VerbForm=Part|Voice=Pass	23	amod	_	Translit=rcmunebultʻa
23	მღდელთა	მღდელი	NOUN	Noun	Case=Dat|Number=Plur	16	conj	_	SpaceAfter=No|Translit=mġdeltʻa
24	,	,	PUNCT	F	PunctType=Comm	31	punct	_	Translit=,
25	ამათ	ეს	PRON	Pron	Case=Dat|Number=Plur|PronType=Dem	31	obl	_	Translit=amatʻ
26	თანა	თანა	ADP	Post	AdpType=Post|Case=Dat	25	case	_	Translit=tʻana
27	ვედრებით	ვედრება	NOUN	Noun	Case=Ins|Number=Sing	31	obl	_	Translit=vedrebitʻ
28	ლმობიერქმნილმანცა	ლმობიერქმნილი	VERB	Verb	Case=Erg|Number=Sing|PartType=Emp|VerbForm=Part|Voice=Pass	31	advcl	_	Translit=lmobierkʻmnilmancʻa
29	წიგნებითა	წიგნი	NOUN	Noun	Case=Ins|Number=Plur	31	obl	_	Translit=cignebitʻa
30	ჩუენითა	ჩუენი	PRON	Pron	Case=Ins|Number=Plur|Person=1|PronType=Prs	29	det:poss	_	Translit=čʻuenitʻa
31	დააცხრვენინ	დააცხრვენინ	VERB	Verb	Aspect=Perf|Mood=Imp|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=daacʻxrvenin
32	ცრემლნი	ცრემლი	NOUN	Noun	Case=Nom|Number=Plur	31	obj	_	Translit=cʻremlni
33	მოხუცებულებისანი	მოხუცებულება	NOUN	Noun	Case=Nom|Number=Plur	32	nmod	_	SpaceAfter=No|Translit=moxucʻebulebisani
34	.	.	PUNCT	F	PunctType=Peri	31	punct	_	Translit=.

~~~


