---
layout: base
title:  'Statistics of advmod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="tr_gb-dep-advmod-emph.html">advmod:emph</a></tt>.

839 nodes (5%) are attached to their parents as `advmod`.

788 instances of `advmod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81525625744934.

The following 12 pairs of parts of speech are connected with `advmod`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (542; 65% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (157; 19% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (58; 7% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (51; 6% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (11; 1% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-DET.html">DET</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Bu	bu	DET	_	Definite=Def|Polarity=Pos|PronType=Art	2	det	_	_
2	hayvanların	hayvan	NOUN	_	Case=Gen|Number=Plur	3	nmod	_	_
3	arasında	ara	NOUN	_	Number[psor]=Sing|Person[psor]=3	6	obl	_	_
4	en	en	ADV	_	_	5	advmod	_	_
5	vahşisi	vahşi	NOUN	_	Case=Nom|Number=Sing	6	nsubj:cop	_	_
6	kaplan	kaplan	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
7	mış	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


