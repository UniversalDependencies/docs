---
layout: base
title:  'Statistics of advmod:emph in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-advmod.html">advmod</a></tt>.

142 nodes (1%) are attached to their parents as `advmod:emph`.

140 instances of `advmod:emph` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07042253521127.

The following 7 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (45; 32% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (44; 31% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (24; 17% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (13; 9% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (9; 6% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (6; 4% instances), <tt><a href="tr_gb-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	annem	anne	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	0	root	_	_
2	de	de	ADV	_	_	1	advmod:emph	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod:emph	color:blue
1	Turgut	Turgut	PROPN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	nasıl	nasıl	ADV	_	PronType=Int	3	advmod	_	_
3	bilsin	bil	VERB	_	Mood=Imp|Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
4	ki	ki	ADV	_	_	3	advmod:emph	_	SpaceAfter=No
5	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advmod:emph	color:blue
1	Semra	Semra	PROPN	_	Number=Sing	8	dislocated	_	_
2	ki	ki	SCONJ	_	_	4	mark	_	_
3	partileri	parti	NOUN	_	Case=Acc|Number=Plur	4	obj	_	_
4	sevmez	sev	VERB	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	acl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	1	punct	_	_
6	o	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
7	bile	bile	ADV	_	_	6	advmod:emph	_	_
8	eğlendi	eğlen	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


