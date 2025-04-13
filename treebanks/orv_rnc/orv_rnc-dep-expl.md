---
layout: base
title:  'Statistics of expl in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="orv_rnc-dep-expl-pv.html">expl:pv</a></tt>.

82 nodes (0%) are attached to their parents as `expl`.

80 instances of `expl` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.20731707317073.

The following 7 pairs of parts of speech are connected with `expl`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (61; 74% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (7; 9% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (6; 7% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (4; 5% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Се	се	PART	_	_	4	expl	_	_
2	тако	тако	ADV	_	Degree=Pos|PronType=Dem	4	advmod	_	upos="ADVPRO"|_
3	ли	ли	PART	_	_	4	advmod	_	_
4	воздаешъ	воздати	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	ему	и	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	iobj	_	_
6	и	и	CCONJ	_	_	8	advmod	_	_
7	по	по	ADP	_	_	8	case	_	_
8	смерти	смерть	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
9	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 12 expl	color:blue
1	А	а	CCONJ	_	_	4	cc	_	norm="А"
2	чѣм	что	PRON	_	Case=Ins|Gender=Neut|Number=Sing|PronType=Rel	4	iobj	_	norm="чѣм"|Decl=X|End=мѣ
3	есмь	быти	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	norm="есмь"|Decl=X|End=ьмс
4	пожаловал	пожаловати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	norm="пожаловал"|Decl=X|End=л
5	кнѧзѧ	князь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	4	obj	_	norm="кнѧзѧ"|Decl=2|End=ѧ
6	Ивана	Иванъ	PROPN	_	Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	5	appos	_	norm="Ивана"|Decl=2|End=а|[G]
7	Борисович[а]	Борисовичь	PROPN	_	Case=Gen|Gender=Masc|NameType=Pat|Number=Sing	6	flat:name	_	norm="Борисовича"|Decl=2|End=а|[G]|SpaceAfter=No
8	,	,	PUNCT	_	_	19	punct	_	norm=","
9	а	а	CCONJ	_	_	19	cc	_	norm="а"
10	в	въ	ADP	_	_	11	case	_	norm="в"|check=@
11	то	то	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	19	obl	_	norm="то"|Decl=X|End=о|check=@
12	сѧ	ся	PRON	_	Analyt=Yes|PronType=Prs|Reflex=Yes	19	expl	_	norm="сѧ"|Decl=X|End=_
13	кнѧзю	князь	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	19	iobj	_	norm="кнѧзю"|Decl=2|End=ю
14	Володимеру	Володимеръ	PROPN	_	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	13	appos	_	norm="Володимеру"|Decl=2|End=у
15	и	и	CCONJ	_	_	17	cc	_	norm="и"
16	его	и	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	det	_	norm="его"|Decl=X|End=оге|check=@
17	дѣтем	дѣтя	NOUN	_	Case=Dat|Gender=Neut|Number=Plur	13	conj	_	norm="дѣтем"|Decl=nt|End=ме|check=@
18	не	не	PART	_	Polarity=Neg	19	advmod	_	norm="не"
19	въступати	вступати	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	conj	_	norm="въступати"|Decl=X|End=ит|SpaceAfter=No
20	.	.	PUNCT	_	_	4	punct	_	norm="."

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	Се	се	PART	_	_	3	expl	_	norm="Се"
2	же	же	PART	_	_	1	advmod	_	norm="же"
3	море	море	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	norm="море"|Decl=2|End=е
4	словет	слути	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	norm="словет"|Decl=X|End=те
5	Руское	русский	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	xcomp	_	norm="Руское"|Decl=X|End=ео|SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	norm=","
7	по	по	ADP	_	_	8	case	_	norm="по"|check=@
8	немуже	иже	PRON	_	Case=Dat|Gender=Neut|Number=Sing|PronType=Rel	9	obl	_	norm="немуже"|Decl=X|End=е|check=@
9	училъ	учити	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	3	acl:relcl	_	norm="училъ"|Decl=X|End=ъл
10	святыи	святой	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	norm="святыи"|Decl=X|End=иы|check=@
11	Андреи	Андрѣй	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	9	nsubj	_	norm="Андреи"|Decl=2e|End=ие|check=@
12	апостолъ	апостолъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	11	appos	_	norm="апостолъ"|Decl=2|End=ъ0|SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	norm=","
14	брат	братъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	11	appos	_	norm="брат"|Decl=2|End=0|check=@
15	Петров	петровъ	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	14	amod	_	norm="Петров"|Decl=X|End=0|SpaceAfter=No|check=@
16	.	.	PUNCT	_	_	4	punct	_	norm="."

~~~


