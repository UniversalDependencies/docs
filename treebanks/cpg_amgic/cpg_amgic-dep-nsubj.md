---
layout: base
title:  'Statistics of nsubj in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `nsubj`

This relation is universal.

51 nodes (6%) are attached to their parents as `nsubj`.

40 instances of `nsubj` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11764705882353.

The following 7 pairs of parts of speech are connected with `nsubj`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (29; 57% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (15; 29% instances), <tt><a href="cpg_amgic-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
1	na	na	AUX	Subj	_	2	aux	_	_
2	baγərtzísi	baγərdó	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	csubj	_	_
3	kukuniós	kukuniós	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	2	punct	_	_
5	vráδin	vráδin	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	6	obl	_	_
6	ortá	ortá	ADV	ADV	_	2	advmod	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=Post|OrigLang=tr|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	6	punct	_	_
8	kaló	kalós	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
9	ren	ren	PART	Neg	_	8	advmod	_	_
10	'ne	ímu	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	LC=Yes|MorphSynC=MorphIn|MorphSynSC=CopNeg|#Compare_Turkish:değildir

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Τúta	(e)tútus	PRON	PRON	Case=Nom|Gender=Neut|Number=Plur|Person=3|PronType=Dem	4	nsubj	_	_
2	χer	χer	DET	DisDet	PronType=Ind	3	det	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=Quant|Orig=her|OrigLang=tr|#Indeclinable_Distributive_Determiner(=MG κάθε)
3	iméra	iméra	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	_
4	kasinonǰískaši	kásumu	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	χoríz	χorís	ADP	ADP	_	6	case	_	_
6	zuliá	zuliá	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	Tu	o	DET	DET	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	ölzüjü	ölzüjü	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	Orig=ölçücü|OrigLang=tr
3	ta	o	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	4	det	_	_
4	saqália	saqáli	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	5	nsubj	_	_
5	áspra	áspros	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	0	root	_	_
6	nde	ímu	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	LC=Yes|MorphSynC=MorphIn|MorphSynSC=EnCop
7	yóksa	yóksa	CCONJ	CCONJ	_	8	cc	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=ConjCo|Orig=yoksa|OrigLang=tr
8	mávra	mávros	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	5	conj	_	_
9	nde	ímu	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	LC=Yes|MorphSynC=MorphIn|MorphSynSC=EnCop|SpaceAfter=No
10	?	?	PUNCT	PUNCT	_	5	punct	_	_

~~~


