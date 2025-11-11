---
layout: base
title:  'Statistics of csubj:pass in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 csubj:pass	color:blue
1	När	när	SCONJ	_	_	3	mark	_	_
2	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
3	kom	komma	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	advcl	_	_
4	kontakt	kontakt	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	obl	_	_
5	med	med	ADP	_	_	6	case	_	_
6	honom	han	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nmod	_	_
7	så	så	ADV	_	_	8	discourse	_	_
8	kändes	kännas	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
9	att	att	SCONJ	_	_	11	mark	_	_
10	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	11	nsubj	_	_
11	hittat	hitta	VERB	_	VerbForm=Sup|Voice=Act	8	csubj:pass	_	_
12	den	den	PRON	_	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	11	obj	_	_
13	som	som	PRON	_	PronType=Rel	15	obl	_	_
14	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	15	nsubj	_	_
15	letade	leta	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	12	acl:relcl	_	_
16	efter	efter	ADP	_	_	13	case	_	_
17	.	.	PUNCT	_	_	8	punct	_	_

~~~


