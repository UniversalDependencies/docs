---
layout: base
title:  'Statistics of flat:foreign in UD_Latvian'
udver: '2'
---

## Treebank Statistics: UD_Latvian: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="lv-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="lv-dep-flat-name.html">flat:name</a></tt>.

58 nodes (0%) are attached to their parents as `flat:foreign`.

58 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.3448275862069.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="lv-pos-X.html">X</a></tt>-<tt><a href="lv-pos-X.html">X</a></tt> (54; 93% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-X.html">X</a></tt> (3; 5% instances), <tt><a href="lv-pos-X.html">X</a></tt>-<tt><a href="lv-pos-PUNCT.html">PUNCT</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:foreign	color:blue
1	Brauc	braukt	VERB	vmnipt130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	ar	ar	ADP	sppd	_	5	case	5:case	_
3	gaiši	gaiši	ADV	rpm	Degree=Pos	4	advmod	4:advmod	_
4	zilu	zils	ADJ	afmsanp	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	Ford	Ford	X	xf	Foreign=Yes	1	iobj	1:iobj	_
6	Sierra	Sierra	X	xf	Foreign=Yes	5	flat:foreign	5:flat:foreign	SpaceAfter=No
7	,	,	PUNCT	zc	_	12	punct	12:punct	_
8	kurai	kura	PRON	pr0fsdn	Case=Dat|Gender=Fem|Number=Sing|PronType=Rel	12	obl	12:obl:dat	_
9	katrs	katrs	DET	pg0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	10	det	10:det	_
10	spārns	spārns	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	12:nsubj	_
11	citā	cita	DET	pi0fsln	Case=Loc|Gender=Fem|Number=Sing|PronType=Ind	12	det	12:det	_
12	krāsā	krāsa	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	5	acl	5:acl	SpaceAfter=No
13	.	.	PUNCT	zs	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	Lampiņa	lampiņa	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	0	root	1.1:nsubj	_
1.1	ir	būt	VERB	vmnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	_	_	0:root	_
2	a	a	X	xf	Foreign=Yes	1	acl	1:acl	_
3	la	la	X	xf	Foreign=Yes	2	flat:foreign	2:flat:foreign	_
4	art	art	X	xf	Foreign=Yes	2	flat:foreign	2:flat:foreign	_
5	deco	deco	X	xf	Foreign=Yes	2	flat:foreign	2:flat:foreign	_
6	ar	ar	ADP	spsa	_	8	case	8:case	_
7	plastmasas	plastmasa	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	8	nmod	8:nmod:gen	_
8	kupolu	kupols	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	1	nmod	1:nmod:acc	SpaceAfter=No
9	.	.	PUNCT	zs	_	1	punct	1.1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 flat:foreign	color:blue
1	No	NO	X	xf	Foreign=Yes	0	root	0:root	_
2	such	such	X	xf	Foreign=Yes	1	flat:foreign	1:flat:foreign	_
3	nick	nick	X	xf	Foreign=Yes	1	flat:foreign	1:flat:foreign	_
4	/	/	PUNCT	zx	_	1	flat:foreign	1:flat:foreign	SpaceAfter=No
5	channel	channel	X	xf	Foreign=Yes	1	flat:foreign	1:flat:foreign	SpaceAfter=No
6	.	.	PUNCT	zs	_	1	punct	1:punct	_

~~~


