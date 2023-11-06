---
layout: base
title:  'Statistics of obl:agent in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_parisstories-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_parisstories-dep-obl-mod.html">obl:mod</a></tt>.

2 nodes (0%) are attached to their parents as `obl:agent`.

2 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj:pass	_	AlignBegin=49795|AlignEnd=49995
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	AlignBegin=49995|AlignEnd=50194
3	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	aux:pass	_	AlignBegin=50194|AlignEnd=50394
4	organisé	organiser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	AlignBegin=50394|AlignEnd=50593
5	par	par	ADP	_	_	7	case	_	AlignBegin=50593|AlignEnd=50793
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	AlignBegin=50793|AlignEnd=50992
7	prof	prof	NOUN	_	Gender=Masc|Number=Sing	4	obl:agent	_	AlignBegin=50992|AlignEnd=51192|CorrectForm=profs|CorrectNumber=Plur|SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	AlignBegin=51192|AlignEnd=51192

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	donc	donc	ADV	_	_	6	advmod	_	AlignBegin=64048|AlignEnd=64281
2	ok	ok	ADV	_	_	1	discourse	_	AlignBegin=64281|AlignEnd=64515|SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	AlignBegin=64515|AlignEnd=64515
4	j'	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj:pass	_	AlignBegin=64515|AlignEnd=64748|SpaceAfter=No
5	étais	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	6	aux:tense	_	AlignBegin=64748|AlignEnd=64982
6	attirée	attirer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	AlignBegin=64982|AlignEnd=65215
7	par	par	ADP	_	_	8	case	_	AlignBegin=65215|AlignEnd=65448
8	lui	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obl:agent	_	AlignBegin=65448|AlignEnd=65682
9	à	à	ADP	_	_	11	case	_	AlignBegin=65682|AlignEnd=65915|wordform=au
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	début	début	NOUN	_	Gender=Masc|Number=Sing	6	obl:mod	_	AlignBegin=65915|AlignEnd=66149|SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	AlignBegin=66149|AlignEnd=66149
13	physiquement	physiquement	ADV	_	_	6	advmod	_	AlignBegin=66149|AlignEnd=66382|SpaceAfter=No
14	.	.	PUNCT	_	_	6	punct	_	AlignBegin=66382|AlignEnd=66382

~~~


