---
layout: base
title:  'Statistics of compound:svc in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-compound.html">compound</a></tt>.

39 nodes (0%) are attached to their parents as `compound:svc`.

38 instances of `compound:svc` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.46153846153846.

The following 2 pairs of parts of speech are connected with `compound:svc`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (38; 97% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 compound:svc	color:blue
1	Я	я	PRON	PRON	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	не	не	PART	PART	Polarity=Neg	3	advmod:neg	_	_
3	подобаюся	подобатися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	давайте	давати	VERB	VERB	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	3	parataxis	_	_
6	ви	ви	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=2|PronType=Prs	5	nsubj	_	_
7	ще	ще	ADV	ADV	_	8	advmod	_	_
8	раз	раз	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	_
9	проголосіть	проголосити	VERB	VERB	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	5	compound:svc	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	13	punct	_	_
11	що	що	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	13	obj	_	_
12	ви	ви	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=2|PronType=Prs	13	nsubj	_	_
13	хочете	хотіти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	ccomp	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 compound:svc	color:blue
1	А	а	CCONJ	CCONJ	_	3	cc	_	_
2	ви	ви	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=2|Polite=Form|PronType=Prs	3	nsubj	_	_
3	запропонували	запропонувати	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	Вікторе	Віктор	PROPN	PROPN	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Number=Sing	3	vocative	_	_
6	Михайловичу	Михайлович	PROPN	PROPN	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Pat|Number=Sing	5	flat:name	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	5	punct	_	_
8	давайте	давати	VERB	VERB	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	3	parataxis	_	_
9	ж	ж	PART	PART	_	8	discourse	_	_
10	будемо	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	13	cop	_	_
11	всі	весь	PRON	PRON	Case=Nom|Number=Plur|PronType=Tot	13	nsubj	_	_
12	зараз	зараз	ADV	ADV	PronType=Dem	13	advmod	_	_
13	об'єктивні	об'єктивний	ADJ	ADJ	Case=Nom|Degree=Pos|Number=Plur	8	compound:svc	_	_
14	і	і	CCONJ	CCONJ	_	15	cc	_	_
15	намагатися	намагатися	VERB	VERB	Aspect=Imp|Reflex=Yes|VerbForm=Inf	13	conj	_	_
16	зберегти	зберегти	VERB	VERB	Aspect=Perf|VerbForm=Inf	15	xcomp	_	_
17	істину	істина	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	16	obj	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


