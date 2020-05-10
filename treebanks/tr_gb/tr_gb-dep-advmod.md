---
layout: base
title:  'Statistics of advmod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="tr_gb-dep-advmod-emph.html">advmod:emph</a></tt>.

758 nodes (4%) are attached to their parents as `advmod`.

736 instances of `advmod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.72427440633245.

The following 10 pairs of parts of speech are connected with `advmod`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (485; 64% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (148; 20% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (52; 7% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (48; 6% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (11; 1% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Turgut	Turgut	PROPN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	nasıl	nasıl	ADV	_	PronType=Int	3	advmod	_	_
3	bilsin	bil	VERB	_	Mood=Imp|Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
4	ki	ki	ADV	_	_	3	advmod:emph	_	SpaceAfter=No
5	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Bundan	bu	PRON	_	Case=Abl|Number=Sing|Polarity=Pos|PronType=Dem	3	nmod:comp	_	_
2	daha	daha	ADV	_	_	3	advmod	_	_
3	uygun	uygun	ADJ	_	_	5	amod	_	_
4	bir	bir	DET	_	Definite=Ind|Polarity=Pos|PronType=Art	5	det	_	_
5	sözcük	sözcük	NOUN	_	Case=Nom|Number=Sing	6	obj	_	_
6	düşünemiyorum	düşün	VERB	_	Aspect=Prog|Mood=Pot|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Arabalar	araba	NOUN	_	Case=Nom|Number=Plur	4	nsubj	_	_
2	çok	çok	ADV	_	_	3	advmod	_	_
3	hızlı	hızlı	ADV	_	_	4	advmod	_	_
4	geçiyordu	geç	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


