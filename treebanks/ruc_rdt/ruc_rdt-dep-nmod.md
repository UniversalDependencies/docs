---
layout: base
title:  'Statistics of nmod in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="ruc_rdt-dep-nmod-desc.html">nmod:desc</a></tt>, <tt><a href="ruc_rdt-dep-nmod-poss.html">nmod:poss</a></tt>.

89 nodes (1%) are attached to their parents as `nmod`.

78 instances of `nmod` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.98876404494382.

The following 8 pairs of parts of speech are connected with `nmod`: <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (63; 71% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (12; 13% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt> (6; 7% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod	color:blue
1	Oba	oba	CCONJ	_	_	2	cc	2:cc	Gloss=or|MSeg=oba
2	biwuka	biwuka	NOUN	_	NounClass=Bantu8	0	root	0:root	Gloss=8.virus|MSeg=biwuka
3	bya	a	PART	GEN	NounClass=Bantu8	5	case	5:case	Gloss=8.GEN|MSeg=bya
4	mu	mu	ADP	LOC	NounClass=Bantu18	5	case	5:case	Gloss=18.LOC|MSeg=mu
5	nda	nda	NOUN	_	NounClass=Bantu9	2	nmod	2:nmod	Gloss=9.stomach|MSeg=nda|SpaceAfter=No
6	?	?	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod	color:blue
1	oMubiijwa	Mubiijwa	PROPN	_	NounClass=Bantu1|Referent=Yes	0	root	0:root|2:nsubj	Gloss=AUG-1.Mubiijwa|MSeg=o-Mubiijwa
2	eyabandwize	banduza	VERB	REL	Aspect=Perf|Mood=Ind|NounClass=Bantu1|Person=3|Referent=Yes|Tense=Past|VerbForm=Fin	1	acl:relcl	1:acl:relcl	Gloss=S.REL-1S-PST-restore:PFV|MSeg=e-a-a-bandwize
3	okujumuula	jumuula	VERB	_	Referent=Yes|VerbForm=Inf	2	xcomp	2:xcomp	Gloss=AUG-INF-turn_upright-FV|MSeg=o-ku-jumuul-a
4	engoma	ngoma	NOUN	_	NounClass=Bantu9|Referent=Yes	3	obj	3:obj	Gloss=AUG-9.drum|MSeg=e-ngoma
5	ya	a	PART	GEN	NounClass=Bantu9	6	case	6:case	Gloss=9.GEN|MSeg=ya
6	bukama	bukama	NOUN	_	NounClass=Bantu14	4	nmod	4:nmod	Gloss=14.kingdom|MSeg=bukama
7	bwa	a	PART	GEN	NounClass=Bantu14	8	case	8:case	Gloss=14.GEN|MSeg=bwa
8	Buduuli	Buduuli	PROPN	_	NounClass=Bantu14	6	nmod	6:nmod	Gloss=14.Buruuli_land|MSeg=buduuli|SpaceAfter=No
9	,	,	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod	color:blue
1	Awo	awo	ADV	_	Deixis=Med|NounClass=Bantu16|PronType=Dem	2	advmod	2:advmod	Gloss=16.MED|MSeg=awo
2	negeire	ega	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Appl	0	root	0:root	Gloss=1sgS-learn:APPL:PFV|MSeg=n-egeire
3	wo	wo	ADV	LOC	NounClass=Bantu16	2	advmod:loc	2:advmod:loc	Gloss=16.LOC|MSeg=wo
4	paka	paka	ADP	_	_	6	case	6:case	Gloss=until|MSeg=paka
5	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	6	case	6:case	Gloss=AUG-18.LOC|MSeg=o-mu
6	seniya	siniya	NOUN	_	NounClass=Bantu9	2	obl	2:obl	Gloss=9.senior|MSeg=siniya
7	eya	a	PART	GEN	NounClass=Bantu9|Referent=Yes	8	case	8:case	Gloss=AUG-9.GEN|MSeg=e-ya
8	kanai	kanai	NUM	_	NumForm=Word|NumType=Card	6	nmod	6:nmod	Gloss=four|MSeg=kanai|SpaceAfter=No
9	,	,	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


