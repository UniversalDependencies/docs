---
layout: base
title:  'Statistics of advcl in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `advcl`

This relation is universal.

19 nodes (2%) are attached to their parents as `advcl`.

16 instances of `advcl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.05263157894737.

The following 4 pairs of parts of speech are connected with `advcl`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (16; 84% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Ayak	ayak	NOUN	_	Case=Nom|Number=Sing	2	compound:lvc	_	_
2	uyduramadım	uy	VERB	_	Aspect=Perf|Evident=Fh|Mood=Pot|Number=Sing|Person=1|Polarity=Neg|Tense=Past|Voice=Cau	0	root	_	_
3	çünkü	çünkü	SCONJ	_	_	6	mark	_	_
4	fazla	fazla	ADV	_	_	5	advmod	_	_
5	hızlı	hızlı	ADV	_	_	6	advmod	_	_
6	koştu	koş	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	2	advcl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 advcl	color:blue
1	Genel	genel	ADJ	_	_	5	advcl	_	_
2	olarak	ol	AUX	_	VerbForm=Conv	1	aux	_	_
3	başarılı	başarılı	ADJ	_	_	5	amod	_	_
4	bir	bir	DET	_	Definite=Ind|PronType=Art	5	det	_	_
5	film	film	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
6	di	i	AUX	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 advcl	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	öyle	öyle	ADV	_	_	4	advmod	_	_
3	bir	bir	DET	_	Definite=Ind|PronType=Art	4	det	_	_
4	kitap	kitap	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	ki	ki	SCONJ	_	_	12	mark	_	_
6	okuyan	oku	VERB	_	Case=Nom|Number=Sing|Tense=Pres|VerbForm=Part	12	csubj	_	_
7	bir	bir	NUM	_	NumType=Card	8	nummod	_	_
8	daha	daha	ADV	_	_	12	advmod	_	_
9	dünyaya	dünya	NOUN	_	Case=Dat|Number=Sing	12	obl	_	_
10	aynı	aynı	ADJ	_	_	11	amod	_	_
11	gözle	göz	NOUN	_	Case=Ins|Number=Sing	12	obl	_	_
12	bakamaz	bak	VERB	_	Aspect=Hab|Evident=Fh|Mood=GenPot|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	4	advcl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


