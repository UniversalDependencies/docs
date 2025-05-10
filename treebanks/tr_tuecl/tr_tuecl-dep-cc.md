---
layout: base
title:  'Statistics of cc in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `cc`

This relation is universal.

14 nodes (2%) are attached to their parents as `cc`.

14 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.35714285714286.

The following 5 pairs of parts of speech are connected with `cc`: <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-CCONJ.html">CCONJ</a></tt> (4; 29% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-CCONJ.html">CCONJ</a></tt> (4; 29% instances), <tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tuecl-pos-CCONJ.html">CCONJ</a></tt> (3; 21% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-CCONJ.html">CCONJ</a></tt> (2; 14% instances), <tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_tuecl-pos-CCONJ.html">CCONJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
2	sigara	sigara	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
3	ve	ve	CCONJ	_	_	4	cc	_	_
4	alkol	alkol	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
5	içmeyi	iç	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	6	xcomp	_	_
6	bırakmayı	bırak	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	7	xcomp	_	_
7	denedi	dene	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 cc	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Ne	ne	CCONJ	_	_	3	cc	_	_
2	Peter	Peter	PROPN	_	Case=Nom|Number=Sing	8	nsubj	_	_
3	Smith	Smith	PROPN	_	Case=Nom|Number=Sing	2	flat	_	_
4	ne	ne	CCONJ	_	_	6	cc	_	_
5	de	de	ADV	_	_	4	fixed	_	_
6	Mary	Mary	PROPN	_	Case=Nom|Number=Sing	2	conj	_	_
7	Brown	Brown	PROPN	_	Case=Nom|Number=Sing	6	flat	_	_
8	seçilebilir	seç	VERB	_	Aspect=Imp|Evident=Fh|Mood=Pot|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


