---
layout: base
title:  'Statistics of parataxis:discourse in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-parataxis.html">parataxis</a></tt>.

57 nodes (0%) are attached to their parents as `parataxis:discourse`.

50 instances of `parataxis:discourse` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.64912280701754.

The following 11 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (28; 49% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (6; 11% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (5; 9% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (5; 9% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (4; 7% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (3; 5% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 parataxis:discourse	color:blue
1	Царь	царь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	vocative	_	norm="Царь"|Decl=2|End=ь0|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	norm=","
3	государь	государь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	appos	_	norm="государь"|Decl=2|End=ь0|SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	norm=","
5	смилуйся	смиловатися	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Mid	0	root	_	norm="смилуйся"|Decl=X|End=ясйу|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	norm=","
7	пожалуй	пожаловати	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	5	parataxis:discourse	_	norm="пожалуй"|Decl=X|End=й|SpaceAfter=No
8	!	!	PUNCT	_	_	5	punct	_	norm="!"

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 parataxis:discourse	color:blue
1	А	а	CCONJ	_	_	13	cc	_	norm="А"
2	словенску	словенский	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	4	amod	_	norm="словенску"|Decl=X|End=у
3	же	же	PART	_	_	2	advmod	_	norm="же"
4	языку	языкъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	9	nsubj	_	norm="языку"|Decl=2|End=у|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	norm=","
6	якоже	якоже	SCONJ	_	_	7	mark	_	norm="якоже"
7	рекох	рещи	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	9	parataxis:discourse	_	norm="рекох"|Decl=X|End=хо|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	norm=","
9	живущу	жити	VERB	_	Case=Dat|Gender=Masc|Number=Sing|Tense=Pres|Variant=Short|VerbForm=Part|Voice=Act	13	advcl	_	norm="живущу"|Decl=X|End=ущу
10	на	на	ADP	_	_	11	case	_	norm="на"|check=@
11	Дунаи	Дунай	PROPN	_	Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	9	obl	_	norm="Дунаи"|Decl=2|End=и|check=@
12	и	и	CCONJ	_	_	13	cc	_	norm="и"
13	приидошя	приити	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	norm="приидошя"|Decl=X|End=яшо
14	от	отъ	ADP	_	_	15	case	_	norm="от"|check=@
15	скифъ	скифъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	13	obl	_	norm="скифъ"|Decl=1a|End=ъ0|SpaceAfter=No|check=@
16	,	,	PUNCT	_	_	19	punct	_	norm=","
17	рекше	рещи	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Act	19	parataxis:discourse	_	norm="рекше"|Decl=X|End=еш
18	от	отъ	ADP	_	_	19	case	_	norm="от"|check=@
19	козаръ	хазары	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	15	conj	_	norm="козаръ"|Decl=2|End=ъ0|SpaceAfter=No|check=@
20	,	,	PUNCT	_	_	21	punct	_	norm=","
21	рекомии	рещи	VERB	_	Case=Nom|Gender=Masc|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Pass	19	acl	_	norm="рекомии"|Decl=X|End=иимо|check=@
22	болгаре	болгаринъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	21	xcomp	_	norm="болгаре"|Decl=2in|End=е|SpaceAfter=No|check=@
23	,	,	PUNCT	_	_	25	punct	_	norm=","
24	и	и	CCONJ	_	_	25	cc	_	norm="и"
25	сѣдошя	сѣсти	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	13	conj	_	norm="сѣдошя"|Decl=X|End=яшо
26	по	по	ADP	_	_	27	case	_	norm="по"|check=@
27	Дунаеви	Дунай	PROPN	_	Case=Dat|Gender=Masc|NameType=Geo|Number=Sing	25	obl	_	norm="Дунаеви"|Decl=2u|End=иве|SpaceAfter=No|check=@
28	,	,	PUNCT	_	_	31	punct	_	norm=","
29	и	и	CCONJ	_	_	31	cc	_	norm="и"
30	бышя	быти	AUX	Tense=Aor	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	31	cop	_	norm="бышя"|Decl=X|End=яш
31	населници	насельникъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	25	conj	_	norm="населници"|Decl=2|End=и
32	словеномь	словенинъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	31	nmod	_	norm="словеномь"|Decl=2in|End=ьмо|SpaceAfter=No
33	.	.	PUNCT	_	_	13	punct	_	norm="."

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 parataxis:discourse	color:blue
1	а	а	CCONJ	_	_	10	cc	_	norm="а"
2	в	въ	ADP	_	_	3	case	_	norm="в"|check=@
3	дрвнѣ	деревня	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	10	obl	_	norm="дрвнѣ"|Decl=1a|End=ѣ|check=@
4	вшеи	вашъ	DET	_	Abbr=Yes|Case=Loc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	3	det	_	norm="вшеи"|Decl=3|End=ие|check=@
5	по	по	ADP	_	_	7	case	_	norm="по"
6	се	сей	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	det	_	norm="се"
7	число	число	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	10	obl:tmod	_	norm="число"|Decl=2|End=о
8	далъ	дати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	10	parataxis:discourse	_	norm="далъ"|Decl=X|End=ъл
9	бгъ	богъ	NOUN	_	Abbr=Yes|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	norm="бгъ"|Decl=2|End=ъ0
10	ѕдорово	здоровый	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	norm="ѕдорово"|Decl=X|End=о

~~~


