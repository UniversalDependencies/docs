---
layout: base
title:  'Statistics of obl:agent in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="uk_parlamint-dep-obl-arg.html">obl:arg</a></tt>.

140 nodes (0%) are attached to their parents as `obl:agent`.

92 instances of `obl:agent` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.31428571428571.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (64; 46% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (56; 40% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (8; 6% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (5; 4% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:agent	color:blue
1	Цей	цей	DET	DET	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	моніторинг	моніторинг	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	буде	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	aux	_	_
4	проводитися	проводитися	VERB	VERB	Aspect=Imp|Reflex=Yes|VerbForm=Inf	0	root	_	_
5	комітетом	комітет	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	obl:agent	_	_
6	до	до	ADP	ADP	Case=Gen	7	case	_	_
7	кінця	кінець	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	obl	_	_
8	опалювального	опалювальний	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing	9	amod	_	_
9	сезону	сезон	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:agent	color:blue
1	Комітетом	комітет	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	obl:agent	_	_
2	вона	вона	PRON	PRON	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
3	відхилена	відхилений	ADJ	ADJ	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obl:agent	color:blue
1	Під	під	ADP	ADP	Case=Acc|ExtPos=ADP	3	case	_	_
2	час	час	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	fixed	_	_
3	підготовки	підготовка	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	obl	_	_
4	першочергових	першочерговий	ADJ	ADJ	Case=Gen|Number=Plur	6	amod	_	_
5	цих	цей	DET	DET	Case=Gen|Number=Plur|PronType=Dem	6	det	_	_
6	дій	дія	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	3	nmod	_	_
7	нами	ми	PRON	PRON	Animacy=Anim|Case=Ins|Number=Plur|Person=1|PronType=Prs	8	obl:agent	_	_
8	з'ясовано	з'ясувати	VERB	VERB	Aspect=Perf|Mood=Ind|Person=0|VerbForm=Fin	0	root	_	_
9	домінуючу	домінуючий	ADJ	ADJ	Aspect=Imp|BadStyle=Yes|Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	10	amod	_	_
10	позицію	позиція	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
11	цивільного	цивільний	ADJ	ADJ	Case=Gen|Gender=Neut|Number=Sing	12	amod	_	_
12	населення	населення	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	10	nmod	_	_
13	Криму	Крим	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Masc|NameType=Geo|Number=Sing	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


