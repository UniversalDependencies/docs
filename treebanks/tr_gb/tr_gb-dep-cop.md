---
layout: base
title:  'Statistics of cop in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `cop`

This relation is universal.

389 nodes (2%) are attached to their parents as `cop`.

389 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05141388174807.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (177; 46% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (144; 37% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (32; 8% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (17; 4% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (16; 4% instances), <tt><a href="tr_gb-pos-DET.html">DET</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	Mutlaka	mutlaka	ADV	_	_	3	advmod	_	_
2	zamanı	zaman	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	_
3	var	var	ADJ	_	_	0	root	_	_
4	dır	i	AUX	_	Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Zeki	Zeki	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
2	babasını	baba	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
3	onbeş	onbeş	NUM	_	NumType=Card	4	nummod	_	_
4	yıl	yıl	NOUN	_	Case=Nom|Number=Sing	6	advcl	_	_
5	dır	i	AUX	_	Mood=Gen|Number=Sing|Person=3|VerbForm=Fin	4	cop	_	_
6	görmüyormuş	gör	VERB	_	Aspect=Prog|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	annesini	anne	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	conj	_	_
9	değil	değil	AUX	_	PronType=Neg	8	aux	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Herkesin	herkes	PRON	_	Case=Gen|Number=Sing|PronType=Prs	2	nsubj	_	_
2	burada	bura	PRON	_	Case=Loc|Number=Sing|PronType=Dem	4	ccomp	_	_
3	olduğunu	ol	AUX	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	2	cop	_	_
4	bilmiyordum	bil	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


