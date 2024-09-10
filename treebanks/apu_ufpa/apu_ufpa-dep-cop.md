---
layout: base
title:  'Statistics of cop in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `cop`

This relation is universal.

6 nodes (1%) are attached to their parents as `cop`.

5 instances of `cop` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `cop`: <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-AUX.html">AUX</a></tt> (3; 50% instances), <tt><a href="apu_ufpa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="apu_ufpa-pos-AUX.html">AUX</a></tt> (2; 33% instances), <tt><a href="apu_ufpa-pos-ADV.html">ADV</a></tt>-<tt><a href="apu_ufpa-pos-AUX.html">AUX</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	Pynyru	ynyru	NOUN	N	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=2|Possessed=Yes	3	nsubj:cop	_	GTtags=Fem,Sg,PxSg2,Possd,Nom
2	nynyru	ynyru	NOUN	N	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Possessed=Yes	3	nmod	_	GTtags=Fem,Sg,PxSg1,Possd,Nom
3	nyrymane	nyrymane	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Possessed=Yes	0	root	_	GTtags=Msc,Sg,Possd,Nom
4	utxawa	txa	AUX	_	Gender[subj]=Fem|Number[subj]=Sing|Person[subj]=3	3	cop	_	GTtags=Aux,Refl,ScSg3F|SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	Iũpiri	iũpiri	NOUN	_	Gender=Masc|Possessed=No	3	nsubj:cop	_	_
2	xuxuri	txutxuri	NOUN	_	_	1	conj	_	_
3	atuku	atuku	ADJ	_	_	0	root	_	_
4	itxa	txa	AUX	_	_	3	cop	_	SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Natukupa	natukupa	ADV	Adv	_	3	advmod	_	_
2	itxa	txa	AUX	_	Gender[subj]=Masc|Number[subj]=Sing|Person[subj]=3	3	cop	_	GTtags=Aux,ScSg3M
3	wai	wai	ADV	Adv	_	0	root	_	_
4	pawinhiã	awinhitxi	NOUN	N	Case=Loc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=2|Possessed=Yes	3	appos	_	GTtags=Msc,Sg,PxSg2,Possd,Loc|SpaceAfter=No
5	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


