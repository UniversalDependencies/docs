---
layout: base
title:  'Statistics of nummod in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="orv_birchbark-dep-nummod-gov.html">nummod:gov</a></tt>.

115 nodes (0%) are attached to their parents as `nummod`.

104 instances of `nummod` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt> (101; 88% instances), <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt> (8; 7% instances), <tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="orv_birchbark-pos-X.html">X</a></tt>-<tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="orv_birchbark-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	и	и	CCONJ	CONJ	_	2	cc	_	wf="и"|addr="096:3"
2	ѧ	ꙗзъ	PRON	SPRO,sg,1p,nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	0	root	_	wf="я"|addr="096:3"
3	ѡмеши	омеши	NOUN	S,pl,pl_tant,acc	Case=Acc|Gender=Fem|Number=Plur	2	orphan	_	wf="омеши"|comment="pl_tant"|meaning="лемеха́"|addr="096:3"
4	двои	двои	NUM	A,pl,acc	Case=Acc|Number=Plur|NumForm=Word|NumType=Sets	3	nummod	_	wf="двои"|meaning="двукратный, двойной"|comment="alt_ana:lemma=двои:gr=A,f,pl,acc"|addr="096:3"
5	за	за	ADP	PR,gvrn:acc	_	6	case	_	wf="за"|comment="gvrn:acc"|addr="096:3"
6	ѳедора	Федоръ	PROPN	S,persn,m,sg,acc-gen	Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	2	orphan	_	wf="федора"|addr="096:3"
7	з	съ	ADP	PR,gvrn:ins	_	8	case	_	wf="з"|comment="gvrn:ins"|addr="096:3"
8	бра<lbr/>(т)…	братьꙗ	NOUN	S,coll,f,sg,ins,fragment,lemma_unsure	Case=Ins|Fragment=Yes|Gender=Fem|Number=Sing	6	nmod	_	wf="брат…"|comment="coll,lemma_unsure"|after:line_id=4|comment="alt_ana:lemma=братъ:gr=S,coll,m,sg,ins,fragment,lemma_unsure"|addr="096:3"

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nummod	color:blue
1	…тѹ	ту	ADV	ADV,fragment,lemma_unsure	Fragment=Yes	0	root	_	wf="…ту"|comment="lemma_unsure"|line_id="1"|addr="322:1"
2	и	и	CCONJ	CONJ	_	7	cc	_	wf="и"|addr="322:1"
3	на	на	ADP	PR,gvrn:acc,fragment	Fragment=Yes	7	case	_	wf="на"|comment="gvrn:acc"|comment="alt_ana:lemma=на:gr=PR,gvrn:loc,fragment"|addr="322:1"
4	…	…	PUNCT	_	_	7	punct	_	wf="…"|line_id="2"|addr="322:2"
5	безо	безъ	ADP	PR,gvrn:gen	_	6	case	_	wf="безо"|comment="gvrn:gen"|addr="322:2"
6	пѧти	пѧть	NUM	NUM,card,gen	Case=Gen|NumForm=Word|NumType=Card	9	nmod	_	wf="пяти"|addr="322:2"
7	д[ежь]	дѣжа	NOUN	S,f,pl,gen	Case=Gen|Gender=Fem|Number=Plur	1	conj	_	wf="дежь"|meaning="как мера количества зерна."|addr="322:2"
8	пѧти	пѧть	NUM	NUM,card,gen?	Case=Gen|NumForm=Word|NumType=Card	9	nummod:gov	_	wf="пяти"|comment="gen?,case_unsure"|addr="322:2"
9	сотъ	сто	NOUN	S,n,pl,gen	Case=Gen|Gender=Neut|Number=Plur	7	nummod	_	wf="сотъ"|addr="322:2"
10	·	·	PUNCT	_	_	1	punct	_	wf="·"|addr="322:2"

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nummod	color:blue
1	а	а	CCONJ	CONJ	_	4	cc	_	wf="а"|line_id="51"|addr="Мос._3:51"
2	что	что	PRON	APRO,rel,acc	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	4	obj	_	wf="что"|addr="Мос._3:51"
3	ѧзъ	ꙗзъ	PRON	SPRO,sg,1p,nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	wf="язъ"|addr="Мос._3:51"
4	ѻтдал	отдати	VERB	V,l-partcp,perf,sg,1p,m,without_copula	Gender=Masc|Number=Sing|Person=1|Tense=Past|VerbForm=PartRes|Voice=Act	8	dislocated	_	wf="отдал"|tense=perf|comment="without_copula"|addr="Мос._3:51"
5	-----------------	_	X	NONLEX	_	4	dep	_	wf="-----------------"|addr="Мос._3:51"
6	(за	за	ADP	PR,gvrn:ins,reconstr,lemma_unsure	_	7	case	_	wf="за"|comment="gvrn:ins,reconstr,lemma_unsure"|line_id="52"|addr="Мос._3:52"
7	м)ною	ꙗзъ	PRON	SPRO,sg,ins,lemma_unsure	Case=Ins|Number=Sing|Person=1|PronType=Prs	8	obl	_	wf="мною"|comment="lemma_unsure"|addr="Мос._3:52"
8	пошло	поити	VERB	V,l-partcp,perf,sg,3p,n,without_copula	Gender=Neut|Number=Sing|Person=3|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="пошло"|tense=perf|meaning="пойти, поехать"|comment="without_copula"|addr="Мос._3:52"
9	·ѯ҃·	·ѯ҃·	NUM	NUM,card,digit	NumForm=Cyril|NumType=Card	12	nummod:gov	_	wf="ѯ"|addr="Мос._3:52"
10	и	и	CCONJ	CONJ	_	11	cc	_	wf="и"|addr="Мос._3:52"
11	двоѥ	двоѥ	NUM	NUM,card,nom	Case=Nom|NumForm=Word|NumType=Sets	9	nummod	_	wf="двое"|addr="Мос._3:52"
12	лошад	лошадь	NOUN	S,f,pl,gen	Case=Gen|Gender=Fem|Number=Plur	8	nsubj	_	wf="лошад"|addr="Мос._3:52"
13	а	а	CCONJ	CONJ	_	16	cc	_	wf="а"|addr="Мос._3:52"
14	за	за	ADP	PR,gvrn:acc	_	15	case	_	wf="за"|comment="gvrn:acc"|addr="Мос._3:52"
15	мене	ꙗзъ	PRON	SPRO,acc-gen,ton	Case=Acc|PronType=Prs	16	obl	_	wf="мене"|comment="clitic_ton"|addr="Мос._3:52"
16	дашь	дати	VERB	V,nonpast,sg,2p	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	wf="дашь"|comment="tense_nonpast"|addr="Мос._3:52"
17	·л҃·ро	·л҃·	NUM	NUM,card,acc,digit	Case=Acc|NumForm=Combi|NumType=Sets	16	obj	_	wf="л-ро"|comment="alt_ana:lemma=тридьсѧтеро:gr=NUM,card,acc,digit"|line_id="53"|addr="Мос._3:53"
18	и	и	CCONJ	CONJ	_	19	cc	_	wf="и"|addr="Мос._3:53"
19	двоѥ	двоѥ	NUM	NUM,card,acc	Case=Acc|NumForm=Word|NumType=Sets	17	conj	_	wf="двое"|addr="Мос._3:53"

~~~


