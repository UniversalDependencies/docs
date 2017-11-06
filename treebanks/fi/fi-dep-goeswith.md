---
layout: base
title:  'Statistics of goeswith in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `goeswith`

This relation is universal.

47 nodes (0%) are attached to their parents as `goeswith`.

47 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 10 pairs of parts of speech are connected with `goeswith`: <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (24; 51% instances), <tt><a href="fi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (9; 19% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt> (6; 13% instances), <tt><a href="fi-pos-NUM.html">NUM</a></tt>-<tt><a href="fi-pos-NUM.html">NUM</a></tt> (2; 4% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="fi-pos-NUM.html">NUM</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fi-pos-X.html">X</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 goeswith	color:blue
1	Komissio	komissio	NOUN	N	Case=Nom|Number=Sing	2	nsubj	3:nsubj	_
2	halusi	haluta	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	korvata	korvata	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	hintojen	hinta	NOUN	N	Case=Gen|Number=Plur	5	nmod:poss	_	_
5	laskun	lasku	NOUN	N	Case=Gen|Derivation=U|Number=Sing	3	obj	_	_
6	vain	vain	ADV	Adv	_	7	advmod	_	_
7	44	44	NUM	Num	NumType=Card	8	nummod	_	_
8	%:	prosentti	NOUN	N	Case=Ade|Number=Sing	3	obl	_	_
9	lla	lla	NOUN	N	Case=Ade|Number=Sing	8	goeswith	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	Kysymys	kysymys	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
2	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
3	kuulu	kuulua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	EU:	EU	PROPN	N	Abbr=Yes|Case=All|Number=Sing	3	obl	_	_
5	lle	lle	PROPN	N	Abbr=Yes|Case=All|Number=Sing	4	goeswith	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 goeswith	color:blue
1	Kerran	kerta	NOUN	N	Case=Gen|Number=Sing	2	obl	_	_
2	esiintyi	esiintyä	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	selitys	selitys	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	_	_
5	jossa	joka	PRON	Pron	Case=Ine|Number=Sing|PronType=Rel	6	obl	_	_
6	sanottiin	sanoa	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	3	acl:relcl	_	_
7	likimain	likimain	ADV	Adv	_	8	advmod	_	_
8	näin	näin	ADV	Adv	_	6	advmod	_	_
9	-	-	PUNCT	Punct	_	6	punct	_	_
10	-	-	PUNCT	Punct	_	9	goeswith	_	_

~~~


