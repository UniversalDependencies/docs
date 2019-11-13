---
layout: base
title:  'Statistics of aux in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="tr_gb-dep-aux-q.html">aux:q</a></tt>.

177 nodes (1%) are attached to their parents as `aux`.

177 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05649717514124.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (121; 68% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (26; 15% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (26; 15% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 aux	color:blue
1	Görüştürülemeye	gör	VERB	_	Mood=Pot|Polarity=Neg|VerbForm=Fin|Voice=CauPassRcp	0	root	_	Stem=gör
2	de	de	ADV	_	_	1	advmod:emph	_	Stem=de
3	biliyor	bil	AUX	_	Aspect=Prog|Mood=Ind|Tense=Pres|VerbForm=Fin	1	aux	_	Stem=bil
4	muydunuz	mi	AUX	_	Number=Plur|Person=2|PronType=Int|Tense=Past	1	aux:q	_	SpaceAfter=No|Stem=mu
5	?	?	PUNCT	_	_	1	punct	_	Stem=?

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
1	Evini	ev	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=2	2	obj	_	_
2	sattın	sat	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	6	advcl	_	_
3	mı	mı	SCONJ	_	_	2	mark	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	gerisi	geri	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
6	önemli	önemli	ADJ	_	_	0	root	_	_
7	değil	değil	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux	color:blue
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


