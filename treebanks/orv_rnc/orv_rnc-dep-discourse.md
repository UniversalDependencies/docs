---
layout: base
title:  'Statistics of discourse in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `discourse`

This relation is universal.

36 nodes (0%) are attached to their parents as `discourse`.

29 instances of `discourse` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58333333333333.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (26; 72% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-INTJ.html">INTJ</a></tt> (6; 17% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 discourse	color:blue
1	Царь	царь	NOUN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	4	vocative	_	_
2	государь	государь	NOUN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	1	appos	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	смилуйся	смиловатися	VERB	Transit=Intr	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Reflex=Yes|VerbForm=Fin|Voice=Mid	0	root	_	_
5	пожалуй	пожаловати	VERB	Transit=Tran	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	4	discourse	_	SpaceAfter=No
6	!	!	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	О	о	INTJ	_	_	3	discourse	_	Norm=О|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	Norm=,
3	драко(н)	драконъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	Norm=драконъ
4	тотъ	тотъ	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	Norm=тотъ
5	мнꙗшесꙗ	мнитися	VERB	_	Aspect=Imp|Tense=Past|VerbForm=Conv|Voice=Mid	6	advcl	_	Norm=мнꙗшесꙗ
6	непобѣдимыⸯ	непобѣдимый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	Norm=непобѣдимый|SpaceAfter=No
7	!	!	PUNCT	_	_	3	punct	_	Norm=!

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Де(н)	день	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	Norm=Денъ
2	бо	бо	PART	_	_	1	discourse	_	Norm=бо
3	сей	сей	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	1	det	_	Norm=сей
4	тебѣ	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	1	iobj	_	Norm=тебѣ|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	Norm=,
6	Россіе	Россия	PROPN	_	Case=Voc|Gender=Fem|Number=Sing	1	vocative	_	Norm=Россіе|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	Norm=,
8	всѣхъ	весь	DET	_	Case=Gen|Gender=Fem|Number=Plur|PronType=Tot	10	det	_	Norm=всѣхъ
9	твоихъ	твой	DET	_	Case=Gen|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	10	det	_	Norm=твоихъ
10	щасливостей	щасливость	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	11	nmod	_	Norm=щасливостей
11	начало	начало	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	Norm=начало|SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	Norm=,
13	всѣхъ	весь	DET	_	Case=Gen|Gender=Neut|Number=Plur|PronType=Tot	14	det	_	Norm=всѣхъ
14	бл҃гополꙋчій	благополучие	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	15	nmod	_	Norm=благополꙋчій
15	источникъ	источникъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	11	conj	_	Norm=источникъ|SpaceAfter=No
16	,	,	PUNCT	_	_	41	punct	_	Norm=,
17	всѣхъ	весь	DET	_	Case=Gen|Gender=Neut|Number=Plur|PronType=Tot	18	det	_	Norm=всѣхъ
18	то(р)жествъ	торжество	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	41	nsubj	_	Norm=торжествъ|SpaceAfter=No
19	,	,	PUNCT	_	_	20	punct	_	Norm=,
20	прославленіꙗ	прославление	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	18	conj	_	Norm=прославленіꙗ|SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	Norm=,
22	побѣдъ	побѣда	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	18	conj	_	Norm=побѣдъ
23	и	и	CCONJ	_	_	29	cc	_	Norm=и
24	всѣхъ	весь	DET	_	Case=Gen|Gender=Neut|Number=Plur|PronType=Tot	29	det	_	Norm=всѣхъ
25	прежде	прежде	ADV	_	Degree=Pos	22	conj	_	Norm=прежде
26	желаемы(х)	желати	VERB	_	Aspect=Imp|Case=Gen|Gender=Fem|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Pass	29	acl	_	Norm=желаемыхъ
27	и	и	CCONJ	_	_	28	cc	_	Norm=и
28	таковыхъ	таковой	DET	_	Case=Gen|Gender=Fem|Number=Plur|PronType=Dem	26	conj	_	Norm=таковыхъ
29	дѣйствій	дѣйствие	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	18	conj	_	Norm=дѣйствій|SpaceAfter=No
30	,	,	PUNCT	_	_	37	punct	_	Norm=,
31	ꙗже	иже	PRON	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Rel	37	nsubj	_	Norm=ꙗже
32	на	на	ADP	_	_	33	case	_	Norm=на
33	ср(д)це	сердце	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	37	obl	_	Norm=сердце
34	и	и	CCONJ	_	_	33	cc	_	Norm=и
35	помышленіе	помышление	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	33	conj	_	Norm=помышленіе
36	не	не	PART	_	Polarity=Neg	37	advmod	_	Norm=не
37	восхождахꙋ	восходити	VERB	Tense=Imp	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	29	acl	_	Norm=восхождахꙋ|SpaceAfter=No
38	,	,	PUNCT	_	_	37	punct	_	Norm=,
39	едино	единъ	NUM	_	Case=Nom|Gender=Neut|Number=Sing	41	nummod	_	Norm=едино
40	е(ст)	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	41	cop	_	Norm=естъ
41	основаніе	основание	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	11	conj	_	Norm=основаніе|SpaceAfter=No
42	.	.	PUNCT	_	_	41	punct	_	Norm=.

~~~


