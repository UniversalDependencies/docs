---
layout: base
title:  'Statistics of nmod in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="apu_ufpa-dep-nmod-poss.html">nmod:poss</a></tt>.

29 nodes (3%) are attached to their parents as `nmod`.

23 instances of `nmod` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10344827586207.

The following 7 pairs of parts of speech are connected with `nmod`: <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (18; 62% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (6; 21% instances), <tt><a href="apu_ufpa-pos-ADV.html">ADV</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (1; 3% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Ipi	epi	NUM	Num	Case=Nom	2	nummod	_	GTtags=Nom
2	ũty	ũty	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Possessed=No	3	nmod	_	GTtags=Msc,Sg,NPossd,Nom
3	atuku	atuku	ADV	Adv	_	6	advmod:tmod	_	_
4	apuumary	apuumary	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Possessed=No	6	nsubj	_	GTtags=Msc,Sg,NPossd,Nom
5	kuna	kuna	PART	Pcle	Polarity=Neg	6	advmod	_	GTtags=Neg
6	awaika	waika	VERB	V	Number[subj]=Plur|Person[subj]=1|VerbType=Vido	0	root	_	GTtags=Vido,ScPl1|SpaceAfter=No
7	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


