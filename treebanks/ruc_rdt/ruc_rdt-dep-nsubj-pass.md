---
layout: base
title:  'Statistics of nsubj:pass in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ruc_rdt-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ruc_rdt-dep-nsubj-outer.html">nsubj:outer</a></tt>.

6 nodes (0%) are attached to their parents as `nsubj:pass`.

6 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (3; 50% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (2; 33% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Endagaano	endagaano	NOUN	_	NounClass=Bantu9	3	nsubj:pass	3:nsubj:pass	Gloss=9.agreement|MSeg=endagaano
2	eyo	o	DET	_	Deixis=Med|NounClass=Bantu9|PronType=Dem	1	det	1:det	Gloss=9.MED|MSeg=eyo
3	yakoleibwe	kola	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu1|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	Gloss=1S-PST-do-PASS:PFV|MSeg=a-a-kol-eibwe
4	e	e	ADP	LOC	NounClass=Bantu23	5	case	5:case	Gloss=23.LOC|MSeg=e
5	Gavumenti	gavumenti	NOUN	_	NounClass=Bantu9	3	obl:agent	3:obl:agent	Gloss=9.government|MSeg=gavumenti
6	ya	a	PART	GEN	NounClass=Bantu9	7	case	7:case	Gloss=9.GEN|MSeg=ya
7	Bungereza	Bungereza	PROPN	_	NounClass=Bantu14	5	nmod	5:nmod	Gloss=14.Britain|MSeg=Bungereza
8	(	(	PUNCT	_	_	9	punct	9:punct	SpaceAfter=No
9	Britain	Britain	PROPN	_	_	7	appos	7:appos	Gloss=14.Britain|MSeg=Britain|SpaceAfter=No
10	)	)	PUNCT	_	_	9	punct	9:punct	_
11	ne	na	CCONJ	COM	_	13	cc	13:cc	Gloss=and|MSeg=na
12	ya	a	PART	GEN	NounClass=Bantu9|Referent=Yes	13	case	13:case	Gloss=AUG-9.GEN|MSeg=e-ya
13	Buganda	Buganda	PROPN	_	NounClass=Bantu14	7	conj	5:nmod|7:conj	Gloss=14.Buganda|MSeg=Buganda|SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:pass	color:blue
1	Aba	a	PART	GEN	NounClass=Bantu2|Referent=Yes	2	case	2:case	Gloss=2.GEN|MSeg=ba
2	Spain	Spain	PROPN	_	NounClass=Bantu9	8	nsubj:pass	5:nsubj|8:nsubj:pass	Gloss=9.Spain|MSeg=Spain
3	abaali	li	AUX	REL-COP	NounClass=Bantu2|Person=3|Referent=Yes|Tense=Past	5	cop	5:cop	Gloss=S.REL-2S-PST-COP|MSeg=a-ba-a-li
4	na	na	ADP	COM	_	5	case	5:case	Gloss=COM|MSeg=na
5	ye	ye	PRON	_	NounClass=Bantu1|Person=3|PronType=Prs	2	acl:relcl	2:acl:relcl	Gloss=1|MSeg=ye
6	oku	ku	ADP	LOC	NounClass=Bantu17|Referent=Yes	7	case	7:case	Gloss=AUG-17.LOC|MSeg=o-ku
7	meeza	meeza	NOUN	_	NounClass=Bantu9	5	nmod	5:nmod	Gloss=9.table|MSeg=meeza|SpacesAfter=\n
8	balemeerwe	lema	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu2|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	Gloss=2S-fail:PASS:PFV|MSeg=ba-lemeerwe
9	okwemeerya	emeera	VERB	_	Referent=Yes|VerbForm=Inf|Voice=Cau	8	xcomp	8:xcomp	Gloss=AUG-INF-stand-CAUS-FV|MSeg=o-ku-emeer-y-a
10	eiwuli	iwuli	NOUN	_	NounClass=Bantu5|Referent=Yes	9	obj:caus	9:obj:caus	Gloss=AUG-5.egg|MSeg=e-iwuli|SpaceAfter=No
11	.	.	PUNCT	_	_	8	punct	8:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Kini	ni	PRON	_	Deixis=Prox|NounClass=Bantu7|Person=3|PronType=Dem	2	nsubj:pass	2:nsubj:pass	Gloss=7.PROX|MSeg=kini
2	kyakakasiibwe	kakasa	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu7|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	Gloss=7S-PST-to_prove-PASS:PFV|MSeg=ki-a-kakas-iibwe
3	Elphas	Elphas	PROPN	_	NounClass=Bantu1	2	obl:agent	2:obl:agent|10:nsubj	Gloss=1.Elphas|MSeg=Elphas
4	Mani	Mani	PROPN	_	NounClass=Bantu1	3	flat:name	3:flat:name	Gloss=1.Mani|MSeg=Mani|SpacesAfter=\n
5	omwei	mwe	NUM	_	NumForm=Word|NumType=Card|Referent=Yes	3	appos	3:appos	Gloss=AUG-one|MSeg=o-mwei
6	oku	ku	ADP	LOC	NounClass=Bantu17|Referent=Yes	7	case	7:case	Gloss=AUG-17.LOC|MSeg=o-ku
7	Banyala	Munyala	PROPN	_	NounClass=Bantu2	5	nmod	5:nmod	Gloss=2.Banyala|MSeg=Banyala
8	aba	a	PART	GEN	NounClass=Bantu2|Referent=Yes	9	case	9:case	Gloss=AUG-2.GEN|MSeg=a-ba
9	Kenya	Kenya	PROPN	_	NounClass=Bantu9	7	nmod	7:nmod	Gloss=9.Kenya|MSeg=Kenya
10	eyakobere	koba	VERB	REL	Aspect=Perf|Mood=Ind|NounClass=Bantu1|Person=3|Referent=Yes|Tense=Past|VerbForm=Fin	3	acl:relcl	3:acl:relcl	Gloss=S.REL-1S-PST-say:PFV|MSeg=e-a-a-kobere|SpacesAfter=\n
11	nti	nti	SCONJ	QUOT	_	14	mark	14:mark	Gloss=QUOT|MSeg=nti
12	abazeiza	zeiza	NOUN	_	NounClass=Bantu2|Referent=Yes	14	nsubj	14:nsubj	Gloss=AUG-2.ancestor|MSeg=a-bazeiza
13	baamwe	amwe	PRON	ASSOC	NounClass[psed]=Bantu2|NounClass[psor]=Bantu1|Person[psed]=3|Person[psor]=3|Poss=Yes|PronType=Prs	12	nmod:poss	12:nmod:poss	Gloss=2-1POSS|MSeg=ba-amwe
14	bazwire	zwa	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu2|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	10:ccomp	Gloss=2S-come_from-PFV|MSeg=ba-zw-ire
15	Ibbaale	Ibbaale	PROPN	_	NounClass=Bantu9	14	obl	14:obl	Gloss=9.Ibbaale|MSeg=Ibbaale|SpacesAfter=\n
16	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	17	case	17:case	Gloss=AUG-18.LOC|MSeg=o-mu
17	1840	1840	NUM	_	NumForm=Digit|NumType=Card	14	obl	14:obl	Gloss=1840|MSeg=1840
18	olwa	olwa	ADP	_	_	19	case	19:case	Gloss=because_of|MSeg=olwa
19	bumbweene	mbwene	NOUN	_	NounClass=Bantu14	14	obl	14:obl|23:nsubj	Gloss=14.dog|MSeg=bumbweene
20	(	(	PUNCT	_	_	21	punct	21:punct	SpaceAfter=No
21	mbwa	mbwa	NOUN	_	NounClass=Bantu1	19	appos	19:appos	Gloss=1.dog|MSeg=mbwa|SpaceAfter=No
22	)	)	PUNCT	_	_	21	punct	21:punct	SpacesAfter=\n
23	obwanenanga	nena	VERB	REL	Aspect=Hab|Mood=Ind|NounClass=Bantu14|Person=3|Referent=Yes|Tense=Past|VerbForm=Fin	19	acl:relcl	19:acl:relcl	Gloss=S.REL-14S-PST-bite-FV-HAB|MSeg=o-bu-a-nen-a-nga
24	abantu	muntu	NOUN	_	NounClass=Bantu2|Referent=Yes	23	obj	23:obj	Gloss=AUG-2.person|MSeg=a-bantu
25	nti	nti	SCONJ	QUOT	_	28	mark	28:mark	Gloss=QUOT|MSeg=nti
26	era	era	CCONJ	_	_	28	cc	28:cc	Gloss=and|MSeg=era
27	abamwei	mwe	NUM	_	NounClass=Bantu2|NumForm=Word|NumType=Card|Referent=Yes	28	nsubj	28:nsubj	Gloss=AUG-2-one|MSeg=a-ba-mwei|SpacesAfter=\n
28	baabire	aba	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu2|Person=3|Tense=Pres|VerbForm=Fin	14	conj	10:ccomp|14:conj	Gloss=2S-go-PFV|MSeg=ba-ab-ire
29	n'	na	ADP	COM	_	30	case	30:case	Gloss=COM|MSeg=na
30	oMukama	Mukama	NOUN	_	NounClass=Bantu1|Referent=Yes	28	obl	28:obl	Gloss=AUG-1.king|MSeg=o-Mukama
31	wa	wa	ADP	_	NounClass=Bantu16	32	case	32:case	Gloss=16.LOC|MSeg=wa
32	Bunyoro	Bunyoro	PROPN	_	NounClass=Bantu14	30	nmod	30:nmod	Gloss=14.Bunyoro|MSeg=Bunyoro
33	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	34	case	34:case	Gloss=AUG-18.LOC|MSeg=o-mu
34	1864	1864	NUM	_	NumForm=Digit|NumType=Card	28	obl	28:obl	Gloss=1864|MSeg=1864|SpacesAfter=\n
35	nga	nga	SCONJ	_	_	36	mark	36:mark	Gloss=while|MSeg=nga
36	akugaziya	gaziya	VERB	_	Aspect=Prog|Mood=Ind|NounClass=Bantu1|Person=3|Tense=Pres|VerbForm=Fin	28	advcl	28:advcl	Gloss=1S-PROG-widen-FV|MSeg=a-ku-gaziy-a
37	obukama	bukama	NOUN	_	NounClass=Bantu14|Referent=Yes	36	obj	36:obj	Gloss=AUG-14.kingdom|MSeg=o-bukama
38	bwaamwe	amwe	PRON	ASSOC	NounClass[psed]=Bantu14|NounClass[psor]=Bantu1|Person[psed]=3|Person[psor]=3|Poss=Yes|PronType=Prs	37	nmod:poss	37:nmod:poss	Gloss=14-1POSS|MSeg=bu-amwe
39	okubwiica	ika	VERB	_	NounClass[obj]=Bantu14|Person[obj]=3|Referent=Yes|VerbForm=Inf	36	advcl	36:advcl	Gloss=AUG-INF-14O-extend-FV|MSeg=o-ku-bu-ik-a
40	e	e	ADP	LOC	NounClass=Bantu23	41	case	41:case	Gloss=23.LOC|MSeg=e
41	Kenya	Kenya	PROPN	_	NounClass=Bantu9	39	obl	39:obl	Gloss=9.Kenya|MSeg=Kenya|SpaceAfter=No
42	.	.	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


