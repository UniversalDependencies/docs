---
layout: base
title:  'Statistics of obl:tmod in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="tr_tuecl-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="tr_tuecl-dep-obl-agent.html">obl:agent</a></tt>.

14 nodes (2%) are attached to their parents as `obl:tmod`.

14 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.57142857142857.

The following 2 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (13; 93% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 obl:tmod	color:blue
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
# visual-style 3 1 obl:tmod	color:blue
1	Bugün	bugün	ADV	_	Case=Nom	3	obl:tmod	_	_
2	mü	mi	AUX	_	Number=Sing|Person=3|Tense=Pres	3	aux:q	_	_
3	yapılacak	yap	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Pass	0	root	_	_
4	etkinlik	etkinlik	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
5	?	?	PUNCT	_	_	3	punct	_	_

~~~


