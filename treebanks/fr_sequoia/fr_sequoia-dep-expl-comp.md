---
layout: base
title:  'Statistics of expl:comp in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `expl:comp`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `expl`: <tt><a href="fr_sequoia-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="fr_sequoia-dep-expl-pv.html">expl:pv</a></tt>, <tt><a href="fr_sequoia-dep-expl-subj.html">expl:subj</a></tt>.

44 nodes (0%) are attached to their parents as `expl:comp`.

43 instances of `expl:comp` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20454545454545.

The following 2 pairs of parts of speech are connected with `expl:comp`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (43; 98% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:comp	color:blue
1	Revenons	revenir	VERB	_	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	-en	en	PRON	_	Person=3|PronType=Prs	1	expl:comp	_	_
3	à	à	ADP	_	_	5	case	_	_
4	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	actualité	actualité	NOUN	_	Gender=Fem|Number=Sing	1	obl:arg	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 expl:comp	color:blue
1	Si	si	SCONJ	_	_	4	mark	_	_
2	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	réalisation	réalisation	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	_
4	permet	permettre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	advcl	_	_
5	en	en	ADP	_	_	4	advmod	_	ExtPos=ADV|Idiom=Yes
6	plus	plus	ADV	_	_	5	fixed	_	InIdiom=Yes
7	d'	de	ADP	_	_	8	mark	_	SpaceAfter=No
8	améliorer	améliorer	VERB	_	VerbForm=Inf	4	ccomp	_	Subject=Generic
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	dessertes	desserte	NOUN	_	Gender=Fem|Number=Plur	8	obj	_	_
11	de	de	ADP	_	_	12	case	_	_
12	voiries	voirie	NOUN	_	Gender=Fem|Number=Plur	10	nmod	_	_
13	cela	cela	PRON	_	Number=Sing|PronType=Dem	18	nsubj	_	_
14	n'	ne	ADV	_	Polarity=Neg	18	advmod	_	SpaceAfter=No
15	en	en	PRON	_	Person=3|PronType=Prs	18	expl:comp	_	_
16	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	18	cop	_	_
17	que	que	ADV	_	_	18	advmod	_	_
18	mieux	mieux	ADV	_	_	0	root	_	SpaceAfter=No
19	.	.	PUNCT	_	_	18	punct	_	_

~~~


