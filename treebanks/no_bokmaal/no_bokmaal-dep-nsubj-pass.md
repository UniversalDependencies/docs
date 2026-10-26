---
layout: base
title:  'Statistics of nsubj:pass in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="no_bokmaal-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="no_bokmaal-dep-nsubj-outer.html">nsubj:outer</a></tt>.

1607 nodes (1%) are attached to their parents as `nsubj:pass`.

1506 instances of `nsubj:pass` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.26633478531425.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (998; 62% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (386; 24% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (161; 10% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (39; 2% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> (15; 1% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Fangene	fange	NOUN	subst	Definite=Def|Gender=Masc|Number=Plur	2	nsubj:pass	_	_
2	slippes	slippe	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	fri	fri	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	2	xcomp	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	-	$-	PUNCT	<strek>	_	4	punct	_	_
2	Men	men	CCONJ	konj	_	4	cc	_	_
3	det	den	PRON	pron	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj:pass	_	_
4	innføres	innføre	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	jo	jo	ADV	adv	_	4	advmod	_	_
6	for	for	ADP	prep	_	8	case	_	_
7	å	å	PART	inf-merke	_	8	mark	_	_
8	beskytte	beskytte	VERB	verb	VerbForm=Inf	4	advcl	_	_
9	dere	dere	PRON	pron	Animacy=Hum|Case=Acc|Number=Plur|Person=2|PronType=Prs	8	obj	_	_
10	som	som	SCONJ	sbu	_	11	mark	_	_
11	jobber	jobbe	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
12	her	her	ADV	prep	_	11	advmod	_	SpaceAfter=No
13	?	$?	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Finn	Finn	PROPN	subst	Gender=Masc	4	nsubj:pass	_	_
2	Gustavsen	Gustavsen	PROPN	subst	_	1	flat:name	_	_
3	ble	bli	AUX	verb	Mood=Ind|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	født	føde	VERB	verb	VerbForm=Part	0	root	_	_
5	i	i	ADP	prep	_	6	case	_	_
6	Drammen	Drammen	PROPN	subst	_	4	obl	_	_
7	i	i	ADP	prep	_	8	case	_	_
8	1926	1926	NUM	det	Number=Plur|NumType=Card	4	obl	_	SpaceAfter=No
9	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


