---
layout: base
title:  'Statistics of obl in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="apu_ufpa-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="apu_ufpa-dep-obl-tmod.html">obl:tmod</a></tt>.

16 nodes (3%) are attached to their parents as `obl`.

10 instances of `obl` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6875.

The following 3 pairs of parts of speech are connected with `obl`: <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (13; 81% instances), <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt> (2; 13% instances), <tt><a href="apu_ufpa-pos-AUX.html">AUX</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl	color:blue
1	Inhinhiã	inhinhiã	ADV	Adv	_	4	advmod	_	_
2	ywa	ywa	PRON	Pron	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Msc,Nom
3	apikumunhi	apiku	ADV	Adv	Case=All	4	advmod	_	GTtags=All
4	ysa	sa	VERB	V	Gender[subj]=Masc|Number[subj]=Sing|Person[subj]=3	0	root	_	GTtags=ScSg3M
5	iãkynykata	iãkyny	NOUN	N	Case=Com|Gender=Masc|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	GTtags=Msc,Sg,PxSg3M,Com
6	apukary	apuka	VERB	V	Gender[obj]=Masc|Gender[subj]=Masc|Number[obj]=Plur,Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3	4	conj	_	GTtags=Pred,ScSg3M,Oc3M
7	uky	uky	NOUN	N	Case=Nom|Gender=Masc|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	GTtags=Msc,Sg,PxSg3M,Nom|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	Nynuwa	nynuwa	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	obl	_	gloss[pt]=3PL
2	papuxukunyry	puxuku	VERB	XPOS=ATRIB.INTENS-ser.alegre-PL	_	0	root	_	gloss[pt]=ATRIB.INTENS-ser.alegre-PL
3	awinhinã	awinhi	VERB	XPOS=3PL-casa.de-3PL	_	2	nsubj	_	gloss[pt]=3PL-casa.de-3PL|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl	color:blue
1	Ykynypuku	Ykynypuku	PRON	XPOS=tudo-DISTR	_	2	nsubj	_	gloss[pt]=tudo-DISTR
2	awa	awa	AUX	XPOS=existir	_	0	root	_	gloss[pt]=existir
3	ywa	ywa	PRON	Pron	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	det	_	gloss[pt]=3SG.M
4	ywãtãa	ywãtãa	NOUN	XPOS=naquele.lugar	_	2	obl	_	gloss[pt]=naquele.lugar|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


