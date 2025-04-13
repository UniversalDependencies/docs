---
layout: base
title:  'Statistics of nsubj:pass in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="uk_parlamint-dep-nsubj-outer.html">nsubj:outer</a></tt>.

108 nodes (0%) are attached to their parents as `nsubj:pass`.

78 instances of `nsubj:pass` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.4537037037037.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (67; 62% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (16; 15% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (12; 11% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:pass	color:blue
1	Позиція	позиція	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	комітету	комітет	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
3	:	:	PUNCT	PUNCT	_	6	punct	_	_
4	ця	цей	DET	DET	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	правка	правка	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
6	відхилена	відхилений	ADJ	ADJ	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	1	appos	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 nsubj:pass	color:blue
1	І	і	CCONJ	CCONJ	_	4	cc	_	_
2	ця	цей	DET	DET	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	проблема	проблема	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
4	відчувається	відчуватися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	_
5	у	у	ADP	ADP	Case=Acc	7	case	_	_
6	складні	складний	ADJ	ADJ	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	7	amod	_	_
7	моменти	момент	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	у	у	ADP	ADP	Case=Acc	10	case	_	_
10	моменти	момент	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	7	conj	_	_
11	випробувань	випробування	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	10	nmod	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	14	punct	_	_
13	які	який	DET	DET	Case=Nom|Number=Plur|PronType=Rel	14	nsubj:pass	_	_
14	помножені	помножений	ADJ	ADJ	Aspect=Perf|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	11	acl:relcl	_	_
15	на	на	ADP	ADP	Case=Acc	16	case	_	_
16	протистояння	протистояння	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	14	obl	_	_
17	всередині	всередині	ADP	ADP	Case=Gen	18	case	_	_
18	країни	країна	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Комітетом	комітет	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	obl:agent	_	_
2	вона	вона	PRON	PRON	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
3	відхилена	відхилений	ADJ	ADJ	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


