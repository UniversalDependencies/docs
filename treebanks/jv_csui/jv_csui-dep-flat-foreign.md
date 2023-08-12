---
layout: base
title:  'Statistics of flat:foreign in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="jv_csui-dep-flat-name.html">flat:name</a></tt>.

24 nodes (0%) are attached to their parents as `flat:foreign`.

24 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (15; 63% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (7; 29% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	Ngudhunake	_	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
2	tekanan	_	X	_	Foreign=Yes	1	obl	_	_
3	darah	_	X	_	Foreign=Yes	2	flat:foreign	_	SpaceAfter=No
4	.	_	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:foreign	color:blue
1	Iridium	_	PROPN	_	_	4	nsubj	_	_
2	33	_	NUM	_	NumType=Card	1	nummod	_	_
3	iku	_	DET	_	Polite=Infm|PronType=Dem	1	det	_	_
4	satelit	_	NOUN	_	Number=Sing	0	root	_	_
5	komunikasi	_	NOUN	_	Number=Sing	4	nmod	_	_
6	Iridium	_	PROPN	_	_	4	nmod	_	_
7	Amerika	_	PROPN	_	_	4	nmod	_	_
8	Sarekat	_	PROPN	_	_	7	flat:foreign	_	SpaceAfter=No
9	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:foreign	color:blue
1	EAT	_	PROPN	_	_	2	nsubj	_	_
2	ngambakake	_	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
3	kegiyatan	_	NOUN	_	Number=Sing	2	obj	_	_
4	e	_	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	3	nmod:poss	_	_
5	kanthi	_	SCONJ	_	Polite=Infm	6	mark	_	_
6	ngleboni	_	VERB	_	Mood=Ind|Voice=Act	2	advcl	_	_
7	tataran	_	NOUN	_	Number=Sing	6	obj	_	_
8	kontrak	_	X	_	Foreign=Yes	7	flat:foreign	_	_
9	karo	_	ADP	_	Polite=Infm	10	case	_	_
10	DHL	_	PROPN	_	_	7	nmod	_	_
11	Worldwide	_	PROPN	_	_	10	flat:name	_	_
12	Express	_	PROPN	_	_	10	flat:name	_	_
13	taun	_	NOUN	_	Number=Sing	6	obl:tmod	_	_
14	1985	_	NUM	_	NumType=Card	13	nummod	_	SpaceAfter=No
15	.	_	PUNCT	_	_	6	punct	_	_

~~~


