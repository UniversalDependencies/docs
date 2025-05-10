---
layout: base
title:  'Statistics of acl:relcl in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="nmf_suansu-dep-acl.html">acl</a></tt>.

6 nodes (0%) are attached to their parents as `acl:relcl`.

3 instances of `acl:relcl` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (5; 83% instances), <tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 acl:relcl	color:blue
1	Bu	bu	PRON	_	Number=Plur|Person=3|PronType=Prs	3	obj	3:obj	_
2	byahn	byahn	SCONJ	PURP	_	3	mark	3:mark	_
3	thungmi	thungmi	VERB	_	VerbForm=Inf	7	xcomp	7:xcomp	_
4	ra	ra	AUX	_	Mood=Imp	3	aux	3:aux	_
5	re	re	ADV	_	_	3	advmod	3:advmod	_
6	Adi	a	PRON	_	Case=Top|Number=Sing|Person=1|PronType=Prs	7	obj	7:obj	_
7	wai	wa	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past|VerbForm=Fin	8	acl:relcl	8:acl:relcl	_
8	miszu	miszu	NOUN	_	Number=Sing	0	root	0:root|7:nsubj	_
9	phange	phange	NUM	_	NumForm=Word|NumType=Card	8	nummod	8:nummod	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 acl:relcl	color:blue
1	Nahnnan	nahn	PRON	_	Case=Erg|Number=Sing|Person=2|PronType=Prs	2	nsubj	2:nsubj	_
2	rungganan	rung	VERB	SIM.CVB	Aspect=Prog|VerbForm=Conv	5	acl:relcl	5:acl:relcl	_
3	la	la	AUX	_	VerbForm=Inf	2	aux	2:aux	_
4	di	di	SCONJ	NMLZ	_	2	mark	2:mark	_
5	didi	didi	PRON	_	Deixis=Remt|Number=Sing|PronType=Dem	6	obj	2:obj|6:obj	_
6	rungha	rung	VERB	_	Aspect=Imp|Mood=Ind|Tense=Pqp|VerbForm=Fin	17	advcl	17:advcl	_
7	regwenan	regwenan	SCONJ	_	_	6	mark	6:mark	SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	6:punct	_
9	insurance	insurance	NOUN	_	Number=Sing	11	nmod:poss	11:nmod:poss	OrigLang=en
10	companyva	company	NOUN	_	Case=Gen|Number=Sing	9	flat	9:flat	OrigLang=en
11	limit	limit	NOUN	_	Number=Sing	12	nsubj	12:nsubj	OrigLang=en
12	lailehnmaha	lailehn	VERB	_	Aspect=Imp|Mood=Ind|Tense=Pqp|VerbForm=Fin	6	advcl	6:advcl	_
13	rairenan	rairenan	SCONJ	_	_	12	mark	12:mark	SpaceAfter=No
14	,	,	PUNCT	_	_	6	punct	6:punct	_
15	insurance	insurance	NOUN	_	Number=Sing	17	nsubj	17:nsubj	OrigLang=en
16	business	business	NOUN	_	Number=Sing	15	flat	15:flat	OrigLang=en
17	zha	zha	VERB	_	VerbForm=Inf	0	root	0:root	_
18	rahnte	rahn	AUX	COMPL	Aspect=Perf|Mood=Irr	17	aux	17:aux	SpaceAfter=No
19	.	.	PUNCT	_	_	17	punct	17:punct	SpacesAfter=\n

~~~


