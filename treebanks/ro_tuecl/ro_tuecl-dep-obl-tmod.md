---
layout: base
title:  'Statistics of obl:tmod in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ro_tuecl-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="ro_tuecl-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ro_tuecl-dep-obl-pmod.html">obl:pmod</a></tt>.

1 nodes (0%) are attached to their parents as `obl:tmod`.

1 instances of `obl:tmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 obl:tmod	color:blue
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


