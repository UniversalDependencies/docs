---
layout: base
title:  'Statistics of csubj:pass in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="en_gentle-dep-csubj-outer.html">csubj:outer</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 csubj:pass	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	2:expl	Discourse=organization-preparation:68->73:2:sem-lxchn-511,526+sem-lxchn-512,527+sem-lxchn-513,528|Entity=(61-abstract-acc:com-cf1-1-ana)
2	remains	remain	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MSeg=remain-s
3	to	to	PART	TO	_	5	mark	5:mark	_
4	be	be	AUX	VB	VerbForm=Inf	5	aux:pass	5:aux:pass	_
5	proved	prove	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	2	csubj	2:csubj	MSeg=prov-ed
6	that	that	SCONJ	IN	_	13	mark	13:mark	Entity=(61-abstract-giv:act-cf1-8-coref
7	DG	DG	NOUN	NN	Number=Sing	13	nsubj	13:nsubj	Entity=(11-abstract-giv:act-cf2*-1-coref)
8	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	13:cop	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	13	det	13:det	Entity=(11-abstract-giv:act-cf2*-5-coref
10	third	third	ADJ	JJ	Degree=Pos|NumForm=Word|NumType=Ord	11	amod	11:amod	XML=<ref target:::"https://proofwiki.org/wiki/Definition:Third_Binomial">
11	binomial	binomial	NOUN	NN	Number=Sing	13	compound	13:compound	XML=</ref>
12	straight	straight	ADJ	JJ	Degree=Pos	13	amod	13:amod	XML=<ref target:::"https://proofwiki.org/wiki/Definition:Line_Segment">
13	line	line	NOUN	NN	Number=Sing	5	csubj:pass	5:csubj:pass	Entity=11)61)|SpaceAfter=No|XML=</ref>
14	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


