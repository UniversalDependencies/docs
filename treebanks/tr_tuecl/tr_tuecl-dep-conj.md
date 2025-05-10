---
layout: base
title:  'Statistics of conj in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `conj`

This relation is universal.

23 nodes (3%) are attached to their parents as `conj`.

23 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.82608695652174.

The following 7 pairs of parts of speech are connected with `conj`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (11; 48% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt> (3; 13% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 conj	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	saçını	saç	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obj	_	_
3	yapıyor	yap	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	olmalıydı	ol	AUX	_	Aspect=Perf|Evident=Fh|Mood=Nec|Number=Sing|Person=3|Tense=Past	3	aux	_	_
5	ama	ama	CCONJ	_	_	10	cc	_	_
6	neden	neden	ADV	_	_	10	advmod	_	_
7	se	i	AUX	_	Aspect=Imp|Evident=Nfh|Mood=Cnd|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
8	o	o	DET	_	Definite=Def|PronType=Dem	9	det	_	_
9	gün	gün	NOUN	_	Case=Nom|Number=Sing	10	obl:tmod	_	_
10	yapmadı	yap	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	3	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	Markette	market	NOUN	_	Case=Loc|Number=Sing	3	obl	_	_
2	meyve	meyve	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	var	var	ADJ	_	_	0	root	_	_
4	ama	ama	CCONJ	_	_	5	cc	_	_
5	güzel	güzel	ADJ	_	_	3	conj	_	_
6	değil	değil	AUX	_	Polarity=Neg	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
2	sigara	sigara	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
3	ve	ve	CCONJ	_	_	4	cc	_	_
4	alkol	alkol	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
5	içmeyi	iç	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	6	xcomp	_	_
6	bırakmayı	bırak	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	7	xcomp	_	_
7	denedi	dene	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


