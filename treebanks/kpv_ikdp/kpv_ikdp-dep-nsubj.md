---
layout: base
title:  'Statistics of nsubj in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `nsubj`

This relation is universal.

87 nodes (7%) are attached to their parents as `nsubj`.

68 instances of `nsubj` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.29885057471264.

The following 14 pairs of parts of speech are connected with `nsubj`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (28; 32% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (26; 30% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt> (7; 8% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (6; 7% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (5; 6% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Ми	ми	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	вӧдитам	вӧдитны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	картапель	картапель	NOUN	N	Case=Nom|Number=Sing	2	obj	_	Lang=Mixed|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Мама	мама	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	Lang=Mixed
2	уджалӧ	уджавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	колхозын	колхоз	NOUN	N	Case=Ine|Number=Sing	2	obl	_	Lang=Mixed|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj	color:blue
1	Мӧдіс	мӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	GTtags=IV,Ind,Prt1,Sg3
2	Иван	Иван	PROPN	N	Case=Nom|Number=Sing	1	nsubj	_	GTtags=Prop,Sg,Nom
3	велӧдчыны	велӧдчыны	VERB	V	VerbForm=Inf	1	xcomp	_	GTtags=Refl,Inf
4	Печораӧ	Печора	PROPN	N	Case=Ill|Number=Sing	3	obl	_	GTtags=Prop,Sg,Ill
5	щӧтӧвӧднэй	щӧтӧвӧднӧй	ADJ	A	Case=Nom|Number=Sing	6	amod	_	Lang=Mixed|GTtags=Sg,Nom
6	курс	курс	NOUN	N	Case=Nom|Number=Sing	3	obl	_	Lang=Mixed|GTtags=Sg,Nom
7	вылӧ	вылӧ	ADP	Po	Case=Ill|Number=Sing	6	case	_	GTtags=Sg,Ill|SpaceAfter=No
8	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


