---
layout: base
title:  'Statistics of iobj in UD_Khoekhoe-KDT'
udver: '2'
---

## Treebank Statistics: UD_Khoekhoe-KDT: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="naq_kdt-dep-iobj-appl.html">iobj:appl</a></tt>.

64 nodes (0%) are attached to their parents as `iobj`.

43 instances of `iobj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.671875.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-PRON.html">PRON</a></tt> (48; 75% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt> (12; 19% instances), <tt><a href="naq_kdt-pos-PRON.html">PRON</a></tt>-<tt><a href="naq_kdt-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	O	o	ADV	_	_	3	advmod	3:advmod	_
2	ǁnâi	ǁnâi	ADV	_	_	3	advmod	3:advmod	_
3	mîba	mî	VERB	_	Voice=Appl	0	root	0:root	_
4	te	_	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	iobj	3:iobj	_
5	re	re	AUX	PDIR	Mood=Imp	3	aux	3:aux	_
6	tare-i	tare	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Int	8	obj	8:obj	_
7	go	go	AUX	_	Tense=RecPast	8	aux	8:aux	_
8	ī	ī	VERB	_	Voice=Act	3	xcomp	3:xcomp	_
9	sa	s	SCONJ	NMLZ	Case=Acc	8	mark	8:mark	_
10	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 iobj	color:blue
1	i	_	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	16	expl:impers	16:expl:impers	_
2	ge	ge	AUX	DECL	Mood=Ind	16	aux	16:aux	_
3	nēsisa	nēsisa	ADV	_	_	16	advmod	16:advmod	_
4	nē	nē	DET	PROX	Deixis=Prox|PronType=Dem	5	det	5:det	_
5	mari-i	mari	NOUN	_	Case=Nom|Gender=Neut|Number=Sing|Person=3	16	nsubj:pass	10:obj|16:nsubj:pass	_
6	nē	nē	ADV	PROX	Deixis=Prox|PronType=Dem	10	advmod	10:advmod	_
7	ts	_	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=2|PronType=Prs	10	nsubj	10:nsubj	_
8	go	go	AUX	_	Tense=RecPast	10	aux	10:aux	_
9	ǀgôaba	ǀgôa	NOUN	_	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	iobj	10:iobj	_
10	mā	mā	VERB	_	Voice=Act	5	acl:relcl	5:acl:relcl	_
11	-e	_	PRON	REL	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Rel	10	obj	5:ref|10:obj	_
12	naupa	naupa	ADV	_	Deixis=Prox|PronType=Dem	16	advmod	16:advmod	_
13	ra	ra	AUX	IPFV	Aspect=Imp	16	aux	16:aux	_
14	sī	sī	VERB	_	Voice=Act	16	compound:svc	16:compound:svc	_
15	geniet	geniet	VERB	_	Voice=Act	16	xcomp	16:xcomp	OrigLang=af
16	ūhe	ū	VERB	_	Voice=Pass	0	root	0:root	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 iobj	color:blue
1	Kaikhoen	kaikhoe	NOUN	_	Case=Nom|Gender=Neut|Number=Plur|Person=3	8	nsubj	8:nsubj	_
2	ge	ge	AUX	DECL	Mood=Ind	8	aux	8:aux	_
3	ǃhūb	ǃhū	NOUN	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nmod:poss	5:nmod:poss	_
4	di	di	ADP	5:POSS	_	3	case	3:case	_
5	aoseni	aoseni	ADV	_	_	9	iobj	9:iobj	_
6	ti	ti	PART	QUOT	_	5	case	5:case	_
7	ra	ra	AUX	IPFV	Aspect=Imp	8	aux	8:aux	_
8	mî	mî	VERB	_	Voice=Act	0	root	0:root	_
9	în	_	PRON	_	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs|Typo=Yes	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	SpacesAfter=\n

~~~


