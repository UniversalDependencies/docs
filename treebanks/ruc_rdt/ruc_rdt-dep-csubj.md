---
layout: base
title:  'Statistics of csubj in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="ruc_rdt-dep-csubj-outer.html">csubj:outer</a></tt>.

12 nodes (0%) are attached to their parents as `csubj`.

8 instances of `csubj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58333333333333.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (6; 50% instances), <tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (3; 25% instances), <tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	Omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	2	case	2:case	Gloss=AUG-18.LOC|MSeg=o-mu
2	nsi	nsi	NOUN	_	NounClass=Bantu9	4	obl	4:obl	Gloss=9.earth|MSeg=nsi
3	eni	ni	DET	_	Deixis=Prox|NounClass=Bantu9|PronType=Dem	2	det	2:det	Gloss=9.PROX|MSeg=eni
4	mulu	li	AUX	COP	NounClass=Bantu18|Person=3	0	root	0:root	Gloss=18S-COP|MSeg=mu-li
5	mu	mu	ADV	LOC	NounClass=Bantu18	4	advmod:loc	4:advmod:loc	Gloss=18.LOC|MSeg=mu
6	okwesimangarana	esimongorana	VERB	_	Referent=Yes|VerbForm=Inf	4	csubj	4:csubj	Gloss=AUG-INF-change-FV|MSeg=o-ku-esimangaran-a
7	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	8	case	8:case	Gloss=AUG-18.LOC|MSeg=o-mu
8	miringo	miringo	NOUN	_	NounClass=Bantu4	6	obl	6:obl|10:nsubj	Gloss=4.way|MSeg=miringo
9	egitaali	li	AUX	REL-COP	NounClass=Bantu4|Person=3|Polarity=Neg|Referent=Yes|Tense=Past	10	cop	10:cop	Gloss=S.REL-4S-NEG-PST-COP|MSeg=e-gi-ta-a-li
10	gimwei	mwe	NUM	_	NounClass=Bantu4	8	acl:relcl	8:acl:relcl	Gloss=4-one|MSeg=gi-mwei|SpacesAfter=\n
11	baitu	baitu	CCONJ	_	_	14	cc	14:cc	Gloss=but|MSeg=baitu
12	buli	buli	DET	_	PronType=Tot	13	det	13:det	Gloss=every|MSeg=buli
13	muntu	muntu	NOUN	_	NounClass=Bantu1	14	nsubj	14:nsubj	Gloss=1.person|MSeg=muntu
14	asaniire	saana	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu1|Person=3|Tense=Pres|VerbForm=Fin	4	conj	0:root|4:conj	Gloss=1S-be_worthy_of:PFV|MSeg=a-saniire
15	asome	soma	VERB	_	Mood=Sub|NounClass=Bantu1|Person=3|VerbForm=Fin	14	xcomp	14:xcomp	Gloss=1S-study-SBJV|MSeg=a-som-e|SpacesAfter=\n
16	era	era	CCONJ	_	_	17	cc	17:cc	Gloss=and|MSeg=era
17	amanye	manya	VERB	_	Mood=Sub|NounClass=Bantu1|Person=3|VerbForm=Fin	15	conj	14:xcomp|15:conj	Gloss=1S-know-SBJV|MSeg=a-many-e
18	ebyafaayo	kyafaayo	NOUN	_	NounClass=Bantu8|Referent=Yes	17	obj	17:obj	Gloss=AUG-8.history|MSeg=e-byafaayo
19	bya	a	PART	GEN	NounClass=Bantu8	20	case	20:case	Gloss=8.GEN|MSeg=bya
20	lyanga	lyanga	NOUN	_	NounClass=Bantu6	18	nmod	18:nmod	Gloss=6.tribe|MSeg=lyanga
21	lyamwe	amwe	PRON	ASSOC	NounClass[psed]=Bantu5|NounClass[psor]=Bantu1|Person[psed]=3|Person[psor]=3|Poss=Yes|PronType=Prs	20	nmod:poss	20:nmod:poss	Gloss=5-1POSS|MSeg=li-amwe|SpaceAfter=No
22	.	.	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


