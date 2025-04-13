---
layout: base
title:  'Statistics of csubj:outer in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="he_iahltknesset-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="he_iahltknesset-dep-csubj-pass.html">csubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:outer`.

1 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 csubj:outer	color:blue
1	אני	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	בהחלט	בהחלט	ADV	ADV	_	3	advmod	_	_
3	חושב	חשב	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
4	ש	ש	SCONJ	SCONJ	_	10	mark	_	_
5	למשוך	משך	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	10	csubj:outer	_	_
6	זמן	זמן	NOUN	NOUN	Gender=Masc|Number=Sing	5	obj	_	_
7	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	_
8	לא	לא	ADV	ADV	Polarity=Neg	10	advmod	_	_
9	ה	ה	DET	DET	Definite=Def|PronType=Art	10	det	_	_
10	מקרה	מקרה	NOUN	NOUN	Gender=Masc|Number=Sing	3	ccomp	_	_
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


