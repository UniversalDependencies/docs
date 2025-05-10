---
layout: base
title:  'Statistics of cc:preconj in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-cc.html">cc</a></tt>.

13 nodes (0%) are attached to their parents as `cc:preconj`.

13 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07692307692308.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (7; 54% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (2; 15% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (2; 15% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (1; 8% instances), <tt><a href="fi_ftb-pos-DET.html">DET</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Niin	niin	CCONJ	Pcle	_	2	cc:preconj	_	_
2	asiakkaat	asiakas	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	5	nsubj	_	_
3	kuin	kuin	CCONJ	Pcle,CC	_	4	cc	_	_
4	myyjätkin	myyjä	NOUN	N,Pl,Nom,Kin	Case=Nom|Clitic=Kin|Number=Plur	2	conj	_	_
5	joutuivat	joutua	VERB	V,Act,Ind,Past,Pl3	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	ymmälle	ymmälle	ADV	Adv	_	5	compound:prt	_	_
7	,	,	PUNCT	Pun	_	6	punct	_	_
8	jos	jos	SCONJ	Pcle,CS	_	5	mark	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Altistus	altistus	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	3	obj	_	_
2	tälle	tämä	PRON	Pron,Dem,Sg,All	Case=All|Number=Sing|PronType=Dem	1	nmod	_	_
3	todettiin	todeta	VERB	V,Pass,Ind,Past	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
4	niin	niin	CCONJ	Pcle	_	5	cc:preconj	_	_
5	minun	minä	PRON	Pron,Pers,Sg1,Gen	Case=Gen|Number=Sing|Person=1|PronType=Prs	8	nmod:poss	_	_
6	kuin	kuin	CCONJ	Pcle,CC	_	7	cc	_	_
7	kuopuksenkin	kuopus	NOUN	N,Sg,Gen,Kin	Case=Gen|Clitic=Kin|Number=Sing	5	conj	_	_
8	verikokeista	verikoe	NOUN	N,Pl,Ela	Case=Ela|Number=Plur	3	obl	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Ranskan	ranska	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
2	aikeista	aie	NOUN	N,Pl,Ela	Case=Ela|Number=Plur	4	nmod	_	_
3	oltiin	olla	VERB	V,Pass,Ind,Past	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
4	perillä	perillä	ADV	Adv	_	3	advmod	_	_
5	niin	niin	CCONJ	Pcle	_	6	cc:preconj	_	_
6	Yhdysvaltain	yhdysvallat	PROPN	N,Prop,Pl,Gen	Case=Gen|Number=Plur	9	nmod	_	_
7	kuin	kuin	CCONJ	Pcle,CC	_	8	cc	_	_
8	Englanninkin	englanti	PROPN	N,Prop,Sg,Gen,Kin	Case=Gen|Clitic=Kin|Number=Sing	6	conj	_	_
9	tiedustelupalveluissa	tiedustelupalvelu	NOUN	N,Pl,Ine	Case=Ine|Number=Plur	3	obl	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


