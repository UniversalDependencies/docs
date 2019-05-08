---
layout: base
title:  'Statistics of aux in UD_Polish-SZ'
udver: '2'
---

## Treebank Statistics: UD_Polish-SZ: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="pl_sz-dep-aux-pass.html">aux:pass</a></tt>.

1084 nodes (1%) are attached to their parents as `aux`.

804 instances of `aux` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19741697416974.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-AUX.html">AUX</a></tt> (998; 92% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-AUX.html">AUX</a></tt> (43; 4% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-PART.html">PART</a></tt> (19; 2% instances), <tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_sz-pos-AUX.html">AUX</a></tt> (18; 2% instances), <tt><a href="pl_sz-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_sz-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="pl_sz-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_sz-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pl_sz-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_sz-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Siedziała	siedzieć	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Variant=Short|VerbForm=Fin	1	aux	_	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	4	case	_	_
4	milczeniu	milczenie	NOUN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	1	obl	_	SpaceAfter=No
5	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	_	_
2	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Variant=Short|VerbForm=Fin	3	aux	_	_
3	zgubiona	zgubiony	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	.	.	PUNCT	interp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	Niech	niech	PART	qub	_	3	aux	_	_
2	pan	pan	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	powie	powiedzieć	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	.	.	PUNCT	interp	_	3	punct	_	_

~~~


