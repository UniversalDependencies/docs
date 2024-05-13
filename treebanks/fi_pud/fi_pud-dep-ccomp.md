---
layout: base
title:  'Statistics of ccomp in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `ccomp`

This relation is universal.

167 nodes (1%) are attached to their parents as `ccomp`.

166 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.7185628742515.

The following 19 pairs of parts of speech are connected with `ccomp`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (86; 51% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (16; 10% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (16; 10% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (8; 5% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	Luulen	luulla	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	6:punct	_
3	että	että	SCONJ	_	_	6	mark	6:mark	_
4	he	hän	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	6:nsubj	_
5	siksi	siksi	ADV	_	_	6	advmod	6:advmod	_
6	uppoutuvat	uppoutua	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	1:ccomp	_
7	kuvioihin	kuvio	NOUN	_	Case=Ill|Number=Plur	6	obl	6:obl	_
8	ja	ja	CCONJ	_	_	9	cc	9:cc	_
9	väreihin	väre	NOUN	_	Case=Ill|Number=Plur	7	conj	7:conj	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	Uudet	uusi	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	2	amod	2:amod	_
2	rautaohjeistukset	rauta#ohjeistus	NOUN	_	Case=Nom|Number=Plur	3	nsubj	3:nsubj	_
3	tarkoittavat	tarkoittaa	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	sitä	se	PRON	_	Case=Par|Number=Sing|PronType=Dem	3	obj	3:obj	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	7:punct	_
6	että	että	SCONJ	_	_	7	mark	7:mark	_
7	tarvitaan	tarvita	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	4	ccomp	4:ccomp	_
8	lisää	lisää	ADV	_	_	7	advmod	7:advmod	_
9	luovuttajia	luovuttaja	NOUN	_	Case=Par|Derivation=Ja|Number=Plur	7	obj	7:obj	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	Verkkoponnistusten	verkko#ponnistus	NOUN	_	Case=Gen|Number=Plur	4	nsubj:cop	4:nsubj:cop	_
2	sanotaan	sanoa	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	olevan	olla	AUX	_	Case=Gen|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	4	cop	4:cop	_
4	päätekijä	pää#tekijä	NOUN	_	Case=Nom|Derivation=Ja|Number=Sing	2	ccomp	2:ccomp	_
5	yksikön	yksikkö	NOUN	_	Case=Gen|Number=Sing	6	nmod:poss	6:nmod:poss	_
6	pääomamenoissa	pää#oma#meno	NOUN	_	Case=Ine|Number=Plur	4	nmod	4:nmod	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


