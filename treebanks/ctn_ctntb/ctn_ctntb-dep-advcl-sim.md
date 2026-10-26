---
layout: base
title:  'Statistics of advcl:sim in UD_Chintang-CTNTB'
udver: '2'
---

## Treebank Statistics: UD_Chintang-CTNTB: Relations: `advcl:sim`

This relation is a language-specific subtype of <tt><a href="ctn_ctntb-dep-advcl.html">advcl</a></tt>.
There are also 4 other language-specific subtypes of `advcl`: <tt><a href="ctn_ctntb-dep-advcl-cntf.html">advcl:cntf</a></tt>, <tt><a href="ctn_ctntb-dep-advcl-coord.html">advcl:coord</a></tt>, <tt><a href="ctn_ctntb-dep-advcl-emph.html">advcl:emph</a></tt>, <tt><a href="ctn_ctntb-dep-advcl-purp.html">advcl:purp</a></tt>.

30 nodes (0%) are attached to their parents as `advcl:sim`.

30 instances of `advcl:sim` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.3.

The following 3 pairs of parts of speech are connected with `advcl:sim`: <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (27; 90% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="ctn_ctntb-pos-PRON.html">PRON</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advcl:sim	color:blue
1	To	to	PRON	DEM.UP	Case=Abs|Deixis=Remt|Number=Sing|PronType=Dem	3	obl	3:obl	Gloss=DEM.UP|MSeg=to
2	ghãsa	ghãs	NOUN	_	Case=Abs|Number=Sing	3	obj	3:obj	Gloss=grass|MSeg=ghãsa
3	choŋsi	choŋs	VERB	PURP	Aspect=Imp|ConvType=Purp|VerbForm=Conv|Voice=Act	4	advcl:purp	4:advcl:purp	Gloss=deliver-PURP|MSeg=choŋs-si
4	khaʔnaknalok	khat	VERB	LNK-LNK-SIM	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl:sim	5:advcl:sim	Gloss=go-LNK-IPFV-LNK[.SUBJ.NPST.3SG.S]-SIM|MSeg=khat-na-yakt-na-lok
5	raʔno	ratt	VERB	_	Aspect=Perfv|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Gloss=shout-IND.PST[.3SG.S]|MSeg=ratt-nok
6	ni	ni	PART	ASS	_	5	discourse	5:discourse	Gloss=ASS|MSeg=n̪i|SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl:sim	color:blue
1	Ubojuŋa	boju	NOUN	_	Case=Erg|Number=Sing|Number[psor]=Sing|Person=3	2	nsubj	2:nsubj	Gloss=3SG.POSS-grandmother-ERG|MSeg=u-boju-ŋa
2	khuruaktolok	khur	VERB	SIM	Aspect=Imp|Mood=Sub|Number=Sing|Number[p]=Sing|Person=3|Person[p]=3|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl:sim	5:advcl:sim	Gloss=carry-3.P-IPFV-[SBJV.PST.3SG>]3[SG]-SIM|MSeg=khur-u-yakt-u-lok
3	cham	cham	NOUN	_	Case=Abs|Number=Sing	4	obj	4:obj	Gloss=song|MSeg=cham
4	lusakta	lus	VERB	_	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:nmlz	5:acl:nmlz	Gloss=sing-PST-IPFV-[SBJV.PST.]3SG.S|MSeg=lus-a-yakt-a
5	go	go	NOUN	NMLZ1	Case=Abs|Number=Sing	0	root	0:root	Gloss=NMLZ1|MSeg=go
6	mi	mi	ADJ	_	_	7	acl:nmlz	7:acl:nmlz	Gloss=small|MSeg=mi
7	kha	kha	NOUN	NMLZ2	Case=Abs|Number=Sing	5	obl	5:obl	Gloss=NMLZ2|MSeg=kha
8	gari	gari	SCONJ	TMP.LOC1	_	7	case	7:case	Gloss=TMP.LOC1|MSeg=gari
9	ta	ta	PART	FOC	InfStruct=Foc	7	advmod:emph	7:advmod:emph	Gloss=FOC|MSeg=ta
10	.	.	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advcl:sim	color:blue
1	Pacche	pache	ADV	_	_	3	advmod	3:advmod	Gloss=POST|MSeg=pache
2	bakhi	ba	ADV	_	AdvType=Man|Deixis=Prox|PronType=Dem	3	advmod	3:advmod	Gloss=PROX-MOD|MSeg=ba-khiʔ
3	imsiyaktilok	ims	VERB	SIM	Aspect=Imp|Clusivity=In|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl:sim	4:advcl:sim	Gloss=sleep-1PL.S-IPF-[SUBJ.NPST.]1PL[.INCL].S-SIM|MSeg=ims-ĩ-yakt-ĩ-lok
4	aniko	ani	PRON	GEN	Case=Abs,Erg|Clusivity=In|Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	nmod:poss	7:nmod:poss	Gloss=1PL.INCL-GEN|MSeg=ani-ko
5	lo	lo	PART	SURP	InfStruct=Foc	4	advmod:emph	4:advmod:emph	Gloss=SURP|MSeg=lo
6	ba	ba	DET	_	Deixis=Prox|PronType=Dem	7	det	7:det	Gloss=PROX|MSeg=ba
7	ghuccukŋa	ghuccuk	NOUN	_	Case=Erg|Number=Sing	11	nsubj	11:nsubj	Gloss=nape-ERG|MSeg=ghuccuk-ŋa
8	mo	mo	ADV	DEM.DOWN	AdvType=Loc|Deixis=Remt|PronType=Dem	11	advmod	11:advmod	Gloss=DEM.DOWN|MSeg=mo
9	ambu	mo	ADV	DEM.DOWN	AdvType=Loc|Deixis=Remt|PronType=Dem|Reach=Remote	11	advmod	11:advmod	Gloss=REMOTE-DEM.DOWN|MSeg=a-mo
10	gundri	gundri	NOUN	_	Case=Abs|Number=Sing	11	obj	11:obj	Gloss=mat|MSeg=gun̪d̪ri
11	noboko	nop	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Number[p]=Sing|Person=3|Person[p]=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Gloss=touch-3[SG].P-IND.NPST[.3SG.A]|MSeg=nop-u-kV
12	ni	ni	PART	ASS	_	11	discourse	11:discourse	Gloss=ASS|MSeg=n̪i|SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	11:punct	SpacesAfter=\n

~~~


