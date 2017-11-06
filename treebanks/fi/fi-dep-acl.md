---
layout: base
title:  'Statistics of acl in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fi-dep-acl-relcl.html">acl:relcl</a></tt>.

3631 nodes (2%) are attached to their parents as `acl`.

3212 instances of `acl` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50509501514734.

The following 13 pairs of parts of speech are connected with `acl`: <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (3339; 92% instances), <tt><a href="fi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (185; 5% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (53; 1% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (33; 1% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="fi-pos-NUM.html">NUM</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="fi-pos-SYM.html">SYM</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fi-pos-ADP.html">ADP</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi-pos-AUX.html">AUX</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi-pos-X.html">X</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	Jumituin	jumittua	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	heti	heti	ADV	Adv	_	1	advmod	_	_
3	ensimmäiselle	ensimmäinen	ADJ	Num	Case=All|Derivation=Inen|Number=Sing|NumType=Ord	4	nummod	_	_
4	näkemälleni	nähdä	VERB	V	Case=All|Degree=Pos|Number=Sing|Number[psor]=Sing|PartForm=Agt|Person[psor]=1|VerbForm=Part|Voice=Act	5	acl	_	_
5	seinälle	seinä	NOUN	N	Case=All|Number=Sing	1	obl	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl	color:blue
1	Suurin	suuri	ADJ	A	Case=Nom|Degree=Sup|Number=Sing	2	amod	_	_
2	pettymys	pettymys	NOUN	N	Case=Nom|Number=Sing	6	nsubj:cop	_	_
3	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
4	alkulohkoonsa	alku#lohko	NOUN	N	Case=Ill|Number=Sing|Person[psor]=3	5	obl	_	_
5	jäänyt	jäädä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	6	acl	_	_
6	Espanja	Espanja	PROPN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 acl	color:blue
1	Nopeasti	nopeasti	ADV	Adv	Derivation=Sti	2	advmod	_	_
2	valmistuvaa	valmistua	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	3	acl	_	_
3	syötävää	syödä	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	...	...	PUNCT	Punct	_	3	punct	_	_

~~~


