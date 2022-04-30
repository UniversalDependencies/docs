---
layout: base
title:  'Statistics of flat:foreign in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="jv_csui-dep-flat-name.html">flat:name</a></tt>.

20 nodes (1%) are attached to their parents as `flat:foreign`.

20 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (11; 55% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (7; 35% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (2; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	Ngudhunaké	udhun	VERB	_	Mood=Ind|Polite=Infm|Voice=Act	0	root	_	Level=Ngoko
2	tekanan	tekan	X	_	Foreign=Yes	1	obl	_	_
3	darah	darah	X	_	Foreign=Yes	2	flat:foreign	_	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:foreign	color:blue
1	Iridium	Iridium	PROPN	_	_	4	nsubj	_	_
2	33	33	NUM	_	NumType=Card	1	nummod	_	_
3	iku	yaiku	AUX	_	Polite=Infm	4	cop	_	Level=Ngoko
4	satelit	satelit	NOUN	_	Number=Sing	0	root	_	_
5	komunikasi	komunikasi	NOUN	_	Number=Sing	4	nmod	_	_
6	Iridium	Iridium	PROPN	_	_	4	nmod	_	_
7	Amérika	Amérika	PROPN	_	_	4	nmod	_	_
8	Sarékat	Sarékat	PROPN	_	_	7	flat:foreign	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:foreign	color:blue
1	EAT	EAT	PROPN	_	_	2	nsubj	_	_
2	ngambakake	ngambak	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
3	kegiyatan	kegiyatan	NOUN	_	Number=Sing	2	obj	_	_
4	é	é	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	3	nmod:poss	_	Level=Ngoko
5	kanti	kanti	SCONJ	_	Polite=Infm	6	mark	_	Level=Ngoko
6	ngleboni	ngleboni	VERB	_	Mood=Ind|Voice=Act	2	advcl	_	_
7	tataran	tataran	NOUN	_	Number=Sing	6	obj	_	_
8	kontrak	kontrak	X	_	Foreign=Yes	7	flat:foreign	_	_
9	karo	karo	ADP	_	Polite=Infm	10	case	_	Level=Ngoko
10	DHL	DHL	PROPN	_	_	7	nmod	_	_
11	Worldwide	Worldwide	PROPN	_	_	10	flat:name	_	_
12	Express	Express	PROPN	_	_	10	flat:name	_	_
13	taun	taun	NOUN	_	Number=Sing	6	obl:tmod	_	_
14	1985	1985	NUM	_	NumType=Card	13	nummod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	6	punct	_	_

~~~


