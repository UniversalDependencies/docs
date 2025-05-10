---
layout: base
title:  'Statistics of aux in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="tr_tuecl-dep-aux-q.html">aux:q</a></tt>.

29 nodes (3%) are attached to their parents as `aux`.

29 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06896551724138.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (19; 66% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (6; 21% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (4; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 aux	color:blue
1	Sude	Sude	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
2	üç	üç	NUM	_	NumType=Card	3	nummod	_	_
3	saat	saat	ADV	_	Case=Nom	6	advmod	_	_
4	tir	i	AUX	_	Mood=Gen|Number=Sing|Person=3	3	cop	_	_
5	ofiste	ofis	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
6	yok	yok	ADJ	_	Polarity=Neg	0	root	_	_
7	muş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
8	,	,	PUNCT	_	_	6	punct	_	_
9	Ayşe	Ayşe	PROPN	_	Case=Nom|Number=Sing	11	nsubj	_	_
10	de	de	ADV	_	_	9	advmod:emph	_	_
11	evde	ev	NOUN	_	Case=Loc|Number=Sing	6	parataxis	_	_
12	değil	değil	AUX	_	Case=Nom|Number=Sing|Polarity=Neg	11	aux	_	_
13	miş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	11	cop	_	_
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Markette	market	NOUN	_	Case=Loc|Number=Sing	3	obl	_	_
2	meyve	meyve	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	var	var	ADJ	_	_	0	root	_	_
4	ama	ama	CCONJ	_	_	5	cc	_	_
5	güzel	güzel	ADJ	_	_	3	conj	_	_
6	değil	değil	AUX	_	Polarity=Neg	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


