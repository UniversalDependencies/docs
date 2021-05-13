---
layout: base
title:  'Statistics of advcl:cmpr in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `advcl:cmpr`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="pl_pdb-dep-advcl-relcl.html">advcl:relcl</a></tt>.

188 nodes (0%) are attached to their parents as `advcl:cmpr`.

179 instances of `advcl:cmpr` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.52659574468085.

The following 10 pairs of parts of speech are connected with `advcl:cmpr`: <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (67; 36% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (60; 32% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (29; 15% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (14; 7% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 advcl:cmpr	color:blue
1	Zyskasz	zyskać	VERB	fin:sg:sec:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	nieco	nieco	ADV	adv	_	1	advmod	1:advmod	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
4	ale	ale	CCONJ	conj	_	7	cc	7:cc	_
5	nie	nie	PART	part	Polarity=Neg	7	advmod:neg	7:advmod:neg	_
6	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	7	advmod	7:advmod	_
7	dużo	dużo	ADV	adv:pos	Degree=Pos	1	conj	0:root|1:conj	_
8	jak	jak	SCONJ	comp	ConjType=Comp	10	mark	10:mark	_
9	się	się	PRON	part	PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	_
10	spodziewasz	spodziewać	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl:cmpr	6:advcl:cmpr	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 advcl:cmpr	color:blue
1	Gasi	gasić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	karbidówkę	karbidówka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	obj	1:obj	_
3	wilgotną	wilgotny	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
4	dłonią	dłoń	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	1	iobj	1:iobj	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
6	jakby	jakby	SCONJ	comp	ConjType=Comp	7	mark	7:mark	_
7	gasiła	gasić	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl:cmpr	1:advcl:cmpr	_
8	świecę	świeca	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 advcl:cmpr	color:blue
1	"	"	PUNCT	interp	PunctType=Quot	3	punct	3:punct	SpaceAfter=No
2	Jestem	być	AUX	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	inny	inny	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
5	ale	ale	CCONJ	conj	_	6	cc	6:cc	_
6	potrafię	potrafić	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	_
7	więcej	więcej	DET	num:pl:acc:f:rec	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	6	iobj	6:iobj	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
9	niż	niż	SCONJ	comp	ConjType=Comp	10	mark	10:mark	_
10	mogło	móc	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	advcl:cmpr	7:advcl:cmpr	_
11	by	by	AUX	part	_	10	aux:cnd	10:aux:cnd	_
12	się	się	PRON	part	PronType=Prs|Reflex=Yes	13	expl:pv	13:expl:pv	_
13	wydawać	wydawać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	10	xcomp	10:xcomp	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


