---
layout: base
title:  'Statistics of csubj in UD_Highland_Puebla_Nahuatl-ITML'
udver: '2'
---

## Treebank Statistics: UD_Highland_Puebla_Nahuatl-ITML: Relations: `csubj`

This relation is universal.

20 nodes (0%) are attached to their parents as `csubj`.

19 instances of `csubj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.45.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="azz_itml-pos-VERB.html">VERB</a></tt>-<tt><a href="azz_itml-pos-VERB.html">VERB</a></tt> (8; 40% instances), <tt><a href="azz_itml-pos-ADV.html">ADV</a></tt>-<tt><a href="azz_itml-pos-VERB.html">VERB</a></tt> (5; 25% instances), <tt><a href="azz_itml-pos-PRON.html">PRON</a></tt>-<tt><a href="azz_itml-pos-VERB.html">VERB</a></tt> (4; 20% instances), <tt><a href="azz_itml-pos-ADJ.html">ADJ</a></tt>-<tt><a href="azz_itml-pos-VERB.html">VERB</a></tt> (3; 15% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Mota	ita	VERB	_	Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Pres	0	root	0:root	NormalizedForm=Mota
2	kisati	sati	VERB	_	Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres	1	csubj	1:csubj	NormalizedForm=kisati
3	in	in	DET	_	_	4	det	4:det	NormalizedForm=in
4	tonaltsin	tonal	NOUN	_	Degree=Dim	2	nsubj	2:nsubj	NormalizedForm=tonaltsin|SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	2:punct	NormalizedForm=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	Ne	ne	INTJ	_	_	3	discourse	3:discourse	NormalizedForm=Ne|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	NormalizedForm=,
3	xtechtapowi	tapohui	VERB	_	Mood=Imp|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=1|Person[subj]=2|Subcat=Tran|Tense=Pres	0	root	0:root	NormalizedForm=xtechtapowi
4	keniw	keni	ADV	_	_	3	ccomp	3:ccomp	NormalizedForm=keniw
5	n'	in	SCONJ	_	_	6	mark	6:mark	NormalizedForm=n'
6	kichihchiwah	chijchihua	VERB	_	Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres	4	csubj	4:csubj	NormalizedForm=kichihchiwah
7	nen	nen	PRON	_	_	6	discourse	6:discourse	NormalizedForm=nen
8	tikihtowa	ijtohua	VERB	_	Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Subcat=Tran|Tense=Pres	7	acl:relcl	7:acl:relcl	NormalizedForm=tikihtowa
9	globo	globo	NOUN	_	Gender=Masc|Number=Sing	8	obj	8:obj	NormalizedForm=globo|SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	3:punct	NormalizedForm=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	Pos	pos	ADV	_	_	2	advmod	2:advmod	NormalizedForm=Pos
2	yehwa	yehua	PRON	_	Number=Sing|Person=3|PronType=Prs	0	root	0:root	NormalizedForm=yehwa
3	ekintsin	ekintsin	ADV	_	_	5	advmod	5:advmod	NormalizedForm=ekintsin
4	nikan	nikan	ADV	_	_	5	advmod	5:advmod	NormalizedForm=nikan
5	timonohnotstokeh	monojnotsa	VERB	_	Aspect=Prog|Number[subj]=Plur|Person[subj]=1|Subcat=Intr|Tense=Pres	2	csubj	2:csubj	NormalizedForm=timonohnotstokeh|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	7:punct	NormalizedForm=,
7	compadrito	compadrito	NOUN	_	Gender=Masc|Number=Sing	2	vocative	2:vocative	NormalizedForm=kompadrito|SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	NormalizedForm=.

~~~


