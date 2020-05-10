---
layout: base
title:  'Statistics of root in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `root`

This relation is universal.

10604 nodes (10%) are attached to their parents as `root`.

10604 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.75895888344021.

The following 14 pairs of parts of speech are connected with `root`: -<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (8201; 77% instances), -<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (1188; 11% instances), -<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (597; 6% instances), -<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (285; 3% instances), -<tt><a href="sk_snk-pos-PART.html">PART</a></tt> (75; 1% instances), -<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (62; 1% instances), -<tt><a href="sk_snk-pos-ADV.html">ADV</a></tt> (58; 1% instances), -<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (41; 0% instances), -<tt><a href="sk_snk-pos-X.html">X</a></tt> (34; 0% instances), -<tt><a href="sk_snk-pos-INTJ.html">INTJ</a></tt> (33; 0% instances), -<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (24; 0% instances), -<tt><a href="sk_snk-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), -<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), -<tt><a href="sk_snk-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	FOTO	foto	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	_
2	-	-	PUNCT	ZIP	_	3	punct	3:punct	_
3	REUTERS	reuters	X	%	Foreign=Yes	1	conj	0:root|1:conj	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Po	po	ADP	Eu6	AdpType=Prep|Case=Loc	2	case	2:case	_
2	Silvestri	silvester	PROPN	SSis6:r	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	4:obl:po:loc	_
3	sú	byť	AUX	VKepc+	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
4	zničení	zničený	ADJ	AAmp1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	0:root	_
5	aj	aj	CCONJ	O	_	6	cc	6:cc	_
6	ľudia	človek	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	4:nsubj	SpaceAfter=No
7	,	,	PUNCT	ZIP	_	9	punct	9:punct	_
8	aj	aj	CCONJ	O	_	9	cc	9:cc	_
9	zvieratá	zviera	NOUN	SSnp1	Case=Nom|Gender=Neut|Number=Plur	6	conj	4:nsubj|6:conj	_

~~~


