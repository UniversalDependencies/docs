---
layout: base
title:  'Statistics of nsubj in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="tr_tuecl-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="tr_tuecl-dep-nsubj-pass.html">nsubj:pass</a></tt>.

126 nodes (14%) are attached to their parents as `nsubj`.

125 instances of `nsubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.48412698412698.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (47; 37% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (24; 19% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (15; 12% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (14; 11% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (13; 10% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Mary	Mary	PROPN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	bronz	bronz	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	kazandı	kazan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	Peter	Peter	PROPN	_	Case=Nom|Number=Sing	3	conj	_	_
6	gümüş	gümüş	NOUN	_	Case=Nom|Number=Sing	3	orphan	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	Jane	Jane	PROPN	_	Case=Nom|Number=Sing	3	conj	_	_
9	altın	altın	NOUN	_	Case=Nom|Number=Sing	8	orphan	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Kız	kız	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	arkadaşına	arkadaş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
3	mektup	mektup	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	yazdı	yaz	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
2	sigara	sigara	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
3	ve	ve	CCONJ	_	_	4	cc	_	_
4	alkol	alkol	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
5	içmeyi	iç	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	6	xcomp	_	_
6	bırakmayı	bırak	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	7	xcomp	_	_
7	denedi	dene	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


