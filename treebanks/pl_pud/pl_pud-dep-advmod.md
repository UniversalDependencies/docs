---
layout: base
title:  'Statistics of advmod in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `advmod`

This relation is universal.
There are 3 language-specific subtypes of `advmod`: <tt><a href="pl_pud-dep-advmod-arg.html">advmod:arg</a></tt>, <tt><a href="pl_pud-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="pl_pud-dep-advmod-neg.html">advmod:neg</a></tt>.

509 nodes (3%) are attached to their parents as `advmod`.

422 instances of `advmod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92927308447937.

The following 14 pairs of parts of speech are connected with `advmod`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (268; 53% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (146; 29% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (33; 6% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (14; 3% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (11; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (10; 2% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-PART.html">PART</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	Najpierw	najpierw	ADV	adv	_	2	advmod	2:advmod	_
2	zaczęła	zacząć	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	płakać	płakać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	jedna	jeden	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Gen
6	jezydek	jezydka	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	4	obl	4:obl	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
8	potem	potem	ADV	adv	_	10	advmod	10:advmod	_
9	jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	10	nmod	10:nmod	_
10	przyjaciółka	przyjaciółka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	conj	0:root|2:conj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 advmod	color:blue
1	To	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	12	nsubj	12:nsubj	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
3	co	co	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	obj	5:obj|7:obj	_
4	ona	on	PRON	ppron3:sg:nom:f:ter:akc:npraep	Case=Nom|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	5	nsubj	5:nsubj|7:nsubj	_
5	mówi	mówić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	1:acl:relcl	_
6	i	i	CCONJ	conj	_	7	cc	7:cc	_
7	robi	robić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	1:acl:relcl|5:conj	_
8	–	–	PUNCT	interp	PunctType=Dash	12	punct	12:punct	_
9	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	12	cop	12:cop	_
10	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	12:aux	_
11	właściwie	właściwie	ADV	adv:pos	Degree=Pos	12	advmod	12:advmod	_
12	niewiarygodne	niewiarygodny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 advmod	color:blue
1	Najpierw	najpierw	ADV	adv	_	2	advmod	2:advmod	_
2	zaczęła	zacząć	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	płakać	płakać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	jedna	jeden	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Gen
6	jezydek	jezydka	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	4	obl	4:obl	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
8	potem	potem	ADV	adv	_	10	advmod	10:advmod	_
9	jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	10	nmod	10:nmod	_
10	przyjaciółka	przyjaciółka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	conj	0:root|2:conj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


