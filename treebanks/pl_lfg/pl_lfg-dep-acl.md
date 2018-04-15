---
layout: base
title:  'Statistics of acl in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pl_lfg-dep-acl-relcl.html">acl:relcl</a></tt>.

870 nodes (1%) are attached to their parents as `acl`.

457 instances of `acl` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85977011494253.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (726; 83% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (53; 6% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (42; 5% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (26; 3% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	Było	być	AUX	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	aux	2:aux	_
2	to	to	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	_
3	światło	światło	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	2:nsubj	_
4	powstającego	powstawać	ADJ	pact:sg:gen:m3:imperf:aff	Aspect=Imp|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos|SubGender=Masc3|VerbForm=Part|Voice=Act	5	acl	5:acl	_
5	dnia	dzień	NOUN	subst:sg:gen:m3	Case=Gen|Gender=Masc|Number=Sing|SubGender=Masc3	3	nmod:poss	3:nmod:poss	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
1	A	a	CCONJ	conj	_	4	cc	4:cc	_
2	pan	pan	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	4	nsubj	4:nsubj	_
3	poseł	poseł	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	2	flat	2:flat	_
4	powiedział	powiedzieć	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
6	że	że	SCONJ	comp	_	8	mark	8:mark	_
7	nie	nie	PART	qub	Polarity=Neg	8	advmod	8:advmod	_
8	chce	chcieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp:obj	4:ccomp:obj	_
9	Polski	Polska	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	obl	8:obl	_
10	zaściankowej	zaściankowy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	9	acl	9:acl	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl	color:blue
1	Nie	nie	PART	qub	Polarity=Neg	2	advmod	2:advmod	_
2	potrafię	potrafić	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	siebie	siebie	PRON	siebie:gen	Case=Gen|PronType=Prs|Reflex=Yes	4	obj	4:obj	_
4	rozpoznać	rozpoznać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Loc
6	tym	to	PRON	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	4	obl	4:obl:w	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
8	czego	co	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	10	obj	10:obj	_
9	teraz	teraz	ADV	adv	_	10	advmod	10:advmod	_
10	doświadczam	doświadczać	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl	6:acl	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


