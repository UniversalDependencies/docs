---
layout: base
title:  'Statistics of acl:relcl in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="apu_ufpa-dep-acl.html">acl</a></tt>.

7 nodes (1%) are attached to their parents as `acl:relcl`.

7 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28571428571429.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (5; 71% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:relcl	color:blue
1	Ywãtãa	ywãtãa	NOUN	XPOS=naquele.lugar	_	2	obl:lmod	_	gloss[pt]=naquele.lugar
2	aapanhika	awa	VERB	XPOS=existir-IPFTV-PRED	_	0	root	_	gloss[pt]=existir-IPFTV-PRED
3	kipatxi	kipatxi	NOUN	XPOS=terra	_	2	nsubj	_	gloss[pt]=terra
4	peerapuku	eera	VERB	XPOS=?ATRIB.INTENS-?ser.bom-DISTR	_	3	acl:relcl	_	gloss[pt]=?ATRIB.INTENS-?ser.bom-DISTR|SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl:relcl	color:blue
1	Nynuwa	nynuwa	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	gloss[pt]=3PL
2	awary	awa	VERB	XPOS=ter	Gender[obj]=Masc|Number[obj]=Sing|Person[obj]=3	0	root	_	gloss[pt]=ter-3SG.M.O
3	ximaky	ximaky	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Possessed=No	2	obj	_	gloss[pt]=peixe|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	awa	awa	VERB	XPOS=ter	_	2	conj	_	gloss[pt]=ter
6	nhipukury	nhipuku	NOUN	XPOS=comida	Possessed=No	5	obj	_	gloss[pt]=comida-N.POSSD
7	ithupa	ithupa	NOUN	N	Gender=Masc	6	acl:relcl	_	gloss[pt]=mata
8	awakary	awa	VERB	XPOS=ter-REL.M.S	_	7	acl:relcl	_	gloss[pt]=ter-REL.M.S|SpaceAfter=No
9	,	,	PUNCT	_	_	2	punct	_	_
10	nynuwa	nynuwa	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	11	nsubj	_	gloss[pt]=3PL
11	awary	awa	VERB	XPOS=ter	Gender[obj]=Masc|Number[obj]=Sing|Person[obj]=3	2	conj	_	gloss[pt]=ter-3SG.M.O
12	iumyary	iumyary	NOUN	XPOS=macaxeira	_	11	obj	_	gloss[pt]=macaxeira
13	apikumunhi	apiku	NOUN	XPOS=adiante	Case=Dat	12	nmod	_	gloss[pt]=adiante-DAT
14	amãnteere	amãnteere	NOUN	XPOS=fruta	_	12	conj	_	gloss[pt]=fruta|SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Awa	Awa	VERB	XPOS=existir	_	0	root	_	gloss[pt]=existir
2	ykynypuku	ykynypuku	PRON	XPOS=todo-DISTR	_	1	nsubj	_	gloss[pt]=todo-DISTR|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	kariwa	kariwa	NOUN	XPOS=não.índio	_	5	obl	_	gloss[pt]=não.índio
5	mawakynỹãty	awa	VERB	XPOS=PRIV-ter-REL.PL-LOC	Gender[obj]=Masc|Number[obj]=Sing|Person[obj]=3	2	acl:relcl	_	gloss[pt]=PRIV-ter-REL.PL-LOC-3SG.M.O|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


