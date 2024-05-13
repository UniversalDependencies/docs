---
layout: base
title:  'Statistics of flat:foreign in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="sl_ssj-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="sl_ssj-dep-flat-name.html">flat:name</a></tt>.

784 nodes (0%) are attached to their parents as `flat:foreign`.

784 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.76785714285714.

The following 1 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (784; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat:foreign	color:blue
1	Caplan	Caplan	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	NER=B-per|SpaceAfter=No
2	,	,	PUNCT	Z	_	1	punct	_	NER=I-per
3	R.	R.	X	Y	Abbr=Yes	1	flat:name	_	NER=I-per
4	(	(	PUNCT	Z	_	5	punct	_	NER=O|SpaceAfter=No
5	1996	1996	NUM	Mdc	NumForm=Digit|NumType=Card	1	nummod	_	NER=O|SpaceAfter=No
6	)	)	PUNCT	Z	_	5	punct	_	NER=O|SpaceAfter=No
7	:	:	PUNCT	Z	_	8	punct	_	NER=O
8	Post	post	X	Xf	Foreign=Yes	1	appos	_	NER=B-misc|SpaceAfter=No
9	-	-	PUNCT	Z	_	8	punct	_	NER=I-misc|SpaceAfter=No
10	Mortem	mortem	X	Xf	Foreign=Yes	8	flat:foreign	_	NER=I-misc
11	on	on	X	Xf	Foreign=Yes	8	flat:foreign	_	NER=I-misc
12	UNPROFOR	Unprofor	X	Npmsn	Foreign=Yes	8	flat:foreign	_	NER=I-misc|SpaceAfter=No
13	.	.	PUNCT	Z	_	1	punct	_	NER=O

~~~


