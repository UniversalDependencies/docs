---
layout: base
title:  'Statistics of obl:float in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `obl:float`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="orv_rnc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_rnc-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_rnc-dep-obl-tmod.html">obl:tmod</a></tt>.

96 nodes (0%) are attached to their parents as `obl:float`.

63 instances of `obl:float` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14583333333333.

The following 8 pairs of parts of speech are connected with `obl:float`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (76; 79% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (6; 6% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (5; 5% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (4; 4% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:float	color:blue
1	Сам	самъ	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	2	obl:float	_	Norm="Сам"
2	искусих	искусити	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Norm="искусих"
3	се	се	PART	_	_	2	advmod	_	Norm="се"
4	во	въ	ADP	_	_	6	case	_	Norm="во"
5	всяцей	всякий	DET	_	Case=Loc|Gender=Fem|Number=Sing|PronType=Tot	6	det	_	Norm="всяцей"
6	потребе	потрѣба	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	2	obl	_	Norm="потребе"|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	Norm=","|# newpar
8	егда	егда	SCONJ	_	_	9	mark	_	Norm="егда"
9	уповах	уповати	VERB	Tense=Aor	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	Norm="уповах"
10	на	на	ADP	_	_	11	case	_	Norm="на"
11	живуща	жити	VERB	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Tense=Pres|Variant=Short|VerbForm=Part|Voice=Act	9	obl	_	Norm="живуща"
12	в	въ	ADP	_	_	13	case	_	Norm="в"
13	небе	небо	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	11	obl	_	Norm="небе"|SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	Norm="."

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 obl:float	color:blue
1	Однолично	однолично	ADV	_	Degree=Pos	7	advmod	_	norm="Однолично"
2	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	7	aux	_	norm="бы"|Decl=X|End=0
3	против	противъ	ADP	_	_	5	case	_	norm="против"|check=@
4	сей	сей	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	norm="сей"|Decl=X|End=йе|check=@
5	памяти	память	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	obl	_	norm="памяти"|Decl=3|End=и|check=@
6	рыба	рыба	NOUN	Case=Nom1	Case=Nom|Gender=Fem|Number=Sing	7	obj	_	norm="рыба"|Decl=1a|End=а
7	изловить	изловити	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	0	root	_	norm="изловить"|Decl=X|End=ьт
8	и	и	CCONJ	_	_	9	cc	_	norm="и"
9	велеть	велѣти	VERB	_	VerbForm=Inf|Voice=Act	7	conj	_	norm="велеть"|Decl=X|End=ьт
10	беречь	беречи	VERB	_	VerbForm=Inf|Voice=Act	9	xcomp	_	norm="беречь"|Decl=X|End=ьч|SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	norm=","
12	чтоб	чтобы	SCONJ	_	_	15	mark	_	norm="чтоб"
13	была	быти	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	15	cop	_	norm="была"|Decl=X|End=ал
14	вся	весь	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	15	obl:float	_	norm="вся"|Decl=X|End=я
15	жива	живой	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	10	advcl	_	norm="жива"|Decl=X|End=а|SpaceAfter=No
16	.	.	PUNCT	_	_	7	punct	_	norm="."

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 obl:float	color:blue
1	И	и	CCONJ	_	_	2	cc	_	norm="И"
2	уби	убити	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	norm="уби"|Decl=X|End=0
3	Ярополкъ	Ярополкъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	2	nsubj	_	norm="Ярополкъ"|Decl=2|End=ъ0
4	Олга	Олегъ	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	2	obj	_	norm="Олга"|Decl=2|End=а
5	брата	братъ	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	4	appos	_	norm="брата"|Decl=2|End=а|check=@
6	своего	свой	DET	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	norm="своего"|Decl=X|End=оге|SpaceAfter=No|check=@
7	,	,	PUNCT	_	_	10	punct	_	norm=","
8	а	а	CCONJ	_	_	10	cc	_	norm="а"
9	Володимер	Володимеръ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	10	nsubj	_	norm="Володимер"|Decl=2|End=0
10	убоявся	убоятися	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Mid	2	conj	_	norm="убоявся"|Decl=X|End=ясвя
11	Ярополка	Ярополкъ	PROPN	_	Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	10	obj	_	norm="Ярополка"|Decl=2|End=а
12	и	и	CCONJ	_	_	13	cc	_	norm="и"
13	бѣжа	бѣжати	VERB	Tense=Aor	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	conj	_	norm="бѣжа"|Decl=X|End=а
14	из	изъ	ADP	_	_	15	case	_	norm="из"|check=@
15	Новагорода	Новгородъ	PROPN	_	Case=Gen|Gender=Masc|NameType=Geo|Number=Sing	13	obl	_	norm="Новагорода"|Decl=2|End=а|check=@
16	за	за	ADP	_	_	17	case	_	norm="за"|check=@
17	море	море	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	13	obl	_	norm="море"|Decl=2|End=е|SpaceAfter=No|check=@
18	;	;	PUNCT	_	_	20	punct	_	norm=";"
19	и	и	CCONJ	_	_	20	cc	_	norm="и"
20	бѣ	быти	VERB	Tense=Aor	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	13	conj	_	norm="бѣ"|Decl=X|End=0
21	Ярополкъ	Ярополкъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	20	nsubj	_	norm="Ярополкъ"|Decl=2|End=ъ0
22	владѣя	владѣти	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	20	advcl	_	norm="владѣя"|Decl=X|End=я
23	един	единъ	NUM	ANUM	Case=Nom|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	22	obl:float	_	upos="ANUM"|norm="един"|Decl=X|End=0
24	Русью	Русь	PROPN	_	Case=Ins|Gender=Fem|NameType=Geo|Number=Sing	22	obj	_	norm="Русью"|Decl=3|End=юь|SpaceAfter=No
25	.	.	PUNCT	_	_	2	punct	_	norm="."

~~~


