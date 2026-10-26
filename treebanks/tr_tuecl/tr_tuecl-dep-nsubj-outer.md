---
layout: base
title:  'Statistics of nsubj:outer in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="tr_tuecl-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="tr_tuecl-dep-nsubj-pass.html">nsubj:pass</a></tt>.

3 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.33333333333333.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:outer	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:outer	color:blue
1	Sözde	sözde	ADV	_	_	7	advmod	_	_
2	Ayşe	Ayşe	PROPN	_	Case=Nom|Number=Sing	7	nsubj:outer	_	_
3	Hakan'ın	Hakan	PROPN	_	Case=Gen|Number=Sing	5	nsubj	_	_
4	ödevi	ödev	NOUN	_	Case=Acc|Number=Sing	5	obj	_	_
5	yapmasına	yap	VERB	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	7	advcl	_	_
6	yardım	yardım	NOUN	_	Case=Nom|Number=Sing	7	compound:lvc	_	_
7	etmişmiş	et	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Pqp	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


