---
layout: base
title:  'Statistics of nummod:periph in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nummod:periph`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nummod.html">nummod</a></tt>.
There are also 2 other language-specific subtypes of `nummod`: <tt><a href="pcm_nsc-dep-nummod-det.html">nummod:det</a></tt>, <tt><a href="pcm_nsc-dep-nummod-mod.html">nummod:mod</a></tt>.

5 nodes (0%) are attached to their parents as `nummod:periph`.

5 instances of `nummod:periph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.2.

The following 2 pairs of parts of speech are connected with `nummod:periph`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (3; 60% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nummod:periph	color:blue
1	#	#	PUNCT	_	_	6	punct	_	AlignBegin=228112|AlignEnd=228380|Gloss=PUNCT
2	twenty	twenty	NUM	_	NumType=Card	3	compound	_	AlignBegin=228380|AlignEnd=228690|Gloss=twenty.CARD
3	nineteen	nineteen	NUM	_	NumType=Card	6	nummod:periph	_	AlignBegin=228690|AlignEnd=228943|Gloss=nineteen.CARD
4	na	na	AUX	_	PartType=Cop	6	cop	_	AlignBegin=228943|AlignEnd=229080|Gloss=be
5	ehn	ehn	INTJ	_	_	6	discourse	_	AlignBegin=229110|AlignEnd=229332|Gloss=ehn
6	prediction	prediction	NOUN	_	_	0	root	_	AlignBegin=229362|AlignEnd=229870|Gloss=prediction
7	//	//	PUNCT	_	_	6	punct	_	AlignBegin=229870|AlignEnd=229900|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nummod:periph	color:blue
1	#	#	PUNCT	_	_	8	punct	_	AlignBegin=23770|AlignEnd=24121|Gloss=PUNCT
2	twenty	twenty	NUM	_	NumType=Card	8	nummod:periph	_	AlignBegin=24121|AlignEnd=24411|Gloss=twenty.CARD
3	fifth	fifth	ADJ	_	NumType=Ord	2	flat	_	AlignBegin=24411|AlignEnd=24800|Gloss=fifth.ORD
4	<	<	PUNCT	_	_	2	punct	_	AlignBegin=24800|AlignEnd=24830|Gloss=PUNCT
5	#	#	PUNCT	_	_	2	punct	_	AlignBegin=24830|AlignEnd=25036|Gloss=PUNCT
6	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	AlignBegin=25036|AlignEnd=25188|Gloss=NOM.PL.1
7	go	go	AUX	_	Aspect=Prosp	8	aux	_	AlignBegin=25188|AlignEnd=25391|Gloss=PROSP
8	cook	cook	VERB	_	_	0	root	_	AlignBegin=25391|AlignEnd=25631|Gloss=cook
9	//	//	PUNCT	_	_	8	punct	_	AlignBegin=25631|AlignEnd=25661|Gloss=PUNCT

~~~


