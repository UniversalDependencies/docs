---
layout: base
title:  'Statistics of advmod in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `advmod`

This relation is universal.
There are 3 language-specific subtypes of `advmod`: <tt><a href="apu_ufpa-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="apu_ufpa-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="apu_ufpa-dep-advmod-tmod.html">advmod:tmod</a></tt>.

23 nodes (4%) are attached to their parents as `advmod`.

19 instances of `advmod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.43478260869565.

The following 3 pairs of parts of speech are connected with `advmod`: <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-ADV.html">ADV</a></tt> (17; 74% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-ADV.html">ADV</a></tt> (5; 22% instances), <tt><a href="apu_ufpa-pos-ADV.html">ADV</a></tt>-<tt><a href="apu_ufpa-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod	color:blue
1	Inhinhiã	inhinhiã	ADV	Adv	_	4	advmod	_	_
2	ywa	ywa	PRON	Pron	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Msc,Nom
3	apikumunhi	apiku	ADV	Adv	Case=Dat	4	advmod	_	GTtags=Dat
4	ysa	sa	VERB	V	Gender[subj]=Masc|Number[subj]=Sing|Person[subj]=3	0	root	_	GTtags=ScSg3M
5	iãkynykata	iãkyny	NOUN	N	Case=Com|Gender=Masc|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	GTtags=Msc,Sg,PxSg3M,Com
6	apukary	apuka	VERB	V	Gender[obj]=Masc|Gender[subj]=Masc|Number[obj]=Plur,Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3	4	conj	_	GTtags=Pred,ScSg3M,Oc3M
7	uky	uky	NOUN	N	Case=Nom|Gender=Masc|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Possessed=Yes	6	obj	_	GTtags=Msc,Sg,PxSg3M,Nom|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Kaiãapuku	kaiãa	VERB	XPOS=existir.muito-DISTR	_	0	root	_	gloss[pt]=existir.muito-DISTR
2	tiwitxi	tiwitxi	NOUN	N	Case=Nom|Gender=Masc|Possessed=No	1	nsubj	_	gloss[pt]=coisa.de-N.POSSD|SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	apaka	apaka	ADV	Adv	_	5	advmod	_	gloss[pt]=também
5	kupiti	kupiti	NOUN	XPOS=panela.de.barro	_	2	conj	_	gloss[pt]=panela.de.barro|SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Inhinhiã	inhinhiã	ADV	Adv	_	3	advmod:tmod	_	gloss[pt]=então
2	maky	maky	NOUN	N	Gender=Fem	3	obj	_	gloss[pt]=castanha
3	ysikaa	sika	VERB	XPOS=3sg.m-vender-?	_	0	root	_	gloss[pt]=3sg.m-vender-?
4	natuku	natuku	ADV	XPOS=como	_	5	advmod	_	gloss[pt]=como
5	apakapary	apaka	ADV	XPOS=também-?-3sg.m.o	_	3	conj	_	gloss[pt]=também-?-3sg.m.o
6	dinhẽru	dinhẽru	NOUN	XPOS=dinheiro	_	5	nsubj	_	gloss[pt]=dinheiro|SpaceAfter=No
7	,	,	PUNCT	_	_	12	punct	_	_
8	inhinhiã	inhinhiã	ADV	Adv	_	11	advmod:tmod	_	gloss[pt]=então
9	kaiãapukury	kaiãa	VERB	XPOS=muito-DISTR-M	_	10	nmod	_	gloss[pt]=muito-DISTR-M
10	teetxi	tiwitxi	NOUN	N	Case=Nom|Gender=Masc|Possessed=No	11	obj	_	gloss[pt]=coisa.de-N.POSSD
11	amutary	amuta	VERB	V	Gender[obj]=Masc|Number[obj]=Sing|Person[obj]=3	12	csubj	_	gloss[pt]=comprar-3SG.M.O
12	ereka	ereka	VERB	XPOS=ser.bom	_	3	conj	_	gloss[pt]=ser.bom|SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


