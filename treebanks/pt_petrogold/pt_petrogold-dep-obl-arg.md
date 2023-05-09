---
layout: base
title:  'Statistics of obl:arg in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="pt_petrogold-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="pt_petrogold-dep-obl-agent.html">obl:agent</a></tt>.

1509 nodes (1%) are attached to their parents as `obl:arg`.

1496 instances of `obl:arg` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.29489728296885.

The following 8 pairs of parts of speech are connected with `obl:arg`: <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1399; 93% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt> (45; 3% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (29; 2% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (18; 1% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:arg	color:blue
1	Sua	seu	DET	_	Gender=Fem|Number=Sing|PronType=Prs	2	det	_	_
2	função	função	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	depende	depender	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	de	de	ADP	_	_	6	case	_	_
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	peso	peso	NOUN	_	Gender=Masc|Number=Sing	3	obl:arg	_	_
7	molecular	molecular	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:arg	color:blue
1	7.1.3	7.1.3	NUM	_	NumType=Card	2	nummod	_	_
2	Corpos	Corpos	PROPN	_	Gender=Masc|Number=Plur	0	root	_	_
3	Magnéticos	Magnéticos	PROPN	_	Number=Sing	2	flat:name	_	_
4	Associados	associar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	2	acl	_	_
5	a	a	ADP	_	_	6	case	_	_
6	Intrusões	Intrusões	PROPN	_	Gender=Fem|Number=Sing	4	obl:arg	_	_
7	Magmáticas	Magmáticas	PROPN	_	Number=Sing	6	flat:name	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:arg	color:blue
1	Acrescenta	acrescentar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Se=pass
2	se	se	PRON	_	PronType=Prs	1	expl:pass	_	_
3	a	a	ADP	_	_	4	case	_	_
4	isto	isto	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	1	obl:arg	_	SpaceAfter=No
5	,	,	PUNCT	_	_	1	punct	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	efeito	efeito	NOUN	_	Gender=Masc|Number=Sing	1	nsubj:pass	_	_
8	viscosificante	viscosificante	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
9	em	em	ADP	_	_	10	case	_	_
10	água	água	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
11	doce	doce	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


