---
layout: base
title:  'Statistics of det:noun in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `det:noun`

This relation is a language-specific subtype of <tt><a href="sq_tsa-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="sq_tsa-dep-det-adj.html">det:adj</a></tt>, <tt><a href="sq_tsa-dep-det-pron.html">det:pron</a></tt>.

1 nodes (0%) are attached to their parents as `det:noun`.

1 instances of `det:noun` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `det:noun`: <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-DET.html">DET</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det:noun	color:blue
1	Dëgjojmë	dëgjoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	0	root	_	_
2	lajmet	lajm	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	1	obj	_	_
3	dhe	dhe	CCONJ	_	_	4	cc	_	_
4	lexojmë	lexoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	1	conj	_	_
5	artikujt	artikull	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	4	obj	_	_
6	që	që	SCONJ	_	_	8	mark	_	_
7	na	ne	PRON	_	Case=Dat|Gender=Masc|Number=Plur|PronType=Prs	8	iobj	_	_
8	japin	jap	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	5	acl:relcl	_	_
9	statistika	statistikë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	8	obj	_	_
10	për	për	ADP	_	_	12	case	_	_
11	të	i	DET	_	Gender=Masc	12	det:noun	_	_
12	vdekurit	vdekur	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	9	nmod	_	_
13	në	në	ADP	_	_	14	case	_	_
14	luftë	luftë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


