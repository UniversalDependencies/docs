---
layout: base
title:  'Statistics of nsubj:pass in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="no_bokmaal-dep-nsubj.html">nsubj</a></tt>.

1853 nodes (1%) are attached to their parents as `nsubj:pass`.

1753 instances of `nsubj:pass` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13653534808419.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (975; 53% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (627; 34% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (188; 10% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (40; 2% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> (15; 1% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (8; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Fangene	fange	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	2	nsubj:pass	_	_
2	slippes	slippe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	fri	fri	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	2	xcomp	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	-	$-	PUNCT	_	_	4	punct	_	_
2	Men	men	CCONJ	_	_	4	cc	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj:pass	_	_
4	innføres	innføre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	jo	jo	ADV	_	_	4	advmod	_	_
6	for	for	SCONJ	_	_	8	mark	_	_
7	å	å	PART	_	_	8	mark	_	_
8	beskytte	beskytte	VERB	_	VerbForm=Inf	4	advcl	_	_
9	dere	dere	PRON	_	Animacy=Hum|Case=Acc|Number=Plur|Person=2|PronType=Prs	8	obj	_	_
10	som	som	PRON	_	PronType=Rel	11	nsubj	_	_
11	jobber	jobbe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
12	her	her	ADV	_	_	11	advmod	_	SpaceAfter=No
13	?	$?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Finn	Finn	PROPN	_	Gender=Masc	4	nsubj:pass	_	_
2	Gustavsen	Gustavsen	PROPN	_	_	1	flat:name	_	_
3	ble	bli	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	født	føde	VERB	_	VerbForm=Part	0	root	_	_
5	i	i	ADP	_	_	6	case	_	_
6	Drammen	Drammen	PROPN	_	_	4	obl	_	_
7	i	i	ADP	_	_	8	case	_	_
8	1926	1926	NUM	_	Number=Plur|NumType=Card	4	obl	_	SpaceAfter=No
9	.	$.	PUNCT	_	_	4	punct	_	_

~~~


