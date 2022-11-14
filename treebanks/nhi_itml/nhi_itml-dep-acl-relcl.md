---
layout: base
title:  'Statistics of acl:relcl in UD_Western_Sierra_Puebla_Nahuatl-ITML'
udver: '2'
---

## Treebank Statistics: UD_Western_Sierra_Puebla_Nahuatl-ITML: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="nhi_itml-dep-acl.html">acl</a></tt>.

16 nodes (0%) are attached to their parents as `acl:relcl`.

16 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="nhi_itml-pos-PRON.html">PRON</a></tt>-<tt><a href="nhi_itml-pos-VERB.html">VERB</a></tt> (12; 75% instances), <tt><a href="nhi_itml-pos-PRON.html">PRON</a></tt>-<tt><a href="nhi_itml-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="nhi_itml-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nhi_itml-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="nhi_itml-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="nhi_itml-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 acl:relcl	color:blue
1	Ohkon	o	ADV	_	_	2	advcl	2:advcl	NormalizedForm=ohkon|NormalizedLemma=o
2	ahsis	ahsi	VERB	_	Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Fut	0	root	0:root	NormalizedForm=ahsis|NormalizedLemma=ahsi
3	se	se	DET	_	_	4	det	4:det	NormalizedForm=se|NormalizedLemma=se
4	ocho	o	NUM	_	Foreign=Yes	2	nsubj	2:nsubj	NormalizedForm=ocho|NormalizedLemma=o
5	y	y	CCONJ	_	Foreign=Yes	6	cc	6:cc	NormalizedForm=y|NormalizedLemma=y
6	media	medio	NOUN	_	Foreign=Yes	4	conj	4:conj	SpaceAfter=No|NormalizedForm=media|NormalizedLemma=medio
7	,	,	PUNCT	_	_	8	punct	8:punct	NormalizedForm=,|NormalizedLemma=,
8	ehko	ehko	VERB	_	Number[subj]=Plur|Person[subj]=3|Subcat=Intr|Tense=Pres	2	parataxis	2:parataxis	NormalizedForm=ehko|NormalizedLemma=ehko
9	n	n	DET	_	_	10	det	10:det	NormalizedForm=n|NormalizedLemma=n
10	tlen	tlenoh	PRON	_	_	8	nsubj	8:nsubj	NormalizedForm=tlen|NormalizedLemma=tlenoh
11	kirepartiroa	repartiroa	VERB	_	Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres	10	acl:relcl	10:acl:relcl	NormalizedForm=kirepartiroa|NormalizedLemma=repartiroa
12	tlaxkal	tlaxkal	NOUN	_	Number=Sing	11	obj	11:obj	SpaceAfter=No|NormalizedForm=tlaxkal|NormalizedLemma=tlaxkal
13	.	.	PUNCT	_	_	8	punct	8:punct	NormalizedForm=.|NormalizedLemma=.

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 23 acl:relcl	color:blue
1	O	o	AUX	_	_	2	aux	2:aux	Orig=Ō|Gloss=PST|Morf=o|NormalizedForm=o|NormalizedLemma=o
2	kichiwkeh	chiwa	VERB	_	Aspect=Perf|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Past	0	root	0:root	Orig=kichı̄wkeh|Gloss=3S-3SG.O-make-PRF.PL.S|NormalizedForm=kichiwkeh|NormalizedLemma=chiwa
3	nochi	nochi	PRON	_	_	5	det	5:det	Orig=nochi|Gloss=all|NormalizedForm=nochi|NormalizedLemma=nochi
4	n	in	DET	_	_	5	det	5:det	Orig=n|Gloss=DEF|NormalizedForm=n|NormalizedLemma=in
5	tlen	tlenoh	PRON	_	_	2	obj	2:obj	Orig=tlēn|Gloss=REL~SUB|NormalizedForm=tlen|NormalizedLemma=tlenoh
6	moniki	moniki	VERB	_	Number[subj]=Sing|Person[subj]=3|Reflex=Yes|Subcat=Tran	5	acl:relcl	5:acl:relcl	Gloss=3S-REFL-want|Orig=moniki,|SpaceAfter=No|NormalizedForm=moniki|NormalizedLemma=moniki
7	,	,	PUNCT	_	_	9	punct	9:punct	Orig=,|Gloss=,|Morf=,|NormalizedForm=,|NormalizedLemma=,
8	n	in	DET	_	_	9	det	9:det	Orig=n|Gloss=DEF|NormalizedForm=n|NormalizedLemma=in
9	tlen	tlenoh	PRON	_	_	5	appos	5:appos	Orig=tlēn|Gloss=REL~SUB|NormalizedForm=tlen|NormalizedLemma=tlenoh
10	ya	ya	ADV	_	_	12	advmod	12:advmod	Orig=yōkitlahtlaneh|Gloss=already=PST-3S-3SG.O-require.APPL.PRF|NormalizedForm=ya|NormalizedLemma=ya
11	o	o	AUX	_	_	12	aux	12:aux	NormalizedForm=o|NormalizedLemma=o
12	kitlahtlaneh	tlahtlania	VERB	_	_	9	acl:relcl	9:acl:relcl	NormalizedForm=kitlahtlaneh|NormalizedLemma=tlahtlania
13	n	in	DET	_	_	14	det	14:det	Orig=n|Gloss=DEF|NormalizedForm=n|NormalizedLemma=in
14	ok	ok	ADV	_	_	12	nsubj	12:nsubj	Orig=ok|Gloss=still|NormalizedForm=ok|NormalizedLemma=ok
15	se	se	DET	_	_	14	fixed	14:fixed	Orig=sē|Gloss=one|NormalizedForm=se|NormalizedLemma=se
16	para	para	SCONJ	_	_	18	mark	18:mark	Orig=parah|Gloss=for|NormalizedForm=para|NormalizedLemma=para
17	amo	amo	ADV	_	Polarity=Neg	18	advmod	18:advmod	Orig=āmo|Gloss=not|NormalizedForm=amo|NormalizedLemma=amo
18	monextis	monextia	VERB	_	Number[subj]=Sing|Person[subj]=3|Reflex=Yes|Subcat=Tran|Tense=Fut	2	advcl	2:advcl	Orig=monēxtı̄s|Gloss=3S-REFL-see-CAUS-FUT|NormalizedForm=monextis|NormalizedLemma=monextia
19	n	in	DET	_	_	20	det	20:det	Orig=n|Gloss=DEF|NormalizedForm=n|NormalizedLemma=in
20	tlen	tlenoh	PRON	_	_	18	nsubj	18:nsubj	Orig=tlēn|Gloss=REL~SUB|NormalizedForm=tlen|NormalizedLemma=tlenoh
21	amo	amo	ADV	_	Polarity=Neg	23	advmod	23:advmod	Orig=āmo|Gloss=not|NormalizedForm=amo|NormalizedLemma=amo
22	kwale	kwali	ADJ	_	_	23	amod	23:amod	Orig=kwale|Gloss=good|NormalizedForm=kwale|NormalizedLemma=kwali
23	tlakatl	tlakatl	NOUN	_	Case=Abs|Number=Sing	20	acl:relcl	20:acl:relcl	Gloss=man|Orig=tlākatl|SpaceAfter=No|NormalizedForm=tlakatl|NormalizedLemma=tlakatl
24	.	.	PUNCT	_	_	2	punct	2:punct	Orig=.|Gloss=.|NormalizedForm=.|NormalizedLemma=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 acl:relcl	color:blue
1	—	—	PUNCT	_	_	7	punct	7:punct	NormalizedForm=—|NormalizedLemma=—
2	¡	¡	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No|NormalizedForm=¡|NormalizedLemma=¡
3	Ah	ah	INTJ	_	_	7	discourse	7:discourse	SpaceAfter=No|NormalizedForm=ah|NormalizedLemma=ah
4	!	!	PUNCT	_	_	3	punct	3:punct	NormalizedForm=!|NormalizedLemma=!
5	¡	¡	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No|NormalizedForm=¡|NormalizedLemma=¡
6	Ya	ya	ADV	_	_	7	advmod	7:advmod	NormalizedForm=Ya|NormalizedLemma=ya
7	inmati	mati	VERB	_	Number[subj]=Sing|Person[subj]=1|Subcat=Tran	0	root	0:root	NormalizedForm=inmati|NormalizedLemma=mati
8	tlenoh	tlenoh	NOUN	_	_	7	obj	7:obj	NormalizedForm=tlenoh|NormalizedLemma=tlenoh
9	inchihuaz	chihua	VERB	_	Number[subj]=Sing|Person[subj]=1|Subcat=Tran|Tense=Fut	8	acl:relcl	8:acl:relcl	SpaceAfter=No|NormalizedForm=inchiwas|NormalizedLemma=chiwa
10	!	!	PUNCT	_	_	7	punct	7:punct	NormalizedForm=!|NormalizedLemma=!

~~~


