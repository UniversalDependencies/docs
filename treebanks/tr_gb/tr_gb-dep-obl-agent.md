---
layout: base
title:  'Statistics of obl:agent in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="tr_gb-dep-obl-tmod.html">obl:tmod</a></tt>.

23 nodes (0%) are attached to their parents as `obl:agent`.

21 instances of `obl:agent` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.04347826086957.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (19; 83% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (2; 9% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (2; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:agent	color:blue
1	Annesine	anne	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obl:agent	_	_
2	bulaşık	bulaşık	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	yıkatmıyor	yıka	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Cau	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:agent	color:blue
1	Herkese	herkes	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	obl:agent	_	_
2	birer	bir	NUM	_	NumType=Dist	3	nummod	_	_
3	ağaç	ağaç	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
4	diktirildi	dik	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=CauPass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:agent	color:blue
1	Nuran	Nuran	PROPN	_	Number=Sing	4	nsubj	_	_
2	Deniz'e	Deniz	PROPN	_	Case=Dat|Number=Sing	4	obl:agent	_	_
3	kapıyı	kapı	NOUN	_	Case=Acc|Number=Sing	4	obj	_	_
4	açtırdı	aç	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


