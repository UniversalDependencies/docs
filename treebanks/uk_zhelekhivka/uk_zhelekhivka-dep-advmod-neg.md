---
layout: base
title:  'Statistics of advmod:neg in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="uk_zhelekhivka-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="uk_zhelekhivka-dep-advmod-det.html">advmod:det</a></tt>, <tt><a href="uk_zhelekhivka-dep-advmod-emph.html">advmod:emph</a></tt>.

164 nodes (2%) are attached to their parents as `advmod:neg`.

163 instances of `advmod:neg` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21951219512195.

The following 8 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (103; 63% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (25; 15% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (17; 10% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (13; 8% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (3; 2% instances), <tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="uk_zhelekhivka-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod:neg	color:blue
1	Виписуючи	виписувати	VERB	VERB	Aspect=Imp|Tense=Pres|VerbForm=Conv	10	advcl	_	TokenRange=13891:13900
2	оті	отой	DET	DET	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	3	det	_	TokenRange=13901:13904
3	слова	слово	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	1	obj	_	TokenRange=13905:13910
4	п	п.	NOUN	NOUN	Abbr=Yes|Animacy=Anim|Case=Gen|Gender=Masc|InflClass=Ind|Number=Sing	3	nmod	_	InflClass=Ind|SpaceAfter=No|TokenRange=13911:13912
5	.	.	PUNCT	PUNCT	_	4	punct	_	TokenRange=13912:13913
6	Рише	Рише	PROPN	PART	Animacy=Anim|Case=Gen|Gender=Masc|InflClass=Ind|NameType=Sur|Number=Sing	4	flat	_	SpaceAfter=No|TokenRange=13914:13918
7	,	,	PUNCT	PUNCT	_	6	punct	_	TokenRange=13918:13919
8	ми	ми	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	TokenRange=13920:13922
9	не	не	PART	PART	Polarity=Neg	10	advmod:neg	_	TokenRange=13923:13925
10	маємо	мати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=13926:13931
11	на	на	ADP	ADP	Case=Loc	12	case	_	TokenRange=13932:13934
12	думцї	думка	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	10	obl	_	TokenRange=13935:13940
13	зупиняти	зупиняти	VERB	VERB	Aspect=Imp|VerbForm=Inf	10	xcomp	_	TokenRange=13941:13949
14	ся	ся	PRON	PRON	PronType=Prs|Reflex=Yes	13	expl:pv	_	SpaceAfter=No|TokenRange=13950:13952
15	.	.	PUNCT	PUNCT	_	10	punct	_	TokenRange=13952:13953

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 advmod:neg	color:blue
1	Ні	ні	INTJ	INTJ	Polarity=Neg	0	root	_	SpaceAfter=No|TokenRange=12895:12897
2	,	,	PUNCT	PUNCT	_	1	punct	_	TokenRange=12897:12898
3	цього	це	PRON	PRON	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	7	obj	_	TokenRange=12899:12904
4	від	від	ADP	ADP	Case=Gen	6	case	_	TokenRange=12905:12908
5	теперішної	теперішній	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	6	amod	_	TokenRange=12909:12919
6	молодіжи	молодіж	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	obl	_	TokenRange=12920:12928
7	вимагати	вимагати	VERB	VERB	Aspect=Imp|VerbForm=Inf	9	csubj	_	TokenRange=12929:12937
8	не	не	PART	NOUN	Polarity=Neg	9	advmod:neg	_	TokenRange=12938:12944
9	слід	слід	ADV	NOUN	_	1	parataxis	_	TokenRange=12938:12944
10	.	.	PUNCT	PUNCT	_	1	punct	_	TokenRange=12944:12945

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod:neg	color:blue
1	Знова	знову	ADV	ADV	_	7	discourse	_	TokenRange=15783:15789
2	ж	ж	PART	ADV	_	1	discourse	_	TokenRange=15783:15789
3	середником	середник	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	7	xcomp	_	TokenRange=15790:15800
4	до	до	ADP	ADP	Case=Gen	5	case	_	TokenRange=15801:15803
5	осягнення	осягнення	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	nmod	_	TokenRange=15804:15813
6	самостійности	самостійність	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	TokenRange=15814:15827
7	може	могти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=15828:15832
8	бути	бути	AUX	AUX	Aspect=Imp|VerbForm=Inf	7	cop	_	TokenRange=15833:15837
9	не	не	PART	PART	Polarity=Neg	10	advmod:neg	_	TokenRange=15838:15840
10	робота	робота	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	TokenRange=15841:15847
11	з	з	ADP	ADP	Case=Gen	12	case	_	TokenRange=15848:15849
12	гори	гора	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No|TokenRange=15850:15854
13	,	,	PUNCT	PUNCT	_	16	punct	_	TokenRange=15854:15855
14	а	а	CCONJ	CCONJ	_	16	cc	_	TokenRange=15856:15857
15	з	з	ADP	ADP	Case=Gen	16	case	_	TokenRange=15858:15859
16	долини	долина	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	12	conj	_	SpaceAfter=No|TokenRange=15860:15866
17	,	,	PUNCT	PUNCT	_	19	punct	_	TokenRange=15866:15867
18	з	з	ADP	ADP	Case=Gen	19	case	_	TokenRange=15868:15869
19	низу	низ	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	16	conj	_	TokenRange=15870:15874
20	від	від	ADP	ADP	Case=Gen	22	case	_	TokenRange=15875:15878
21	поодиноких	поодинокий	ADJ	ADJ	Case=Gen|Number=Plur	22	amod	_	TokenRange=15879:15889
22	громад	громада	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	16	conj	_	SpaceAfter=No|TokenRange=15890:15896
23	.	.	PUNCT	PUNCT	_	7	punct	_	TokenRange=15896:15897

~~~


