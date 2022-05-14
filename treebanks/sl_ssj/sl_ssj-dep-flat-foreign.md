---
layout: base
title:  'Statistics of flat:foreign in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="sl_ssj-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="sl_ssj-dep-flat-name.html">flat:name</a></tt>.

568 nodes (0%) are attached to their parents as `flat:foreign`.

568 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.53521126760563.

The following 8 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (458; 81% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (70; 12% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (16; 3% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (15; 3% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (5; 1% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


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
12	UNPROFOR	Unprofor	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	8	flat:foreign	_	NER=I-misc|SpaceAfter=No
13	.	.	PUNCT	Z	_	1	punct	_	NER=O

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	London	London	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	NER=B-loc
2	Defence	defence	X	Xf	Foreign=Yes	1	flat:foreign	_	NER=O
3	Studies	studies	X	Xf	Foreign=Yes	1	flat:foreign	_	NER=O
4	33	33	NUM	Mdc	NumForm=Digit|NumType=Card	1	nummod	_	NER=O|SpaceAfter=No
5	.	.	PUNCT	Z	_	1	punct	_	NER=O

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:foreign	color:blue
1	Jadrnico	jadrnica	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	NER=O
2	La	la	X	Xf	Foreign=Yes	1	nmod	_	NER=B-misc
3	Belle	Belle	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	2	flat:foreign	_	NER=I-misc
4	Friponne	Friponne	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	2	flat:foreign	_	NER=I-misc
5	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	NER=O
6	medtem	medtem	ADV	Rgp	Degree=Pos	7	advmod	_	NER=O
7	pripeljali	pripeljati	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	NER=O
8	iz	iz	ADP	Sg	Case=Gen	9	case	_	NER=O
9	New	New	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	7	obl	_	NER=B-loc
10	Yorka	York	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	9	flat:foreign	_	NER=I-loc
11	v	v	ADP	Sa	Case=Acc	12	case	_	NER=O
12	Marseille	Marseille	PROPN	Npmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obl	_	NER=B-loc|SpaceAfter=No
13	.	.	PUNCT	Z	_	7	punct	_	NER=O

~~~


