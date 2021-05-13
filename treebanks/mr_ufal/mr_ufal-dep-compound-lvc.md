---
layout: base
title:  'Statistics of compound:lvc in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="mr_ufal-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="mr_ufal-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="mr_ufal-dep-compound-svc.html">compound:svc</a></tt>.

45 nodes (1%) are attached to their parents as `compound:lvc`.

45 instances of `compound:lvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06666666666667.

The following 5 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (27; 60% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (9; 20% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (5; 11% instances), <tt><a href="mr_ufal-pos-AUX.html">AUX</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (3; 7% instances), <tt><a href="mr_ufal-pos-AUX.html">AUX</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:lvc	color:blue
1	थापा	थापा	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	2	compound:lvc	_	_
2	मार	मारणे	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
3	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:lvc	color:blue
1	तेथे	तेथे	ADV	_	_	6	advmod	_	_
2	_	राजा	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	6	obl	_	_
3	_	साठी	ADP	_	_	2	case	_	_
4	सिंहासन	सिंहासन	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:pass	_	_
5	तयार	तयार	ADV	_	_	6	compound:lvc	_	_
6	करण्यात	करणे	VERB	_	Case=Loc|InfForm=Dict|VerbForm=Inf	0	root	_	_
7	आले	येणे	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Person=3|VerbForm=Fin	6	aux:pass	_	_
8	होते	असणे	AUX	_	Gender=Neut|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound:lvc	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	हे	हा	DET	_	Deixis=Prox|Gender=Neut|Number=Sing|PronType=Dem	4	det	_	_
3	म्हातारे	म्हातारा	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	4	amod	_	_
4	शेतकरी	शेतकरी	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
5	साक्षीदार	साक्षीदार	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	का	का	CCONJ	_	_	8	cc	_	_
7	खोटे	खोटा	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	8	compound:lvc	_	_
8	सांगतात	सांगसांगणे	VERB	_	Aspect=Imp|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	SpaceAfter=No
9	?	?	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	"	"	PUNCT	_	_	5	punct	_	_
11	वकील	वकील	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
12	म्हणाला	म्हणणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	5	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	_

~~~


