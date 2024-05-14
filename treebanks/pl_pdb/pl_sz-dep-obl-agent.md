---
layout: base
title:  'Statistics of obl:agent in UD_Polish-SZ'
udver: '2'
---

## Treebank Statistics: UD_Polish-SZ: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pl_sz-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="pl_sz-dep-obl-arg.html">obl:arg</a></tt>.

5 nodes (0%) are attached to their parents as `obl:agent`.

3 instances of `obl:agent` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2.

The following 1 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt> (5; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 obl:agent	color:blue
1	-	-	PUNCT	interp	_	10	punct	_	_
2	Poza	poza	ADP	prep:inst	AdpType=Prep|Case=Ins	10	advmod	_	_
3	tym	to	PRON	subst:sg:inst:n	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	2	case	_	_
4	Jan	Jan	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	10	nsubj:pass	_	_
5	Paweł	Paweł	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	nmod	_	_
6	II	II	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
7	nie	nie	PART	qub	_	8	advmod	_	_
8	został	zostać	AUX	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	10	aux:pass	_	_
9	jeszcze	jeszcze	PART	qub	_	10	advmod	_	_
10	ogłoszony	ogłoszony	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
11	świętym	święty	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	10	obl:agent	_	SpaceAfter=No
12	.	.	PUNCT	interp	_	10	punct	_	_

~~~


