---
layout: base
title:  'Statistics of csubj in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fi_tdt-dep-csubj-cop.html">csubj:cop</a></tt>.

54 nodes (0%) are attached to their parents as `csubj`.

52 instances of `csubj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.33333333333333.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (43; 80% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (4; 7% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	Lukijoita	lukija	NOUN	N	Case=Par|Derivation=Ja|Number=Plur	3	obj	3:obj	_
2	varmaan	varmaan	ADV	Adv	_	3	advmod	3:advmod	_
3	kiinnostaa	kiinnostaa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Punct	_	8	punct	8:punct	_
5	paljon	paljon	ADV	Adv	Clitic=Ko|Style=Coll	8	advmod	8:advmod	_
6	tämä	tämä	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	7	det	7:det	_
7	touhu	touhu	NOUN	N	Case=Nom|Derivation=U|Number=Sing	8	nsubj	8:nsubj	_
8	kustantaa	kustantaa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	3:csubj	SpaceAfter=No
9	.	.	PUNCT	Punct	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	Mistä	mikä	PRON	Pron	Case=Ela|Number=Sing|PronType=Int	2	obl	2:obl	_
2	johtuu	johtua	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Punct	_	9	punct	9:punct	_
4	että	että	SCONJ	C	_	9	mark	9:mark	_
5	urheilukalastus	urheilu#kalastus	NOUN	N	Case=Nom|Number=Sing	9	nsubj:cop	9:nsubj:cop	_
6	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
7	nyt	nyt	ADV	Adv	_	9	advmod	9:advmod	_
8	niin	niin	ADV	Adv	_	9	advmod	9:advmod	_
9	pinnalla	pinta	NOUN	N	Case=Ade|Number=Sing	2	csubj	2:csubj	SpaceAfter=No
10	?	?	PUNCT	Punct	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 csubj	color:blue
1	Tiedän	tietää	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	myös	myös	ADV	Adv	_	6	advmod	6:advmod	SpaceAfter=No
3	,	,	PUNCT	Punct	_	6	punct	6:punct	_
4	että	että	SCONJ	C	_	6	mark	6:mark	_
5	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
6	olemassa	olla	VERB	V	Case=Ine|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	1	ccomp	1:ccomp	_
7	ihan	ihan	ADV	Adv	_	8	advmod	8:advmod	_
8	valmiitakin	valmis	ADJ	A	Case=Par|Clitic=Kin|Degree=Pos|Number=Plur	11	amod	11:amod	_
9	Arduinoon	Arduino	PROPN	N	Case=Ill|Number=Sing	10	obl	10:obl	_
10	pohjautuvia	pohjautua	VERB	V	Case=Par|Number=Plur|PartForm=Pres|VerbForm=Part|Voice=Act	11	acl	11:acl	_
11	time-lapse	time-lapse	X	Foreign	Foreign=Yes	6	nsubj	6:nsubj	_
12	dollyja	dolly	NOUN	Foreign	Case=Par|Number=Plur	11	flat:foreign	11:flat:foreign	_
13	ajastimilla	ajastin	NOUN	N	Case=Ade|Number=Plur	11	nmod	11:nmod	SpaceAfter=No
14	,	,	PUNCT	Punct	_	16	punct	16:punct	_
15	mutta	mutta	CCONJ	C	_	16	cc	16:cc	_
16	tarkoituksena	tarkoitus	NOUN	N	Case=Ess|Number=Sing	1	conj	1:conj	_
17	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	16:cop	_
18	tehdä	tehdä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	16	csubj	16:csubj	_
19	kaikki	kaikki	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	18	obj	18:obj	_
20	alusta	alku	NOUN	N	Case=Ela|Derivation=U|Number=Sing	18	obl	18:obl	_
21	lähtien	lähtien	ADP	Adp	AdpType=Post	20	case	20:case	_
22	itse	itse	ADV	Adv	_	18	advmod	18:advmod	SpaceAfter=No
23	,	,	PUNCT	Punct	_	27	punct	27:punct	_
24	joten	joten	ADV	Adv	_	27	advmod	27:advmod	_
25	ne	se	PRON	Pron	Case=Nom|Number=Plur|PronType=Dem	27	nsubj	27:nsubj	_
26	eivät	ei	AUX	V	Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	27	aux	27:aux	_
27	tule	tulla	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	16	acl:relcl	16:acl:relcl	_
28	kyseeseen	kyse	NOUN	N	Case=Ill|Number=Sing	27	obl	27:obl	SpaceAfter=No
29	.	.	PUNCT	Punct	_	1	punct	1:punct	_

~~~


