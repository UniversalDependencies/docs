---
layout: base
title:  'Statistics of ccomp in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `ccomp`

This relation is universal.

156 nodes (1%) are attached to their parents as `ccomp`.

154 instances of `ccomp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80769230769231.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (113; 72% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (23; 15% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 ccomp	color:blue
1	Ekme	ek	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|VerbForm=Fin	2	ccomp	_	_
2	dedim	de	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	8	parataxis	_	_
3	ama	ama	CCONJ	_	_	4	cc	_	_
4	dinlemedi	dinle	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	2	conj	_	_
5	,	,	PUNCT	_	_	2	punct	_	_
6	bütün	bütün	ADJ	_	_	7	amod	_	_
7	parasını	para	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
8	kaybetmiş	kaybet	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	O	o	DET	_	Definite=Def|PronType=Dem	2	det	_	_
2	çocukların	çocuk	NOUN	_	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	_
3	ağlamasına	ağlama	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	ccomp	_	_
4	içi	iç	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	compound	_	_
5	sızladı	sızla	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 ccomp	color:blue
1	Rakibine	rakip	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obl	_	_
2	salto	salto	NOUN	_	Case=Nom|Number=Sing	3	compound	_	_
3	attı	at	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	7	parataxis	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	gol	gol	NOUN	_	Case=Nom|Number=Sing	6	compound	_	_
6	atacağı	at	VERB	_	Aspect=Imp|Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Fut|VerbForm=Vnoun	7	ccomp	_	_
7	kesindi	kesin	ADJ	_	Aspect=Perf|Number=Sing|Person=3	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


