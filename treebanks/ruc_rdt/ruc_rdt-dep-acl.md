---
layout: base
title:  'Statistics of acl in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ruc_rdt-dep-acl-relcl.html">acl:relcl</a></tt>.

24 nodes (0%) are attached to their parents as `acl`.

24 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.375.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (17; 71% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
1	Ate	ate	CCONJ	_	_	8	cc	8:cc	Gloss=but|MSeg=ate
2	ni	ni	SCONJ	_	_	3	mark	3:mark	Gloss=when|MSeg=ni
3	kiba	bba	VERB	COP	NounClass=Bantu7|Person=3|Tense=Pres	8	advcl	8:advcl	Gloss=7S-COP-FV|MSeg=ki-bb-a
4	nga	nga	SCONJ	_	_	5	mark	5:mark	Gloss=while|MSeg=nga
5	kikwaite	kwata	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu7|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	3:advcl	Gloss=7S-catch:PFV|MSeg=ki-kwaite
6	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	7	case	7:case	Gloss=AUG-18.LOC|MSeg=o-mu
7	mutwe	mutwe	NOUN	_	NounClass=Bantu3	5	obl	5:obl	Gloss=3.head|MSeg=mutwe
8	kiba	bba	VERB	COP	NounClass=Bantu7|Person=3|Tense=Pres	0	root	0:root	Gloss=7S-COP-FV|MSeg=ki-bb-a
9	kizibu	kizibu	NOUN	_	NounClass=Bantu7	8	obj	8:obj	Gloss=7.problem|MSeg=kizibu
10	okukiya	kiya	VERB	_	Referent=Yes|VerbForm=Inf	9	acl	9:acl	Gloss=AUG-INF-?TODO-FV|MSeg=o-ku-kiy-a
11	mu	mu	ADV	LOC	NounClass=Bantu18	10	advmod:loc	10:advmod:loc	Gloss=18.LOC|MSeg=mu
12	.	.	PUNCT	_	_	8	punct	8:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 acl	color:blue
1	Abantu	muntu	NOUN	_	NounClass=Bantu2|Referent=Yes	3	nsubj	3:nsubj	Gloss=AUG-2.person|MSeg=a-bantu
2	bani	ni	DET	_	Deixis=Prox|NounClass=Bantu2|PronType=Dem	1	det	1:det	Gloss=2.PROX|MSeg=bani
3	babbanga	bba	VERB	COP	Aspect=Hab|Mood=Ind|NounClass=Bantu2|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=2S-COP-FV-HAB|MSeg=ba-bb-a-nga
4	ku	ku	ADV	LOC	NounClass=Bantu17	5	case	5:case	Gloss=17.LOC|MSeg=ku
5	ekitina	kitina	NOUN	_	NounClass=Bantu7|Referent=Yes	3	obl	3:obl	Gloss=AUG-7.origin|MSeg=e-kitina|SpacesAfter=\n
6	kwe	e	PRON	_	NounClass=Bantu17|PronType=Rel	7	obl	7:obl	Gloss=17.REL|MSeg=kwe
7	bazwa	zwa	VERB	_	Mood=Ind|NounClass=Bantu2|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	5:acl:relcl	Gloss=2S-come_from-FV|MSeg=ba-zw-a
8	–	–	PUNCT	_	_	11	punct	11:punct	_
9	nga	nga	SCONJ	_	_	11	mark	11:mark	Gloss=while|MSeg=nga
10	nigwo	ni	AUX	COP	InfStruct=Foc|NounClass=Bantu3|Person=3|Tense=Pres	11	cop	11:cop	Gloss=COP-3|MSeg=ni-gwo
11	muziro	muziro	NOUN	_	NounClass=Bantu3	5	acl	5:acl	Gloss=3.totem|MSeg=muziro|SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
1	n'amukoba	koba	VERB	_	Mood=Ind|NounClass=Bantu1|NounClass[obj]=Bantu1|Person=3|Person[obj]=3|Tense=Nar|VerbForm=Fin	0	root	0:root	Gloss=NAR-1S-1O-say-FV|MSeg=ni-a-mu-kob-a
2	ati	ati	SCONJ	COMPL	_	5	mark	5:mark	Gloss=COMPL|MSeg=ati|SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n
4	"	"	PUNCT	_	_	5	punct	5:punct	SpaceAfter=No
5	Mpa	wa	VERB	_	Mood=Imp|Number[obj]=Sing|Person[obj]=1	1	ccomp	1:ccomp	Gloss=1sgO-give-FV|MSeg=n-w-a
6	omubazi	mubazi	NOUN	_	NounClass=Bantu3|Referent=Yes	5	obj	5:obj	Gloss=AUG-3.potion|MSeg=o-mubazi
7	nsobole	sobola	VERB	_	Mood=Sub|Number=Sing|Person=1|VerbForm=Fin	5	advcl	5:advcl	Gloss=1sgS-be_able-SBJV|MSeg=n-sobol-e
8	okubba	bba	VERB	COP	Referent=Yes|VerbForm=Inf	7	xcomp	7:xcomp	Gloss=AUG-INF-COP|MSeg=o-ku-bba
9	omugezi	gezi	ADJ	_	NounClass=Bantu1|Referent=Yes	8	xcomp	8:xcomp	Gloss=AUG-1-intelligent|MSeg=o-mu-gezi
10	okusinga	singa	VERB	_	Referent=Yes|VerbForm=Inf	9	acl	9:acl	Gloss=AUG-INF-be_more-FV|MSeg=o-ku-sing-a
11	byona	ona	PRON	_	NounClass=Bantu8|PronType=Tot	10	obj	10:obj	Gloss=8-all|MSeg=bi-ona|SpaceAfter=No
12	"	"	PUNCT	_	_	5	punct	5:punct	SpaceAfter=No
13	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


