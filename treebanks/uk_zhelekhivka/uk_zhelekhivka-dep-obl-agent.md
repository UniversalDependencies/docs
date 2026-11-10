---
layout: base
title:  'Statistics of obl:agent in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="uk_zhelekhivka-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="uk_zhelekhivka-dep-obl-arg.html">obl:arg</a></tt>.

5 nodes (0%) are attached to their parents as `obl:agent`.

5 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.8.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 obl:agent	color:blue
1	Навпаки	навпаки	ADV	ADV	_	15	parataxis	_	SpaceAfter=No|TokenRange=22504:22511
2	:	:	PUNCT	PUNCT	_	1	punct	_	TokenRange=22511:22512
3	честь	честь	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	15	nsubj	_	SpaceAfter=No|TokenRange=22513:22518
4	,	,	PUNCT	PUNCT	_	5	punct	_	TokenRange=22518:22519
5	достоінство	достоїнство	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	conj	_	TokenRange=22520:22531
6	її	її	DET	DET	Case=Nom|Gender=Neut|InflClass=Ind|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	det	_	TokenRange=22532:22534
7	і	і	CCONJ	CCONJ	_	8	cc	_	TokenRange=22535:22536
8	пошанованнє	пошанування	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	conj	_	TokenRange=22537:22548
9	принципу	принцип	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	TokenRange=22549:22557
10	запомоги	запомога	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No|TokenRange=22558:22566
11	,	,	PUNCT	PUNCT	_	12	punct	_	TokenRange=22566:22567
12	висловленого	висловлений	ADJ	ADJ	Aspect=Perf|Case=Gen|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	9	amod	_	TokenRange=22568:22580
13	конвентом	конвент	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	12	obl:agent	_	SpaceAfter=No|TokenRange=22581:22590
14	,	,	PUNCT	PUNCT	_	12	punct	_	TokenRange=22590:22591
15	обовязували	обов'язувати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=22592:22605
16	б	б	AUX	VERB	_	15	aux	_	TokenRange=22592:22605
17	її	вона	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	15	obj	_	TokenRange=22606:22608
18	вступити	вступити	VERB	VERB	Aspect=Perf|VerbForm=Inf	15	xcomp	_	TokenRange=22609:22617
19	ся	ся	PRON	DET	PronType=Prs|Reflex=Yes	18	expl:pv	_	TokenRange=22618:22620
20	за	за	ADP	ADP	Case=Acc	21	case	_	TokenRange=22621:22623
21	визволення	визволення	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	18	obl	_	TokenRange=22624:22634
22	і	і	CCONJ	CCONJ	_	23	advmod:emph	_	TokenRange=22635:22636
23	Фінляндцїв	фінляндець	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	21	nmod	_	SpaceAfter=No|TokenRange=22637:22647
24	,	,	PUNCT	PUNCT	_	26	punct	_	TokenRange=22647:22648
25	і	і	CCONJ	CCONJ	_	26	advmod:emph	_	TokenRange=22649:22650
26	Поляків	поляк	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	23	conj	_	SpaceAfter=No|TokenRange=22651:22658
27	,	,	PUNCT	PUNCT	_	29	punct	_	TokenRange=22658:22659
28	і	і	CCONJ	CCONJ	_	29	advmod:emph	_	TokenRange=22660:22661
29	Гольштинцїв	гольштинець	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	23	conj	_	TokenRange=22662:22673
30	і	і	CCONJ	CCONJ	_	33	advmod:emph	_	TokenRange=22674:22675
31	ін.	ін.	DET	PART	Abbr=Yes|Animacy=Anim|Case=Gen|InflClass=Ind|Number=Plur|PronType=Ind	33	det	_	TokenRange=22676:22679
32	зневолених	зневолений	ADJ	ADJ	Aspect=Perf|Case=Gen|Number=Plur|VerbForm=Part|Voice=Pass	33	amod	_	TokenRange=22680:22690
33	народів	народ	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	23	conj	_	SpaceAfter=No|TokenRange=22691:22698
34	.	.	PUNCT	PUNCT	_	15	punct	_	TokenRange=22698:22699

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 25 obl:agent	color:blue
1	Таких	такий	DET	DET	Case=Gen|Number=Plur|PronType=Dem	2	det	_	TokenRange=17724:17729
2	фактів	факт	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	obj	_	TokenRange=17730:17736
3	можна	можна	ADV	ADV	_	0	root	_	TokenRange=17737:17742
4	навести	навести	VERB	VERB	Aspect=Perf|VerbForm=Inf	3	csubj	_	TokenRange=17743:17750
5	і	і	PART	CCONJ	_	8	advmod:emph	_	TokenRange=17751:17752
6	тричи	тричі	ADV	ADV	_	8	advmod	_	TokenRange=17753:17758
7	ще	ще	ADV	ADV	_	8	advmod	_	TokenRange=17759:17761
8	більше	більше	ADV	ADV	Degree=Cmp	4	advmod	_	SpaceAfter=No|TokenRange=17762:17768
9	,	,	PUNCT	PUNCT	_	13	punct	_	TokenRange=17768:17769
10	та	та	CCONJ	ADV	_	13	cc	_	TokenRange=17770:17773
11	й	й	PART	ADV	_	12	advmod:emph	_	TokenRange=17770:17773
12	наведених	наведений	ADJ	ADJ	Aspect=Perf|Case=Gen|Number=Plur|VerbForm=Part|Voice=Pass	13	nsubj	_	TokenRange=17774:17783
13	досить	досить	ADV	ADV	_	3	conj	_	TokenRange=17784:17790
14	буде	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	13	cop	_	TokenRange=17791:17795
15	на	на	ADP	ADP	Case=Acc	16	case	_	TokenRange=17796:17798
16	те	те	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	13	obl	_	SpaceAfter=No|TokenRange=17799:17801
17	,	,	PUNCT	PUNCT	_	19	punct	_	TokenRange=17801:17802
18	що-б	щоб	SCONJ	SCONJ	_	19	mark	_	TokenRange=17803:17807
19	згодити	згодити	VERB	VERB	Aspect=Perf|Reflex=Yes|VerbForm=Inf	16	acl	_	TokenRange=17808:17815
20	ся	ся	PRON	PRON	PronType=Prs|Reflex=Yes	19	expl:pv	_	TokenRange=17816:17818
21	з	з	ADP	ADP	Case=Ins	22	case	_	TokenRange=17819:17820
22	думкою	думка	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No|TokenRange=17821:17827
23	,	,	PUNCT	PUNCT	_	24	punct	_	TokenRange=17827:17828
24	висловленою	висловлений	ADJ	ADJ	Aspect=Perf|Case=Ins|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	22	amod	_	TokenRange=17829:17840
25	нами	ми	PRON	PRON	Animacy=Anim|Case=Ins|Number=Plur|Person=1|PronType=Prs	24	obl:agent	_	TokenRange=17841:17845
26	в	в	ADP	ADP	Case=Loc	27	case	_	TokenRange=17846:17847
27	горі	гора	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	24	obl	_	SpaceAfter=No|TokenRange=17848:17852
28	,	,	PUNCT	PUNCT	_	38	punct	_	TokenRange=17852:17853
29	що	що	SCONJ	SCONJ	_	38	mark	_	TokenRange=17854:17856
30	саме	самий	ADJ	PART	Case=Nom|Gender=Neut|Number=Sing	31	amod	_	TokenRange=17857:17861
31	оголошуваннє	оголошування	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	38	nsubj	_	TokenRange=17862:17874
32	найлїпших	найліпший	ADJ	ADJ	Case=Gen|Degree=Sup|Number=Plur	35	amod	_	SpaceAfter=No|TokenRange=17875:17884
33	,	,	PUNCT	PUNCT	_	34	punct	_	TokenRange=17884:17885
34	найгуманнїйших	найгуманніший	ADJ	ADJ	Case=Gen|Degree=Sup|Number=Plur	32	conj	_	TokenRange=17886:17900
35	принципів	принцип	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	31	nmod	_	SpaceAfter=No|TokenRange=17901:17910
36	,	,	PUNCT	PUNCT	_	38	punct	_	TokenRange=17910:17911
37	не	не	PART	PART	Polarity=Neg	38	advmod:neg	_	TokenRange=17912:17914
38	має	мати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	acl	_	TokenRange=17915:17918
39	і	і	CCONJ	CCONJ	_	41	cc	_	TokenRange=17919:17920
40	не	не	PART	PART	Polarity=Neg	41	advmod:neg	_	TokenRange=17921:17923
41	мати	мати	VERB	VERB	Aspect=Imp|VerbForm=Inf	38	conj	_	TokenRange=17924:17928
42	ме	мати	AUX	PRON	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	41	aux	_	TokenRange=17929:17931
43	великої	великий	ADJ	ADJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	45	amod	_	TokenRange=17932:17939
44	реальної	реальний	ADJ	ADJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	45	amod	_	TokenRange=17940:17948
45	ваги	вага	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	41	obj	_	TokenRange=17949:17953
46	доти	доти	ADV	ADV	PronType=Dem	41	advmod	_	SpaceAfter=No|TokenRange=17954:17958
47	,	,	PUNCT	PUNCT	_	52	punct	_	TokenRange=17958:17959
48	доки	доки	SCONJ	ADV	PronType=Rel	52	mark	_	TokenRange=17960:17964
49	більшість	більшість	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	52	nsubj	_	TokenRange=17965:17974
50	нациї	нація	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	49	nmod	_	TokenRange=17975:17980
51	не	не	PART	PART	Polarity=Neg	52	advmod:neg	_	TokenRange=17981:17983
52	переняла	переняти	VERB	VERB	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	46	advcl	_	TokenRange=17984:17992
53	ся	ся	PRON	PRON	PronType=Prs|Reflex=Yes	52	expl:pv	_	TokenRange=17993:17995
54	тими	той	DET	DET	Case=Ins|Number=Plur|PronType=Dem	55	det	_	TokenRange=17996:18000
55	принципами	принцип	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	52	obl	_	SpaceAfter=No|TokenRange=18001:18011
56	,	,	PUNCT	PUNCT	_	58	punct	_	TokenRange=18011:18012
57	не	не	PART	PART	Polarity=Neg	58	advmod:neg	_	TokenRange=18013:18015
58	засвоїла	засвоїти	VERB	VERB	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	52	conj	_	TokenRange=18016:18024
59	їх	вони	PRON	PRON	Case=Acc|Number=Plur|Person=3|PronType=Prs	58	obj	_	SpaceAfter=No|TokenRange=18025:18027
60	,	,	PUNCT	PUNCT	_	62	punct	_	TokenRange=18027:18028
61	не	не	PART	PART	Polarity=Neg	62	advmod:neg	_	TokenRange=18029:18031
62	втїлила	втілити	VERB	VERB	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	52	conj	_	TokenRange=18032:18039
63	в	в	ADP	ADP	Case=Acc	64	case	_	TokenRange=18040:18041
64	себе	себе	PRON	PRON	Case=Acc|PronType=Prs|Reflex=Yes	62	obl	_	SpaceAfter=No|TokenRange=18042:18046
65	.	.	PUNCT	PUNCT	_	3	punct	_	TokenRange=18046:18047

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 obl:agent	color:blue
1	Тепер	тепер	ADV	ADV	PronType=Dem	4	advmod	_	TokenRange=17573:17578
2	же	же	PART	PART	_	1	discourse	_	TokenRange=17579:17581
3	їй	вона	PRON	PRON	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	iobj	_	TokenRange=17582:17584
4	хотїли	хотіти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=17585:17591
5	навести	навести	VERB	VERB	Aspect=Perf|VerbForm=Inf	4	xcomp	_	TokenRange=17592:17599
6	такі	такий	DET	DET	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	8	det	_	TokenRange=17600:17604
7	лишень	лишень	PART	PART	_	8	discourse	_	TokenRange=17605:17611
8	факти	факт	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	5	obj	_	TokenRange=17612:17617
9	з	з	ADP	ADP	Case=Gen	10	case	_	TokenRange=17618:17619
10	історії	історія	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	TokenRange=17620:17627
11	Франциї	Франція	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	10	nmod	_	NameType=Geo|SpaceAfter=No|TokenRange=17628:17635
12	,	,	PUNCT	PUNCT	_	14	punct	_	TokenRange=17635:17636
13	що	що	SCONJ	SCONJ	_	14	mark	_	TokenRange=17637:17639
14	стоять	стояти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	TokenRange=17640:17646
15	в	в	ADP	ADP	Case=Loc	16	case	_	TokenRange=17647:17648
16	суперечі	супереч	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	14	obl	_	TokenRange=17649:17657
17	з	з	ADP	ADP	Case=Ins	18	case	_	TokenRange=17658:17659
18	принципами	принцип	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	16	nmod	_	TokenRange=17660:17670
19	проти	проти	ADP	ADP	Case=Gen	20	case	_	TokenRange=17671:17676
20	війни	війна	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	18	nmod	_	SpaceAfter=No|TokenRange=17677:17682
21	,	,	PUNCT	PUNCT	_	22	punct	_	TokenRange=17682:17683
22	оголошеними	оголошений	ADJ	ADJ	Aspect=Perf|Case=Ins|Number=Plur|VerbForm=Part|Voice=Pass	18	amod	_	TokenRange=17684:17695
23	Франциєю	Франція	PROPN	PROPN	Animacy=Inan|Case=Ins|Gender=Fem|NameType=Geo|Number=Sing	22	obl:agent	_	TokenRange=17696:17704
24	першої	перший	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing|NumType=Ord	25	amod	_	TokenRange=17705:17711
25	республики	республіка	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	SpaceAfter=No|TokenRange=17712:17722
26	.	.	PUNCT	PUNCT	_	4	punct	_	TokenRange=17722:17723

~~~


