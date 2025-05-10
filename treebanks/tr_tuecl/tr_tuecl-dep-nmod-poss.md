---
layout: base
title:  'Statistics of nmod:poss in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="tr_tuecl-dep-nmod.html">nmod</a></tt>.

17 nodes (2%) are attached to their parents as `nmod:poss`.

17 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05882352941176.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (5; 29% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (4; 24% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (2; 12% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (2; 12% instances), <tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Annesinin	anne	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nmod:poss	_	_
2	hayali	hayal	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj:outer	_	_
3	Deniz'in	Deniz	PROPN	_	Case=Gen|Number=Sing	7	nsubj	_	_
4	iyi	iyi	ADJ	_	_	6	amod	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	okulda	okul	NOUN	_	Case=Loc|Number=Sing	7	obl	_	_
7	okuması	oku	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	0	root	_	_
8	ydı	i	AUX	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	7	cop	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Peter'in	Peter	PROPN	_	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	komşusu	komşu	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
3	çiti	çit	NOUN	_	Case=Acc|Number=Sing	5	obj	_	_
4	kırmızı	kırmızı	ADJ	_	_	5	xcomp	_	_
5	boyadı	boya	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Bunun	bu	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Dem	2	nmod:poss	_	_
2	mavisi	mavi	ADJ	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	_
3	daha	daha	ADV	_	_	4	advmod	_	_
4	güzel	güzel	ADJ	_	_	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	bana	ben	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	8	obl	_	_
7	maviyi	mavi	ADJ	_	Case=Acc|Number=Sing	8	obj	_	_
8	verir	ver	VERB	_	Aspect=Hab|Evident=Fh|Mood=Gen|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
9	misin	mi	AUX	_	Number=Sing|Person=2|Tense=Pres	8	aux:q	_	SpaceAfter=No
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


