---
layout: base
title:  'Statistics of amod in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `amod`

This relation is universal.

8020 nodes (8%) are attached to their parents as `amod`.

7660 instances of `amod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20785536159601.

The following 11 pairs of parts of speech are connected with `amod`: <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (7717; 96% instances), <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (173; 2% instances), <tt><a href="sk_snk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (41; 1% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (26; 0% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (14; 0% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (13; 0% instances), <tt><a href="sk_snk-pos-DET.html">DET</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (13; 0% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (12; 0% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="sk_snk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Ďalšie	ďalší	ADJ	AAip1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	2:amod	_
2	kroky	krok	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	5:nsubj	_
3	švajčiarskej	švajčiarský	ADJ	AAfs2x	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
4	sudkyne	sudkyňa	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	2	nmod	2:nmod:gen	_
5	povedú	poviesť	VERB	VKdpc+	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	7:case	_
7	Belehradu	belehrad	PROPN	SSis2:r	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obl	5:obl:do:gen	SpaceAfter=No
8	.	.	PUNCT	ZIP	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Medzitým	medzitým	ADV	Dx	Degree=Pos	5	advmod	5:advmod	_
2	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	3	case	3:case	_
3	máji	máj	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	5:obl:v:loc	_
4	1832	1832	NUM	0	NumForm=Digit	3	nummod	3:nummod	_
5	padla	padnúť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
6	obliehaná	obliehaný	ADJ	Gtfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	7	amod	7:amod	_
7	Akka	akka	PROPN	SSfs1:r	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	SpaceAfter=No
8	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	A	a	PART	T	_	6	advmod	6:advmod	_
2	čo	čo	PRON	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	6	nsubj	6:nsubj	_
3	hnusné	hnusný	ADJ	AAns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	amod	2:amod	_
4	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	discourse	6:discourse	_
5	tu	tu	ADV	Dx	Degree=Pos	6	advmod	6:advmod	_
6	rastie	rásť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
7	?	?	PUNCT	ZIP	_	6	punct	6:punct	_

~~~


