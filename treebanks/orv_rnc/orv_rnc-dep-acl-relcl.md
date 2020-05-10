---
layout: base
title:  'Statistics of acl:relcl in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-acl.html">acl</a></tt>.

104 nodes (0%) are attached to their parents as `acl:relcl`.

83 instances of `acl:relcl` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.5.

The following 18 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (51; 49% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (9; 9% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (9; 9% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (8; 8% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 acl:relcl	color:blue
1	Благословен	благословити	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	Norm=Благословен|SpaceAfter=Yes
2	бог	Богъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	Norm=бог|SpaceAfter=Yes
3	отныне	отнынѣ	ADV	_	Degree=Pos	1	advmod	_	Norm=отныне|SpaceAfter=Yes
4	до	до	ADP	_	_	5	case	_	Norm=до|SpaceAfter=Yes
5	века	векъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	Norm=века|SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	Norm=,|SpaceAfter=Yes|# newpar
7	иже	иже	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	10	nsubj	_	Norm=иже|SpaceAfter=Yes
8	от	отъ	ADP	_	_	9	case	_	Norm=от|SpaceAfter=Yes
9	земля	земля	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	obl	_	Norm=земля|SpaceAfter=Yes
10	созда	создати	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	_	Norm=созда|SpaceAfter=Yes
11	человека	человекъ	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	10	obj	_	Norm=человека|SpaceAfter=No
12	!	!	PUNCT	_	_	1	punct	_	Norm=!|SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl:relcl	color:blue
1	И	и	CCONJ	_	_	3	cc	_	Norm=И|SpaceAfter=Yes
2	Чюдь	чюдь	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	Norm=Чюдь|SpaceAfter=Yes
3	победи	побѣдити	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Norm=победи|SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	Norm=,|SpaceAfter=Yes
5	иже	иже	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj	_	Norm=иже|SpaceAfter=Yes
6	въ	въ	ADP	_	_	7	case	_	Norm=въ|SpaceAfter=Yes
7	предѣлехъ	предѣлъ	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	2	acl:relcl	_	Norm=предѣлехъ|SpaceAfter=Yes
8	преславнаго	преславный	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	Norm=преславнаго|SpaceAfter=Yes
9	града	градъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	Norm=града|SpaceAfter=Yes
10	Пьскова	Псковъ	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	9	appos	_	Norm=Пьскова|SpaceAfter=No
11	,	,	PUNCT	_	_	17	punct	_	Norm=,|SpaceAfter=Yes
12	и	и	CCONJ	_	_	17	cc	_	Norm=и|SpaceAfter=Yes
13	тамо	тамо	ADV	_	Degree=Pos	17	advmod	_	Norm=тамо|SpaceAfter=Yes
14	же	же	PART	_	_	13	advmod	_	Norm=же|SpaceAfter=Yes
15	и	и	PART	_	_	16	advmod	_	Norm=и|SpaceAfter=Yes
16	градъ	градъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	17	obj	_	Norm=градъ|SpaceAfter=Yes
17	постави	поставити	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	Norm=постави|SpaceAfter=Yes
18	Юрьевъ	Юрьевъ	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	16	appos	_	Norm=Юрьевъ|SpaceAfter=Yes
19	по	по	ADP	_	_	20	case	_	Norm=по|SpaceAfter=Yes
20	имени	имя	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	17	obl	_	Norm=имени|SpaceAfter=Yes
21	своему	свой	DET	_	Case=Dat|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	20	det	_	Norm=своему|SpaceAfter=No
22	.	.	PUNCT	_	_	3	punct	_	Norm=.|SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 acl:relcl	color:blue
1	А	а	CCONJ	_	_	4	cc	_	_
2	лошади	лошадь	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	_
3	досель	досель	ADV	_	Degree=Pos	4	advmod	_	_
4	хоживали	хоживати	VERB	_	Aspect=Imp|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	10	acl:relcl	_	_
5	на	на	ADP	_	_	7	case	_	_
6	коих	кой	DET	_	Case=Loc|Gender=Masc|Number=Plur|PronType=Int	7	det	_	_
7	пустошах	пустошь	NOUN	_	Case=Loc|Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	4	punct	_	_
9	и	и	CCONJ	_	_	16	cc	_	_
10	те	тотъ	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	16	nsubj	_	_
11	им	имъ	PRON	_	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	16	iobj	_	_
12	же	же	PART	_	_	11	advmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	корелам	корела	NOUN	_	Case=Dat|Gender=Fem|Number=Plur	11	appos	_	SpaceAfter=No
15	,	,	PUNCT	_	_	14	punct	_	_
16	оданы	отдати	VERB	_	Aspect=Perf|Case=Acc|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
17	под	подъ	ADP	_	_	18	case	_	_
18	пашню	пашня	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	16	obl	_	SpaceAfter=No
19	.	.	PUNCT	_	_	16	punct	_	_

~~~


