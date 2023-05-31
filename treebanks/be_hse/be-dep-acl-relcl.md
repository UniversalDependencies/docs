---
layout: base
title:  'Statistics of acl:relcl in UD_Belarusian'
udver: '2'
---

## Treebank Statistics: UD_Belarusian: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="be-dep-acl.html">acl</a></tt>.

56 nodes (1%) are attached to their parents as `acl:relcl`.

56 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.58928571428571.

The following 7 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="be-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (49; 88% instances), <tt><a href="be-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="be-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="be-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="be-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="be-pos-PRON.html">PRON</a></tt>-<tt><a href="be-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="be-pos-PRON.html">PRON</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 acl:relcl	color:blue
1	Мару	марыць	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	адкрыць	адкрыць	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	_	_
3	сваю	свой	DET	_	Case=Acc|Gender=Neut|Number=Sing	4	det	_	_
4	справу	справа	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	бо	бо	SCONJ	_	_	10	mark	_	_
7	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	10	nsubj	_	_
8	з	з	ADP	_	_	10	case	_	_
9	тых	той	DET	_	Case=Gen|Number=Plur	10	det	_	_
10	людзей	чалавек	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	1	advcl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	якія	які	PRON	_	Case=Nom	13	nsubj	_	_
13	любяць	любіць	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	acl:relcl	_	_
14	усё	усё	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	15	obj	_	_
15	кантраляваць	кантраляваць	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	13	xcomp	_	SpaceAfter=No
16	.	.	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:relcl	color:blue
1	Новая	новы	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
2	купюра	купюра	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	стала	стаць	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	першай	першы	ADJ	ORD	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	3	obj	_	_
5	у	у	ADP	IN	_	6	case	_	_
6	Беларусі	беларусь	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	10	punct	_	_
8	на	на	ADP	IN	_	9	case	_	_
9	якой	які	PRON	WPA	Case=Loc|Gender=Fem|Number=Sing|PronType=Rel	10	obl	_	_
10	стаіць	стаяць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	_
11	подпіс	подпіс	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
12	цяперашняй	цяперашні	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	кіраўніка	кіраўнік	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
14	Нацыянальнага	нацыянальны	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
15	банка	банк	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
16	Надзеі	надзея	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	13	flat	_	_
17	Ермаковай	ермакова	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	16	flat	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 24 acl:relcl	color:blue
1	А	а	CCONJ	_	_	9	cc	_	_
2	Сняжана	Сняжана	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
3	Міхейцава	Міхейцава	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	2	flat:name	_	_
4	з	з	ADP	_	_	8	case	_	_
5	Віцебскага	віцебскi	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
6	дзяржаўнага	дзяржаўны	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
7	тэхналагічнага	тэхналагічны	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	ўніверсітэта	універсітэт	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
9	марыць	марыць	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	аб	аб	ADP	_	_	11	case	_	_
11	тым	тое	PRON	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	9	obl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	16	punct	_	_
13	каб	каб	SCONJ	_	_	16	mark	_	_
14	беларускія	беларускі	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	15	amod	_	_
15	вучоныя	вучоны	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	16	nsubj	_	_
16	вынайшлі	вынайсці	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	11	acl	_	_
17	дамскую	дамскi	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	_
18	сумачку	сумачка	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	16	obj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	24	punct	_	_
20	у	у	ADP	_	_	21	case	_	_
21	якой	які	PRON	_	Case=Loc	25	obl	_	_
22	усё	усё	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	25	obj	_	_
23	будзе	быць	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	aux	_	_
24	лёгка	лёгкi	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	18	acl:relcl	_	_
25	знайсці	знайсці	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	24	csubj	_	_
26	пры	пры	ADP	_	_	29	case	_	_
27	дапамозе	дапамога	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	26	fixed	_	_
28	галасавых	галасавы	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	29	amod	_	_
29	каманд	каманда	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	25	obl	_	SpaceAfter=No
30	,	,	PUNCT	_	_	33	punct	_	_
31	і	і	CCONJ	_	_	33	cc	_	_
32	мужчынскія	мужчынскі	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	33	amod	_	_
33	шкарпэткі	шкарпэтка	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	18	conj	_	SpaceAfter=No
34	,	,	PUNCT	_	_	37	punct	_	_
35	якія	які	PRON	_	Case=Nom|Number=Plur	37	nsubj	_	_
36	самі	сам	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	35	amod	_	_
37	знаходзяць	знаходзіць	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	33	acl:relcl	_	_
38	сваю	свой	DET	_	Case=Acc|Gender=Fem|Number=Sing	39	det	_	_
39	пару	пара	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	37	obj	_	SpaceAfter=No
40	.	.	PUNCT	_	_	9	punct	_	SpaceAfter=No

~~~


