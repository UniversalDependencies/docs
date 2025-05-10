---
layout: base
title:  'Statistics of dislocated in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `dislocated`

This relation is universal.

44 nodes (0%) are attached to their parents as `dislocated`.

40 instances of `dislocated` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.

The following 9 pairs of parts of speech are connected with `dislocated`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (22; 50% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (12; 27% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (2; 5% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 dislocated	color:blue
1	Коли	коли	ADV	ADV	PronType=Rel	3	advmod	_	_
2	воно	воно	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
3	закінчиться	закінчитися	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	це	цей	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	det	_	_
6	слідство	слідство	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	dislocated	_	SpaceAfter=No
7	?	?	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 dislocated	color:blue
1	Такі	такий	DET	DET	Case=Nom|Number=Plur|PronType=Dem	2	det	_	_
2	закони	закон	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	10	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	10	punct	_	_
4	вони	вони	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	_
5	є	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
6	не	не	PART	PART	Polarity=Neg	10	reparandum	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	8	punct	_	_
8	знаєте	знати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	10	parataxis	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	8	punct	_	_
10	неґрунтовні	неґрунтовний	ADJ	ADJ	Case=Nom|Number=Plur	0	root	_	_
11	і	і	CCONJ	CCONJ	_	10	cc	_	SpaceAfter=No
12	...	...	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 dislocated	color:blue
1	Але	але	CCONJ	CCONJ	_	11	cc	_	_
2	багато	багато	DET	DET	_	3	det:numgov	_	_
3	питань	питання	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	11	dislocated	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	8	punct	_	_
5	які	який	DET	DET	Case=Nom|Number=Plur|PronType=Rel	8	nsubj	_	_
6	там	там	ADV	ADV	PronType=Dem	8	advmod	_	_
7	зараз	зараз	ADV	ADV	PronType=Dem	8	advmod	_	_
8	виникають	виникати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	8	punct	_	_
10	їх	вони	PRON	PRON	Case=Acc|Number=Plur|Person=3|PronType=Prs	14	obj	_	_
11	треба	треба	ADV	ADV	_	0	root	_	_
12	зараз	зараз	ADV	ADV	PronType=Dem	14	advmod	_	_
13	негайно	негайно	ADV	ADV	_	14	advmod	_	_
14	вивчати	вивчати	VERB	VERB	Aspect=Imp|VerbForm=Inf	11	csubj	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	11	punct	_	_

~~~


