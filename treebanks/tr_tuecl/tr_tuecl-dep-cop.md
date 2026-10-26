---
layout: base
title:  'Statistics of cop in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `cop`

This relation is universal.

18 nodes (2%) are attached to their parents as `cop`.

18 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.22222222222222.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (8; 44% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (4; 22% instances), <tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (3; 17% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Anneannesi	anneanne	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	_
2	hemşire	hemşire	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
3	ydi	i	AUX	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	2	cop	_	_
4	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	uyumuş	uyu	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	idi	i	AUX	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cop	color:blue
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


