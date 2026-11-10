---
layout: base
title:  'Statistics of csubj in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="ruc_rdt-dep-csubj-outer.html">csubj:outer</a></tt>.

20 nodes (0%) are attached to their parents as `csubj`.

12 instances of `csubj` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (6; 30% instances), <tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (4; 20% instances), <tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (3; 15% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (3; 15% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (2; 10% instances), <tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj	color:blue
1	Naye	naye	CCONJ	_	_	5	cc	5:cc	_
2	abataabbaanga	bba	VERB	COP	Aspect=Hab|Mood=Ind|NounClass=Bantu2|Person=3|Polarity=Neg|Referent=Yes|Tense=Past|VerbForm=Fin	5	csubj	5:csubj	_
3	na	na	ADP	COM	_	4	case	4:case	_
4	kifo	kifo	NOUN	_	NounClass=Bantu7	2	obl	2:obl	_
5	nibayaba	aba	VERB	_	Mood=Ind|NounClass=Bantu2|Person=3|Tense=Nar|VerbForm=Fin	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 csubj	color:blue
1	Okuwandiika	wandiika	VERB	_	Referent=Yes|VerbForm=Inf	6	csubj	6:csubj	Gloss=AUG-INF-write-FV|MSeg=o-ku-wandiik-a
2	ebyafaayo	kyafaayo	NOUN	_	NounClass=Bantu8|Referent=Yes	1	obj	1:obj	Gloss=AUG-8.fact|MSeg=e-byafaayo
3	bini	ni	DET	_	Deixis=Prox|NounClass=Bantu8|PronType=Dem	2	det	2:det	Gloss=8.PROX|MSeg=bini
4	timulu	li	AUX	COP	Number=Plur|Person=2|Polarity=Neg|Tense=Pres	6	cop	6:cop	Gloss=NEG-2plS-COP|MSeg=ti-mu-li
5	mu	mu	ADV	LOC	NounClass=Bantu18	6	advmod	6:advmod	Gloss=18.LOC|MSeg=mu
6	gwangu	angu	ADJ	_	NounClass=Bantu3	0	root	0:root	Gloss=3-easy|MSeg=gu-angu|SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	n'	na	CCONJ	COM	_	5	cc	5:cc	Gloss=and|MSeg=na
2	olwa	olwa	ADP	_	_	3	case	3:case	Gloss=because_of|MSeg=olwa
3	nsonga	nsonga	NOUN	_	NounClass=Bantu9	5	obl	5:obl	Gloss=9.reason|MSeg=nsonga
4	eyo	o	DET	_	Deixis=Med|NounClass=Bantu9|PronType=Dem	3	det	3:det	Gloss=9.MED|MSeg=eyo
5	tiwalo	li	AUX	COP	NounClass=Bantu16|Person=3|Polarity=Neg|Tense=Pres	0	root	0:root	Gloss=NEG-16S-COP|MSeg=ti-wa-li
6	wo	wo	ADV	LOC	NounClass=Bantu16	5	advmod:loc	5:advmod:loc	Gloss=16.LOC|MSeg=wo
7	kikwetagisya	etagisya	VERB	_	Aspect=Prog|Mood=Ind|NounClass=Bantu7|Person=3|Tense=Pres|VerbForm=Fin	5	csubj	5:csubj	Gloss=7S-PROG-need-FV|MSeg=ki-ku-etagisy-a
8	kutaawo	taawoa	VERB	_	VerbForm=Inf	7	xcomp	7:xcomp	Gloss=INF-put_in_place|MSeg=ku-taawo
9	refarendamu	refarendamu	NOUN	_	NounClass=Bantu9	8	obj	8:obj	Gloss=9.refarendamu|MSeg=refarendamu
10	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	11	case	11:case	Gloss=AUG-18.LOC|MSeg=o-mu
11	Bunyala	Bunyala	PROPN	_	NounClass=Bantu14	8	obl	8:obl	Gloss=14.Bunyala|MSeg=Bunyala
12	(	(	PUNCT	_	_	13	punct	13:punct	SpaceAfter=No
13	Bugerere	Bugerere	PROPN	_	NounClass=Bantu14	11	appos	11:appos	Gloss=14.Bugerere|MSeg=Bugerere|SpaceAfter=No
14	)	)	PUNCT	_	_	5	punct	5:punct	SpaceAfter=No
15	.	.	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


