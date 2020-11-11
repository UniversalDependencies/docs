---
layout: base
title:  'Statistics of nsubj in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="apu_ufpa-dep-nsubj-cop.html">nsubj:cop</a></tt>.

86 nodes (15%) are attached to their parents as `nsubj`.

69 instances of `nsubj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46511627906977.

The following 8 pairs of parts of speech are connected with `nsubj`: <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (41; 48% instances), <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt> (38; 44% instances), <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="apu_ufpa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="apu_ufpa-pos-ADV.html">ADV</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="apu_ufpa-pos-AUX.html">AUX</a></tt>-<tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Pupỹkary	pupỹkary	NOUN	N	Case=Nom|Gender=Masc	4	nsubj	_	gloss_pt=apurinã
2	ithupa	ithupa	NOUN	N	Case=Nom|Gender=Masc	3	obj	_	gloss_pt=mata
3	sikasaaky	sika	VERB	_	AdvType=Tim|VerbType=Conv	4	advcl:tmod	_	gloss_pt=dar-TEMP
4	atamatary	atama	VERB	_	Gender[obj]=Masc|Number[obj]=Sing|Person[obj]=3	0	root	_	gloss_pt=ver-VBLZ-3SG.M.O
5	erẽkatxi	herẽkatxi	NOUN	N	Case=Nom|Gender=Masc|Possessed=No	4	obj	_	gloss_pt=sangue.de-N.POSSD|SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
1	Nynuwa	nynuwa	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	obl	_	gloss[pt]=3PL
2	papuxukunyry	puxuku	VERB	XPOS=ATRIB.INTENS-ser.alegre-PL	_	0	root	_	gloss[pt]=ATRIB.INTENS-ser.alegre-PL
3	awinhinã	awinhi	VERB	XPOS=3PL-casa.de-3PL	_	2	nsubj	_	gloss[pt]=3PL-casa.de-3PL|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	_

~~~


