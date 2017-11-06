---
layout: base
title:  'Statistics of amod in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `amod`

This relation is universal.

861 nodes (5%) are attached to their parents as `amod`.

860 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24274099883856.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (812; 94% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (25; 3% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Uutta	uusi	ADJ	_	Case=Par|Degree=Pos|Number=Sing	2	amod	_	_
2	varainkäyttöä	varainkäyttö	NOUN	_	Case=Par|Number=Sing	3	obj	_	_
3	kiihdyttää	kiihdyttää	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	_	_
4	Clintonin	Clinton	PROPN	_	Case=Gen|Number=Sing	6	nmod:poss	_	_
5	muhkea	muhkea	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	pankkitili	pankki#tili	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	Löydös	löydös	NOUN	_	Case=Nom|Number=Sing	3	nsubj:cop	_	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	peräisin	peräisin	ADV	_	_	0	root	_	_
4	varhaiselta	varhainen	ADJ	_	Case=Abl|Degree=Pos|Derivation=Inen|Number=Sing	5	amod	_	_
5	400-luvulta	400#luku	NOUN	_	Case=Abl|Number=Sing	3	obl	_	_
6	eKr.	eKr.	NOUN	_	Abbr=Yes	5	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	kuten	kuten	ADV	_	_	10	advmod	_	_
9	suurin	suuri	ADJ	_	Case=Nom|Degree=Sup|Number=Sing	10	amod	_	_
10	osa	osa	NOUN	_	Case=Nom|Number=Sing	3	advcl	_	_
11	eteläisen	eteläinen	ADJ	_	Case=Gen|Degree=Pos|Derivation=Inen|Number=Sing	12	amod	_	_
12	Euroopan	Eurooppa	PROPN	_	Case=Gen|Number=Sing	13	nmod:poss	_	_
13	löydöspaikoista	löydös#paikka	NOUN	_	Case=Ela|Number=Plur	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Tämä	tämä	PRON	_	Case=Nom|Number=Sing|PronType=Dem	2	det	_	_
2	tapaus	tapaus	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
3	voidaan	voida	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	4	aux:pass	_	_
4	nähdä	nähdä	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	_	_
5	lähtökohtana	lähtö#kohta	NOUN	_	Case=Ess|Number=Sing	4	obl	_	_
6	hänen	hän	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	7	nmod:poss	_	_
7	uralleen	ura	NOUN	_	Case=All|Number=Sing|Person[psor]=3	4	obl	_	_
8	radikaalina	radikaali	ADJ	_	Case=Ess|Degree=Pos|Number=Sing	9	amod	_	_
9	vallankumouksellisena	vallan#kumouksellinen	ADJ	_	Case=Ess|Degree=Pos|Derivation=Llinen|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


