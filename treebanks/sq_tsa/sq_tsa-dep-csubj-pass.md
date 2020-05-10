---
layout: base
title:  'Statistics of csubj:pass in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="sq_tsa-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 12 csubj:pass	color:blue
1	Është	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	cop	2:cop	_
2	detyra	detyrë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	0:root	_
3	e	i	DET	_	Gender=Fem	4	det	4:det	_
4	cilitdo	cilido	PRON	_	Gender=Masc|Number=Sing|PronType=Tot	2	nmod	2:nmod	_
5	personi	person	NOUN	_	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	4	nmod:poss	4:nmod:poss	_
6	të	i	DET	_	Gender=Masc	7	det	7:det	_
7	interesuar	interesuar	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	5	amod	5:amod	_
8	për	për	ADP	_	_	9	case	9:case	_
9	edukimin	edukim	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	12:punct	_
11	të	të	PART	_	_	12	mark	12:mark	_
12	këmbëngulë	këmbëngul	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	csubj:pass	2:csubj:pass	_
13	që	që	SCONJ	_	_	16	mark	16:mark	_
14	shkolla	shkollë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	16	nsubj	16:nsubj	_
15	të	të	PART	_	_	16	mark	16:mark	_
16	kthehet	kthej	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	12	ccomp	12:ccomp	_
17	në	në	ADP	_	_	18	case	18:case	_
18	instrumentin	instrument	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	16	obl	16:obl	_
19	parësor	parësor	ADJ	_	Gender=Masc|Number=Sing	18	amod	18:amod	SpaceAfter=No
20	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


