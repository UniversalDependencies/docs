---
layout: base
title:  'Statistics of nmod:poss in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="apu_ufpa-dep-nmod.html">nmod</a></tt>.

5 nodes (1%) are attached to their parents as `nmod:poss`.

5 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Inhinhiã	inhinhiã	ADV	Adv	_	2	advmod:tmod	_	gloss[pt]=então
2	atamatary	atama	VERB	XPOS=ver-VBLZ	Number[obj]=Sing|Person[obj]=3	0	root	_	gloss[pt]=ver-VBLZ-3SG.M.O
3	ãkiti	hãkiti	NOUN	N	Case=Nom|Gender=Masc|Number=Sing	2	obj:agent	_	gloss[pt]=onça
4	nhikanãtary	nhi	VERB	XPOS=comer-PRED-PROGR-VBLZ-3SG.M.O	Aspect=Prog|Gender[obj]=Masc|Number[obj]=Sing|Person[obj]=3	2	advcl	_	gloss[pt]=comer-PRED-PROGR-VBLZ-3SG.M.O
5	ixuwa	ixuwa	NOUN	XPOS=tamanduá	_	6	nmod:poss	_	gloss[pt]=tamanduá
6	xinhi	xinhi	NOUN	XPOS=carne.de	_	4	obj	_	gloss[pt]=carne.de|SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Ywa	ywa	PRON	Pron	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	det	_	gloss[pt]=3SG.M
2	kyky	kyky	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Possessed=No	3	nmod:poss	_	gloss[pt]=homem
3	syture	sytu	NOUN	XPOS=mulher-POSSD	Case=Nom|Gender=Fem|Possessed=Yes	4	nsubj	_	gloss[pt]=mulher-POSSD
4	wererawata	were	VERB	XPOS=ser.bonito-FOC-REFL-VBLZ	_	0	root	_	gloss[pt]=ser.bonito-FOC-REFL-VBLZ
5	ywa	ywa	PRON	Pron	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	gloss[pt]=3SG.M
6	kikiute	kikiu	NOUN	XPOS=roçado-POSSD	Case=Nom|Gender=Masc|Possessed=Yes	4	obj	_	gloss[pt]=roçado-POSSD|SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	ithupytymary	ithu	VERB	XPOS=ter.muito-ENF-FRUSTR	Gender[obj]=Masc|Number[obj]=Sing|Person[obj]=3	4	conj	_	gloss[pt]=ter.muito-ENF-FRUSTR-3SG.M.O
9	uparĩka	parĩkatxi	NOUN	NOUN	Case=Nom|Gender=Masc|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|Possessed=Yes	8	nsubj	_	gloss[pt]=3SG.F-trabalho.de|SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


