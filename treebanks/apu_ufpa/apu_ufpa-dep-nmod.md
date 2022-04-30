---
layout: base
title:  'Statistics of nmod in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="apu_ufpa-dep-nmod-poss.html">nmod:poss</a></tt>.

23 nodes (3%) are attached to their parents as `nmod`.

17 instances of `nmod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1304347826087.

The following 4 pairs of parts of speech are connected with `nmod`: <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (15; 65% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (6; 26% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	Awa	awa	VERB	XPOS=existir	_	0	root	_	gloss[pt]=existir
2	sytu	sytu	NOUN	XPOS=mulher	_	1	nsubj	_	gloss[pt]=mulher
3	awa	awa	VERB	XPOS=existir	_	1	conj	_	gloss[pt]=existir
4	kãkiti	kãkiti	NOUN	N	Gender=Masc	6	nmod:poss	_	gloss[pt]=gente
5	awinhi	awinhi	NOUN	XPOS=comunidade.de	_	6	nmod	_	gloss[pt]=comunidade.de
6	iãtã	iãtã	NOUN	XPOS=lugar	_	3	nsubj	_	gloss[pt]=lugar|SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Kaiãapukury	kaiãapuku	DET	XPOS=muito-DISTR-M	_	2	det	_	gloss[pt]=muito-DISTR-M
2	tiwitxi	tiwitxi	NOUN	XPOS=coisa.de	Possessed=No	3	nsubj	_	gloss[pt]=coisa.de-N.POSSD
3	awa	awa	VERB	XPOS=existir	_	0	root	_	gloss[pt]=existir
4	apaka	apaka	ADV	Adv	_	3	advmod	_	gloss[pt]=também
5	nynuwa	nynuwa	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	det	_	gloss[pt]=3PL
6	awinhi	awa	VERB	XPOS=casa.de	_	7	nmod	_	gloss[pt]=casa.de
7	iãtã	iãtã	NOUN	XPOS=lugar	_	3	obl:lmod	_	gloss[pt]=lugar|SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Nynuwa	nynuwa	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nmod	_	gloss[pt]=3PL
2	aapuku	awapukutxi	NOUN	XPOS=casa.de	_	4	nmod	_	gloss[pt]=casa.de
3	iia	ie	DET	Det	Gender=Masc	4	det	_	gloss[pt]=esse
4	paxiuba	paxiuba	NOUN	XPOS=paxiúba	_	5	nsubj	_	gloss[pt]=paxiúba
5	paiakapeka	paiaka	VERB	XPOS=?estar.mole-PFTV-PRED	_	0	root	_	gloss[pt]=?estar.mole-PFTV-PRED|SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


