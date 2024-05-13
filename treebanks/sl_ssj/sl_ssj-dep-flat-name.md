---
layout: base
title:  'Statistics of flat:name in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="sl_ssj-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="sl_ssj-dep-flat-foreign.html">flat:foreign</a></tt>.

1732 nodes (1%) are attached to their parents as `flat:name`.

1732 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14376443418014.

The following 7 pairs of parts of speech are connected with `flat:name`: <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (1555; 90% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (69; 4% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (53; 3% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (47; 3% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:name	color:blue
1	Posebej	posebej	ADV	Rgp	Degree=Pos	5	advmod	_	NER=O
2	kadar	kadar	SCONJ	Cs	_	5	mark	_	NER=O
3	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	5	expl	_	NER=O
4	jih	on	PRON	Pp3mpa--y	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	5	nsubj	_	NER=O
5	nabere	nabrati	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	NER=O
6	veliko	veliko	DET	Rgp	PronType=Ind	5	advmod	_	NER=O|SpaceAfter=No
7	,	,	PUNCT	Z	_	10	punct	_	NER=O
8	tako	tako	CCONJ	Cc	_	10	mark	_	NER=O
9	kot	kot	SCONJ	Cs	_	8	fixed	_	NER=O
10	Janezu	Janez	PROPN	Npmsd	Case=Dat|Gender=Masc|Number=Sing	5	advcl	_	NER=B-per
11	Janši	Janša	PROPN	Npmsd	Case=Dat|Gender=Masc|Number=Sing	10	flat:name	_	NER=I-per|SpaceAfter=No
12	.	.	PUNCT	Z	_	5	punct	_	NER=O

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:name	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	(	(	PUNCT	Z	_	2	punct	_	NER=O|SpaceAfter=No
2	Foto	foto	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	NER=O|SpaceAfter=No
3	:	:	PUNCT	Z	_	4	punct	_	NER=O
4	M.	M.	X	Y	Abbr=Yes	2	appos	_	NER=O
5	B.	B.	X	Y	Abbr=Yes	4	flat:name	_	NER=O
6	-	-	PUNCT	Z	_	4	punct	_	NER=O
7	J.	J.	X	Y	Abbr=Yes	4	flat:name	_	NER=O|SpaceAfter=No
8	)	)	PUNCT	Z	_	2	punct	_	NER=O

~~~


