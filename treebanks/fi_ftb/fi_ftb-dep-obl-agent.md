---
layout: base
title:  'Statistics of obl:agent in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-obl.html">obl</a></tt>.

177 nodes (0%) are attached to their parents as `obl:agent`.

177 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61016949152542.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (98; 55% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (39; 22% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (34; 19% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:agent	color:blue
1	Lehtoniittykin	lehtoniitty	NOUN	N,Sg,Nom,Kin	Case=Nom|Clitic=Kin|Number=Sing	4	nsubj	_	_
2	oli	olla	AUX	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
3	kulttuurin	kulttuuri	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	4	obl:agent	_	_
4	muovaama	muovata	VERB	V,PcpAg,Sg,Nom	Case=Nom|Number=Sing|PartForm=Agt|VerbForm=Part	0	root	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:agent	color:blue
1	Pirren	pirre	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	2	obl:agent	_	_
2	valitsema	valita	VERB	V,PcpAg,Sg,Nom	Case=Nom|Number=Sing|PartForm=Agt|VerbForm=Part	3	acl	_	_
3	naispappi	naispappi	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	_
4	puhui	puhua	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	isästä	isä	NOUN	N,Sg,Ela	Case=Ela|Number=Sing	4	nmod	_	_
6	herkästi	herkästi	ADV	Adv	_	4	advmod	_	_
7	ja	ja	CCONJ	Pcle,CC	_	8	cc	_	_
8	kauniisti	kauniisti	ADV	Adv	_	6	conj	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:agent	color:blue
1	Se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	6	nsubj:cop	_	_
2	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
3	hänen	hän	PRON	Pron,Pers,Sg3,Gen	Case=Gen|Number=Sing|Person=3|PronType=Prs	5	obl:agent	_	_
4	suuresti	suuresti	ADV	Adv	_	5	advmod	_	_
5	arvostamansa	arvostaa	VERB	V,PcpAg,Sg,Nom,Px3	Case=Nom|Number=Sing|PartForm=Agt|Person[psor]=3|VerbForm=Part	6	acl	_	_
6	työvaihe	työvaihe	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


