---
layout: base
title:  'Statistics of compound in UD_Highland_Puebla_Nahuatl-ITML'
udver: '2'
---

## Treebank Statistics: UD_Highland_Puebla_Nahuatl-ITML: Relations: `compound`

This relation is universal.

11 nodes (0%) are attached to their parents as `compound`.

11 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.18181818181818.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="azz_itml-pos-NOUN.html">NOUN</a></tt>-<tt><a href="azz_itml-pos-NOUN.html">NOUN</a></tt> (6; 55% instances), <tt><a href="azz_itml-pos-X.html">X</a></tt>-<tt><a href="azz_itml-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="azz_itml-pos-NOUN.html">NOUN</a></tt>-<tt><a href="azz_itml-pos-X.html">X</a></tt> (1; 9% instances), <tt><a href="azz_itml-pos-NUM.html">NUM</a></tt>-<tt><a href="azz_itml-pos-CCONJ.html">CCONJ</a></tt> (1; 9% instances), <tt><a href="azz_itml-pos-NUM.html">NUM</a></tt>-<tt><a href="azz_itml-pos-NUM.html">NUM</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	MIMIENTAJ	mimientaj	NOUN	_	Case=Abs	0	root	0:root	NormalizedForm=MIMIENTAH
2	KUOUIT	kohuit	NOUN	_	Case=Abs	1	compound	1:compound	NormalizedForm=KWOWIT

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	KUOUJ	kuouj	X	_	_	0	root	0:root	NormalizedForm=KUOUJ
2	KAMOJ	kamoj	NOUN	_	Case=Abs	1	compound	1:compound	NormalizedForm=KAMOH
3	KUOUIT	kohuit	NOUN	_	Case=Abs	1	compound	1:compound	NormalizedForm=KWOWIT
4	oso	oso	CCONJ	_	_	5	cc	5:cc	NormalizedForm=oso
5	ISTAKKUOUJKAMOJKUOUIT	istakkuoujkamojkuohuit	NOUN	_	Case=Abs	1	conj	1:conj	NormalizedForm=ISTAKKWOUKAMOHKWOWIT

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 compound	color:blue
1	Itech	tech	NOUN	_	NounType=Relat|Number[psor]=Sing|Person[psor]=3	4	obl	4:obl	NormalizedForm=Itech
2	kaltapajtiloyanimej	kaltapajtiloyan	NOUN	_	Number=Plur	1	nmod	1:nmod	NormalizedForm=kaltapahtiloyanimeh
3	semi	semi	ADV	_	_	4	advmod	4:advmod	NormalizedForm=semi
4	motekitiltiya	tekitiltia	VERB	_	Number[subj]=Sing|Person[subj]=3|Subcat=Tran|Tense=Pres	0	root	0:root	NormalizedForm=motekitiltiya|Reflexive[obj]=Yes
5	nejin	nejin	DET	_	_	6	det	6:det	NormalizedForm=nehin
6	tauil	tahuil	NOUN	_	Case=Abs	4	nsubj	4:nsubj	NormalizedForm=tawil
7	teyin	tein	PRON	_	_	11	obj	11:obj	NormalizedForm=teyin
8	amo	amo	ADV	_	_	11	advmod	11:advmod	NormalizedForm=amo
9	ueli	hueli	AUX	_	_	11	aux	11:aux	NormalizedForm=weli
10	se	se	PRON	_	_	11	nsubj	11:nsubj	NormalizedForm=se
11	kita	ita	VERB	_	Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres	6	acl:relcl	6:acl:relcl	NormalizedForm=kita|SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	15:punct	NormalizedForm=,
13	kemej	kemej	ADV	_	_	15	dep	15:dep	NormalizedForm=kemeh
14	in	in	DET	_	_	15	det	15:det	NormalizedForm=in
15	rayos	rayo	NOUN	_	Gender=Masc|Number=Plur	6	nmod	6:nmod	NormalizedForm=rayos
16	X	X	X	_	_	15	compound	15:compound	NormalizedForm=X
17	teyin	tein	PRON	_	_	18	nmod	18:nmod	NormalizedForm=teyin
18	ika	ka	NOUN	_	NounType=Relat|Number[psor]=Sing|Person[psor]=3	19	obl	19:obl	NormalizedForm=ika
19	kikixtiliyaj	kixtilia	VERB	_	Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres	15	acl:relcl	15:acl:relcl	NormalizedForm=kikixtiliyah|Number[iobj]=Sing|Person[iobj]=3
20	ixtakopimej	ixtakopin	NOUN	_	Number=Plur	19	obj	19:obj	NormalizedForm=ixtakopimeh
21	in	in	DET	_	_	22	det	22:det	NormalizedForm=in
22	tojomiuan	omit	NOUN	_	Number=Plur|Number[psor]=Plur|Person[psor]=1	19	iobj	19:iobj	NormalizedForm=tohomiwan|SpaceAfter=No
23	.	.	PUNCT	_	_	19	punct	19:punct	NormalizedForm=.

~~~


