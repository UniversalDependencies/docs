---
layout: base
title:  'Statistics of vocative in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `vocative`

This relation is universal.

130 nodes (0%) are attached to their parents as `vocative`.

73 instances of `vocative` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.69230769230769.

The following 7 pairs of parts of speech are connected with `vocative`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (79; 61% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (18; 14% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (15; 12% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (12; 9% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Царь	царь	NOUN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	4	vocative	_	_
2	государь	государь	NOUN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	1	appos	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	смилуйся	смиловатися	VERB	Transit=Intr	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Reflex=Yes|VerbForm=Fin|Voice=Mid	0	root	_	_
5	пожалуй	пожаловати	VERB	Transit=Tran	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	4	discourse	_	SpaceAfter=No
6	!	!	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 vocative	color:blue
1	буди	быти	AUX	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	4	cop	_	Norm=буди|SpaceAfter=Yes
2	гсдрь	государь	NOUN	_	Abbr=Yes|Case=Nom|Gender=Masc|Number=Sing	4	vocative	_	Norm=гсдрь|SpaceAfter=Yes
3	мои	мой	DET	_	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	2	det	_	Norm=мои|SpaceAfter=Yes
4	здорово	здоровый	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	Norm=здорово|SpaceAfter=Yes
5	на	на	ADP	_	_	7	case	_	Norm=на|SpaceAfter=Yes
6	многие	многий	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	7	amod	_	Norm=многие|SpaceAfter=Yes
7	лѣта	лѣто	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	4	obl	_	Norm=лѣта|SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 vocative	color:blue
1	бꙋдь	быти	AUX	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	3	cop	_	Norm=бꙋдь|SpaceAfter=Yes
2	на	на	ADP	_	_	3	case	_	Norm=на|SpaceAfter=Yes
3	тебѣ	ты	PRON	_	Case=Loc|Number=Sing|Person=2|PronType=Prs	0	root	_	Norm=тебѣ|SpaceAfter=Yes
4	свѣтъ	свѣтъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	vocative	_	Norm=свѣтъ|SpaceAfter=Yes
5	мои	мой	DET	_	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	4	det	_	Norm=мои|SpaceAfter=Yes
6	млсть	милость	NOUN	_	Abbr=Yes|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	Norm=млсть|SpaceAfter=Yes
7	бжия	божий	ADJ	_	Abbr=Yes|Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Poss=Yes	6	amod	_	Norm=бжия|SpaceAfter=Yes
8	и	и	CCONJ	_	_	11	cc	_	Norm=и|SpaceAfter=Yes
9	мое	мой	DET	_	Case=Nom|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	11	det	_	Norm=мое|SpaceAfter=Yes
10	грешное	грешный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	11	amod	_	Norm=грешное|SpaceAfter=Yes
11	блгоссловение	благословение	NOUN	_	Abbr=Yes|Case=Nom|Gender=Neut|Number=Sing	6	conj	_	Norm=блгоссловение|SpaceAfter=Yes
12	отннѣ	отнынѣ	ADV	_	Abbr=Yes|Degree=Pos	3	advmod	_	Norm=отннѣ|SpaceAfter=Yes
13	и	и	CCONJ	_	_	15	cc	_	Norm=и|SpaceAfter=Yes
14	до	до	ADP	_	_	15	case	_	Norm=до|SpaceAfter=Yes
15	века	векъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	12	conj	_	Norm=века|SpaceAfter=No

~~~


