---
layout: base
title:  'Statistics of xcomp in UD_Faroese-OFT'
udver: '2'
---

## Treebank Statistics: UD_Faroese-OFT: Relations: `xcomp`

This relation is universal.

43 nodes (0%) are attached to their parents as `xcomp`.

41 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.37209302325581.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt> (21; 49% instances), <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (14; 33% instances), <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-ADJ.html">ADJ</a></tt> (3; 7% instances), <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-PROPN.html">PROPN</a></tt> (3; 7% instances), <tt><a href="fo_oft-pos-AUX.html">AUX</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Deyðadagur	deyðadagur	NOUN	N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	nsubj	_	_
2	hansara	hann	PRON	Pron	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nmod	_	_
3	gjørdist	gera	VERB	V	Mood=Ind|Number=Sing|Tense=Past|Voice=Pass	0	root	_	_
4	tingdagur	tingdagur	NOUN	N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	xcomp	_	_
5	føroyinga	føroyingur	NOUN	N	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur	3	nmod:poss	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Tróndur	Tróndur	PROPN	N	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	lovar	lova	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	at	at	PART	IM	_	2	mark	_	_
4	royna	royna	VERB	V	VerbForm=Inf	2	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Soleiðis	soleiðis	ADV	Adv	_	2	advmod	_	_
2	gjørdist	gera	VERB	V	Mood=Ind|Number=Sing|Tense=Past|Voice=Pass	0	root	_	_
3	bøndurnir	bóndi	NOUN	N	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	2	nsubj	_	_
4	sjálvbjargnir	sjálvbjargin	ADJ	A	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	2	xcomp	_	_
5	við	við	ADP	Pr	_	6	case	_	_
6	mati	matur	NOUN	N	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


