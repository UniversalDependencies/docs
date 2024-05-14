---
layout: base
title:  'Statistics of obl:agent in UD_Pomak-Philotis'
udver: '2'
---

## Treebank Statistics: UD_Pomak-Philotis: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="qpm_philotis-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="qpm_philotis-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="qpm_philotis-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="qpm_philotis-dep-obl-tmod.html">obl:tmod</a></tt>.

5 nodes (0%) are attached to their parents as `obl:agent`.

5 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.8.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-ADJ.html">ADJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:agent	color:blue
1	Mlógo	mlógo	ADJ	_	Definite=Ind	2	advmod	_	_
2	húbavy	húbav	ADJ	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	3	amod	_	_
3	ófce	afcá	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	8	nsubj:pass	_	_
4	i	i	CCONJ	_	_	5	cc	_	_
5	jágneta	jágne	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	conj	_	_
6	mú	ja	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obl	_	_
7	so	som	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux:pass	_	_
8	nabíly	nábijem	VERB	_	Aspect=Perf|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
9	ad	ad	ADP	_	_	11	case	_	_
10	vólčeno	vólče	ADJ	_	Definite=Def|Deixis=Remt	11	amod	_	_
11	zóby	zob	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Plur	8	obl:agent	_	SpaceAfter=No
12	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	POMÁCKYNE	pomáckyj	ADJ	_	Case=Nom|Definite=Def|Deixis=Remt|Gender=Fem|Number=Plur	2	amod	_	_
2	GAZÉTY	gazéta	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	4	nsubj	_	_
3	só	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	4	expl	_	_
4	PÍSAVOT	písavom	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	AD	ad	ADP	_	_	6	case	_	_
6	POMÁCE	Pomáčin	ADJ	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Plur	4	obl:agent	_	_

~~~


