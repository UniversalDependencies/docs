---
layout: base
title:  'Statistics of compound in UD_Marathi'
udver: '2'
---

## Treebank Statistics: UD_Marathi: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="mr-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="mr-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="mr-dep-compound-svc.html">compound:svc</a></tt>.

6 nodes (0%) are attached to their parents as `compound`.

5 instances of `compound` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16666666666667.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="mr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="mr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mr-pos-ADJ.html">ADJ</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	_	हात	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	2	compound	_	_
2	_	पाय	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
3	धुऊन	धुणे	VERB	_	Aspect=Perf|VerbForm=Conv	5	advcl	_	_
4	तेथे	तेथे	ADV	_	_	5	advmod	_	_
5	बसला	बसणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	_	साधा	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	2	compound	_	_
2	_	भोळा	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	5	xcomp	_	_
3	,	,	PUNCT	_	_	4	punct	_	_
4	निष्पाप	निष्पाप	ADJ	_	Case=Nom	2	conj	_	_
5	दिसत	दिसणे	VERB	_	Aspect=Imp|VerbForm=Part	0	root	_	_
6	होती	असणे	AUX	_	Gender=Fem|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


