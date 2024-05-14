---
layout: base
title:  'Statistics of advmod:neg in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="pl_pud-dep-advmod-arg.html">advmod:arg</a></tt>, <tt><a href="pl_pud-dep-advmod-emph.html">advmod:emph</a></tt>.

121 nodes (1%) are attached to their parents as `advmod:neg`.

121 instances of `advmod:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0495867768595.

The following 9 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (79; 65% instances), <tt><a href="pl_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (23; 19% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (5; 4% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (4; 3% instances), <tt><a href="pl_pud-pos-PART.html">PART</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (4; 3% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (3; 2% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:neg	color:blue
1	Powiedzmy	powiedzieć	VERB	impt:pl:pri:perf	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	tylko	tylko	PART	part	_	1	advmod:emph	1:advmod:emph	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
4	że	że	SCONJ	comp	_	6	mark	6:mark	_
5	nie	nie	PART	part	Polarity=Neg	6	advmod:neg	6:advmod:neg	_
6	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp:obj	1:ccomp:obj	_
7	racji	racja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	iobj	6:iobj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:neg	color:blue
1	Internet	Internet	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj|10:nsubj	_
2	nie	nie	PART	part	Polarity=Neg	3	advmod:neg	3:advmod:neg	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	advmod	6:advmod	Case=Loc
5	końcu	koniec	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	fixed	4:fixed	_
6	luksusem	luksus	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
8	tylko	tylko	CCONJ	conj	_	10	cc	10:cc	_
9	niezbędnym	niezbędny	ADJ	adj:sg:inst:n:pos	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	10	amod	10:amod	_
10	narzędziem	narzędzie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	6	conj	0:root|6:conj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod:neg	color:blue
1	Każda	każdy	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	2	det	2:det	_
2	mapa	mapa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
3	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Gen
4	wystawy	wystawa	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	nmod	2:nmod	_
5	opowiada	opowiadać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	swoją	swój	DET	adj:sg:acc:f:pos	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	7	det:poss	7:det:poss	_
7	historię	historia	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
9	nie	nie	PART	part	Polarity=Neg	10	advmod:neg	10:advmod:neg	_
10	zawsze	zawsze	ADV	adv	PronType=Tot	11	advmod	11:advmod	_
11	opartą	oprzeć	ADJ	ppas:sg:acc:f:perf:aff	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	7	acl:relcl	7:acl:relcl	_
12	na	na	ADP	prep:loc	AdpType=Prep	13	case	13:case	Case=Loc
13	faktach	fakt	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	11	obl:arg	11:obl:arg	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


