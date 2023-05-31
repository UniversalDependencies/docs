---
layout: base
title:  'Statistics of nsubj:outer in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fi_ood-dep-nsubj-cop.html">nsubj:cop</a></tt>.

1 nodes (0%) are attached to their parents as `nsubj:outer`.

1 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 nsubj:outer	color:blue
1	Ehtona	ehto	NOUN	_	Case=Ess|Number=Sing	0	root	_	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	ainoastaan	ainoastaan	ADV	_	_	1	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	10	punct	_	_
5	että	että	SCONJ	_	_	10	mark	_	_
6	projektin	projekti	NOUN	_	Case=Gen|Number=Sing	10	nsubj:outer	_	_
7	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
8	oltava	olla	AUX	_	Case=Nom|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Pass	10	cop	_	_
9	nuorten	nuori	NOUN	_	Case=Gen|Number=Plur	10	nsubj	_	_
10	ideoima	ideoida	VERB	_	Case=Nom|Number=Sing|PartForm=Agt|VerbForm=Part|Voice=Act	1	csubj:cop	_	_
11	ja	ja	CCONJ	_	_	12	cc	_	_
12	toteuttama	toteuttaa	VERB	_	Case=Nom|Number=Sing|PartForm=Agt|VerbForm=Part|Voice=Act	10	conj	_	_
13	–	–	PUNCT	_	_	17	punct	_	_
14	ja	ja	CCONJ	_	_	17	cc	_	_
15	sen	se	PRON	_	Case=Gen|Number=Sing|PronType=Dem	17	nsubj	_	_
16	pitää	pitää	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	17	aux	_	_
17	edistää	edistää	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	10	conj	_	_
18	liikenneturvallisuutta	liikenne#turvallisuus	NOUN	_	Case=Par|Derivation=Llinen,Vs|Number=Sing	17	obj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	1	punct	_	_

~~~


