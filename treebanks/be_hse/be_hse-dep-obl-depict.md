---
layout: base
title:  'Statistics of obl:depict in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `obl:depict`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="be_hse-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="be_hse-dep-obl-float.html">obl:float</a></tt>, <tt><a href="be_hse-dep-obl-tmod.html">obl:tmod</a></tt>.

9 nodes (0%) are attached to their parents as `obl:depict`.

9 instances of `obl:depict` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.88888888888889.

The following 2 pairs of parts of speech are connected with `obl:depict`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (8; 89% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:depict	color:blue
1	Уранку	уранку	ADV	RB	Degree=Pos	4	advmod	4:advmod	_
2	хворы	хворы	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
3	аднак	аднак	CCONJ	CC	_	4	cc	4:cc	_
4	прачнуўся	прачнуцца	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	0:root	_
5	даволі	даволі	ADV	RB	Degree=Pos	6	advmod	6:advmod	_
6	спакойны	спакойны	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	obl:depict	4:obl:depict	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:depict	color:blue
1	Калі	калі	SCONJ	IN	_	2	mark	2:mark	_
2	ўзламалі	узламаць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	6:advcl:калі	_
3	дзьверы	дзьверы	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	obj	2:obj	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	2	punct	2:punct	_
5	ён	ён	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	6:nsubj	_
6	ляжаў	ляжаць	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	мёртвы	мёртвы	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	6	obl:depict	6:obl:depict	_
8	на	на	ADP	IN	_	9	case	9:case	_
9	ложку	ложка	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	nmod	7:nmod:на:acc	_

~~~


