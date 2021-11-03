---
layout: base
title:  'Statistics of flat:name in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="jv_csui-dep-flat-foreign.html">flat:foreign</a></tt>.

113 nodes (5%) are attached to their parents as `flat:name`.

113 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30973451327434.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (112; 99% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Présidhèn	Présidhèn	PROPN	_	_	0	root	_	_
2	Indonésia	Indonésia	PROPN	_	_	1	flat:name	_	_
3	(	(	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	1974	1974	NUM	_	NumType=Card	1	nmod:tmod	_	SpaceAfter=No
5	)	)	PUNCT	_	_	4	punct	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 flat:name	color:blue
1	Wonten	Wonten	VERB	_	Mood=Ind|Polite=Form|Voice=Act	5	advcl	_	Level=Krama
2	ing	ing	ADP	_	Polite=Infm	3	case	_	Level=Ngoko
3	ESO	ESO	PROPN	_	_	1	obl	_	_
4	piyambakipun	piyambakipun	PRON	_	Number=Sing|Person=3|Polite=Form|PronType=Prs	5	nsubj	_	Level=Krama
5	ningali	tingal	VERB	_	Mood=Ind|Polite=Form|Voice=Act	0	root	_	Level=Krama
6	perkembangan	perkembangan	NOUN	_	Number=Sing	5	obj	_	_
7	lan	lan	CCONJ	_	Polite=Infm	8	cc	_	Level=Ngoko
8	pembangunan	bangun	NOUN	_	Number=Sing	6	conj	_	_
9	Very	Very	PROPN	_	_	8	nmod	_	_
10	Large	Large	PROPN	_	_	9	flat:name	_	_
11	Telescope	Telescope	PROPN	_	_	8	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


