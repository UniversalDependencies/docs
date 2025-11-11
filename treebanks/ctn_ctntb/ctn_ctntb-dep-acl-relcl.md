---
layout: base
title:  'Statistics of acl:relcl in UD_Chintang-CTNTB'
udver: '2'
---

## Treebank Statistics: UD_Chintang-CTNTB: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ctn_ctntb-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="ctn_ctntb-dep-acl-nmlz.html">acl:nmlz</a></tt>.

31 nodes (0%) are attached to their parents as `acl:relcl`.

24 instances of `acl:relcl` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16129032258065.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (24; 77% instances), <tt><a href="ctn_ctntb-pos-PRON.html">PRON</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (4; 13% instances), <tt><a href="ctn_ctntb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="ctn_ctntb-pos-NUM.html">NUM</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 acl:relcl	color:blue
1	Kasihaiʔpa	si	VERB	ACT.PTCP-COMPL3.ITR-REF	Aspect=ComplImp|Case=Abs|VerbForm=Part|Voice=Act	2	acl:relcl	2:acl:relcl	Gloss=ACT.PTCP-die-COMPL3.ITR-REF|MSeg=ka-si-hat-pa
2	maʔmi	maʔmi	NOUN	_	Case=Abs|Number=Sing	4	obj	1:nsubj|4:obj	Gloss=person|MSeg=maʔmi
3	sikumŋa	sikum	NOUN	_	Case=Erg|Number=Sing	4	iobj	4:iobj	Gloss=sheet-ERG|MSeg=sikum-ŋa
4	udipno	dipt	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Gloss=3[PL].S-cover-IND.NPST|MSeg=u-dipt-nok|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl:relcl	color:blue
1	Lo	lo	INTJ	_	_	6	discourse	6:discourse	Gloss=alright|MSeg=lo|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	josaŋa	j	PRON	OBL	Case=Erg|Number=Sing|PronType=Ind	6	nsubj	4:nsubj|6:nsubj	Gloss=whoever-OBL-ERG|MSeg=jo-sa-ŋa
4	sedoko	set	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Number[p]=Sing|Person=3|Person[p]=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	5:acl:relcl	Gloss=win_over-3[SG].P-IND.NPST[.3SG.A]|MSeg=set-u-kV
5	huĩsaŋa	hun	PRON	OBL	Case=Erg|Deixis=Med|Number=Sing|PronType=Dem	6	obj	6:obj	Gloss=MED-OBL-ERG|MSeg=hun-sa-ŋa
6	khaiʔma	khatt	VERB	_	Aspect=Imp|Case=Abs|VerbForm=Inf|Voice=Act	0	root	0:root	Gloss=take-INF|MSeg=khatt-ma
7	o	o	PART	RECNF	_	6	discourse	6:discourse	Gloss=okay|MSeg=o|SpaceAfter=No
8	!	!	PUNCT	_	_	6	punct	6:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Ramece	Ram	PROPN	NICK	Case=Abs|Number=Plur	4	acl:nmlz	3:iobj|4:acl:nmlz	Gloss=a_name-NICK-NSG|MSeg=ram-e-ce
2	dabi	dabi	NOUN	_	Case=Abs|Number=Sing	3	obj	3:obj	Gloss=knife|MSeg=dabi
3	pimayaŋce	pid	VERB	PASS.PTCP	Aspect=Imp|Number=Plur|Person=3|VerbForm=Part|Voice=Act	1	acl:relcl	1:acl:relcl	Gloss=give-PASS.PTCP-3NSG.P|MSeg=pid-mayaŋ-ci
4	kha	kha	NOUN	NMLZ2	Case=Abs|Number=Sing	0	root	0:root	Gloss=NMLZ2|MSeg=kha
5	.	.	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


