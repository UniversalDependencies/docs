---
layout: base
title:  'Statistics of advmod:neg in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="pl_pud-dep-advmod-arg.html">advmod:arg</a></tt>, <tt><a href="pl_pud-dep-advmod-emph.html">advmod:emph</a></tt>.

119 nodes (1%) are attached to their parents as `advmod:neg`.

119 instances of `advmod:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05882352941176.

The following 9 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (81; 68% instances), <tt><a href="pl_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (20; 17% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (5; 4% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (3; 3% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (3; 3% instances), <tt><a href="pl_pud-pos-PART.html">PART</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (3; 3% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (1; 1% instances).


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
7	racji	racja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:neg	color:blue
1	Ale	ale	CCONJ	conj	_	6	cc	6:cc	_
2	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop|12:cop	_
3	nie	nie	PART	part	Polarity=Neg	4	advmod:neg	4:advmod:neg	_
4	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux|12:aux	_
5	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	6	punct	6:punct	SpaceAfter=No
6	Gra	gra	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
7	o	o	ADP	prep:acc	AdpType=Prep	8	case	8:case	Case=Acc
8	tron	tron	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	nmod:arg	6:nmod:arg	SpaceAfter=No
9	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	6	punct	6:punct	SpaceAfter=No
10	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
11	tylko	tylko	CCONJ	conj	_	12	cc	12:cc	_
12	wybory	wybory	NOUN	subst:pl:nom:n:pt	Case=Nom|Gender=Neut|Number=Ptan	6	conj	6:conj	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

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


