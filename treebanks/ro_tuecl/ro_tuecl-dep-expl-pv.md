---
layout: base
title:  'Statistics of expl:pv in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="ro_tuecl-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="ro_tuecl-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_tuecl-dep-expl-poss.html">expl:poss</a></tt>.

54 nodes (1%) are attached to their parents as `expl:pv`.

54 instances of `expl:pv` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12962962962963.

The following 1 pairs of parts of speech are connected with `expl:pv`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (54; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:pv	color:blue
1	încep	începe	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	să	să	PART	_	Mood=Sub	4	mark	_	_
3	mă	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	4	expl:pv	_	_
4	topesc	topi	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
5	după	după	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	tine	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Strong	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	cum	cum	ADV	_	PronType=Int,Rel	11	advmod	_	_
9	s-	sine	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	11	expl:pv	_	SpaceAfter=No
10	a	avea	AUX	_	Person=3	11	aux	_	_
11	topit	topi	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	_
12	butter	butter	NOUN	_	Foreign=Yes|Number=Sing	11	nsubj	_	Lang=en
13	într-	întru	ADP	_	AdpType=Prep|Case=Acc|Variant=Short	15	case	_	SpaceAfter=No
14	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	15	det	_	_
15	oră	ora	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	11	obl:tmod	_	_

~~~


