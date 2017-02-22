

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:name]().

32 nodes (0%) are attached to their parents as `flat:foreign`.

32 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.59375.

The following 2 pairs of parts of speech are connected with `flat:foreign`: [lv-pos/X]()-[lv-pos/X]() (31; 97% instances), [lv-pos/X]()-[lv-pos/PUNCT]() (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	Lampiņa	lampiņa	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	a	a	X	xf	Foreign=Yes	1	acl	_	_
3	la	la	X	xf	Foreign=Yes	2	flat:foreign	_	_
4	art	art	X	xf	Foreign=Yes	2	flat:foreign	_	_
5	deco	deco	X	xf	Foreign=Yes	2	flat:foreign	_	_
6	ar	ar	ADP	spsa	_	8	case	_	_
7	plastmasas	plastmasa	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
8	kupolu	kupols	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
9	.	.	PUNCT	zs	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 flat:foreign	color:blue
1	No	NO	X	xf	Foreign=Yes	0	root	_	_
2	such	such	X	xf	Foreign=Yes	1	flat:foreign	_	_
3	nick	nick	X	xf	Foreign=Yes	1	flat:foreign	_	_
4	/	/	PUNCT	zx	_	1	flat:foreign	_	SpaceAfter=No
5	channel	channel	X	xf	Foreign=Yes	1	flat:foreign	_	SpaceAfter=No
6	.	.	PUNCT	zs	_	1	punct	_	_

~~~


